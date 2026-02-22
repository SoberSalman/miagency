import Link from 'next/link';
import useInView from '../../hooks/useInView';
import { CheckCircle2, PhoneIcon, Clock, Award, Users } from 'lucide-react';

const pillars = [
  { icon: Award,     title: 'Licensed Specialists', desc: 'Fully licensed professionals with expertise across personal and commercial insurance lines.' },
  { icon: Clock,     title: 'Fast Turnaround',       desc: 'Quick quotes and efficient processing — we respect your time and your urgency.' },
  { icon: Users,     title: 'Personal Service',      desc: 'A dedicated agent who knows your name, your business, and your exposure.' },
  { icon: PhoneIcon, title: '24/7 Support',           desc: 'Round-the-clock availability for questions, claims, and anything in between.' },
];

const benefits = [
  'Competitive rates and multi-policy discounts',
  'Customized coverage built around your lifestyle or operation',
  'Transparent pricing — no hidden fees, no surprises',
  'Claims support from first call to final resolution',
  'Bilingual service available',
  'Nationwide reach with personalized attention',
];

export default function WhyUs() {
  const [leftRef, leftInView] = useInView();
  const [rightRef, rightInView] = useInView();

  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div ref={leftRef} className={`reveal-left ${leftInView ? 'visible' : ''}`}>
            <p className="text-gold-400 font-medium tracking-widest text-xs uppercase mb-3">Our Commitment</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              A Partner You Can<br />Actually Count On.
            </h2>
            <div className="w-16 h-px bg-gold-500 mb-5" />
            <p className="text-cream-300 leading-relaxed mb-7">
              We don&apos;t just sell policies. We take time to understand your situation, your assets, and your risks — then we build protection around it.
            </p>

            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-cream-200 text-sm">{b}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact?scroll=form"
              className="inline-flex items-center gap-2 mt-9 px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white font-semibold rounded-lg transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Speak With a Specialist
            </Link>
          </div>

          {/* Right */}
          <div ref={rightRef} className={`grid grid-cols-2 gap-4 reveal-right ${rightInView ? 'visible' : ''}`}>
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-navy-800/60 border border-navy-700 hover:border-gold-500/40 rounded-2xl p-5 transition-all duration-300 hover:bg-navy-800"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 bg-navy-900 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-gold-400" />
                  </div>
                  <h4 className="font-display text-base font-semibold text-white mb-1.5">{p.title}</h4>
                  <p className="text-cream-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
