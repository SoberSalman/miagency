import { useState, useEffect } from 'react';
import { Menu, X, Car, Home, UtensilsCrossed, Building2, CheckCircle2, PhoneIcon, Mail, MapPin, Award } from 'lucide-react';

export default function MarriumLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'auto',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email';
    if (!formData.phone.trim()) errors.phone = 'Phone is required';
    else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) errors.phone = 'Invalid phone number';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length !== 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setFormSubmitted(true);
      setFormData({ name: '', email: '', phone: '', serviceType: 'auto', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      console.error('Form error:', error);
      setFormErrors({ submit: 'Failed to submit. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const services = [
    { icon: Car, title: 'Auto Insurance', description: 'Comprehensive vehicle coverage with competitive rates and fast claims processing' },
    { icon: Home, title: 'Home Insurance', description: 'Protect your home and belongings with flexible, affordable coverage options' },
    { icon: UtensilsCrossed, title: 'Restaurant Insurance', description: 'Specialized coverage for restaurants including liability and property protection' },
    { icon: Building2, title: 'Hotel Insurance', description: 'Comprehensive hospitality insurance for hotels and lodging businesses' }
  ];

  const trustPoints = [
    { number: '15+', label: 'Years of Expertise' },
    { number: '3000+', label: 'Satisfied Clients' },
    { number: '98%', label: 'Satisfaction Rating' },
    { number: '24/7', label: 'Expert Support' }
  ];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gold-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="MARRIUM Insurance" className="h-12 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-navy-700 hover:text-gold-700 transition font-medium">Home</a>
              <a href="#services" className="text-navy-700 hover:text-gold-700 transition font-medium">Services</a>
              <a href="#about" className="text-navy-700 hover:text-gold-700 transition font-medium">About</a>
              <a href="#contact" className="text-navy-700 hover:text-gold-700 transition font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-cream-100 rounded-lg transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-cream-200">
              <a href="#home" className="block px-4 py-2 text-navy-700 hover:bg-cream-100 rounded">Home</a>
              <a href="#services" className="block px-4 py-2 text-navy-700 hover:bg-cream-100 rounded">Services</a>
              <a href="#about" className="block px-4 py-2 text-navy-700 hover:bg-cream-100 rounded">About</a>
              <a href="#contact" className="block px-4 py-2 text-navy-700 hover:bg-cream-100 rounded">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 sm:py-32 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div data-animate className="space-y-8">
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
                  Comprehensive <span className="text-gold-400">Insurance Solutions</span>
                </h1>
                <p className="text-xl text-cream-100 leading-relaxed">
                  MARRIUM Insurance provides professional coverage for auto, home, restaurant, and hotel businesses. Trusted expertise you can rely on.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gold-600 hover:bg-gold-700 text-white rounded-lg font-semibold hover:shadow-xl transition transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Request Quote
                  <span className="ml-2">→</span>
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 border-2 border-gold-400 text-gold-400 rounded-lg font-semibold hover:bg-gold-400 hover:text-navy-900 transition inline-flex items-center justify-center"
                >
                  View Services
                </a>
              </div>
            </div>

            {/* Image */}
            <div data-animate className="hidden md:block">
              <div className="aspect-square bg-gradient-to-br from-gold-300 to-gold-500 rounded-2xl shadow-2xl flex items-center justify-center">
                <Award className="w-32 h-32 text-white opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Insurance Services</h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Tailored coverage solutions for every need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  data-animate
                  className="group p-8 bg-cream-50 rounded-xl hover:shadow-xl hover:scale-105 transition transform border border-gold-200 hover:border-gold-400"
                >
                  <div className="mb-6 p-4 bg-gold-100 rounded-lg w-fit group-hover:scale-110 transition">
                    <Icon className="w-6 h-6 text-gold-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">{service.title}</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 sm:py-32 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-4xl font-bold mb-4">Why Choose MARRIUM?</h2>
            <p className="text-xl text-cream-100">
              Professional insurance expertise backed by years of experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {trustPoints.map((point, idx) => (
              <div key={idx} data-animate className="text-center">
                <div className="text-5xl font-bold text-gold-400 mb-2">{point.number}</div>
                <p className="text-cream-100 font-medium">{point.label}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Competitive rates with multiple discount options',
              '24/7 customer support from experienced professionals',
              'Fast and transparent quote process',
              'Dedicated account managers for your business',
              'Customized coverage for your specific needs',
              'Local expertise with professional service'
            ].map((benefit, idx) => (
              <div key={idx} data-animate className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                <span className="text-cream-50">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-animate>
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Get Your Quote</h2>
            <p className="text-lg text-navy-600">
              Professional insurance specialists ready to help you find the right coverage
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12" data-animate>
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-gold-700" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">Thank You!</h3>
                <p className="text-navy-600">Our team will contact you within 24 hours with a personalized quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition ${
                      formErrors.name ? 'border-red-500' : 'border-navy-200'
                    }`}
                    placeholder="John Doe"
                  />
                  {formErrors.name && <p className="text-red-600 text-sm mt-1">{formErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition ${
                      formErrors.email ? 'border-red-500' : 'border-navy-200'
                    }`}
                    placeholder="john@example.com"
                  />
                  {formErrors.email && <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition ${
                      formErrors.phone ? 'border-red-500' : 'border-navy-200'
                    }`}
                    placeholder="(555) 123-4567"
                  />
                  {formErrors.phone && <p className="text-red-600 text-sm mt-1">{formErrors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-navy-900 mb-2">
                    Insurance Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
                  >
                    <option value="auto">Auto Insurance</option>
                    <option value="home">Home Insurance</option>
                    <option value="restaurant">Restaurant Insurance</option>
                    <option value="hotel">Hotel Insurance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition resize-none ${
                      formErrors.message ? 'border-red-500' : 'border-navy-200'
                    }`}
                    placeholder="Tell us about your insurance needs..."
                  />
                  {formErrors.message && <p className="text-red-600 text-sm mt-1">{formErrors.message}</p>}
                </div>

                {formErrors.submit && (
                  <div className="p-4 bg-red-50 border-2 border-red-300 rounded-lg">
                    <p className="text-red-700 text-sm">{formErrors.submit}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gold-600 hover:bg-gold-700 text-white font-semibold rounded-lg hover:shadow-lg transition disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Your Quote'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            {[
              { icon: PhoneIcon, title: 'Phone', text: '(210) 555-0000' },
              { icon: Mail, title: 'Email', text: 'info@marriuminsurance.com' },
              { icon: MapPin, title: 'Location', text: 'San Antonio, Texas' }
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <div key={idx} data-animate className="text-center p-6 bg-white rounded-xl shadow-md">
                  <Icon className="w-8 h-8 text-gold-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-navy-900 mb-1">{contact.title}</h3>
                  <p className="text-navy-600">{contact.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-cream-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">MARRIUM Insurance</h3>
              <p className="text-sm">Professional insurance solutions for auto, home, restaurant, and hotel businesses.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-gold-400 transition">Auto Insurance</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition">Home Insurance</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition">Restaurant Insurance</a></li>
                <li><a href="#services" className="hover:text-gold-400 transition">Hotel Insurance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-gold-400 transition">Home</a></li>
                <li><a href="#about" className="hover:text-gold-400 transition">About</a></li>
                <li><a href="#contact" className="hover:text-gold-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.facebook.com/marriuminsurance/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition">Facebook</a></li>
                <li><a href="https://www.instagram.com/marrium_insurance_agency_/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/marrium-sohail-a83255223/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-navy-700 pt-8 text-center text-sm">
            <p>&copy; 2024 MARRIUM Insurance. All rights reserved. Licensed Insurance Agency.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        [data-animate] {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
