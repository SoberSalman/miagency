import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout/Layout';
import useInView from '../../hooks/useInView';
import {
  UtensilsCrossed, Hotel, HardHat, Building2, FileText, Truck,
  Star, Shield, Users, Globe, Briefcase, ArrowRight, ChevronDown
} from 'lucide-react';

const categories = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurant',
    tagline: 'Your kitchen runs on more than recipes.',
    description: 'From slip-and-fall liability to equipment breakdown and business interruption, restaurant insurance covers the risks that come with every service. We structure policies for everything from small cafes to multi-location operations.',
    query: 'restaurant',
    color: 'text-rose-400',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    tagline: 'Every guest is a responsibility.',
    description: 'Hotels, resorts, motels, and short-term rentals carry unique exposure. We cover property, general liability, loss of income, guest incidents, and employee-related claims, built around your scale of operation.',
    query: 'hospitality',
    color: 'text-amber-400',
  },
  {
    icon: HardHat,
    title: 'Contractors & Trades',
    tagline: 'You build things. We protect them.',
    description: 'General contractors, electricians, plumbers, roofers, HVAC technicians: every trade carries liability on the job. We provide general liability, tools & equipment, completed operations, and workers comp coverage.',
    query: 'contractors',
    color: 'text-orange-400',
  },
  {
    icon: Building2,
    title: 'Commercial Property',
    tagline: 'Protect the asset, protect the income.',
    description: 'Your building, equipment, and inventory represent your life\'s work. We cover structural damage, contents, loss of business income, and flood options, tailored to your property type and occupancy.',
    query: 'commercial-property',
    color: 'text-emerald-400',
  },
  {
    icon: FileText,
    title: 'Professional Liability',
    tagline: 'Even good advice can be misunderstood.',
    description: 'If your business provides professional services, advice, or expertise, you need E&O coverage. Protect against claims of negligence, errors, omissions, or failure to deliver promised results.',
    query: 'professional-liability',
    color: 'text-blue-400',
  },
  {
    icon: Truck,
    title: 'Commercial Auto & Fleet',
    tagline: 'Every vehicle on the road is a liability.',
    description: 'From a single delivery van to a full commercial fleet, we structure auto coverage around your operation: liability, physical damage, hired/non-owned, and driver scheduling. One policy. All your vehicles.',
    query: 'commercial-auto',
    color: 'text-purple-400',
  },
  {
    icon: Star,
    title: 'Specialty Risk',
    tagline: 'Not every risk fits a standard policy.',
    description: 'We specialize in hard-to-place and non-standard commercial risks, including entertainment venues, luxury assets, unique operations, and industries that standard carriers decline. If it\'s complex, we\'ve seen it.',
    query: 'specialty',
    color: 'text-indigo-400',
  },
  {
    icon: Shield,
    title: 'Umbrella Coverage',
    tagline: 'When primary limits aren\'t enough.',
    description: 'A single major claim can exceed your base policy limits. Commercial umbrella coverage provides an additional layer of liability protection above your existing commercial policies, for when it really matters.',
    query: 'umbrella',
    color: 'text-teal-400',
  },
  {
    icon: Users,
    title: 'EPL',
    tagline: 'Your employees are your greatest asset and your greatest exposure.',
    description: 'Employment Practices Liability protects your business against claims of wrongful termination, discrimination, harassment, retaliation, and more. Critical for any business with employees.',
    query: 'epl',
    color: 'text-pink-400',
  },
  {
    icon: Globe,
    title: 'Cybersecurity',
    tagline: 'Data breaches don\'t discriminate by size.',
    description: 'Any business that holds customer data, processes payments, or operates digitally is exposed. We provide cyber liability, data breach response, business interruption, and ransomware coverage.',
    query: 'cyber',
    color: 'text-cyan-400',
  },
  {
    icon: Briefcase,
    title: 'Workers Compensation',
    tagline: 'Protect your people. Protect your business.',
    description: 'Required in most states and critical for any operation with employees. We structure workers comp coverage around your payroll, industry class, and safety record to get you the right rate.',
    query: 'workers-comp',
    color: 'text-lime-400',
  },
];

function CategoryCard({ item, index, inView }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <div
      className={`reveal ${inView ? 'visible' : ''} bg-cream-50 border rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'border-gold-300 shadow-xl' : 'border-cream-300 hover:border-gold-200 hover:shadow-md'}`}
      style={{ transitionDelay: inView ? `${(index % 6) * 70}ms` : '0ms' }}
    >
      {/* Card header — always visible */}
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

      {/* Expandable body */}
      <div className={`transition-all duration-400 ease-in-out overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-7 pb-7 pt-0 border-t border-cream-200">
          <p className="text-navy-600 text-sm leading-relaxed mt-5 mb-6">{item.description}</p>
          <Link
            href={`/contact?scroll=form&tab=business&type=${item.query}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-gold-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BusinessInsurance() {
  const [heroRef, heroInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <Layout>
      <Head>
        <title>Business Insurance | MARRIUM Insurance | Commercial Coverage Nationwide</title>
        <meta name="description" content="Commercial insurance for restaurants, hospitality, contractors, and more. MARRIUM Insurance structures coverage tailored to your business exposure." />
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
            <Briefcase className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-medium tracking-wide">Business Insurance</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
            Your business is more than numbers. It&apos;s reputation, employees, late nights, and risk.
          </h1>
          <p className="text-xl text-cream-100 max-w-2xl leading-relaxed">
            Whether you own a restaurant, contracting company, retail store, fleet, professional service firm, resort, or large commercial operation, we structure coverage tailored to your exposure. We don&apos;t believe in generic policies. We believe in strategic protection.
          </p>
        </div>
      </section>

      {/* Coverage Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-700 font-medium tracking-widest text-xs uppercase mb-3">Commercial Coverage</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900">Every Industry. Every Risk.</h2>
            <div className="w-16 h-px bg-gold-500 mx-auto mt-5" />
            <p className="text-navy-500 mt-5 max-w-xl mx-auto">
              Select a category to learn more and start a quote tailored to your operation.
            </p>
          </div>

          <div ref={gridRef} className="grid md:grid-cols-2 gap-4">
            {categories.map((item, i) => (
              <CategoryCard key={item.title} item={item} index={i} inView={gridInView} />
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
            Not sure what you need?<br />Let&apos;s talk.
          </h2>
          <p className="text-cream-200 text-lg mb-10 max-w-xl mx-auto">
            Our specialists analyze your operation and build a coverage structure around your actual risk, not a template.
          </p>
          <Link
            href="/contact?scroll=form&tab=business"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gold-600 hover:bg-gold-500 text-white font-semibold rounded-lg transition-all shadow-lg hover:-translate-y-0.5 text-base"
          >
            Build My Coverage Plan <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
