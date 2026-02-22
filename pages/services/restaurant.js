import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import ServiceHero from '../../components/ui/ServiceHero';
import ContactForm from '../../components/ui/ContactForm';
import { UtensilsCrossed, CheckCircle2, ShieldCheck, Users, AlertTriangle, Flame } from 'lucide-react';

const coverages = [
  { title: 'General Liability', desc: 'Covers customer injuries, property damage claims, and third-party lawsuits.' },
  { title: 'Commercial Property', desc: 'Protects your building, equipment, inventory, and furniture from covered losses.' },
  { title: 'Business Interruption', desc: 'Replaces lost income when a covered event forces you to temporarily close.' },
  { title: 'Liquor Liability', desc: 'Essential coverage if you serve alcohol. Protects against alcohol-related incidents.' },
  { title: "Workers' Compensation", desc: 'Covers medical expenses and lost wages for employees injured on the job.' },
  { title: 'Food Spoilage', desc: 'Compensates for inventory losses due to power outages or equipment breakdown.' },
];

const whyPoints = [
  { icon: Flame, title: 'Fire & Kitchen Hazards', desc: 'Specialized coverage for the unique fire risks in commercial kitchens.' },
  { icon: Users, title: 'Slip & Fall Liability', desc: 'High foot traffic means higher risk. We keep you protected.' },
  { icon: ShieldCheck, title: 'Liquor Liability', desc: 'If your restaurant serves alcohol, this is non-negotiable coverage.' },
  { icon: AlertTriangle, title: 'Food Contamination', desc: 'Protection against foodborne illness claims and related legal action.' },
];

export default function RestaurantInsurance() {
  return (
    <Layout>
      <Head>
        <title>Restaurant Insurance | MARRIUM Insurance | San Antonio, TX</title>
        <meta name="description" content="Specialized restaurant insurance coverage in San Antonio, TX. Protect your food service business with liability, property, and business interruption coverage from MARRIUM Insurance." />
      </Head>

      <ServiceHero
        icon={UtensilsCrossed}
        title="Restaurant Insurance"
        subtitle="Food Service Coverage"
        description="Restaurants face unique risks daily. Our specialized commercial coverage protects your business, staff, customers, and reputation with policies built for food service."
        breadcrumb="Restaurant Insurance"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-700 font-medium tracking-widest text-sm uppercase mb-3">Coverage Built for Restaurants</p>
            <h2 className="font-display text-4xl font-bold text-navy-900">What We Cover</h2>
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
            <h2 className="font-display text-4xl font-bold text-navy-900">Risks Unique to Your Industry</h2>
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
            <h2 className="font-display text-4xl font-bold text-navy-900 mb-3">Get a Restaurant Insurance Quote</h2>
            <p className="text-navy-500">Tell us about your restaurant and we&apos;ll build a policy that truly fits.</p>
          </div>
          <div className="bg-cream-50 border border-cream-200 rounded-2xl p-8">
            <ContactForm defaultService="restaurant" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
