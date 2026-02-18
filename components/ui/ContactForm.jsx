import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { CheckCircle2 } from 'lucide-react';

const serviceOptions = [
  { value: 'auto', label: 'Auto Insurance' },
  { value: 'home', label: 'Home Insurance' },
  { value: 'restaurant', label: 'Restaurant Insurance' },
  { value: 'hotel', label: 'Hotel Insurance' },
  { value: 'other', label: 'Other / Not Sure' },
];

export default function ContactForm({ defaultService = 'auto' }) {
  const formRef = useRef(null);
  const router = useRouter();

  // Smooth scroll to form when requested
  useEffect(() => {
    if (router.query.scroll === 'form' && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [router.query.scroll]);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    serviceType: defaultService, message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Invalid email address';
    if (!formData.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) e.phone = 'Enter a valid phone number';
    if (!formData.message.trim()) e.message = 'Please describe your needs';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }

    setSubmitting(true);
    try {
      const res = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', serviceType: defaultService, message: '' });
    } catch {
      setErrors({ submit: 'Something went wrong. Please try again or call us directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div ref={formRef} className="text-center py-16 space-y-4">
        <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-gold-700" />
        </div>
        <h3 className="font-display text-2xl font-bold text-navy-900">Quote Request Received</h3>
        <p className="text-navy-500 max-w-sm mx-auto">
          Thank you! A specialist will contact you within one business day with your personalized quote.
        </p>
      </div>
    );
  }

  const field = 'w-full px-4 py-3.5 border-2 border-navy-100 rounded-lg bg-white text-navy-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition placeholder:text-navy-300 text-sm';
  const error = 'text-red-600 text-xs mt-1.5';
  const label = 'block text-sm font-semibold text-navy-800 mb-2';

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={label}>Full Name *</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
            className={`${field} ${errors.name ? 'border-red-400' : ''}`}
            placeholder="John Doe" aria-required="true" />
          {errors.name && <p className={error}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone Number *</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
            className={`${field} ${errors.phone ? 'border-red-400' : ''}`}
            placeholder="(555) 123-4567" aria-required="true" />
          {errors.phone && <p className={error}>{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={label}>Email Address *</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
          className={`${field} ${errors.email ? 'border-red-400' : ''}`}
          placeholder="john@example.com" aria-required="true" />
        {errors.email && <p className={error}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="serviceType" className={label}>Insurance Type *</label>
        <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange}
          className={field}>
          {serviceOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>Tell Us About Your Needs *</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange}
          rows={5} className={`${field} resize-none ${errors.message ? 'border-red-400' : ''}`}
          placeholder="Describe your coverage needs, property details, or any questions..." aria-required="true" />
        {errors.message && <p className={error}>{errors.message}</p>}
      </div>

      {errors.submit && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">{errors.submit}</p>
        </div>
      )}

      <button type="submit" disabled={submitting}
        className="w-full py-4 bg-navy-900 hover:bg-gold-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
        {submitting ? 'Sending Request...' : 'Request My Free Quote'}
      </button>

      <p className="text-center text-xs text-navy-400">
        By submitting, you agree to be contacted by a MARRIUM Insurance specialist.
      </p>
    </form>
  );
}
