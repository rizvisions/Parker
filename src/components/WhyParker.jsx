export default function WhyParker() {
  return (
    <section id="why-parker" className="bg-cream py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <div className="sticky-note mb-1" style={{ transform: 'rotate(-1deg)', display: 'block', fontSize: '2.5rem' }}>
              Creative strategy,
            </div>
            <div className="sticky-note" style={{ transform: 'rotate(0.3deg)', display: 'block', fontSize: '2.5rem', marginTop: '-4px' }}>
              before and after <span className="text-parker">Parker.</span>
            </div>
          </div>
          <div className="dashed-border-box max-w-xs bg-cream/50 ml-auto mt-4">
            <p className="font-inter text-black text-base">First, Parker learns everything about your brand</p>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-2 gap-6">
          {/* Old way */}
          <div className="bg-white border-2 border-black rounded-2xl p-8">
            <h3 className="font-playfair font-bold text-3xl text-black mb-8">Old way</h3>
            <div className="flex flex-col gap-3">
              {[
                'Open tabs. TikTok. Reddit. Ad Library. Reviews.',
                'Guessing which ideas will actually convert',
                'Writing briefs from scratch',
                'More clients = more chaos',
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-cream border border-gray-200 rounded-xl px-4 py-3 font-inter text-black text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* New way */}
          <div className="border-2 border-black rounded-2xl p-8" style={{ background: '#6DBF6A' }}>
            <h3 className="font-playfair font-bold text-3xl text-black mb-8">New way</h3>
            <div className="flex flex-col gap-3 mb-8">
              {[
                'Parker watches TikTok, Reddit, and competitor ads for you',
                'Parker tells you what ad ideas to run',
                'Have Parker write your scripts, headlines, briefs',
                'Tell Parker to create ANY report and he will',
              ].map((item, i) => (
                <div
                  key={i}
                  className="border-2 border-black rounded-xl px-4 py-3 font-inter text-black text-sm font-medium"
                  style={{ background: 'rgba(30,60,30,0.85)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Parker chat */}
            <div className="flex items-start gap-4">
              {/* Parker avatar */}
              <div className="w-14 h-14 rounded-full bg-cream border-2 border-black flex-shrink-0 overflow-hidden">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="28" cy="28" r="28" fill="#F5F0E8"/>
                  {/* Hair */}
                  <ellipse cx="28" cy="18" rx="14" ry="10" fill="#111"/>
                  {/* Face */}
                  <ellipse cx="28" cy="30" rx="14" ry="16" fill="#F5F0E8"/>
                  {/* Eyes */}
                  <circle cx="23" cy="27" r="3" fill="#111"/>
                  <circle cx="33" cy="27" r="3" fill="#111"/>
                  <circle cx="24" cy="26" r="1.2" fill="white"/>
                  <circle cx="34" cy="26" r="1.2" fill="white"/>
                  {/* Mustache */}
                  <path d="M20 36 Q24 39 28 37 Q32 39 36 36" fill="#111"/>
                  <path d="M20 36 Q24 33 28 34 Q32 33 36 36" fill="#111"/>
                  {/* Ears */}
                  <ellipse cx="14" cy="30" rx="3" ry="4" fill="#F5F0E8" stroke="#111" strokeWidth="1.5"/>
                  <ellipse cx="42" cy="30" rx="3" ry="4" fill="#F5F0E8" stroke="#111" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-playfair font-bold text-black text-lg mb-2">Good evening, Alex.</p>
                <div className="bg-white/90 rounded-2xl border border-gray-200 px-4 py-3 flex items-center gap-3">
                  <span className="font-inter text-gray-400 text-sm flex-1">How can I help you today?</span>
                  <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
