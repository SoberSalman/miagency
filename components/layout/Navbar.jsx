import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Menu, X, ChevronDown,
  Car, Home, Shield, Building2, Umbrella, Key,
  UtensilsCrossed, Hotel, HardHat, Truck, Briefcase,
  Scale, Globe, Users, Zap, PhoneCall,
} from 'lucide-react';

const personalItems = [
  { label: 'Auto Insurance',       icon: Car,       href: '/personal' },
  { label: 'Homeowners Insurance', icon: Home,      href: '/personal' },
  { label: 'Umbrella Coverage',    icon: Umbrella,  href: '/personal' },
  { label: 'High-Value Homes',     icon: Building2, href: '/personal' },
  { label: 'Landlord Policy',      icon: Key,       href: '/personal' },
  { label: 'Renters Insurance',    icon: Shield,    href: '/personal' },
];

const businessItems = [
  { label: 'Restaurant',             icon: UtensilsCrossed, href: '/business' },
  { label: 'Hospitality',            icon: Hotel,           href: '/business' },
  { label: 'Contractors & Trades',   icon: HardHat,         href: '/business' },
  { label: 'Commercial Property',    icon: Building2,       href: '/business' },
  { label: 'Professional Liability', icon: Briefcase,       href: '/business' },
  { label: 'Commercial Auto & Fleet',icon: Truck,           href: '/business' },
  { label: 'Specialty Risk',         icon: Globe,           href: '/business' },
  { label: 'Umbrella Coverage',      icon: Umbrella,        href: '/business' },
  { label: 'EPL',                    icon: Scale,           href: '/business' },
  { label: 'Cybersecurity',          icon: Zap,             href: '/business' },
  { label: 'Workers Compensation',   icon: Users,           href: '/business' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen]           = useState(false);
  const [personalOpen, setPersonalOpen]       = useState(false);
  const [businessOpen, setBusinessOpen]       = useState(false);
  const [mobilePersonalOpen, setMobilePersonalOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);
  const [scrolled, setScrolled]               = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setPersonalOpen(false);
    setBusinessOpen(false);
  }, [router.pathname]);

  const isActive = (href) => router.pathname === href;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-navy-900 shadow-2xl shadow-black/40' : 'bg-transparent'}`}>
      {/* Gold hairline at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.jpg" alt="MARRIUM Insurance" className="h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">

            <Link
              href="/"
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive('/') ? 'text-gold-400' : 'text-cream-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
              {isActive('/') && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400" />}
            </Link>

            {/* Personal Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPersonalOpen(true)}
              onMouseLeave={() => setPersonalOpen(false)}
            >
              <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                router.pathname.startsWith('/personal') ? 'text-gold-400' : 'text-cream-200 hover:text-white hover:bg-white/5'
              }`}>
                Personal
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${personalOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown panel */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 transition-all duration-200 origin-top ${
                personalOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
              }`}>
                {/* Arrow */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-navy-800 border-l border-t border-gold-500/30 rotate-45" />
                <div className="bg-navy-800 border border-gold-500/20 rounded-2xl shadow-2xl overflow-hidden mt-1">
                  <div className="px-4 py-3 border-b border-white/5">
                    <Link href="/personal" className="flex items-center justify-between group">
                      <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">Personal Insurance</span>
                      <span className="text-gold-500/60 group-hover:text-gold-400 transition-colors text-xs">View All →</span>
                    </Link>
                  </div>
                  <div className="py-2">
                    {personalItems.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.label}
                          href={s.href}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-navy-900/60 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600/20 transition-colors">
                            <Icon className="w-3.5 h-3.5 text-gold-400/70 group-hover:text-gold-400 transition-colors" />
                          </div>
                          <span className="text-sm text-cream-200 group-hover:text-white transition-colors">{s.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Business Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setBusinessOpen(true)}
              onMouseLeave={() => setBusinessOpen(false)}
            >
              <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                router.pathname.startsWith('/business') ? 'text-gold-400' : 'text-cream-200 hover:text-white hover:bg-white/5'
              }`}>
                Business
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${businessOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown panel — two columns for 11 items */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[480px] transition-all duration-200 origin-top ${
                businessOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
              }`}>
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-navy-800 border-l border-t border-gold-500/30 rotate-45" />
                <div className="bg-navy-800 border border-gold-500/20 rounded-2xl shadow-2xl overflow-hidden mt-1">
                  <div className="px-4 py-3 border-b border-white/5">
                    <Link href="/business" className="flex items-center justify-between group">
                      <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">Business Insurance</span>
                      <span className="text-gold-500/60 group-hover:text-gold-400 transition-colors text-xs">View All →</span>
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-0 py-2">
                    {businessItems.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.label}
                          href={s.href}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors group"
                        >
                          <div className="w-7 h-7 rounded-lg bg-navy-900/60 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600/20 transition-colors">
                            <Icon className="w-3.5 h-3.5 text-gold-400/70 group-hover:text-gold-400 transition-colors" />
                          </div>
                          <span className="text-sm text-cream-200 group-hover:text-white transition-colors">{s.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive('/about') ? 'text-gold-400' : 'text-cream-200 hover:text-white hover:bg-white/5'
              }`}
            >
              About
              {isActive('/about') && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400" />}
            </Link>

            <Link
              href="/contact"
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive('/contact') ? 'text-gold-400' : 'text-cream-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
              {isActive('/contact') && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400" />}
            </Link>

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-3 flex items-center gap-2 px-5 py-2.5 bg-gold-600 hover:bg-gold-500 text-white text-sm font-semibold rounded-lg transition-all hover:-translate-y-0.5 shadow-lg shadow-gold-900/30"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-cream-200 hover:text-white hover:bg-white/10 rounded-lg transition"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-900 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link href="/" className="block px-4 py-3 text-cream-100 hover:bg-white/5 rounded-lg font-medium">Home</Link>

            {/* Personal mobile */}
            <div>
              <button
                onClick={() => setMobilePersonalOpen(!mobilePersonalOpen)}
                className="w-full flex justify-between items-center px-4 py-3 text-cream-100 hover:bg-white/5 rounded-lg font-medium"
              >
                Personal Insurance
                <ChevronDown className={`w-4 h-4 transition-transform ${mobilePersonalOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobilePersonalOpen && (
                <div className="ml-4 border-l-2 border-gold-500/40 pl-4 mt-1 space-y-1">
                  <Link href="/personal" className="block px-3 py-2 text-gold-400 text-sm font-bold hover:bg-white/5 rounded-lg">All Personal Coverage →</Link>
                  {personalItems.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link key={s.label} href={s.href} className="flex items-center gap-2 px-3 py-2 text-cream-300 hover:text-white text-sm rounded-lg hover:bg-white/5">
                        <Icon className="w-3.5 h-3.5 text-gold-500/60" />
                        {s.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Business mobile */}
            <div>
              <button
                onClick={() => setMobileBusinessOpen(!mobileBusinessOpen)}
                className="w-full flex justify-between items-center px-4 py-3 text-cream-100 hover:bg-white/5 rounded-lg font-medium"
              >
                Business Insurance
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileBusinessOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileBusinessOpen && (
                <div className="ml-4 border-l-2 border-gold-500/40 pl-4 mt-1 space-y-1">
                  <Link href="/business" className="block px-3 py-2 text-gold-400 text-sm font-bold hover:bg-white/5 rounded-lg">All Business Coverage →</Link>
                  {businessItems.map((s) => {
                    const Icon = s.icon;
                    return (
                      <Link key={s.label} href={s.href} className="flex items-center gap-2 px-3 py-2 text-cream-300 hover:text-white text-sm rounded-lg hover:bg-white/5">
                        <Icon className="w-3.5 h-3.5 text-gold-500/60" />
                        {s.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link href="/about" className="block px-4 py-3 text-cream-100 hover:bg-white/5 rounded-lg font-medium">About</Link>
            <Link href="/contact" className="block px-4 py-3 text-cream-100 hover:bg-white/5 rounded-lg font-medium">Contact</Link>
            <Link href="/contact" className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-gold-600 text-white text-center rounded-lg font-semibold">
              <PhoneCall className="w-4 h-4" />
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
