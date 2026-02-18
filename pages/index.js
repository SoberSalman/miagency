import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyUs from '../components/home/WhyUs';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>MARRIUM Insurance — Auto, Home, Restaurant & Hotel Coverage | San Antonio, TX</title>
        <meta name="description" content="MARRIUM Insurance offers comprehensive auto, home, restaurant, and hotel insurance in San Antonio, TX. Get a free quote today from licensed specialists." />
        <meta name="keywords" content="insurance San Antonio, auto insurance, home insurance, restaurant insurance, hotel insurance, Texas" />
        <meta property="og:title" content="MARRIUM Insurance — Professional Coverage in San Antonio" />
        <meta property="og:description" content="Trusted insurance specialists for auto, home, restaurants, and hotels. Get your free quote today." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'InsuranceAgency',
          name: 'MARRIUM Insurance',
          description: 'Auto, Home, Restaurant and Hotel Insurance Specialist in San Antonio, TX',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '9502 Computer Dr #216',
            addressLocality: 'San Antonio',
            addressRegion: 'TX',
            postalCode: '78229',
            addressCountry: 'US',
          },
          url: 'https://marriuminsurance.com',
          areaServed: 'San Antonio, TX',
        })}</script>
      </Head>
      <Hero />
      <ServicesOverview />
      <WhyUs />
    </Layout>
  );
}
