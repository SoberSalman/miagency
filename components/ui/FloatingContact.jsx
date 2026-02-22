import { useState, useEffect } from 'react';
import { PhoneIcon, X } from 'lucide-react';

const PHONE = '+12108005910';
const PHONE_DISPLAY = '+1 (210) 800-5910';

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 320 && !dismissed) setVisible(true);
      else if (window.scrollY <= 320) setVisible(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <div className="flex items-center gap-3 bg-navy-900 border border-gold-500/30 rounded-2xl shadow-2xl px-4 py-3">
        {/* Pulse indicator */}
        <div className="relative flex-shrink-0">
          <div className="w-9 h-9 bg-gold-600 rounded-xl flex items-center justify-center">
            <PhoneIcon className="w-4 h-4 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-navy-900" />
        </div>

        <div>
          <p className="text-cream-200 text-xs mb-0.5">Call or Text Anytime</p>
          <a
            href={`tel:${PHONE}`}
            className="text-white font-semibold text-sm hover:text-gold-400 transition-colors"
          >
            {PHONE_DISPLAY}
          </a>
        </div>

        <button
          onClick={() => { setDismissed(true); setVisible(false); }}
          className="ml-1 p-1.5 text-navy-400 hover:text-cream-200 transition-colors flex-shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
