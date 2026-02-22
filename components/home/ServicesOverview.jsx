import Link from 'next/link';
import useInView from '../../hooks/useInView';
import { User, Briefcase, ArrowRight } from 'lucide-react';

const hubs = [
  {
    icon: User,
    title: 'Personal Insurance',
    subtitle: 'Your family, home, vehicles, and high-value assets.',
    description: 'Your life moves fast — your insurance should keep up. Simple, dependable protection built around your lifestyle, not a template.',
    subcategories: ['Auto Insurance', 'Homeowners Insurance', 'Umbrella Coverage', 'High-Value Homes', 'Landlord Policy', 'Renters Insurance'],
    href: '/personal',
    accent: 'from-blue-50 to-cream-100',
    cta: 'Explore Personal Coverage',
  },
  {
    icon: Briefcase,
    title: 'Business Insurance',
    subtitle: 'From restaurants to commercial empires — coverage built for your exposure.',
    description: "We don't believe in generic policies. Whether you run a restaurant, a contracting firm, or a large-scale commercial operation — we structure protection around your actual risk.",
    subcategories: ['Restaurant & Hospitality', 'Contractors & Trades', 'Commercial Property', 'Professional Liability', 'Commercial Auto & Fleet', '+ 6 more categories'],
    href: '/business',
    accent: 'from-amber-50 to-cream-100',
    cta: 'Explore Business Coverage',
  },
];

export default function ServicesOverview() {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className={`text-center mb-12 reveal ${inView ? 'visible' : ''}`}>
          <p className="text-gold-700 font-medium tracking-widest text-xs uppercase mb-3">What We Cover</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900">
            Coverage for Every Chapter of Life
          </h2>
          <div className="w-16 h-px bg-gold-500 mx-auto mt-5 mb-5" />
          <p className="text-navy-500 max-w-2xl mx-auto">
            Insurance isn&apos;t paperwork — it&apos;s protection for everything you&apos;ve worked hard to build.
            Whether you need to protect your family or scale your business, we build coverage tailored to you.
          </p>
        </div>

        {/* Two Hub Cards */}
        <div className="grid md:grid-cols-2 gap-7">
          {hubs.map((hub, i) => {
            const Icon = hub.icon;
            return (
              <div
                key={hub.href}
                className={`group flex flex-col bg-gradient-to-b ${hub.accent} border border-cream-300 rounded-2xl p-9 hover:shadow-2xl hover:border-gold-300 transition-all duration-300 reveal ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: inView ? `${i * 120}ms` : '0ms' }}
              >
                <div className="w-12 h-12 bg-navy-900 group-hover:bg-gold-700 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-gold-400 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-display text-2xl font-bold text-navy-900 mb-1">{hub.title}</h3>
                <p className="text-navy-600 text-sm font-medium mb-3 italic">{hub.subtitle}</p>
                <p className="text-navy-500 text-sm leading-relaxed mb-6">{hub.description}</p>

                <ul className="space-y-2 mb-7">
                  {hub.subcategories.map((sub) => (
                    <li key={sub} className="flex items-center gap-2.5 text-sm text-navy-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>

                <Link
                  href={hub.href}
                  className="inline-flex items-center gap-2 mt-auto text-gold-700 text-sm font-semibold group-hover:gap-3 transition-all"
                >
                  {hub.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
