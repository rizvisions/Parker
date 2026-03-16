import { useState, useEffect } from 'react'

const cyclingWords = [
  'scrolling TikTok for hours',
  'reading 100s of reviews',
  'stalking competitor ads',
  'guessing what will convert',
  'watching hours of content',
]

function RedditIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>
  )
}

function StarChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.81a8.17 8.17 0 0 0 4.77 1.52V6.88a4.85 4.85 0 0 1-1-.19z"/>
    </svg>
  )
}

function MetaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13v4H7l5 5 5-5h-4V7h-2z"/>
    </svg>
  )
}

const iconData = [
  { type: 'pill', Icon: RedditIcon },
  { type: 'square', Icon: StarChatIcon },
  { type: 'square', Icon: TikTokIcon },
  { type: 'square', Icon: MetaIcon },
  { type: 'pill', Icon: RedditIcon },
  { type: 'square', Icon: StarChatIcon },
  { type: 'square', Icon: TikTokIcon },
  { type: 'square', Icon: MetaIcon },
]

function IconItem({ type, Icon }) {
  if (type === 'pill') {
    return (
      <div
        style={{
          width: 100,
          height: 150,
          borderRadius: 70,
          border: '3px solid #111',
          background: '#D0CCCC',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <div style={{ background: '#111', borderRadius: 16, padding: 12, display: 'flex' }}>
          <Icon />
        </div>
      </div>
    )
  }
  return (
    <div
      style={{
        width: 110,
        height: 110,
        borderRadius: 24,
        background: '#111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Icon />
    </div>
  )
}

export default function Problem() {
  const [wordIndex, setWordIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setWordIndex(i => (i + 1) % cyclingWords.length)
        setFade(true)
      }, 350)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const doubled = [...iconData, ...iconData, ...iconData]

  return (
    <section style={{ background: '#7C77BD', minHeight: '100vh', padding: '0 0 60px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 48px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left – stacked sticky notes */}
          <div>
            {/* Note 1 */}
            <div
              style={{
                background: '#F5F0E8',
                border: '2.5px solid #111',
                padding: '12px 20px',
                display: 'inline-block',
                transform: 'rotate(-1.5deg)',
                fontFamily: '"Playfair Display", serif',
                fontSize: '2rem',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 4,
              }}
            >
              Making ads is easy.
            </div>
            <br />
            {/* Note 2 */}
            <div
              style={{
                background: '#F5F0E8',
                border: '2.5px solid #111',
                padding: '12px 20px',
                display: 'inline-block',
                transform: 'rotate(0.8deg)',
                fontFamily: '"Playfair Display", serif',
                fontSize: '2rem',
                fontWeight: 700,
                lineHeight: 1.2,
                marginTop: -2,
              }}
            >
              <span style={{ color: '#D94F2F' }}>Knowing</span> what ads
            </div>
            <br />
            {/* Note 3 */}
            <div
              style={{
                background: '#F5F0E8',
                border: '2.5px solid #111',
                padding: '12px 20px',
                display: 'inline-block',
                transform: 'rotate(0.4deg)',
                fontFamily: '"Playfair Display", serif',
                fontSize: '2rem',
                fontWeight: 700,
                lineHeight: 1.2,
                marginTop: -2,
              }}
            >
              to make is hard.
            </div>
          </div>

          {/* Right – text */}
          <div style={{ paddingTop: 24 }}>
            <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', color: '#111', marginBottom: 16, lineHeight: 1.4 }}>
              Good ideas don't appear out of thin air.
            </p>
            <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', color: '#111', marginBottom: 16, lineHeight: 1.4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
              They come from{' '}
              <span
                style={{
                  display: 'inline-block',
                  border: '2px dashed #111',
                  background: 'rgba(255,255,255,0.9)',
                  padding: '4px 14px',
                  borderRadius: 8,
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  opacity: fade ? 1 : 0,
                  transform: fade ? 'translateY(0)' : 'translateY(6px)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                }}
              >
                {cyclingWords[wordIndex]}
              </span>
            </p>
            <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', color: '#111', lineHeight: 1.5 }}>
              That's called creative strategy.<br />
              And it takes forever.
            </p>
          </div>
        </div>

        {/* Parker character */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 48, gap: 32 }}>
          {/* Scrolling icons */}
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <div
              className="animate-marquee-icons"
              style={{ display: 'flex', gap: 24, alignItems: 'center', width: 'max-content' }}
            >
              {doubled.map((icon, i) => (
                <IconItem key={i} type={icon.type} Icon={icon.Icon} />
              ))}
            </div>
          </div>

          {/* Parker character SVG */}
          <svg width="220" height="300" viewBox="0 0 220 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Body / white shirt */}
            <rect x="65" y="185" width="90" height="100" rx="10" fill="#F5F0E8" stroke="#111" strokeWidth="3"/>
            {/* Shirt v-neck */}
            <path d="M95 190 L110 208 L125 190" stroke="#111" strokeWidth="2.5" fill="none"/>
            {/* Left arm - extended and bent for thinking pose */}
            <path d="M65 195 Q40 210 35 230" stroke="#F5F0E8" strokeWidth="16" strokeLinecap="round"/>
            <path d="M65 195 Q40 210 35 230" stroke="#111" strokeWidth="3" strokeLinecap="round" fill="none"/>
            {/* Right arm across */}
            <path d="M155 195 Q180 205 170 215" stroke="#F5F0E8" strokeWidth="16" strokeLinecap="round"/>
            <path d="M155 195 Q180 205 170 215" stroke="#111" strokeWidth="3" strokeLinecap="round" fill="none"/>
            {/* Head */}
            <ellipse cx="110" cy="125" rx="58" ry="68" fill="#F5F0E8" stroke="#111" strokeWidth="3"/>
            {/* Hair */}
            <ellipse cx="110" cy="72" rx="58" ry="30" fill="#111"/>
            {/* Left ear */}
            <ellipse cx="52" cy="130" rx="10" ry="14" fill="#F5F0E8" stroke="#111" strokeWidth="2.5"/>
            {/* Right ear */}
            <ellipse cx="168" cy="130" rx="10" ry="14" fill="#F5F0E8" stroke="#111" strokeWidth="2.5"/>
            {/* Eyes */}
            <ellipse cx="92" cy="122" rx="9" ry="10" fill="#111"/>
            <ellipse cx="128" cy="122" rx="9" ry="10" fill="#111"/>
            {/* Eye shine */}
            <ellipse cx="94" cy="119" rx="3.5" ry="3.5" fill="white"/>
            <ellipse cx="130" cy="119" rx="3.5" ry="3.5" fill="white"/>
            {/* Eyebrows - inquisitive */}
            <path d="M80 106 Q92 99 104 106" stroke="#111" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M116 106 Q128 99 140 106" stroke="#111" strokeWidth="3" fill="none" strokeLinecap="round"/>
            {/* Nose */}
            <path d="M106 134 Q110 142 114 134" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            {/* Mustache */}
            <path d="M87 155 Q98 162 110 158 Q122 162 133 155" fill="#111"/>
            <path d="M87 155 Q98 149 110 151 Q122 149 133 155" fill="#111"/>
            {/* Chin line */}
            <path d="M93 172 Q110 178 127 172" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round"/>
            {/* Thinking hand at chin */}
            <circle cx="40" cy="232" r="12" fill="#F5F0E8" stroke="#111" strokeWidth="2.5"/>
            <path d="M34 228 Q40 235 46 228" stroke="#111" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
