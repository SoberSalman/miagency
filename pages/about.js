import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import useInView from '../hooks/useInView';
import { Shield, Award, Users, Globe, CheckCircle2 } from 'lucide-react';

const values = [
  { title: 'Integrity', desc: 'We provide transparent, honest guidance — no hidden agendas, no unnecessary upsells. You get the truth about your coverage, even when that means telling you your current policy is fine.' },
  { title: 'Expertise', desc: 'From personal auto to complex commercial risk, our team stays current with carrier changes, regulation updates, and industry shifts to make sure every recommendation is informed.' },
  { title: 'Commitment', desc: 'From your first quote to your latest renewal — and every claim in between — we are with you at every stage. One call, one relationship, one agency that knows your name.' },
];

const pillars = [
  { icon: Shield, title: 'Licensed & Trusted', desc: 'Fully licensed insurance professionals across personal and commercial lines, committed to regulatory standards and genuine client protection.' },
  { icon: Award, title: 'Nationwide Reach', desc: 'Serving clients across multiple states — we are not limited by geography. Wherever you are, we bring the same level of attention and expertise.' },
  { icon: Users, title: 'Personal Service', desc: 'A boutique agency that treats every client as a priority. You are never just a policy number — you are a relationship we take seriously.' },
  { icon: Globe, title: 'Every Risk Class', desc: 'From personal auto and homeowners to specialty commercial risk — restaurants, fleets, contractors, cyber, EPL. If it needs protection, we insure it.' },
];

export default function About() {
  const [storyRef, storyInView] = useInView();
  const [valuesRef, valuesInView] = useInView();

  return (
    <Layout>
      <Head>
        <title>About Us — MARRIUM Insurance | Nationwide Risk Partner</title>
        <meta name="description" content="Learn about MARRIUM Insurance — a nationwide licensed insurance agency founded by Marrium Sohail. Personal and commercial coverage across multiple states." />
      </Head>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 to-navy-800 py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="absolute top-16 right-20 w-96 h-96 rounded-full bg-gold-500 opacity-[0.06] blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-300 font-medium tracking-widest text-xs uppercase mb-4">Who We Are</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 max-w-2xl leading-tight">
            Your Nationwide<br />Risk Partner.
          </h1>
          <p className="text-xl text-cream-100 max-w-2xl leading-relaxed">
            A licensed insurance agency built on trust, expertise, and genuine care — serving individuals and businesses across multiple states.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={storyRef}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className={`reveal-left ${storyInView ? 'visible' : ''}`}>
              <p className="text-gold-700 font-medium tracking-widest text-xs uppercase mb-3">Our Story</p>
              <h2 className="font-display text-4xl font-bold text-navy-900 mb-4">
                Built on the Belief That Insurance Should Work For You.
              </h2>
              <div className="w-16 h-px bg-gold-500 mb-7" />
              <div className="space-y-5 text-navy-600 leading-relaxed text-base">
                <p>
                  MARRIUM Insurance was founded with a clear mission: to give individuals and business owners access to honest, expert insurance guidance — without the complexity, without the pressure, and without the runaround.
                </p>
                <p>
                  What began as a local San Antonio practice has grown into a nationwide operation — driven by licensed professionals who believe coverage should be built around your life, not a checklist. Today we serve clients across multiple states, covering everything from personal auto and homeowners policies to complex commercial programs for restaurants, contractors, hospitality groups, and large-scale commercial operations.
                </p>
                <p>
                  We believe insurance isn&apos;t paperwork. It&apos;s protection for everything you&apos;ve worked hard to build. And that&apos;s exactly how we treat it — personally, strategically, and with care.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {[
                  'Licensed across personal and commercial lines',
                  'Serving clients in multiple states nationwide',
                  'All risk classes — personal to enterprise-level commercial',
                  'Bilingual service available',
                ].map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`reveal-right ${storyInView ? 'visible' : ''} space-y-4`}>
              {pillars.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-5 p-5 bg-cream-50 rounded-xl border border-cream-200 hover:border-gold-300 hover:shadow-md transition-all duration-300"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-semibold text-navy-900 mb-1">{item.title}</h4>
                      <p className="text-navy-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-28 bg-cream-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-gold-50/60 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl border border-gold-300/40" />
                <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/My_Photo.jpeg"
                    alt="Marrium Sohail — Founder, MARRIUM Insurance"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-display text-xl font-bold text-white">Marrium Sohail</p>
                    <p className="text-gold-300 text-xs tracking-wide mt-0.5">Founder &amp; Principal Agent</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-gold-700 font-medium tracking-widest text-xs uppercase">From the Founder</p>
              <div className="font-display text-7xl text-gold-300/50 leading-none -mb-3 select-none" aria-hidden="true">&ldquo;</div>
              <div className="space-y-4 text-navy-700 text-base leading-relaxed">
                <p>
                  I started this agency because I believed people deserved more than a policy in the mail. They deserved someone who actually understood their situation — their home, their business, the things they&apos;ve spent years building.
                </p>
                <p>
                  Insurance should feel like a safety net, not a bureaucratic process. Whether you&apos;re a homeowner, a restaurant owner across three states, or a contractor building something from the ground up — we are here to make sure you&apos;re protected the right way.
                </p>
                <p className="text-navy-900 font-semibold">
                  We don&apos;t just sell policies. We build relationships — and that distinction means everything.
                </p>
              </div>
              <div className="pt-2 border-t border-gold-200">
                <p className="font-display text-2xl text-navy-900 italic">Marrium Sohail</p>
                <p className="text-navy-500 text-sm mt-1">Founder &amp; Principal Agent, MARRIUM Insurance</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div
          ref={valuesRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <p className="text-gold-300 font-medium tracking-widest text-xs uppercase mb-3">Our Values</p>
          <h2 className="font-display text-4xl font-bold text-white mb-14">What We Stand For</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`reveal ${valuesInView ? 'visible' : ''} p-8 border border-navy-700 hover:border-gold-500/40 rounded-2xl text-left transition-all duration-300`}
                style={{ transitionDelay: valuesInView ? `${i * 120}ms` : '0ms' }}
              >
                <h3 className="font-display text-2xl font-bold text-gold-400 mb-3">{v.title}</h3>
                <p className="text-cream-200 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-navy-900 mb-4">Ready to Get Protected?</h2>
          <p className="text-navy-600 mb-8 text-base">Speak with a MARRIUM Insurance specialist — no obligation, no pressure, just honest guidance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?scroll=form" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-700 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all hover:-translate-y-0.5">
              Get a Free Quote
            </Link>
            <a href="tel:+12108005910" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-navy-200 text-navy-700 hover:border-gold-500 hover:text-gold-700 font-semibold rounded-lg transition-all">
              Call +1 (210) 800-5910
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
