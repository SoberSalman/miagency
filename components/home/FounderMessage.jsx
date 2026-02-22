import useInView from '../../hooks/useInView';

export default function FounderMessage() {
  const [ref, inView] = useInView();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Gold wash — right side only, subtle */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-50/70 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-gold-300/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-gold-300/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <div ref={ref} className={`reveal text-center mb-14 ${inView ? 'visible' : ''}`}>
          <p className="text-gold-700 font-semibold tracking-widest text-xl uppercase">A Message from Our Founder</p>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Portrait */}
          <div className={`reveal-left ${inView ? 'visible' : ''} flex-shrink-0 flex flex-col items-center`}>
            {/* Photo frame */}
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-[2rem] border border-gold-200/60" />
              <div className="absolute -inset-8 rounded-[2.5rem] border border-gold-100/40" />
              {/* Photo */}
              <div className="relative w-64 h-[22rem] rounded-[1.5rem] overflow-hidden shadow-2xl">
                <img
                  src="/My_Photo.jpeg"
                  alt="Marrium Sohail — Founder, MARRIUM Insurance"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
              </div>
            </div>
            {/* Name below photo */}
            <div className="mt-8 text-center">
              <p className="font-display text-xl font-bold text-navy-900">Marrium Sohail</p>
              <p className="text-gold-700 text-sm tracking-widest uppercase mt-1">Founder &amp; Principal Agent</p>
            </div>
          </div>

          {/* Quote block */}
          <div className={`reveal-right ${inView ? 'visible' : ''} flex-1 max-w-xl`}>
            {/* Giant opening quote mark */}
            <div
              className="font-display text-[8rem] text-gold-300/50 leading-none -mb-10 select-none"
              aria-hidden="true"
            >&ldquo;</div>

            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p className="text-navy-800 text-2xl font-display font-bold leading-snug">
                I started MARRIUM Insurance because I believed people deserved more than a policy in the mail.
              </p>
              <p>
                They deserved someone who actually understood their life — their home, their business, the things they&apos;ve spent years building.
              </p>
              <p>
                Whether you&apos;re a homeowner, a restaurant owner across three states, or a contractor building something from the ground up — we are here to make sure you&apos;re protected the right way.
              </p>
            </div>

            {/* Closing statement */}
            <div className="mt-7 pl-5 border-l-2 border-gold-400">
              <p className="font-display text-xl italic text-navy-900">
                &ldquo;We don&apos;t just sell policies. We build relationships — on trust, clarity, and genuine care.&rdquo;
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-px bg-gold-400" />
              <p className="font-display text-base italic text-navy-700">Marrium Sohail</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
