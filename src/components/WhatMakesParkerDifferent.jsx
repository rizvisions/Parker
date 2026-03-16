import { useEffect, useRef, useState } from 'react'

const brainStates = [
  {
    bg: '#F4B8B0',
    brainColor: '#E8908A',
    text: 'First, Parker learns everything about your brand.',
    pills: ['Customer personas', 'Products & USPs', 'Brand voice', 'Finding headlines', 'New product releases', 'Marketing calendar', 'Competitive landscape', 'Founder story', 'Compliance & legal'],
  },
  {
    bg: '#E8B84B',
    brainColor: '#D4A030',
    text: 'Second, we taught Parker everything about creative strategy.',
    pills: ['Scriptwriting', 'Creating briefs', 'Andromeda update', 'Video ad formats', 'Hook ideas', 'Static ad formats', 'Finding headlines', 'Making iterations'],
  },
  {
    bg: '#6DBF6A',
    brainColor: '#4AAA47',
    text: 'Third, Parker learns your creative strategy.',
    pills: ['What ads don\'t work', 'Competitor patterns', 'Organic trends', 'What ads work', 'Performance metrics', '90-day creative audit', 'Creative gaps'],
  },
  {
    bg: '#7C77BD',
    brainColor: '#6B66A8',
    text: 'And finally, Parker researches the internet for 24/7 inspo.',
    pills: ['Organic TikTok', 'TikTok Trends', 'Competitor ad libraries', 'Ad comments', 'Customer reviews', 'Reddit'],
  },
]

function ParkerBrain({ brainColor }) {
  return (
    <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Character face/head */}
      {/* Hair */}
      <ellipse cx="160" cy="80" rx="70" ry="35" fill="#111"/>
      {/* Head */}
      <ellipse cx="160" cy="140" rx="68" ry="78" fill="#F5F0E8"/>
      {/* Ear left */}
      <ellipse cx="92" cy="145" rx="12" ry="16" fill="#F5F0E8" stroke="#111" strokeWidth="3"/>
      {/* Ear right */}
      <ellipse cx="228" cy="145" rx="12" ry="16" fill="#F5F0E8" stroke="#111" strokeWidth="3"/>

      {/* Brain - open top of head */}
      <path d="M110 90 Q110 55 160 50 Q210 55 210 90" fill="#111" stroke="#111" strokeWidth="2"/>
      {/* Brain shape */}
      <ellipse cx="160" cy="70" rx="55" ry="45" fill={brainColor} style={{ transition: 'fill 0.6s ease' }}/>
      {/* Brain folds */}
      <path d="M130 55 Q145 45 160 55 Q175 45 190 55" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M125 68 Q140 58 155 68 Q170 58 185 68" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M130 80 Q145 70 160 80 Q175 70 190 80" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M140 90 Q155 83 170 90" stroke="#111" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Brain center ridge */}
      <path d="M160 30 Q162 50 160 90" stroke="#111" strokeWidth="2" fill="none"/>

      {/* Eyes */}
      <ellipse cx="138" cy="155" rx="10" ry="11" fill="#111"/>
      <ellipse cx="182" cy="155" rx="10" ry="11" fill="#111"/>
      <ellipse cx="140" cy="152" rx="4" ry="4" fill="white"/>
      <ellipse cx="184" cy="152" rx="4" ry="4" fill="white"/>

      {/* Eyebrows */}
      <path d="M126 138 Q138 132 150 138" stroke="#111" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M170 138 Q182 132 194 138" stroke="#111" strokeWidth="3" fill="none" strokeLinecap="round"/>

      {/* Nose */}
      <path d="M155 168 Q160 176 165 168" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Mustache */}
      <path d="M138 188 Q149 196 160 192 Q171 196 182 188" fill="#111"/>
      <path d="M138 188 Q149 183 160 185 Q171 183 182 188" fill="#111"/>

      {/* Neck/collar */}
      <rect x="140" y="210" width="40" height="40" rx="4" fill="#F5F0E8"/>
      <path d="M148 215 L160 226 L172 215" stroke="#111" strokeWidth="2" fill="none"/>
    </svg>
  )
}

export default function WhatMakesParkerDifferent() {
  const [activeState, setActiveState] = useState(0)
  const sectionRef = useRef(null)
  const totalScrollHeight = brainStates.length

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = -rect.top
      const sectionHeight = rect.height
      const viewH = window.innerHeight

      // Progress from 0 to 1 through the section
      const progress = Math.max(0, Math.min(1, sectionTop / (sectionHeight - viewH)))
      const index = Math.min(brainStates.length - 1, Math.floor(progress * brainStates.length))
      setActiveState(index)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const current = brainStates[activeState]

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${brainStates.length * 100}vh` }}
    >
      <div
        className="sticky top-0 h-screen overflow-hidden transition-colors duration-700"
        style={{ background: '#F5F0E8' }}
      >
        {/* Background circle */}
        <div
          className="absolute bottom-0 left-1/2 rounded-full transition-colors duration-700"
          style={{
            width: '80vw',
            height: '80vw',
            transform: 'translateX(-50%)',
            background: current.bg,
            bottom: '-30vw',
            transition: 'background 0.7s ease',
          }}
        ></div>

        {/* Left sticky notes */}
        <div className="absolute top-8 left-8">
          <div className="sticky-note mb-1" style={{ transform: 'rotate(-1deg)', display: 'block', fontSize: '2.2rem' }}>
            What makes
          </div>
          <div className="sticky-note" style={{ transform: 'rotate(0.5deg)', display: 'block', fontSize: '2.2rem', marginTop: '-4px' }}>
            <span className="text-parker">Parker</span> different?
          </div>
        </div>

        {/* Right info card */}
        <div
          className="absolute top-8 right-8 dashed-border-box bg-cream/80 max-w-xs"
          style={{ transition: 'opacity 0.3s ease' }}
        >
          <p className="font-inter text-black text-base">{current.text}</p>
        </div>

        {/* Brain character - centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <ParkerBrain brainColor={current.brainColor} />

            {/* Floating pills around brain */}
            <div className="absolute inset-0 pointer-events-none">
              {current.pills.slice(0, Math.min(7, current.pills.length)).map((pill, i) => {
                const positions = [
                  { top: '0%', left: '10%' },
                  { top: '-5%', right: '5%' },
                  { top: '20%', left: '-15%' },
                  { top: '20%', right: '-20%' },
                  { top: '45%', left: '-20%' },
                  { top: '45%', right: '-18%' },
                  { top: '65%', left: '5%' },
                  { top: '65%', right: '5%' },
                  { top: '80%', left: '20%' },
                ]
                const pos = positions[i % positions.length]
                return (
                  <div
                    key={`${activeState}-${i}`}
                    className="pill-tag absolute"
                    style={{
                      ...pos,
                      animation: `fade-in-up 0.4s ease ${i * 0.07}s both`,
                      fontSize: '0.8rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {pill}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
