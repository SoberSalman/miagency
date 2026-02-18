import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceHero({ icon: Icon, title, subtitle, description, breadcrumb }) {
  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-20 sm:py-28">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-gold-400 opacity-5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-cream-300 mb-8">
          <Link href="/" className="hover:text-gold-400 transition">Home</Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-gold-400 transition">Services</Link>
          <span>/</span>
          <span className="text-gold-400">{breadcrumb}</span>
        </nav>

        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            {Icon && (
              <div className="w-14 h-14 bg-gold-500/20 border border-gold-500/30 rounded-xl flex items-center justify-center">
                <Icon className="w-7 h-7 text-gold-400" />
              </div>
            )}
            <span className="text-gold-300 font-medium tracking-widest text-sm uppercase">{subtitle}</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-cream-100 leading-relaxed mb-8">{description}</p>

          <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white font-semibold rounded-lg transition-all shadow-lg">
            Request a Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
