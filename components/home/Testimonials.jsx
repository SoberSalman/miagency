import useInView from '../../hooks/useInView';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "We own three restaurant locations across two states. Marrium restructured our entire commercial coverage — property, liability, and workers comp — under one coherent plan. For the first time, I actually understood what I was paying for and why.",
    name: 'Carlos M.',
    role: 'Restaurant Owner — Texas & New Mexico',
    coverage: 'Restaurant Insurance',
    initials: 'CM',
  },
  {
    quote: "After our home flooded, I was overwhelmed. Marrium walked me through every step of the claims process, advocated for us with the carrier, and made sure we didn't leave anything on the table. She treats you like family.",
    name: 'Priya R.',
    role: 'Homeowner — San Antonio, TX',
    coverage: 'Homeowners Insurance',
    initials: 'PR',
  },
  {
    quote: "I run a mid-size contracting company. Marrium found gaps in my previous coverage I didn't even know existed — completed operations, hired auto, umbrella. She didn't upsell me; she educated me. That made all the difference.",
    name: 'James T.',
    role: 'General Contractor — Multi-State Operations',
    coverage: 'Contractors & Commercial',
    initials: 'JT',
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-300/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-700 font-medium tracking-widest text-xs uppercase mb-3">Client Stories</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900">
            Real People. Real Protection.
          </h2>
          <div className="w-16 h-px bg-gold-500 mx-auto mt-5" />
        </div>

        {/* Cards */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal ${inView ? 'visible' : ''} flex flex-col bg-white border border-cream-200 hover:border-gold-300 rounded-2xl p-7 transition-all duration-300 hover:shadow-lg`}
              style={{ transitionDelay: inView ? `${i * 120}ms` : '0ms' }}
            >
              <Stars />

              <div className="font-display text-5xl text-gold-400/25 leading-none mb-1 select-none" aria-hidden="true">&ldquo;</div>

              <blockquote className="text-navy-600 text-sm leading-relaxed flex-1 -mt-2">
                {t.quote}
              </blockquote>

              <div className="w-8 h-px bg-gold-300 my-5" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-400 text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-navy-900 text-sm font-semibold">{t.name}</p>
                  <p className="text-navy-400 text-xs">{t.role}</p>
                </div>
              </div>

              <div className="mt-4 inline-flex">
                <span className="px-3 py-1 bg-gold-50 border border-gold-200 rounded-full text-gold-700 text-xs font-medium">
                  {t.coverage}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-navy-400 text-xs mt-8">
          * Testimonials are representative of typical client experiences. Names abbreviated for privacy.
        </p>
      </div>
    </section>
  );
}
