import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import { Shield, Award, Users, MapPin, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us — MARRIUM Insurance | San Antonio, TX</title>
        <meta name="description" content="Learn about MARRIUM Insurance — a trusted, licensed insurance agency specializing in auto, home, restaurant, and hotel coverage in San Antonio, TX." />
      </Head>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 to-navy-800 py-24">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-cream-300 mb-8">
            <Link href="/" className="hover:text-gold-400 transition">Home</Link>
            <span>/</span>
            <span className="text-gold-400">About Us</span>
          </nav>
          <p className="text-gold-300 font-medium tracking-widest text-sm uppercase mb-3">Who We Are</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white">About MARRIUM Insurance</h1>
          <p className="mt-6 text-xl text-cream-100 max-w-2xl">
            A licensed insurance agency built on trust, expertise, and genuine care for every client we serve.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-700 font-medium tracking-widest text-sm uppercase mb-3">Our Story</p>
              <h2 className="font-display text-4xl font-bold text-navy-900 mb-6">
                Your Trusted Local Insurance Specialist
              </h2>
              <div className="w-16 h-0.5 bg-gold-500 mb-8" />
              <div className="space-y-5 text-navy-600 leading-relaxed">
                <p>
                  MARRIUM Insurance was founded with a clear mission: to provide honest, expert insurance guidance to individuals and business owners in San Antonio and beyond.
                </p>
                <p>
                  Led by Marrium Sohail, our agency brings together years of industry experience with a deeply personal approach to service. We believe every client deserves not just coverage, but confidence.
                </p>
                <p>
                  From personal auto and home policies to complex commercial coverage for restaurants and hotels, we offer solutions tailored precisely to your situation — not generic, one-size-fits-all plans.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                { icon: Shield, title: 'Licensed & Trusted', desc: 'Fully licensed insurance professionals committed to regulatory standards and client protection.' },
                { icon: Award, title: 'Industry Expertise', desc: 'Deep knowledge across auto, home, and commercial insurance lines to serve you comprehensively.' },
                { icon: Users, title: 'Personal Service', desc: 'A boutique agency that treats every client as a priority — not just a policy number.' },
                { icon: MapPin, title: 'Local Roots', desc: 'Based in San Antonio, TX — we understand the local market and community we serve.' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-5 p-5 bg-cream-50 rounded-xl border border-cream-200">
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

      {/* Values */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-300 font-medium tracking-widest text-sm uppercase mb-3">Our Values</p>
          <h2 className="font-display text-4xl font-bold text-white mb-16">What We Stand For</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', desc: 'We provide transparent, honest guidance with no hidden agendas or unnecessary upsells.' },
              { title: 'Expertise', desc: 'We stay current with industry changes to ensure you always receive informed recommendations.' },
              { title: 'Commitment', desc: 'From your first quote to your latest renewal, we are with you at every stage.' },
            ].map((v) => (
              <div key={v.title} className="p-8 border border-navy-700 rounded-2xl">
                <h3 className="font-display text-2xl font-bold text-gold-400 mb-4">{v.title}</h3>
                <p className="text-cream-100 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-navy-900 mb-4">Ready to Get Protected?</h2>
          <p className="text-navy-600 mb-8">Speak with a MARRIUM Insurance specialist today and get your free, personalized quote.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-700 hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </Layout>
  );
}
