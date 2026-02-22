const clients = [
  { name: "Church's Chicken",     src: '/clients-svg/churchs-chicken.svg',      href: 'https://www.churchs.com' },
  { name: 'Great American Cookies', src: '/clients-svg/great-america-cookies.svg', href: 'https://www.greatamericancookies.com' },
  { name: 'IHOP',                 src: '/clients-svg/ihop.svg',                  href: 'https://www.ihop.com' },
  { name: 'Marble Slab Creamery', src: '/clients-svg/marble-slab.svg',           href: 'https://www.marbleslab.com' },
  { name: 'Panera Bread',         src: '/clients-svg/panera.svg',                href: 'https://www.panerabread.com' },
  { name: 'Subway',               src: '/clients-svg/subway.svg',                href: 'https://www.subway.com' },
  { name: 'USPS',                 src: '/clients-svg/usps.svg',                  href: 'https://www.usps.com' },
];

const track = [...clients, ...clients, ...clients, ...clients];

export default function ClientStrip() {
  return (
    <div className="bg-white border-y border-cream-200 py-10 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <p className="text-center text-xs font-medium tracking-widest uppercase text-navy-400 mb-8">
        Trusted by businesses across industries
      </p>

      <div className="marquee-track">
        <div className="flex items-center gap-20 px-10 inline-flex">
          {track.map((c, i) => (
            <a
              key={`a-${i}`}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              title={c.name}
              className="flex-shrink-0 h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img src={c.src} alt={c.name} className="h-full w-auto object-contain max-w-[180px]" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-20 px-10 inline-flex" aria-hidden="true">
          {track.map((c, i) => (
            <a
              key={`b-${i}`}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              title={c.name}
              className="flex-shrink-0 h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <img src={c.src} alt={c.name} className="h-full w-auto object-contain max-w-[180px]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
