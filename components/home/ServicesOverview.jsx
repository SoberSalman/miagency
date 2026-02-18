import Link from 'next/link';
import { Car, Home, UtensilsCrossed, Building2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Auto Insurance',
    description: 'Full coverage, liability, and collision protection for personal and commercial vehicles at competitive rates.',
    href: '/services/auto',
    color: 'from-blue-50 to-cream-100',
  },
  {
    icon: Home,
    title: 'Home Insurance',
    description: 'Comprehensive protection for your property, belongings, and liability — so your home is always secure.',
    href: '/services/home-insurance',
    color: 'from-amber-50 to-cream-100',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant Insurance',
    description: 'Specialized coverage for food service businesses including property, liability, and business interruption.',
    href: '/services/restaurant',
    color: 'from-rose-50 to-cream-100',
  },
  {
    icon: Building2,
    title: 'Hotel Insurance',
    description: 'Tailored policies for hospitality businesses covering property, guests, employees, and operations.',
    href: '/services/hotel',
    color: 'from-emerald-50 to-cream-100',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-700 font-medium tracking-widest text-sm uppercase mb-3">What We Cover</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900">
            Insurance Services
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-5" />
          <p className="text-navy-500 mt-6 max-w-xl mx-auto">
            Tailored coverage solutions for individuals, homeowners, and business owners throughout San Antonio and beyond.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className={`group flex flex-col bg-gradient-to-b ${s.color} border border-cream-300 rounded-2xl p-8 hover:shadow-xl hover:border-gold-300 transition-all duration-300`}
              >
                <div className="w-14 h-14 bg-navy-900 group-hover:bg-gold-700 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-6 h-6 text-gold-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">{s.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed flex-1">{s.description}</p>
                <div className="flex items-center gap-2 mt-6 text-gold-700 text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
