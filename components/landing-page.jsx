import { useState, useEffect } from 'react';
import { Menu, X, Car, DollarSign, Zap, Award, CheckCircle, PhoneIcon, Mail, MapPin, Star } from 'lucide-react';

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
    { icon: Car, title: 'Full Coverage', description: 'Comprehensive auto insurance covering collision, liability, and more' },
    { icon: DollarSign, title: 'Affordable Rates', description: 'Competitive pricing with flexible payment plans tailored to your budget' },
    { icon: Zap, title: 'Quick Claims', description: 'Fast and hassle-free claims processing when you need us most' },
    { icon: Award, title: '24/7 Support', description: 'Round-the-clock customer service to assist with any questions' }
  ];

  const trustPoints = [
    { number: '10+', label: 'Years Serving Customers' },
    { number: '5000+', label: 'Happy Clients' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-accent-600 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="MARRIUM Insurance" className="h-12 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-primary-700 hover:text-accent-600 transition font-medium">Home</a>
              <a href="#coverage" className="text-primary-700 hover:text-accent-600 transition font-medium">Coverage</a>
              <a href="#why" className="text-primary-700 hover:text-accent-600 transition font-medium">Why Us</a>
              <a href="#contact" className="text-primary-700 hover:text-accent-600 transition font-medium">Contact</a>
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
              <a href="#home" className="block px-4 py-2 text-primary-700 hover:bg-slate-100 rounded">Home</a>
              <a href="#coverage" className="block px-4 py-2 text-primary-700 hover:bg-slate-100 rounded">Coverage</a>
              <a href="#why" className="block px-4 py-2 text-primary-700 hover:bg-slate-100 rounded">Why Us</a>
              <a href="#contact" className="block px-4 py-2 text-primary-700 hover:bg-slate-100 rounded">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div data-animate className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                We've Got You <span className="text-accent-500">Covered</span>
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed">
                MARRIUM Insurance - Your trusted auto insurance partner. Get affordable rates, fast claims, and 24/7 support from agents who care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105 inline-flex items-center justify-center"
                  aria-label="Get a free quote"
                >
                  Get Free Quote
                  <span className="ml-2">→</span>
                </a>
                <a
                  href="#coverage"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition inline-flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Image Placeholder */}
            <div data-animate className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <Car className="w-32 h-32 text-white mx-auto mb-4 opacity-50" />
                  <p className="text-white font-medium">Your image here</p>
                  <p className="text-sm text-gray-100">Add your vehicle photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">Why Choose MARRIUM?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive auto insurance coverage with the service and support you deserve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  data-animate
                  className="group p-8 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl hover:shadow-lg hover:scale-105 transition transform cursor-pointer border-2 border-slate-200 hover:border-accent-500"
                >
                  <div className="mb-4 p-3 bg-accent-600 rounded-lg w-fit group-hover:scale-110 transition">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="py-20 sm:py-28 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">MARRIUM Advantage</h2>
            <p className="text-xl text-gray-100">
              Trusted by thousands of drivers nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, idx) => (
              <div key={idx} data-animate className="text-center p-8">
                <div className="text-5xl font-bold text-accent-500 mb-2">{point.number}</div>
                <p className="text-gray-100 font-medium">{point.label}</p>
              </div>
            ))}
          </div>

          {/* Benefits List */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              'Low, competitive rates with multiple discounts',
              '24/7 customer support & emergency assistance',
              'Fast quote process - coverage in minutes',
              'Easy claims processing with mobile app',
              'Flexible payment options available',
              'Local, personal service you can trust'
            ].map((benefit, idx) => (
              <div key={idx} data-animate className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" />
                <span className="text-gray-50">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-animate>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">Get Your Free Quote</h2>
            <p className="text-lg text-slate-600">
              Just a few details and we'll find you the best coverage at the best price
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10" data-animate>
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-2">Thank you!</h3>
                <p className="text-slate-600">We've received your request. Our team will contact you within 24 hours with your personalized quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent transition ${
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
                  <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent transition ${
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
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent transition ${
                      formErrors.phone ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="(555) 123-4567"
                    aria-label="Phone number"
                    aria-required="true"
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                </div>

                {/* Vehicle Type Field */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-primary-900 mb-2">
                    Vehicle Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent transition"
                    aria-label="Vehicle type"
                  >
                    <option value="auto">Sedan/Coupe</option>
                    <option value="truck">Truck/SUV</option>
                    <option value="luxury">Luxury Vehicle</option>
                    <option value="classic">Classic/Collector</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
                    Tell Us About Your Vehicle *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-600 focus:border-transparent transition resize-none ${
                      formErrors.message ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="Tell us about your vehicle, driving habits, and coverage needs..."
                    aria-label="Message"
                    aria-required="true"
                  />
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>

                {/* Error Message */}
                {formErrors.submit && (
                  <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm">{formErrors.submit}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  aria-label="Submit quote request"
                >
                  {isSubmitting ? 'Getting Your Quote...' : 'Get My Free Quote'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            {[
              { icon: PhoneIcon, title: 'Call Us', text: 'Your Phone Number' },
              { icon: Mail, title: 'Email', text: 'Your Email Here' },
              { icon: MapPin, title: 'Location', text: 'Your City/Area' }
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <div key={idx} data-animate className="text-center p-6 bg-white rounded-lg shadow-sm border-2 border-slate-100">
                  <Icon className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-primary-900 mb-1">{contact.title}</h3>
                  <p className="text-slate-600">{contact.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">MARRIUM Insurance</h3>
              <p className="text-sm">Your trusted auto insurance partner. We've got you covered with affordable rates and exceptional service.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Coverage</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#coverage" className="hover:text-accent-500 transition">Full Coverage</a></li>
                <li><a href="#coverage" className="hover:text-accent-500 transition">Liability Insurance</a></li>
                <li><a href="#coverage" className="hover:text-accent-500 transition">Collision Coverage</a></li>
                <li><a href="#coverage" className="hover:text-accent-500 transition">Emergency Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-accent-500 transition">Home</a></li>
                <li><a href="#why" className="hover:text-accent-500 transition">Why Us</a></li>
                <li><a href="#contact" className="hover:text-accent-500 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.facebook.com/marriuminsurance/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition">Facebook</a></li>
                <li><a href="https://www.instagram.com/marrium_insurance_agency_/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/marrium-sohail-a83255223/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-800 pt-8 text-center text-sm">
            <p>&copy; 2024 MARRIUM Insurance. All rights reserved. Licensed Insurance Agency.</p>
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
