import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { CheckCircle2, ChevronDown, Check } from 'lucide-react';

function StyledSelect({ options, value, onChange, id }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const selected = options.find(o => o.value === value) || options[0];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative" id={id}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full px-4 py-3.5 border-2 rounded-lg bg-white text-left flex items-center justify-between gap-3 transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent ${open ? 'border-gold-400 shadow-md' : 'border-navy-100 hover:border-navy-200'}`}
      >
        <span className="text-navy-800 font-medium text-sm truncate">{selected.label}</span>
        <ChevronDown className={`w-4 h-4 text-navy-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180 text-gold-600' : ''}`} />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute z-50 mt-1.5 w-full bg-white border border-cream-300 rounded-xl shadow-xl overflow-hidden">
          <div className="py-1.5 max-h-64 overflow-y-auto">
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => { onChange(opt.value); setOpen(false); }}
                  className={`w-full text-left flex items-center justify-between px-4 py-3 text-sm transition-colors ${isSelected ? 'bg-navy-900 text-white' : 'text-navy-700 hover:bg-cream-50 hover:text-navy-900'}`}
                >
                  <span className="font-medium">{opt.label}</span>
                  {isSelected && <Check className="w-4 h-4 text-gold-400 flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const personalCoverageOptions = [
  { value: 'auto', label: 'Auto Insurance' },
  { value: 'homeowners', label: 'Homeowners Insurance' },
  { value: 'umbrella', label: 'Umbrella Coverage' },
  { value: 'high-value-home', label: 'High-Value Homes' },
  { value: 'landlord', label: 'Landlord Policy' },
  { value: 'renters', label: 'Renters Insurance' },
  { value: 'other', label: 'Other / Not Sure' },
];

const businessTypeOptions = [
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'hospitality', label: 'Hospitality / Hotel' },
  { value: 'contractors', label: 'Contractors & Trades' },
  { value: 'commercial-property', label: 'Commercial Property' },
  { value: 'professional-liability', label: 'Professional Liability' },
  { value: 'commercial-auto', label: 'Commercial Auto & Fleet' },
  { value: 'specialty', label: 'Specialty Risk' },
  { value: 'epl', label: 'Employment Practices (EPL)' },
  { value: 'cyber', label: 'Cybersecurity' },
  { value: 'workers-comp', label: 'Workers Compensation' },
  { value: 'other', label: 'Other / Not Sure' },
];

// Extra fields shown per personal coverage type
const personalExtraFields = {
  auto: [
    { name: 'drivers', label: '# of Drivers', type: 'number', placeholder: '1' },
    { name: 'vehicles', label: '# of Vehicles', type: 'number', placeholder: '1' },
  ],
  homeowners: [
    { name: 'homeValue', label: 'Estimated Home Value', type: 'text', placeholder: 'e.g. $350,000' },
    { name: 'yearBuilt', label: 'Year Built', type: 'text', placeholder: 'e.g. 1998' },
  ],
  umbrella: [
    { name: 'existingPolicies', label: 'Existing Policies (e.g. auto, home)', type: 'text', placeholder: 'e.g. Auto, Home' },
    { name: 'coverageLimit', label: 'Desired Umbrella Limit', type: 'text', placeholder: 'e.g. $1M' },
  ],
  'high-value-home': [
    { name: 'homeValue', label: 'Estimated Home Value', type: 'text', placeholder: 'e.g. $1,200,000' },
    { name: 'squareFootage', label: 'Square Footage', type: 'text', placeholder: 'e.g. 4,500 sq ft' },
  ],
  landlord: [
    { name: 'numProperties', label: '# of Rental Properties', type: 'number', placeholder: '1' },
    { name: 'propertyType', label: 'Property Type', type: 'text', placeholder: 'e.g. Single Family, Duplex' },
  ],
  renters: [
    { name: 'personalProperty', label: 'Est. Personal Property Value', type: 'text', placeholder: 'e.g. $25,000' },
  ],
  other: [],
};

