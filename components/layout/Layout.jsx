import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from '../ui/FloatingContact';

export default function Layout({ children }) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen font-sans bg-cream-50">
      <Navbar />
      {/* On non-home pages, offset content below the fixed navbar */}
      {!isHome && <div className="h-20" />}
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
