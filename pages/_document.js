import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="description" content="MIAGENCY - Professional insurance solutions for auto, home, life, and business coverage. Get your free quote today." />
        <meta name="keywords" content="insurance, auto insurance, home insurance, life insurance, business insurance" />
        <meta name="theme-color" content="#0d9488" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="MIAGENCY" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
