import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 min-h-[90vh] flex items-center">
      {/* Logo background watermark */}
      <div className="absolute inset-0">
        <img src="/logo.jpg" alt="" className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/3 w-96 h-96 opacity-5 blur-sm" />
      </div>
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold-500 opacity-5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold-300 opacity-5 blur-3xl" />

      {/* Gold top border accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full">
              <Shield className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium tracking-wide">Licensed Insurance Specialists</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Protection You<br />
              <span className="text-gold-400 italic">Can Trust.</span>
            </h1>

            <p className="text-lg text-cream-100 leading-relaxed max-w-xl">
              MARRIUM Insurance delivers comprehensive coverage for auto, home, restaurants, and hotels. Expert guidance, competitive rates, and personal service — every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?scroll=form" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-gold-500/30">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services/auto" className="inline-flex items-center justify-center px-8 py-4 border-2 border-cream-100/30 text-cream-100 hover:border-gold-400 hover:text-gold-400 rounded-lg font-medium transition-all">
                Explore Coverage
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-navy-700">
              {[
                { num: '15+', label: 'Years of Experience' },
                { num: '3,000+', label: 'Clients Protected' },
                { num: '98%', label: 'Client Satisfaction' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold text-gold-400">{s.num}</div>
                  <div className="text-xs text-cream-200 mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image placeholder */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-navy-700 to-navy-800 rounded-2xl border border-gold-500/20 overflow-hidden shadow-2xl flex items-center justify-center">
                <img src="/logo.jpg" alt="MARRIUM Insurance" className="w-48 h-48 object-contain opacity-40" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 w-44">
                <div className="text-gold-700 font-display text-2xl font-bold">San Antonio</div>
                <div className="text-navy-600 text-xs mt-1 font-medium">Texas — Serving since 2009</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
