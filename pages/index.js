import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import ClientStrip from '../components/home/ClientStrip';
import ServicesOverview from '../components/home/ServicesOverview';
import FounderMessage from '../components/home/FounderMessage';
import CoverageScope from '../components/home/CoverageScope';
import ProtectionAssessment from '../components/home/ProtectionAssessment';
import Testimonials from '../components/home/Testimonials';
import WhyUs from '../components/home/WhyUs';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>MARRIUM Insurance — Nationwide Personal &amp; Commercial Coverage</title>
        <meta name="description" content="MARRIUM Insurance is a nationwide insurance agency serving clients across multiple states. Personal auto, homeowners, and full commercial coverage — if it needs protection, we insure it." />
        <meta name="keywords" content="nationwide insurance, commercial insurance, personal insurance, auto insurance, homeowners insurance, restaurant insurance, contractors insurance, business insurance" />
        <meta property="og:title" content="MARRIUM Insurance — Nationwide Risk Partner" />
        <meta property="og:description" content="From personal auto to commercial empires — we protect what matters most. Nationwide coverage, strategic protection." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'InsuranceAgency',
          name: 'MARRIUM Insurance',
          description: 'Nationwide personal and commercial insurance agency serving clients across multiple states.',
          telephone: '+12108005910',
          email: 'info@marriuminsurance.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '9502 Computer Dr #216',
            addressLocality: 'San Antonio',
            addressRegion: 'TX',
            postalCode: '78229',
            addressCountry: 'US',
          },
          url: 'https://marriuminsurance.com',
          areaServed: 'United States',
          founder: { '@type': 'Person', name: 'Marrium Sohail' },
        })}</script>
      </Head>

      {/* 1 — navy */}
      <Hero />

      {/* Client trust strip */}
      <ClientStrip />

      {/* 2 — cream */}
      <ServicesOverview />

      {/* 3 — warm cream: human face early = trust */}
      <FounderMessage />

      {/* 4 — navy: scale & scope */}
      <CoverageScope />

      {/* 5 — white: interactive engagement */}
      <ProtectionAssessment />

      {/* 6 — cream: social proof */}
      <Testimonials />

      {/* 7 — navy: final commitment + CTA */}
      <WhyUs />
    </Layout>
  );
}
