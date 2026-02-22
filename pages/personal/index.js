import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import useInView from '../../hooks/useInView';
import { Car, Home, Shield, Building, Key, UserCheck, ArrowRight, ChevronDown } from 'lucide-react';

const coverageItems = [
  {
    icon: Car,
    title: 'Auto Insurance',
    tagline: 'Your car gets you everywhere. Make sure it stays protected.',
    description: 'We provide full coverage, liability, collision, comprehensive, and uninsured motorist protection for personal vehicles. Whether you have one car or several drivers in the household, we structure the policy around your situation, not a generic rate sheet.',
    query: 'auto',
    color: 'text-blue-400',
  },
  {
    icon: Home,
    title: 'Homeowners Insurance',
    tagline: 'Your home is likely your largest asset. Protect it accordingly.',
    description: 'Standard homeowners coverage protects your structure, personal belongings, and personal liability. We make sure your policy reflects your home\'s actual replacement value, not just its market value, so you\'re never underinsured when it matters most.',
    query: 'homeowners',
    color: 'text-amber-400',
  },
  {
    icon: Shield,
    title: 'Umbrella Coverage',
    tagline: 'When your existing policies aren\'t enough.',
    description: 'A single lawsuit or major incident can exceed your auto or home policy limits. Personal umbrella coverage adds an extra layer of liability protection, typically $1M or more, above your existing policies. It\'s one of the most cost-effective coverages you can add.',
    query: 'umbrella',
    color: 'text-teal-400',
  },
  {
    icon: Building,
    title: 'High-Value Homes',
    tagline: 'Standard policies weren\'t built for exceptional properties.',
    description: 'Luxury homes, historic properties, and high-value residences require specialized coverage, including guaranteed replacement cost, scheduled valuables, and coverage for unique architectural features. We work with carriers that specialize in high-value residential risk.',
    query: 'high-value-home',
    color: 'text-purple-400',
  },
  {
    icon: Key,
    title: 'Landlord Policy',
    tagline: 'Your rental property is a business. Insure it like one.',
    description: 'A standard homeowners policy won\'t cover a rental property. Landlord insurance protects you against property damage, loss of rental income, and liability claims from tenants or visitors. Whether you own one rental or several, we build the right policy around your portfolio.',
    query: 'landlord',
    color: 'text-orange-400',
  },
  {
    icon: UserCheck,
    title: 'Renters Insurance',
    tagline: 'Your landlord\'s policy doesn\'t cover your stuff.',
    description: 'Renters insurance protects your personal belongings against theft, fire, and other covered losses, and covers your personal liability if someone is injured in your unit. It\'s one of the most affordable policies available and one of the most overlooked.',
    query: 'renters',
    color: 'text-rose-400',
  },
];

function CoverageCard({ item, index, inView }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <div
      className={`reveal ${inView ? 'visible' : ''} bg-cream-50 border rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'border-gold-300 shadow-xl' : 'border-cream-300 hover:border-gold-200 hover:shadow-md'}`}
      style={{ transitionDelay: inView ? `${(index % 3) * 80}ms` : '0ms' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-7 flex items-start gap-5 group"
        aria-expanded={open}
      >
        <div className={`w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${open ? 'bg-gold-700' : 'group-hover:bg-gold-700'}`}>
          <Icon className={`w-5 h-5 transition-colors duration-300 ${open ? 'text-white' : `${item.color} group-hover:text-white`}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl font-bold text-navy-900">{item.title}</h3>
          <p className="text-navy-500 text-sm mt-1 italic">{item.tagline}</p>
        </div>
        <ChevronDown className={`w-5 h-5 text-navy-400 flex-shrink-0 mt-1 transition-transform duration-300 ${open ? 'rotate-180 text-gold-600' : ''}`} />
      </button>

      <div className={`transition-all duration-400 ease-in-out overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-7 pb-7 pt-0 border-t border-cream-200">
          <p className="text-navy-600 text-sm leading-relaxed mt-5 mb-6">{item.description}</p>
          <Link
            href={`/contact?scroll=form&tab=personal&coverage=${item.query}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-gold-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PersonalInsurance() {
  const [heroRef, heroInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <Layout>
      <Head>
        <title>Personal Insurance | MARRIUM Insurance | Nationwide Coverage</title>
        <meta name="description" content="Personal insurance coverage for auto, homeowners, umbrella, high-value homes, landlord policies, and renters. Nationwide protection from MARRIUM Insurance." />
      </Head>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 to-navy-800 py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="absolute top-16 right-20 w-96 h-96 rounded-full bg-gold-500 opacity-[0.06] blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold-300 opacity-[0.04] blur-[80px]" />

        <div
          ref={heroRef}
          className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal ${heroInView ? 'visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full mb-8">
            <Shield className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-medium tracking-wide">Personal Insurance</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
            Your life moves fast, your insurance shouldn&apos;t slow you down.
          </h1>
          <p className="text-xl text-cream-100 max-w-2xl leading-relaxed">
            From auto and home to umbrella and specialty coverage, we make protection simple, clear, and dependable. Whether it&apos;s your family, home, vehicles, or high-value property, we build coverage around your lifestyle.
          </p>
        </div>
      </section>

      {/* Coverage Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-700 font-medium tracking-widest text-xs uppercase mb-3">What We Cover</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900">Personal Coverage Options</h2>
            <div className="w-16 h-px bg-gold-500 mx-auto mt-5" />
            <p className="text-navy-500 mt-5 max-w-xl mx-auto">
              Select a category to learn more and start a quote built around your needs.
            </p>
          </div>

          <div ref={gridRef} className="grid md:grid-cols-2 gap-4">
            {coverageItems.map((item, i) => (
              <CoverageCard key={item.title} item={item} index={i} inView={gridInView} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-px bg-gold-500 mx-auto mb-8" />
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="text-cream-200 text-lg mb-10 max-w-xl mx-auto">
            Speak with a licensed specialist. No obligation, no pressure. We&apos;ll help you find the right fit.
          </p>
          <Link
            href="/contact?scroll=form&tab=personal"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gold-600 hover:bg-gold-500 text-white font-semibold rounded-lg transition-all shadow-lg hover:-translate-y-0.5 text-base"
          >
            Let&apos;s Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
