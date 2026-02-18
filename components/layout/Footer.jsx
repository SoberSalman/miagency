import Link from 'next/link';
import { PhoneIcon, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-cream-100">
      {/* Top Bar */}
      <div className="border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-10">

            {/* Brand */}
            <div className="space-y-4">
              <img src="/logo.jpg" alt="MARRIUM Insurance" className="h-14 w-auto brightness-0 invert" />
              <p className="text-sm leading-relaxed text-cream-200">
                Professional insurance solutions for individuals and businesses. Trusted expertise. Personalized service.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="https://www.facebook.com/marriuminsurance/" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full border border-navy-600 text-cream-200 hover:border-gold-400 hover:text-gold-400 transition">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/marrium_insurance_agency_/" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full border border-navy-600 text-cream-200 hover:border-gold-400 hover:text-gold-400 transition">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/marrium-sohail-a83255223/" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full border border-navy-600 text-cream-200 hover:border-gold-400 hover:text-gold-400 transition">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display text-lg text-white mb-5 tracking-wide">Our Services</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: 'Auto Insurance', href: '/services/auto' },
                  { label: 'Home Insurance', href: '/services/home-insurance' },
                  { label: 'Restaurant Insurance', href: '/services/restaurant' },
                  { label: 'Hotel Insurance', href: '/services/hotel' },
                ].map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="text-cream-200 hover:text-gold-400 transition">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display text-lg text-white mb-5 tracking-wide">Company</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Get a Quote', href: '/contact' },
                ].map((s) => (
                  <li key={s.href + s.label}>
                    <Link href={s.href} className="text-cream-200 hover:text-gold-400 transition">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-lg text-white mb-5 tracking-wide">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <PhoneIcon className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-cream-200">Your Phone Number</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-cream-200">info@marriuminsurance.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-cream-200">9502 Computer Dr #216,<br />San Antonio, TX 78229</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-cream-300">
        <p>&copy; {new Date().getFullYear()} MARRIUM Insurance. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-gold-400 transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gold-400 transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
