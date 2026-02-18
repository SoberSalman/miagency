import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import ServiceHero from '../../components/ui/ServiceHero';
import ContactForm from '../../components/ui/ContactForm';
import { Building2, CheckCircle2, ShieldCheck, Users, Key, Briefcase } from 'lucide-react';

const coverages = [
  { title: 'Commercial Property', desc: 'Covers the building, furnishings, equipment, and guest belongings under your care.' },
  { title: 'General Liability', desc: 'Protects against guest injury claims, accidents, and property damage lawsuits.' },
  { title: 'Business Interruption', desc: 'Income replacement if your hotel must close due to a covered event.' },
  { title: "Workers' Compensation", desc: 'Covers on-the-job injuries for front desk, housekeeping, and maintenance staff.' },
  { title: 'Commercial Auto', desc: 'Coverage for shuttle vehicles, valet operations, and hotel-owned fleet.' },
  { title: 'Cyber Liability', desc: 'Protects against data breaches involving guest payment and personal information.' },
];

const whyPoints = [
  { icon: Users, title: 'Guest Liability', desc: 'Comprehensive coverage for guest injuries, claims, and incidents on premises.' },
  { icon: Key, title: 'Property Protection', desc: 'Full coverage for your building, amenities, and all hotel property.' },
  { icon: Briefcase, title: 'Business Continuity', desc: 'Keep operations running with income protection during unexpected closures.' },
  { icon: ShieldCheck, title: 'Staff Coverage', desc: "Workers' comp and employer liability for your entire team." },
];

export default function HotelInsurance() {
  return (
    <Layout>
      <Head>
        <title>Hotel Insurance — MARRIUM Insurance | San Antonio, TX</title>
        <meta name="description" content="Professional hotel and hospitality insurance in San Antonio, TX. Protect your property, guests, and operations with MARRIUM Insurance. Get a free quote." />
      </Head>

      <ServiceHero
        icon={Building2}
        title="Hotel Insurance"
        subtitle="Hospitality Coverage"
        description="Hotels and hospitality businesses carry unique responsibilities. We provide specialized coverage that protects your guests, staff, property, and operations at every level."
        breadcrumb="Hotel Insurance"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-700 font-medium tracking-widest text-sm uppercase mb-3">Full-Spectrum Protection</p>
            <h2 className="font-display text-4xl font-bold text-navy-900">Hotel Coverage Options</h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-5" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverages.map((c) => (
              <div key={c.title} className="flex gap-4 p-6 bg-cream-50 rounded-xl border border-cream-200 hover:border-gold-300 hover:shadow-md transition-all">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-semibold text-navy-900 mb-1">{c.title}</h4>
                  <p className="text-navy-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-navy-900">Why Hotels Trust MARRIUM</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="text-center p-8 bg-white rounded-2xl border border-cream-200 shadow-sm hover:shadow-md transition">
                  <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h4 className="font-display font-semibold text-navy-900 mb-2">{p.title}</h4>
                  <p className="text-navy-500 text-sm">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-bold text-navy-900 mb-3">Get a Hotel Insurance Quote</h2>
            <p className="text-navy-500">Let us build a comprehensive policy that covers your entire hospitality operation.</p>
          </div>
          <div className="bg-cream-50 border border-cream-200 rounded-2xl p-8">
            <ContactForm defaultService="hotel" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
