import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from '../ui/FloatingContact';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-cream-50">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
