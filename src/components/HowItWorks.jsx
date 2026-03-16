import { useState } from 'react'

const steps = [
  {
    label: 'Step 1 - Research',
    color: '#E8B84B',
    textColor: '#111',
    content: {
      text: [
        'First, Parker does the research.',
        '',
        'TikTok.',
        'Reddit.',
        'Competitors.',
        'Reviews.',
        'Your ad performance.',
        '',
        'All watched.',
        'All organized.',
        'All in one place.',
      ],
      mockup: 'research',
    },
  },
  {
    label: 'Step 2 - Chat',
    color: '#7C77BD',
    textColor: '#111',
    content: {
      text: [
        'Ask questions.',
        'Get expert answers.',
        '',
        'Parker has been trained on the frameworks, formulas, and techniques that top strategists use.',
        '',
        'So when you ask, you don\'t get generic AI — you get answers built for ads.',
      ],
      mockup: 'chat',
    },
  },
  {
    label: 'Step 3 - Grow',
    color: '#6DBF6A',
    textColor: '#111',
    content: {
      text: [
        'Get winning creative to grow your business.',
        '',
        'Hooks.',
        'Scripts.',
        'Angles.',
        'Briefs.',
        '',
        'Built from your research.',
        'Tailored to your brand.',
        'Ready to shoot.',
      ],
      mockup: 'grow',
    },
  },
]

