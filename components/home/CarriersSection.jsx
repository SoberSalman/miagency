import { Shield } from 'lucide-react';

const carriers = [
  { name: 'AIG',                src: '/partners-svg/aig.svg',            href: 'https://www.aig.com' },
  { name: 'AmTrust',            src: '/partners-svg/amtrust.svg',        href: 'https://amtrustfinancial.com' },
  { name: 'Berkshire Hathaway', src: '/partners-svg/berkshire.svg',      href: 'https://www.berkshirehathaway.com' },
  { name: 'CHUBB',              src: '/partners-svg/chubb.svg',          href: 'https://www.chubb.com' },
  { name: 'CNA',                src: '/partners-svg/cna.svg',            href: 'https://www.cna.com' },
  { name: 'Captapco',           src: '/partners-svg/captapco.svg',       href: 'https://www.captive.com' },
  { name: 'The Hanover',        src: '/partners-svg/hanover.svg',        href: 'https://www.hanover.com' },
  { name: 'Nationwide',         src: '/partners-svg/nationwide.svg',     href: 'https://www.nationwide.com' },
  { name: 'Progressive',        src: '/partners-svg/progressive.svg',    href: 'https://www.progressive.com' },
  { name: 'RPS',                src: '/partners-svg/rps.svg',            href: 'https://www.rpsins.com' },
  { name: 'SageSure',           src: '/partners-svg/sagesure.svg',       href: 'https://sagesure.com' },
  { name: 'Three Insurance',    src: '/partners-svg/three-insurance.svg',href: 'https://www.three.com' },
  { name: 'Travelers',          src: '/partners-svg/travelers.svg',      href: 'https://www.travelers.com' },
];

export default function CarriersSection() {
  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gold-500 opacity-[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-5">
            <Shield className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-gold-300 text-xs font-medium tracking-widest uppercase">Carrier Partners</span>
          </div>
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Backed by the Industry&apos;s Best
          </h2>
          <p className="text-cream-300 text-base max-w-xl mx-auto leading-relaxed">
            We work with the nation&apos;s most trusted insurance carriers, so you get the best coverage at the most competitive rates.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {carriers.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${c.name}`}
              className="group flex flex-col items-center justify-center gap-3 p-6 bg-navy-800/50 border border-white/5 rounded-2xl hover:border-gold-500/40 hover:bg-navy-800 transition-all duration-300 cursor-pointer"
            >
              <img
                src={c.src}
                alt={c.name}
                className="h-10 w-auto object-contain max-w-[120px] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="text-cream-400 group-hover:text-white text-xs tracking-wide transition-colors duration-300 text-center font-medium">
                {c.name}
              </span>
            </a>
          ))}
        </div>

        <p className="text-center text-cream-300 text-xs mt-10 tracking-wide">
          Access to 50+ carriers. We shop the market so you don&apos;t have to.
        </p>
      </div>
    </section>
  );
}
