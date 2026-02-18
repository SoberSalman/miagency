import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = [
  { label: 'Auto Insurance', href: '/services/auto' },
  { label: 'Home Insurance', href: '/services/home-insurance' },
  { label: 'Restaurant Insurance', href: '/services/restaurant' },
  { label: 'Hotel Insurance', href: '/services/hotel' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [router.pathname]);

  const isActive = (href) => router.pathname === href;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-lg border-b border-gold-300' : 'border-b border-cream-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="MARRIUM Insurance" className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-gold-700' : 'text-navy-700 hover:text-gold-700'}`}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${router.pathname.startsWith('/services') ? 'text-gold-700' : 'text-navy-700 hover:text-gold-700'}`}>
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gold-200 rounded-xl shadow-xl py-2 z-50">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={`block px-4 py-3 text-sm transition-colors ${isActive(s.href) ? 'text-gold-700 bg-cream-50 font-medium' : 'text-navy-700 hover:bg-cream-50 hover:text-gold-700'}`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-gold-700' : 'text-navy-700 hover:text-gold-700'}`}>
              About
            </Link>

            <Link href="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-gold-700' : 'text-navy-700 hover:text-gold-700'}`}>
              Contact
            </Link>

            <Link href="/contact" className="px-6 py-2.5 bg-navy-800 hover:bg-gold-700 text-white text-sm font-medium rounded-lg transition-colors">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-navy-700 hover:bg-cream-100 rounded-lg transition"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-cream-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link href="/" className="block px-4 py-3 text-navy-700 hover:bg-cream-50 rounded-lg font-medium">Home</Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex justify-between items-center px-4 py-3 text-navy-700 hover:bg-cream-50 rounded-lg font-medium"
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="ml-4 border-l-2 border-gold-300 pl-4 mt-1 space-y-1">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-3 py-2.5 text-navy-600 hover:text-gold-700 text-sm font-medium rounded-lg hover:bg-cream-50">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="block px-4 py-3 text-navy-700 hover:bg-cream-50 rounded-lg font-medium">About</Link>
            <Link href="/contact" className="block px-4 py-3 text-navy-700 hover:bg-cream-50 rounded-lg font-medium">Contact</Link>
            <Link href="/contact" className="block mt-2 px-4 py-3 bg-navy-800 text-white text-center rounded-lg font-medium">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
