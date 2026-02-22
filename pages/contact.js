import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/ui/ContactForm';
import { PhoneIcon, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Us | MARRIUM Insurance | Build Your Protection Plan</title>
        <meta name="description" content="Speak with a nationwide licensed insurance specialist. No obligation, no pressure. Personal and business insurance quotes from MARRIUM Insurance." />
      </Head>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 to-navy-800 py-24">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-300 font-medium tracking-widest text-sm uppercase mb-3">Get in Touch</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-4">
            Let&apos;s build your protection plan.
          </h1>
          <p className="mt-2 text-xl text-cream-100 max-w-2xl">
            Speak with a nationwide licensed specialist. No obligation, no pressure.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-cream-50 border border-cream-200 rounded-2xl p-8 sm:p-10">
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-2">Request a Quote</h2>
                <p className="text-navy-500 mb-8 text-sm">Choose Personal or Business below and fill in your details.</p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-navy-900 mb-6">Contact Information</h3>

                <div className="space-y-5">
                  {[
                    { icon: PhoneIcon, label: 'Phone', value: '+1 (210) 800-5910', sub: 'Call or text anytime' },
                    { icon: Mail, label: 'Email', value: 'info@marriuminsurance.com', sub: 'We respond within 24hrs' },
                    { icon: MapPin, label: 'Address', value: '9502 Computer Dr #216', sub: 'San Antonio, TX 78229' },
                    { icon: Clock, label: 'Office Hours', value: 'Mon–Fri: 9am–6pm', sub: '24/7 emergency support' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4 p-5 bg-cream-50 rounded-xl border border-cream-200">
                        <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-gold-400" />
                        </div>
                        <div>
                          <p className="text-xs text-navy-400 font-semibold uppercase tracking-wide mb-0.5">{item.label}</p>
                          <p className="text-navy-900 font-medium text-sm">{item.value}</p>
                          <p className="text-navy-400 text-xs">{item.sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social */}
              <div className="p-5 bg-navy-900 rounded-xl">
                <p className="text-cream-100 font-semibold mb-4 text-sm">Follow MARRIUM Insurance</p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: 'https://www.facebook.com/marriuminsurance/', label: 'Facebook' },
                    { icon: Instagram, href: 'https://www.instagram.com/marrium_insurance_agency_/', label: 'Instagram' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/marrium-sohail-a83255223/', label: 'LinkedIn' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="w-10 h-10 border border-navy-700 hover:border-gold-400 hover:text-gold-400 text-cream-200 rounded-lg flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
