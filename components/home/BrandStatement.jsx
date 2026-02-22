import useInView from '../../hooks/useInView';

export default function BrandStatement() {
  const [ref, inView] = useInView();

  return (
    <section className="py-28 bg-navy-900 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-500/5 blur-[100px]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-500/5 blur-[100px]" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal ${inView ? 'visible' : ''}`}
      >
        {/* Label */}
        <p className="text-gold-400 font-medium tracking-widest text-xs uppercase mb-8">
          Our Belief
        </p>

        {/* Pull quote */}
        <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
          At MARRIUM Insurance, we believe insurance isn&apos;t paperwork —
          <span className="text-gold-400 italic"> it&apos;s protection</span> for everything you&apos;ve worked hard to build.
        </blockquote>

        {/* Gold rule */}
        <div className="w-16 h-px bg-gold-500 mx-auto mb-8" />

        {/* Body */}
        <p className="text-cream-200 text-lg leading-relaxed max-w-2xl mx-auto">
          From personal auto and homeowners&apos; coverage to nationwide commercial insurance solutions — from luxury resorts to bustling restaurants, from large-scale mansions to commercial fleets — we protect what matters most.
        </p>

        {/* Tagline */}
        <p className="mt-8 text-gold-400/80 text-sm font-semibold uppercase tracking-widest">
          We are not just an insurance agency. We are your nationwide risk partner.
        </p>
      </div>
    </section>
  );
}