function ResearchMockup() {
  return (
    <div className="bg-white border-2 border-black rounded-2xl overflow-hidden shadow-xl">
      <div className="bg-gray-50 p-3 border-b flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        <span className="text-xs text-gray-400 ml-2 font-inter">Parker — TikTok Inspiration</span>
      </div>
      <div className="flex h-64">
        <div className="w-36 border-r bg-white p-2">
          {['Overview', 'Chat', 'Research', 'Customer Reviews', 'Ad Comments', 'TikTok', 'Competitors', 'Reddit'].map((item, i) => (
            <div key={item} className={`text-xs py-1 px-2 rounded font-inter mb-0.5 ${i === 5 ? 'bg-black text-white font-semibold' : 'text-gray-500'}`}>{item}</div>
          ))}
        </div>
        <div className="flex-1 p-3">
          <p className="text-xs font-inter font-bold text-gray-900 mb-1">TikTok Inspiration</p>
          <p className="text-xs text-gray-400 mb-2 font-inter">Parker-recommended videos tailored for your brand</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { title: 'Bad Breath part 8 Tongue Scraper Alternatives', color: '#E8E8FF' },
              { title: 'FREE BIO HACKS', color: '#E8FFE8' },
              { title: 'Morning Routine Tips', color: '#FFE8E8' },
            ].map((v, i) => (
              <div key={i} className="rounded-lg aspect-[9/16] flex items-end p-1" style={{ background: v.color }}>
                <div className="bg-white/90 rounded p-1 w-full">
                  <p className="font-inter font-semibold leading-tight" style={{ fontSize: '8px' }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ChatMockup() {
  const docs = [
    { color: '#7C77BD', rot: '-8deg', top: '10%', left: '20%' },
    { color: '#E8B84B', rot: '5deg', top: '5%', left: '50%' },
    { color: '#6DBF6A', rot: '-3deg', top: '40%', left: '60%' },
    { color: '#D94F2F', rot: '8deg', top: '50%', left: '35%' },
  ]

  return (
    <div className="bg-white border-2 border-black rounded-2xl overflow-hidden shadow-xl" style={{ minHeight: '280px' }}>
      <div className="bg-gray-50 p-3 border-b flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        <span className="text-xs text-gray-400 ml-2 font-inter">Parker — Chat</span>
      </div>
      <div className="relative h-60 bg-cream/30 p-4">
        {docs.map((d, i) => (
          <div
            key={i}
            className="absolute bg-white border-4 rounded-lg shadow-md"
            style={{
              borderColor: d.color,
              transform: `rotate(${d.rot})`,
              top: d.top,
              left: d.left,
              width: 100,
              height: 130,
              padding: 8,
            }}
          >
            <div className="w-full h-2 rounded mb-1" style={{ background: d.color }}></div>
            {[1,2,3,4,5,6].map(j => (
              <div key={j} className="h-1 bg-gray-200 rounded mb-1" style={{ width: `${60 + Math.random()*30}%` }}></div>
            ))}
          </div>
        ))}
        <div className="absolute top-2 right-2 text-xs font-inter text-gray-400 bg-white px-2 py-1 rounded-full border">
          Parker Briefs
        </div>
      </div>
    </div>
  )
}

function GrowMockup() {
  const images = Array(12).fill(null)
  return (
    <div className="border-2 border-black rounded-2xl overflow-hidden shadow-xl relative" style={{ background: '#E8B84B' }}>
      {/* Checkerboard pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        }}
      ></div>
      <div className="relative p-4">
        {/* WITH PARKER badge */}
        <div className="flex items-center justify-end mb-2 gap-2">
          <span className="bg-black text-white font-inter font-bold text-sm px-3 py-1 rounded-full">WITH PARKER</span>
          {/* Parker avatar */}
          <div className="w-9 h-9 rounded-full bg-cream border-2 border-black flex items-center justify-center text-lg font-lobster text-parker">P</div>
        </div>
        {/* Photo grid */}
        <div className="grid grid-cols-6 gap-1.5">
          {images.map((_, i) => {
            const colors = ['#4A4A8A', '#C8A890', '#8A6A4A', '#6A8AAA', '#AA6A6A', '#6AAA6A']
            return (
              <div
                key={i}
                className="aspect-[3/4] rounded-lg"
                style={{ background: colors[i % colors.length], opacity: 0.7 + (i % 3) * 0.1 }}
              ></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const mockups = { research: ResearchMockup, chat: ChatMockup, grow: GrowMockup }

export default function HowItWorks() {
  const [active, setActive] = useState(0)

  const Step = steps[active]
  const Mockup = mockups[Step.content.mockup]

  return (
    <section id="how-it-works" className="bg-cream">
      {/* "Let me show you how" */}
      <div className="py-24 text-center px-4">
        <h2
          className="font-playfair font-black text-black mb-16"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1 }}
        >
          Let me show you how
        </h2>
        {/* Three arrows */}
        <div className="flex justify-center items-end gap-16 mt-8">
          {/* Gold arrow - diagonal up-right */}
          <svg width="180" height="160" viewBox="0 0 180 160" fill="none">
            <path d="M20 140 C40 100 100 40 150 20" stroke="#E8B84B" strokeWidth="8" strokeLinecap="round"/>
            <path d="M150 20 L120 30 M150 20 L155 50" stroke="#E8B84B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* Purple arrow - straight up */}
          <svg width="80" height="200" viewBox="0 0 80 200" fill="none">
            <path d="M40 190 L40 30" stroke="#7C77BD" strokeWidth="8" strokeLinecap="round"/>
            <path d="M40 30 L20 60 M40 30 L60 60" stroke="#7C77BD" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {/* Green arrow - diagonal up-left */}
          <svg width="180" height="160" viewBox="0 0 180 160" fill="none">
            <path d="M160 140 C140 100 80 40 30 20" stroke="#6DBF6A" strokeWidth="8" strokeLinecap="round"/>
            <path d="M30 20 L60 30 M30 20 L25 50" stroke="#6DBF6A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Step tabs with dashed connector */}
      <div className="flex border-b-4 border-dashed border-black">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex-1 py-6 text-left pl-8 transition-all duration-200 font-playfair font-bold text-2xl border-r-2 border-black last:border-r-0"
            style={{
              background: active >= i ? step.color : 'rgba(245,240,232,0.5)',
              color: step.textColor,
            }}
          >
            {step.label}
          </button>
        ))}
      </div>

      {/* Step content */}
      <div className="bg-white min-h-screen py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            {Step.content.text.map((line, i) => (
              line === '' ? (
                <div key={i} className="h-5"></div>
              ) : (
                <p
                  key={i}
                  className="font-playfair text-black leading-tight"
                  style={{ fontSize: line.includes('First') || line.includes('Ask') || line.includes('Get winning') ? '1.35rem' : '1.5rem', fontWeight: line.includes('First') || line.includes('Ask') || line.includes('Get winning') ? '400' : '700', marginBottom: '2px' }}
                >
                  {line}
                </p>
              )
            ))}
          </div>

          {/* Right mockup */}
          <div>
            <Mockup />
          </div>
        </div>
      </div>
    </section>
  )
}
