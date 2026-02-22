import { useState } from 'react';
import Link from 'next/link';
import useInView from '../../hooks/useInView';
import { ArrowRight, ChevronRight, RotateCcw } from 'lucide-react';

const steps = [
  {
    id: 1,
    question: "What are you looking to protect?",
    sub: "This helps us point you to the right coverage category.",
    options: [
      { label: 'My Home & Family', value: 'personal', icon: '🏠' },
      { label: 'My Business', value: 'business', icon: '🏢' },
      { label: 'Both', value: 'both', icon: '🛡️' },
    ],
  },
  {
    id: 2,
    question: "Which best describes your situation?",
    sub: "Choose the one that fits most closely.",
    options: {
      personal: [
        { label: 'I own my home', value: 'homeowner', icon: '🔑' },
        { label: 'I rent my home', value: 'renter', icon: '🏙️' },
        { label: 'I own rental properties', value: 'landlord', icon: '🏘️' },
        { label: 'I have a high-value property', value: 'highvalue', icon: '✨' },
      ],
      business: [
        { label: 'Restaurant or food service', value: 'restaurant', icon: '🍽️' },
        { label: 'Contractor or trade', value: 'contractor', icon: '🔧' },
        { label: 'Hospitality or hotel', value: 'hospitality', icon: '🏨' },
        { label: 'Professional services or other', value: 'professional', icon: '💼' },
      ],
      both: [
        { label: 'Home + small business', value: 'homebiz', icon: '🏠' },
        { label: 'Multiple properties + commercial', value: 'multi', icon: '🏢' },
        { label: 'Personal umbrella + business', value: 'umbrella', icon: '☂️' },
        { label: 'Not sure yet', value: 'notsure', icon: '🤔' },
      ],
    },
  },
  {
    id: 3,
    question: "What's your biggest concern right now?",
    sub: "We'll make sure this is addressed first.",
    options: [
      { label: 'I may not be fully covered', value: 'coverage', icon: '⚠️' },
      { label: 'I\'m paying too much', value: 'cost', icon: '💰' },
      { label: 'Starting coverage from scratch', value: 'new', icon: '🆕' },
      { label: 'I want a second opinion', value: 'review', icon: '🔍' },
    ],
  },
];

const results = {
  coverage: {
    heading: 'You likely have coverage gaps.',
    body: 'Many people don\'t discover gaps until they file a claim, and by then it\'s too late. A 15-minute conversation with one of our specialists can identify exactly where you\'re exposed and how to close it.',
    cta: 'Find My Gaps',
    tab: 'personal',
  },
  cost: {
    heading: 'You may be overpaying.',
    body: 'Most clients who come to us are either over-insured in the wrong areas or under-insured where it matters. We review your current coverage, compare carrier rates, and restructure only what needs changing.',
    cta: 'Review My Rates',
    tab: 'personal',
  },
  new: {
    heading: 'Let\'s build from the ground up.',
    body: 'Starting fresh is actually the best position to be in. We build your coverage the right way from day one, with no legacy gaps or inherited mistakes. Tell us what you\'re protecting and we\'ll take it from there.',
    cta: 'Start My Coverage',
    tab: 'personal',
  },
  review: {
    heading: 'A second opinion is always smart.',
    body: 'Bring us your current policy. We\'ll review it honestly, explain what\'s strong, what\'s weak, and what we\'d recommend, with no pressure to switch. Our job is to inform, not to sell.',
    cta: 'Request a Review',
    tab: 'personal',
  },
};

export default function ProtectionAssessment() {
  const [ref, inView] = useInView();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);
  const [selected, setSelected] = useState(null);

  const currentStep = steps.find(s => s.id === step);

  const getOptions = () => {
    if (step === 2 && typeof currentStep.options === 'object') {
      return currentStep.options[answers[1]] || currentStep.options.personal;
    }
    return currentStep.options;
  };

  const choose = (value) => {
    setSelected(value);
    setTimeout(() => {
      const newAnswers = { ...answers, [step]: value };
      setAnswers(newAnswers);
      setSelected(null);
      if (step === 3) {
        setDone(true);
      } else {
        setStep(step + 1);
      }
    }, 200);
  };

  const reset = () => {
    setStep(1);
    setAnswers({});
    setDone(false);
    setSelected(null);
  };

  const result = done ? (results[answers[3]] || results.coverage) : null;
  const formTab = answers[1] === 'business' ? 'business' : 'personal';

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Faint warm grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-12 reveal ${inView ? 'visible' : ''}`} ref={ref}>
          <p className="text-gold-700 font-medium tracking-widest text-xs uppercase mb-3">Quick Assessment</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900">
            Find Your Coverage<br />
            <span className="text-gold-600 italic">in 60 Seconds.</span>
          </h2>
          <div className="w-16 h-px bg-gold-500 mx-auto mt-5 mb-5" />
          <p className="text-navy-500 max-w-md mx-auto">
            Answer three quick questions and we&apos;ll tell you exactly where to start.
          </p>
        </div>

        {/* Card */}
        <div className="bg-cream-50 border border-cream-200 rounded-3xl shadow-xl overflow-hidden">

          {/* Progress bar */}
          {!done && (
            <div className="h-1 bg-cream-200">
              <div
                className="h-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-500"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
            </div>
          )}

          <div className="p-8 sm:p-12">

            {!done ? (
              <>
                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${s < step ? 'bg-gold-600 text-white' : s === step ? 'bg-navy-900 text-white' : 'bg-cream-200 text-navy-400'}`}>
                        {s < step ? '✓' : s}
                      </div>
                      {s < 3 && <div className={`w-8 h-px transition-colors ${s < step ? 'bg-gold-400' : 'bg-cream-300'}`} />}
                    </div>
                  ))}
                  <span className="ml-2 text-navy-400 text-sm">Step {step} of 3</span>
                </div>

                {/* Question */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
                  {currentStep.question}
                </h3>
                <p className="text-navy-500 text-sm mb-8">{currentStep.sub}</p>

                {/* Options */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {getOptions().map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => choose(opt.value)}
                      className={`group text-left flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-200 ${selected === opt.value ? 'border-gold-500 bg-gold-50 scale-[0.98]' : 'border-cream-300 bg-white hover:border-gold-400 hover:shadow-md hover:-translate-y-0.5'}`}
                    >
                      <span className="text-2xl flex-shrink-0">{opt.icon}</span>
                      <span className="font-medium text-navy-800 group-hover:text-navy-900 text-sm">{opt.label}</span>
                      <ChevronRight className="w-4 h-4 text-navy-300 group-hover:text-gold-500 ml-auto flex-shrink-0 transition-colors" />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              /* Result */
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl">🎯</span>
                </div>

                <div>
                  <p className="text-gold-700 font-semibold text-sm uppercase tracking-widest mb-2">Our Recommendation</p>
                  <h3 className="font-display text-3xl font-bold text-navy-900 mb-4">{result.heading}</h3>
                  <p className="text-navy-600 leading-relaxed max-w-xl mx-auto">{result.body}</p>
                </div>

                <div className="w-16 h-px bg-gold-300 mx-auto" />

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href={`/contact?scroll=form&tab=${formTab}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 hover:bg-gold-700 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg"
                  >
                    {result.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={reset}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-cream-300 text-navy-600 hover:border-navy-400 font-medium rounded-xl transition-all text-sm"
                  >
                    <RotateCcw className="w-4 h-4" /> Start Over
                  </button>
                </div>

                <p className="text-navy-400 text-xs">
                  No obligation. No spam. Just honest guidance.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
