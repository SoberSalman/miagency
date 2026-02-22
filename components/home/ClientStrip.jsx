const clients = [
  { name: 'BMW',      src: '/Clients/bmw.jpeg'      },
  { name: 'IHOP',     src: '/Clients/IHOP.png'      },
  { name: 'Mercedes', src: '/Clients/Mercedes.jpeg' },
];

// Repeat enough so each half is wider than any screen
const half = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients];

export default function ClientStrip() {
  return (
    <div className="bg-white border-y border-cream-200 py-6 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Label */}
      <p className="text-center text-xs font-medium tracking-widest uppercase text-navy-400 mb-5">
        Trusted by businesses across industries
      </p>

      {/* Two identical halves — animate -50% for seamless loop */}
      <div className="marquee-track">
        {/* First half */}
        <div className="flex items-center gap-16 px-8 inline-flex">
          {half.map((c, i) => (
            <div key={`a-${i}`} className="flex-shrink-0 h-16 flex items-center justify-center">
              <img src={c.src} alt={c.name} className="h-full w-auto object-contain max-w-[160px]" />
            </div>
          ))}
        </div>
        {/* Second half — identical, seamless continuation */}
        <div className="flex items-center gap-16 px-8 inline-flex" aria-hidden="true">
          {half.map((c, i) => (
            <div key={`b-${i}`} className="flex-shrink-0 h-16 flex items-center justify-center">
              <img src={c.src} alt={c.name} className="h-full w-auto object-contain max-w-[160px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
