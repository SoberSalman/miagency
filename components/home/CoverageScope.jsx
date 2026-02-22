import Link from 'next/link';
import useInView from '../../hooks/useInView';
import {
  Car, Home, Building2, UtensilsCrossed, HardHat, Truck,
  Shield, Globe, Briefcase, ArrowRight
} from 'lucide-react';

const categories = [
  { icon: Car,             label: 'Personal Auto',           color: 'text-blue-400' },
  { icon: Home,            label: 'Homeowners',              color: 'text-amber-400' },
  { icon: Building2,       label: 'Commercial Property',     color: 'text-emerald-400' },
  { icon: UtensilsCrossed, label: 'Restaurant & Food',       color: 'text-rose-400' },
  { icon: HardHat,         label: 'Contractors & Trades',    color: 'text-orange-400' },
  { icon: Truck,           label: 'Commercial Fleets',       color: 'text-purple-400' },
  { icon: Shield,          label: 'Umbrella & Liability',    color: 'text-teal-400' },
  { icon: Globe,           label: 'Specialty & Cyber',       color: 'text-indigo-400' },
  { icon: Briefcase,       label: 'Workers Comp & EPL',      color: 'text-pink-400' },
];

export default function CoverageScope() {
  const [titleRef, titleInView] = useInView();
  const [gridRef, gridInView] = useInView();

  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={titleRef} className={`text-center mb-12 reveal ${titleInView ? 'visible' : ''}`}>
          <p className="text-gold-400 font-medium tracking-widest text-xs uppercase mb-3">Scale &amp; Scope</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            If it needs protection,<br />
            <span className="text-gold-400 italic">we insure it.</span>
          </h2>
          <div className="w-16 h-px bg-gold-500 mx-auto mt-5 mb-5" />
          <p className="text-cream-300 max-w-xl mx-auto">
            From your car to your commercial empire, every risk class, across every state we serve.
          </p>
        </div>

        {/* Category grid */}
        <div ref={gridRef} className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-3 mb-10">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.label}
                className={`reveal ${gridInView ? 'visible' : ''} flex flex-col items-center gap-2.5 p-3.5 rounded-xl border border-navy-700 hover:border-gold-500/50 hover:bg-navy-800 transition-all duration-300 group cursor-default`}
                style={{ transitionDelay: gridInView ? `${i * 55}ms` : '0ms' }}
              >
                <div className="w-10 h-10 bg-navy-800 group-hover:bg-navy-700 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Icon className={`w-4 h-4 ${cat.color}`} />
                </div>
                <span className="text-cream-300 text-xs font-medium text-center leading-tight">{cat.label}</span>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 px-7 py-5 bg-white/5 border border-white/10 rounded-2xl">
          <div>
            <p className="text-white font-display text-lg font-bold">Not sure which category fits?</p>
            <p className="text-cream-400 text-sm mt-0.5">Our specialists will figure it out. No jargon, no pressure.</p>
          </div>
          <Link
            href="/contact?scroll=form"
            className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gold-600 hover:bg-gold-500 text-white font-semibold rounded-lg transition-all text-sm"
          >
            Build My Coverage Plan
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
