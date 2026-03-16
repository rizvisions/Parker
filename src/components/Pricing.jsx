const included = [
  'Unlimited usage',
  'Unlimited team members',
  'Full Meta ad account analysis',
  'Upload and chat with all your reviews and ad comments',
  'Track any ad account (competitors, inspo brands, etc.)',
  'Surface TikTok trends in your niche',
  'Creative research on autopilot',
  'Brand profile + personas built for you',
  'Performance dashboard + custom reports',
  'Idea bank to save your best concepts',
  'Dedicated Slack channel',
]

const plans = [
  {
    name: 'Starter',
    price: '$299',
    description: 'For brands spending up to $100K/mo on Meta ads',
    cta: 'Get Starter',
    borderColor: '#111',
    btnBg: '#111',
    btnText: 'white',
  },
  {
    name: 'Growth',
    price: '$499',
    description: 'For brands spending up to $500K/mo on Meta ads',
    cta: 'Get Growth',
    borderColor: '#E8B84B',
    btnBg: '#E8B84B',
    btnText: '#111',
  },
  {
    name: 'Scale',
    price: '$699',
    description: 'For brands spending up to $2M/mo on Meta ads',
    cta: 'Get Scale',
    borderColor: '#7C77BD',
    btnBg: '#7C77BD',
    btnText: 'white',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-8" style={{ background: '#2B4A2B' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <div className="sticky-note mb-1" style={{ transform: 'rotate(-1deg)', display: 'block', fontSize: '2.2rem' }}>
              Plans built for
            </div>
            <div className="sticky-note" style={{ transform: 'rotate(0.3deg)', display: 'block', fontSize: '2.2rem', marginTop: '-4px' }}>
              <span className="text-parker">brands</span> and <span className="text-parker">agencies.</span>
            </div>
          </div>
          <div className="max-w-xs text-right mt-4">
            <p className="font-inter text-cream text-base leading-relaxed">
              Every plan includes the full Parker experience. Pick the tier that matches your ad spend.
            </p>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* What's Included */}
          <div className="bg-white border-2 border-black rounded-2xl p-8">
            <h3 className="font-playfair font-bold text-3xl text-black mb-6">What's Included</h3>
            <ul className="space-y-3">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing cards */}
          <div className="flex flex-col gap-4">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6"
                style={{ border: `2px solid ${plan.borderColor}` }}
              >
                <h4 className="font-playfair font-bold text-2xl text-black mb-1">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-playfair font-black text-4xl text-black">{plan.price}</span>
                  <span className="font-inter text-gray-500 text-sm">/month</span>
                </div>
                <div className="border-t border-dashed border-gray-300 my-3"></div>
                <p className="font-inter text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="border-t border-dashed border-gray-300 my-3"></div>
                <button
                  className="w-full py-3 rounded-xl font-inter font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ background: plan.btnBg, color: plan.btnText }}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Agency / Enterprise */}
        <div className="border-2 border-dashed border-white/40 rounded-2xl p-10 text-center max-w-xl mx-auto">
          <h3 className="font-playfair font-bold text-3xl text-white mb-3">Agency or Enterprise?</h3>
          <p className="font-inter text-cream/80 text-base mb-6">Let's talk through pricing that fits your needs.</p>
          <button className="bg-black text-white font-inter font-semibold px-8 py-4 rounded-2xl hover:bg-gray-800 transition-colors">
            Book a Discovery Call
          </button>
        </div>
      </div>
    </section>
  )
}
