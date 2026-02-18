import { useState, useEffect } from 'react';
import { Menu, X, Shield, Home, Car, Briefcase, Heart, Check, PhoneIcon, Mail, MapPin } from 'lucide-react';

export default function MiagencyLanding() {
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

  // Scroll animations
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit quote request');
      }

      setFormSubmitted(true);
      setFormData({ name: '', email: '', phone: '', serviceType: 'auto', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
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
    { icon: Car, title: 'Auto Insurance', description: 'Comprehensive coverage for your vehicle with competitive rates' },
    { icon: Home, title: 'Home Insurance', description: 'Protect your home and belongings with flexible coverage options' },
    { icon: Heart, title: 'Life Insurance', description: 'Secure your family\'s financial future with affordable plans' },
    { icon: Briefcase, title: 'Business Insurance', description: 'Complete protection for your business operations and liabilities' }
  ];

  const trustPoints = [
    { number: '25+', label: 'Years of Experience' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '99%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 hidden sm:inline">MIAGENCY</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-teal-600 transition font-medium">Home</a>
              <a href="#services" className="text-slate-700 hover:text-teal-600 transition font-medium">Services</a>
              <a href="#trust" className="text-slate-700 hover:text-teal-600 transition font-medium">Why Us</a>
              <a href="#contact" className="text-slate-700 hover:text-teal-600 transition font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-slate-200">
              <a href="#home" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded">Home</a>
              <a href="#services" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded">Services</a>
              <a href="#trust" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded">Why Us</a>
              <a href="#contact" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 sm:py-28">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50 via-blue-50 to-slate-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div data-animate className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Peace of Mind for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Future</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Expert insurance solutions tailored to your needs. Get comprehensive coverage with competitive rates and exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition transform inline-flex items-center justify-center"
                  aria-label="Get a free quote"
                >
                  Get Free Quote
                  <span className="ml-2">→</span>
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-teal-600 hover:text-teal-600 transition inline-flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Image Placeholder */}
            <div data-animate className="relative">
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <Shield className="w-32 h-32 text-teal-600 mx-auto mb-4 opacity-50" />
                  <p className="text-slate-600 font-medium">Your Image Here</p>
                  <p className="text-sm text-slate-500">Replace with your hero image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Insurance Solutions</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive coverage options designed to protect what matters most to you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  data-animate
                  className="group p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl hover:shadow-lg hover:scale-105 transition transform cursor-pointer border border-slate-200 hover:border-teal-300"
                >
                  <div className="mb-4 p-3 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg w-fit group-hover:scale-110 transition">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-20 sm:py-28 bg-gradient-to-r from-blue-900 via-teal-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose MIAGENCY</h2>
            <p className="text-xl text-blue-100">
              Trusted by thousands of customers nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, idx) => (
              <div key={idx} data-animate className="text-center p-8">
                <div className="text-5xl font-bold text-teal-300 mb-2">{point.number}</div>
                <p className="text-blue-100 font-medium">{point.label}</p>
              </div>
            ))}
          </div>

          {/* Benefits List */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              'Competitive rates with discounts available',
              '24/7 customer support and claims assistance',
              'Fast quote process - get coverage in minutes',
              'Licensed and insured professionals',
              'Flexible payment options',
              'Dedicated account managers'
            ].map((benefit, idx) => (
              <div key={idx} data-animate className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-teal-300 flex-shrink-0 mt-1" />
                <span className="text-blue-50">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-animate>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Get Your Free Quote</h2>
            <p className="text-lg text-slate-600">
              Fill out the form below and our team will contact you within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10" data-animate>
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank you!</h3>
                <p className="text-slate-600">We've received your request. Our team will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition ${
                      formErrors.name ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="John Doe"
                    aria-label="Full name"
                    aria-required="true"
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition ${
                      formErrors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="john@example.com"
                    aria-label="Email address"
                    aria-required="true"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition ${
                      formErrors.phone ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="(555) 123-4567"
                    aria-label="Phone number"
                    aria-required="true"
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                </div>

                {/* Service Type Field */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-slate-900 mb-2">
                    Insurance Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    aria-label="Insurance type"
                  >
                    <option value="auto">Auto Insurance</option>
                    <option value="home">Home Insurance</option>
                    <option value="life">Life Insurance</option>
                    <option value="business">Business Insurance</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none ${
                      formErrors.message ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="Tell us about your insurance needs..."
                    aria-label="Message"
                    aria-required="true"
                  />
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>

                {/* Error Message */}
                {formErrors.submit && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm">{formErrors.submit}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  aria-label="Submit quote request"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Your Free Quote'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            {[
              { icon: PhoneIcon, title: 'Phone', text: '1-800-MIAGENCY' },
              { icon: Mail, title: 'Email', text: 'hello@miagency.com' },
              { icon: MapPin, title: 'Office', text: 'Available Nationwide' }
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <div key={idx} data-animate className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <Icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-1">{contact.title}</h3>
                  <p className="text-slate-600">{contact.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">MIAGENCY</h3>
              <p className="text-sm">Your trusted insurance partner for comprehensive coverage and peace of mind.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-teal-400 transition">Auto Insurance</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition">Home Insurance</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition">Life Insurance</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition">Business Insurance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-teal-400 transition">About Us</a></li>
                <li><a href="#trust" className="hover:text-teal-400 transition">Why Us</a></li>
                <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-teal-400 transition">Privacy Policy</a></li>
                <li><a href="/" className="hover:text-teal-400 transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2024 MIAGENCY. All rights reserved. Licensed Insurance Provider.</p>
          </div>
        </div>
      </footer>

      {/* Tailwind CSS for custom animations */}
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
