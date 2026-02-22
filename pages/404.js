import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title>Page Not Found — MARRIUM Insurance</title>
      </Head>
      <section className="min-h-[60vh] flex items-center justify-center bg-white">
        <div className="text-center space-y-6 px-4">
          <div className="font-display text-8xl font-bold text-navy-100">404</div>
          <h1 className="font-display text-3xl font-bold text-navy-900">Page Not Found</h1>
          <p className="text-navy-500 max-w-sm mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-gold-700 text-white font-medium rounded-lg transition-colors">
            Back to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
}
