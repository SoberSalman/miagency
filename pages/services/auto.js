import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import ServiceHero from '../../components/ui/ServiceHero';
import ContactForm from '../../components/ui/ContactForm';
import { Car, CheckCircle2, ShieldCheck, Zap, DollarSign, AlertTriangle } from 'lucide-react';

const coverages = [
  { title: 'Liability Coverage', desc: 'Covers bodily injury and property damage you cause to others in an accident.' },
  { title: 'Collision Coverage', desc: 'Pays for damage to your vehicle from an accident, regardless of fault.' },
  { title: 'Comprehensive Coverage', desc: 'Protects against theft, vandalism, weather, and non-collision events.' },
  { title: 'Uninsured Motorist', desc: 'Covers you when the at-fault driver has insufficient or no insurance.' },
  { title: 'Medical Payments', desc: 'Covers medical expenses for you and your passengers after an accident.' },
  { title: 'Roadside Assistance', desc: 'Emergency towing, battery jump, fuel delivery, and lockout service.' },
];

const whyPoints = [
  { icon: DollarSign, title: 'Competitive Rates', desc: 'We shop multiple carriers to find you the best price available.' },
  { icon: Zap, title: 'Fast Claims', desc: 'Our streamlined process gets your claim resolved quickly.' },
  { icon: ShieldCheck, title: 'Full Protection', desc: 'Coverage options for every driver — personal, commercial, and fleet.' },
  { icon: AlertTriangle, title: 'SR-22 Filing', desc: 'We assist with SR-22 certificates for drivers who need proof of coverage.' },
];

export default function AutoInsurance() {
  return (
    <Layout>
      <Head>
        <title>Auto Insurance — MARRIUM Insurance | San Antonio, TX</title>
        <meta name="description" content="Get affordable auto insurance in San Antonio with MARRIUM Insurance. Full coverage, liability, SR-22, and more. Free quotes from licensed specialists." />
      </Head>

      <ServiceHero
        icon={Car}
        title="Auto Insurance"
        subtitle="Vehicle Coverage"
        description="Comprehensive auto coverage for every driver. From basic liability to full coverage, we find the right policy at the right price for you."
        breadcrumb="Auto Insurance"
      />

      {/* Coverage Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-700 font-medium tracking-widest text-sm uppercase mb-3">What's Included</p>
            <h2 className="font-display text-4xl font-bold text-navy-900">Coverage Options</h2>
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
            <h2 className="font-display text-4xl font-bold text-navy-900">Why Choose MARRIUM for Auto?</h2>
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
            <h2 className="font-display text-4xl font-bold text-navy-900 mb-3">Get Your Auto Insurance Quote</h2>
            <p className="text-navy-500">Tell us about your vehicle and we'll find you the best coverage at the best price.</p>
          </div>
          <div className="bg-cream-50 border border-cream-200 rounded-2xl p-8">
            <ContactForm defaultService="auto" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
