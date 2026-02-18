import Head from 'next/head';
import MiagencyLanding from '../components/landing-page';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    name: 'MARRIUM Insurance',
    description: 'MARRIUM Insurance - Affordable auto insurance with fast claims, 24/7 support, and personalized service. We\'ve got you covered!',
    url: 'https://marriuminsurance.com',
    telephone: '+1-YOUR-PHONE-NUMBER',
    email: 'info@marriuminsurance.com',
    areaServed: 'US',
    priceRange: '$$',
    knowsAbout: [
      'Auto Insurance',
      'Comprehensive Coverage',
      'Liability Insurance',
      'Collision Insurance'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '500',
      bestRating: '5',
      worstRating: '1'
    },
  };

  return (
    <>
      <Head>
        <title>MARRIUM Insurance - Affordable Auto Insurance with 24/7 Support</title>
        <meta
          name="description"
          content="MARRIUM Insurance offers affordable auto insurance with fast claims, competitive rates, and 24/7 customer support. Get your free quote today - we've got you covered!"
        />
        <meta
          name="keywords"
          content="auto insurance, car insurance, affordable insurance, quick quotes, 24/7 support, collision coverage"
        />
        <meta property="og:title" content="MARRIUM Insurance - We've Got You Covered" />
        <meta
          property="og:description"
          content="Get affordable auto insurance with fast claims and 24/7 support from MARRIUM Insurance. Your trusted local insurance agent."
        />
        <meta property="og:url" content="https://marriuminsurance.com" />
        <meta property="og:image" content="https://marriuminsurance.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MARRIUM Insurance - Affordable Auto Coverage" />
        <meta
          name="twitter:description"
          content="Fast quotes, competitive rates, and exceptional service. Get covered with MARRIUM Insurance."
        />
        <meta name="twitter:image" content="https://marriuminsurance.com/og-image.jpg" />
        <meta name="canonical" content="https://marriuminsurance.com" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MARRIUM Insurance" />
        <meta name="copyright" content="© 2024 MARRIUM Insurance" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>

      <MiagencyLanding />
    </>
  );
}
