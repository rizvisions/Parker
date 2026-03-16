import { useState } from 'react'

const testimonials = [
  {
    quote: "Before Parker, our creative team was drowning in research. Reviews, TikTok, competitor ads — it never ended. Now Parker shows up every morning with angles we're missing, scripts we should test, and patterns we didn't see. It feels like hiring a senior creative strategist — without adding headcount.",
    name: 'Jordan Miller',
    title: 'Head of Growth, DTC Brand',
    subtitle: '($12M ARR)',
    stat: '37%',
    statLabel: 'increase in creative testing velocity',
  },
  {
    quote: "Parker has been a great addition. The most useful thing is brainstorming headline ideas from reviews or TikTok. I'd definitely recommend Parker to other brands.",
    name: 'Sarah Chen',
    title: 'Creative Director',
    subtitle: '($60M Brand)',
    stat: '52%',
    statLabel: 'reduction in research time per campaign',
  },
  {
    quote: "Parker makes finding our best customer reviews for static ad headlines as simple as sending a Slack message. We can't work without Parker.",
    name: 'Alex Thompson',
    title: 'Performance Marketing Lead',
    subtitle: '($30M ARR)',
    stat: '3x',
    statLabel: 'faster creative brief production',
  },
  {
    quote: "What impresses me most about Parker is its ability to handle real marketing complexity, not just surface-level tasks. Parker makes it insanely easy and the team ships new features almost every week.",
    name: 'Marcus Rivera',
    title: 'Head of Creative Strategy',
    subtitle: '(Agency, 40+ clients)',
    stat: '2x',
    statLabel: 'client capacity without extra hires',
  },
]

function ParkerAvatar({ color = '#E8B84B' }) {
  return (
    <svg viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background circle */}
      <circle cx="60" cy="65" r="60" fill={color}/>
      {/* Body */}
      <rect x="30" y="90" width="60" height="50" rx="6" fill="#F5F0E8"/>
      {/* Shirt collar */}
      <path d="M48 92 L60 104 L72 92" stroke="#111" strokeWidth="2" fill="none"/>
      {/* Head */}
      <ellipse cx="60" cy="60" rx="36" ry="42" fill="#F5F0E8"/>
      {/* Hair */}
      <ellipse cx="60" cy="24" rx="36" ry="18" fill="#111"/>
      {/* Side hair */}
      <path d="M24 42 Q20 30 28 22" stroke="#111" strokeWidth="3" fill="none"/>
      <path d="M96 42 Q100 30 92 22" stroke="#111" strokeWidth="3" fill="none"/>
      {/* Eyes */}
      <ellipse cx="48" cy="58" rx="6" ry="7" fill="#111"/>
      <ellipse cx="72" cy="58" rx="6" ry="7" fill="#111"/>
      <ellipse cx="49.5" cy="56" rx="2.5" ry="2.5" fill="white"/>
      <ellipse cx="73.5" cy="56" rx="2.5" ry="2.5" fill="white"/>
      {/* Smile */}
      <path d="M46 74 Q60 84 74 74" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Mustache */}
      <path d="M44 69 Q52 74 60 71 Q68 74 76 69" fill="#111"/>
      <path d="M44 69 Q52 64 60 66 Q68 64 76 69" fill="#111"/>
      {/* Ears */}
      <ellipse cx="24" cy="60" rx="6" ry="8" fill="#F5F0E8" stroke="#111" strokeWidth="2"/>
      <ellipse cx="96" cy="60" rx="6" ry="8" fill="#F5F0E8" stroke="#111" strokeWidth="2"/>
      {/* Thumbs up hand */}
      <path d="M80 100 Q88 94 90 98 Q94 95 94 100 Q96 100 96 104 Q96 108 80 108 Z" fill="#F5F0E8" stroke="#111" strokeWidth="1.5"/>
    </svg>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(i => (i + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section id="testimonials" className="py-24 px-8 relative overflow-hidden" style={{ background: '#7C77BD' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <div className="sticky-note mb-1" style={{ transform: 'rotate(-1deg)', display: 'block', fontSize: '2.2rem' }}>
              Don't take our
            </div>
            <div className="sticky-note" style={{ transform: 'rotate(0.3deg)', display: 'block', fontSize: '2.2rem', marginTop: '-4px' }}>
              <span className="text-parker">word</span> for it.
            </div>
          </div>
          <div className="max-w-xs text-right mt-4">
            <p className="font-inter text-black text-base leading-relaxed">
              The best brands and agencies already use Parker.
            </p>
            <p className="font-inter text-black text-base mt-1">Here's what they say.</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex items-center gap-4">
          <button onClick={prev} className="carousel-arrow flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex-1">
            {/* Top row */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Left - big quote */}
              <div className="bg-cream rounded-2xl p-8 border-2 border-black">
                <p className="font-playfair text-black text-xl leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              {/* Right - white */}
              <div className="bg-white rounded-2xl border-2 border-black p-8 flex items-center">
                <p className="font-playfair text-black text-xl leading-relaxed italic">
                  "Parker makes it insanely easy and the team ships new features almost every week."
                </p>
              </div>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-3 gap-4">
              {/* Avatar card */}
              <div className="rounded-2xl border-2 border-black overflow-hidden aspect-square" style={{ background: '#E8B84B' }}>
                <ParkerAvatar color="#E8B84B" />
              </div>
              {/* Name card */}
              <div className="bg-white rounded-2xl border-2 border-black p-6 flex flex-col justify-center">
                <h4 className="font-playfair font-bold text-2xl text-black mb-1">{t.name}</h4>
                <p className="font-inter text-gray-500 text-sm">{t.title}</p>
                <p className="font-inter text-gray-400 text-xs">{t.subtitle}</p>
              </div>
              {/* Stat card */}
              <div className="rounded-2xl border-2 border-black p-6 flex flex-col justify-center" style={{ background: '#1E3A1E' }}>
                <div className="font-playfair font-black text-5xl text-white mb-2">{t.stat}</div>
                <p className="font-inter text-cream/80 text-sm leading-relaxed">{t.statLabel}</p>
              </div>
            </div>
          </div>

          <button onClick={next} className="carousel-arrow flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: current === i ? 24 : 8,
                background: current === i ? '#111' : 'rgba(0,0,0,0.3)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
