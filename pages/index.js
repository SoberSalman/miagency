import Head from 'next/head';
import MiagencyLanding from '../landing-page';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'MIAGENCY',
    description: 'Professional insurance solutions for auto, home, life, and business coverage.',
    url: 'https://miagency.com',
    telephone: '1-800-MIAGENCY',
    email: 'hello@miagency.com',
    areaServed: 'US',
    priceRange: '$$',
    knowsAbout: [
      'Auto Insurance',
      'Home Insurance',
      'Life Insurance',
      'Business Insurance'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '500',
      bestRating: '5',
      worstRating: '1'
    },
  };

  return (
    <>
      <Head>
        <title>MIAGENCY - Professional Insurance Solutions | Auto, Home, Life & Business</title>
        <meta
          name="description"
          content="Get comprehensive insurance coverage with MIAGENCY. Expert solutions for auto, home, life, and business insurance. Fast quotes, 24/7 support, and competitive rates."
        />
        <meta
          name="keywords"
          content="insurance, auto insurance, home insurance, life insurance, business insurance, quotes"
        />
        <meta property="og:title" content="MIAGENCY - Professional Insurance Solutions" />
        <meta
          property="og:description"
          content="Get comprehensive insurance coverage with MIAGENCY. Expert solutions for auto, home, life, and business insurance."
        />
        <meta property="og:url" content="https://miagency.com" />
        <meta property="og:image" content="https://miagency.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MIAGENCY - Professional Insurance Solutions" />
        <meta
          name="twitter:description"
          content="Get comprehensive insurance coverage with MIAGENCY."
        />
        <meta name="twitter:image" content="https://miagency.com/og-image.jpg" />
        <meta name="canonical" content="https://miagency.com" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MIAGENCY" />
        <meta name="copyright" content="© 2024 MIAGENCY" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>

      <MiagencyLanding />
    </>
  );
}