const defaultPersonal = { name: '', state: '', phone: '', email: '', coverageType: 'auto' };
const defaultBusiness = { businessName: '', state: '', phone: '', email: '', businessType: 'restaurant', revenue: '', employees: '', partners: '' };

export default function ContactForm({ defaultTab = 'personal' }) {
  const formRef = useRef(null);
  const router = useRouter();
  const [tab, setTab] = useState(defaultTab);

  const [personalData, setPersonalData] = useState(defaultPersonal);
  const [businessData, setBusinessData] = useState(defaultBusiness);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (router.query.scroll === 'form' && formRef.current) {
      setTimeout(() => {
        const element = formRef.current;
        if (element) {
          const offset = element.offsetTop - 120;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [router.query.scroll]);

  useEffect(() => {
    if (router.query.tab === 'business') setTab('business');
    else if (router.query.tab === 'personal') setTab('personal');
  }, [router.query.tab]);

  const validatePersonal = () => {
    const e = {};
    if (!personalData.name.trim()) e.name = 'Name is required';
    if (!personalData.state.trim()) e.state = 'State is required';
    if (!personalData.phone.trim()) e.phone = 'Phone is required';
    else if (!/^\d{10,}$/.test(personalData.phone.replace(/\D/g, ''))) e.phone = 'Enter a valid phone number';
    if (!personalData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalData.email)) e.email = 'Invalid email address';
    return e;
  };

  const validateBusiness = () => {
    const e = {};
    if (!businessData.businessName.trim()) e.businessName = 'Business name is required';
    if (!businessData.state.trim()) e.state = 'State is required';
    if (!businessData.phone.trim()) e.phone = 'Phone is required';
    else if (!/^\d{10,}$/.test(businessData.phone.replace(/\D/g, ''))) e.phone = 'Enter a valid phone number';
    if (!businessData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessData.email)) e.email = 'Invalid email address';
    return e;
  };

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleBusinessChange = (e) => {
    const { name, value } = e.target;
    setBusinessData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = tab === 'personal' ? validatePersonal() : validateBusiness();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    try {
      const payload = tab === 'personal'
        ? { ...personalData, formType: 'personal' }
        : { ...businessData, formType: 'business' };

      const res = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setPersonalData(defaultPersonal);
      setBusinessData(defaultBusiness);
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
        <h3 className="font-display text-2xl font-bold text-navy-900">Request Received</h3>
        <p className="text-navy-500 max-w-sm mx-auto">
          Thank you! A MARRIUM Insurance specialist will contact you shortly by phone or email.
        </p>
      </div>
    );
  }

  const field = 'w-full px-4 py-3.5 border-2 border-navy-100 rounded-lg bg-white text-navy-800 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition placeholder:text-navy-300 text-sm';
  const errCls = 'text-red-600 text-xs mt-1.5';
  const lbl = 'block text-sm font-semibold text-navy-800 mb-2';

  return (
    <div ref={formRef}>
      {/* Tab Toggle */}
      <div className="flex rounded-lg border border-cream-300 p-1 mb-8 bg-cream-50">
        <button
          type="button"
          onClick={() => { setTab('personal'); setErrors({}); }}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all ${tab === 'personal' ? 'bg-navy-900 text-white shadow' : 'text-navy-600 hover:text-navy-900'}`}
        >
          Personal
        </button>
        <button
          type="button"
          onClick={() => { setTab('business'); setErrors({}); }}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all ${tab === 'business' ? 'bg-navy-900 text-white shadow' : 'text-navy-600 hover:text-navy-900'}`}
        >
          Business
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {tab === 'personal' ? (
          <>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={lbl}>Full Name *</label>
                <input type="text" id="name" name="name" value={personalData.name} onChange={handlePersonalChange}
                  className={`${field} ${errors.name ? 'border-red-400' : ''}`} placeholder="John Doe" />
                {errors.name && <p className={errCls}>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="state" className={lbl}>State *</label>
                <input type="text" id="state" name="state" value={personalData.state} onChange={handlePersonalChange}
                  className={`${field} ${errors.state ? 'border-red-400' : ''}`} placeholder="e.g. Texas" />
                {errors.state && <p className={errCls}>{errors.state}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className={lbl}>Phone *</label>
                <input type="tel" id="phone" name="phone" value={personalData.phone} onChange={handlePersonalChange}
                  className={`${field} ${errors.phone ? 'border-red-400' : ''}`} placeholder="(555) 123-4567" />
                {errors.phone && <p className={errCls}>{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="email" className={lbl}>Email *</label>
                <input type="email" id="email" name="email" value={personalData.email} onChange={handlePersonalChange}
                  className={`${field} ${errors.email ? 'border-red-400' : ''}`} placeholder="john@example.com" />
                {errors.email && <p className={errCls}>{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className={lbl}>Type of Coverage Needed</label>
              <StyledSelect
                id="coverageType"
                options={personalCoverageOptions}
                value={personalData.coverageType}
                onChange={(val) => { setPersonalData(prev => ({ ...prev, coverageType: val })); }}
              />
            </div>

            {/* Dynamic extra fields based on coverage type */}
            {(personalExtraFields[personalData.coverageType] || []).length > 0 && (
              <div className={`grid gap-5 ${(personalExtraFields[personalData.coverageType] || []).length > 1 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                {(personalExtraFields[personalData.coverageType] || []).map((f) => (
                  <div key={f.name}>
                    <label htmlFor={f.name} className={lbl}>{f.label}</label>
                    <input
                      type={f.type}
                      id={f.name}
                      name={f.name}
                      value={personalData[f.name] || ''}
                      onChange={handlePersonalChange}
                      className={field}
                      placeholder={f.placeholder}
                      min={f.type === 'number' ? '0' : undefined}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="businessName" className={lbl}>Business Name *</label>
                <input type="text" id="businessName" name="businessName" value={businessData.businessName} onChange={handleBusinessChange}
                  className={`${field} ${errors.businessName ? 'border-red-400' : ''}`} placeholder="Acme Corp" />
                {errors.businessName && <p className={errCls}>{errors.businessName}</p>}
              </div>
              <div>
                <label htmlFor="b-state" className={lbl}>State *</label>
                <input type="text" id="b-state" name="state" value={businessData.state} onChange={handleBusinessChange}
                  className={`${field} ${errors.state ? 'border-red-400' : ''}`} placeholder="e.g. Texas" />
                {errors.state && <p className={errCls}>{errors.state}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="b-phone" className={lbl}>Phone *</label>
                <input type="tel" id="b-phone" name="phone" value={businessData.phone} onChange={handleBusinessChange}
                  className={`${field} ${errors.phone ? 'border-red-400' : ''}`} placeholder="(555) 123-4567" />
                {errors.phone && <p className={errCls}>{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="b-email" className={lbl}>Email *</label>
                <input type="email" id="b-email" name="email" value={businessData.email} onChange={handleBusinessChange}
                  className={`${field} ${errors.email ? 'border-red-400' : ''}`} placeholder="owner@business.com" />
                {errors.email && <p className={errCls}>{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className={lbl}>Type of Business</label>
              <StyledSelect
                id="businessType"
                options={businessTypeOptions}
                value={businessData.businessType}
                onChange={(val) => { setBusinessData(prev => ({ ...prev, businessType: val })); }}
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              <div>
                <label htmlFor="revenue" className={lbl}>Annual Revenue</label>
                <input type="text" id="revenue" name="revenue" value={businessData.revenue} onChange={handleBusinessChange}
                  className={field} placeholder="Optional" />
              </div>
              <div>
                <label htmlFor="employees" className={lbl}># of Employees</label>
                <input type="number" id="employees" name="employees" value={businessData.employees} onChange={handleBusinessChange}
                  className={field} placeholder="0" min="0" />
              </div>
              <div>
                <label htmlFor="partners" className={lbl}># of Partners</label>
                <input type="number" id="partners" name="partners" value={businessData.partners} onChange={handleBusinessChange}
                  className={field} placeholder="0" min="0" />
              </div>
            </div>
          </>
        )}

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
    </div>
  );
}
