import { CheckCircle2, PhoneIcon, Clock, Award, Users } from 'lucide-react';
import Link from 'next/link';

const pillars = [
  { icon: Award, title: 'Licensed Specialists', desc: 'Fully licensed insurance professionals with deep expertise in all coverage types.' },
  { icon: Clock, title: 'Fast Turnaround', desc: 'Quick quotes and efficient processing — we respect your time.' },
  { icon: Users, title: 'Personal Service', desc: 'A dedicated agent who knows your name and understands your needs.' },
  { icon: PhoneIcon, title: '24/7 Support', desc: 'Round-the-clock availability for questions, claims, and emergencies.' },
];

const benefits = [
  'Competitive rates and multi-policy discounts',
  'Customized coverage — not one-size-fits-all',
  'Transparent pricing with no hidden fees',
  'Claims support from start to finish',
  'Bilingual service available',
  'Serving San Antonio and surrounding areas',
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-gold-700 font-medium tracking-widest text-sm uppercase mb-3">Our Commitment</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-6">
              Why Choose<br />MARRIUM Insurance?
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mb-8" />

            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-700">{b}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-navy-900 hover:bg-gold-700 text-white font-semibold rounded-lg transition-colors">
              Speak With an Agent
            </Link>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white rounded-2xl border border-cream-200 p-6 shadow-sm hover:shadow-md hover:border-gold-300 transition-all">
                  <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <h4 className="font-display text-base font-semibold text-navy-900 mb-2">{p.title}</h4>
                  <p className="text-navy-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
