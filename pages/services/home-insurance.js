import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import ServiceHero from '../../components/ui/ServiceHero';
import ContactForm from '../../components/ui/ContactForm';
import { Home, CheckCircle2, Shield, Flame, Droplets, Lock } from 'lucide-react';

const coverages = [
  { title: 'Dwelling Coverage', desc: 'Protects the structure of your home from fire, storms, and covered perils.' },
  { title: 'Personal Property', desc: 'Covers your furniture, electronics, clothing, and other belongings.' },
  { title: 'Liability Protection', desc: 'Protects you if someone is injured on your property or you damage others\' property.' },
  { title: 'Loss of Use', desc: 'Covers living expenses if your home becomes uninhabitable after a covered event.' },
  { title: 'Medical Payments', desc: 'Pays medical bills for guests injured at your home, regardless of fault.' },
  { title: 'Natural Disaster Add-ons', desc: 'Optional flood, earthquake, and windstorm coverage available.' },
];

const whyPoints = [
  { icon: Flame, title: 'Fire & Smoke', desc: 'Protection against fire, smoke, and explosion damage to your home.' },
  { icon: Droplets, title: 'Water Damage', desc: 'Coverage for sudden water damage from burst pipes and appliances.' },
  { icon: Lock, title: 'Theft & Vandalism', desc: 'Coverage for burglary, theft, and vandalism incidents.' },
  { icon: Shield, title: 'Liability Shield', desc: 'Legal and financial protection if someone sues after getting hurt on your property.' },
];

export default function HomeInsurance() {
  return (
    <Layout>
      <Head>
        <title>Home Insurance — MARRIUM Insurance | San Antonio, TX</title>
        <meta name="description" content="Protect your home with MARRIUM Insurance. Comprehensive homeowners coverage in San Antonio, TX. Get a free quote today." />
      </Head>

      <ServiceHero
        icon={Home}
        title="Home Insurance"
        subtitle="Homeowners Coverage"
        description="Your home is your most valuable asset. Our homeowners policies provide robust protection for your property, belongings, and personal liability."
        breadcrumb="Home Insurance"
      />

      {/* Coverage Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-700 font-medium tracking-widest text-sm uppercase mb-3">What&apos;s Covered</p>
            <h2 className="font-display text-4xl font-bold text-navy-900">Home Coverage Options</h2>
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

      {/* Why */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-navy-900">Protection That Goes the Distance</h2>
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

      {/* Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-bold text-navy-900 mb-3">Get a Home Insurance Quote</h2>
            <p className="text-navy-500">Protect your home today. Fast, personalized quotes from licensed specialists.</p>
          </div>
          <div className="bg-cream-50 border border-cream-200 rounded-2xl p-8">
            <ContactForm defaultService="home" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
