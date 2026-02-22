import Link from 'next/link';
import { ArrowRight, Shield, Globe, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-bg.mp4"
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-navy-900/70" />

      {/* Subtle gold vignette at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-navy-900/80 to-transparent pointer-events-none" />

      {/* Gold top rule */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <div className="space-y-8 animate-fadeInUp">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full">
              <Globe className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium tracking-wide">Nationwide Insurance Agency</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.25rem] font-bold text-white leading-[1.08] tracking-tight">
                We Protect What<br />
                <span className="gold-shimmer italic">Matters Most.</span>
              </h1>
            </div>

            {/* Identity statement */}
            <p className="text-lg text-cream-100/90 leading-relaxed max-w-xl">
              We are a nationwide insurance agency serving clients across multiple states. From personal auto and homeowners&apos; coverage to nationwide commercial insurance solutions — we protect what you&apos;ve worked hard to build.
            </p>

            {/* Welcome line */}
            <p className="text-sm text-gold-300/80 font-medium tracking-wide border-l-2 border-gold-500/40 pl-4 italic">
              Whether you&apos;re protecting your home, your vehicle, your business, or your legacy — you&apos;re in the right place.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/contact?scroll=form"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-gold-500/25 hover:-translate-y-0.5">
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/business"
                className="inline-flex items-center justify-center px-8 py-4 border border-cream-100/25 text-cream-100 hover:border-gold-400 hover:text-gold-400 rounded-lg font-medium transition-all hover:-translate-y-0.5">
                Protect My Business
              </Link>
              <Link href="/personal"
                className="inline-flex items-center justify-center px-8 py-4 border border-cream-100/25 text-cream-100 hover:border-gold-400 hover:text-gold-400 rounded-lg font-medium transition-all hover:-translate-y-0.5">
                Protect My Home
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-navy-700/60">
              {[
                { num: 'Nationwide', label: 'Coverage' },
                { num: 'Multi-State', label: 'Reach' },
                { num: 'All Risk', label: 'Classes' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-xl font-bold text-gold-400">{s.num}</div>
                  <div className="text-xs text-cream-300 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right ── */}
          <div className="hidden lg:flex flex-col gap-5 animate-fadeInUp delay-200">

            {/* Main card */}
            <div className="relative bg-navy-800/60 border border-gold-500/15 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent rounded-t-2xl" />

              <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">What We Cover</p>
              <ul className="space-y-3">
                {[
                  'Personal Auto & Homeowners',
                  'Luxury Residences & High-Value Homes',
                  'Restaurant & Hospitality',
                  'Contractors & Commercial Property',
                  'Professional Liability & Cyber',
                  'Commercial Fleets & Specialty Risk',
                  'Workers Comp & Umbrella Coverage',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-cream-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-navy-700/60 flex items-center gap-3">
                <Shield className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="text-cream-300 text-xs italic">
                  If it needs protection, we insure it.
                </span>
              </div>
            </div>

            {/* Bottom tag */}
            <div className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span className="text-cream-200 text-sm">Licensed specialists available now</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll nudge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-cream-400/50 animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
