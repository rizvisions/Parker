import { useState } from 'react'

const tabs = [
  {
    label: 'Research',
    description: 'Stop guessing what to test next. Parker reads the reviews, scans competitors, analyzes your account — and surfaces the angles that actually matter.',
    chat: {
      user: 'If you were the creative strategist here, what would you test first?\nLook at our ad account, customer reviews, and competitor ads.',
      response: `Top 3 Angles To Test Next

"Time-saving for busy parents"
Appears in 27% of 4–5 star reviews. Not currently used in ads.

"Premium but worth it"
Price objections show up in comments — but 68% convert after reassurance.

"Before & After"
Competitor's top performer uses transformation angle. High share rate.`,
    },
  },
  {
    label: 'New Personas',
    description: 'Parker builds detailed audience personas from your reviews, comments, and brand data — so every ad speaks to a real person, not a generic audience.',
    chat: {
      user: 'Build me 3 customer personas based on our top reviews and purchase data.',
      response: `Persona 1: "The Busy Mom"
Age 28–40 · Health-conscious · Time-poor
Top pain point: No time to research alternatives

Persona 2: "The Optimizer"
Age 25–35 · Data-driven · Early adopter
Top pain point: Current solutions don't perform

Persona 3: "The Value Seeker"
Age 30–50 · Budget-conscious · Research-heavy
Top pain point: Unsure if premium price is justified`,
    },
  },
  {
    label: 'Reporting',
    description: 'Parker turns your ad data into clear, actionable reports — automatically. No more manual data pulls or spreadsheet assembly.',
    chat: {
      user: 'Give me a 90-day creative performance report with recommendations.',
      response: `90-Day Creative Performance Report

Top performer: "Morning Routine" UGC angle
→ 4.2x ROAS · 3.1% CTR · $18 CPA

Declining creative: Static product shots
→ CTR dropped 40% over 60 days
→ Recommend: Rotate out by next week

Untested opportunities:
· Review-based testimonial ads (competitors crushing it)
· Tutorial format (82% completion rate in niche)`,
    },
  },
  {
    label: 'Scriptwriting',
    description: 'Parker writes scroll-stopping scripts using your brand voice, best-performing angles, and proven direct-response formulas.',
    chat: {
      user: 'Write me a 30-second UGC script targeting busy moms using the time-saving angle.',
      response: `[HOOK - 0-3s]
"I used to spend HOURS every week on this..."

[PROBLEM - 3-8s]
"Between work, kids, and everything else — who has time?"

[SOLUTION - 8-18s]
"Then I found [Product]. Two minutes, that's it. And the results?"

[SOCIAL PROOF - 18-25s]
"47,000 five-star reviews don't lie."

[CTA - 25-30s]
"Try it today — link in bio. Thank me later."`,
    },
  },
]

export default function HowMarketersUseParker() {
  const [activeTab, setActiveTab] = useState(0)
  const tab = tabs[activeTab]

  return (
    <section className="py-24 px-8" style={{ background: '#2B4A2B' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <div className="sticky-note mb-1" style={{ transform: 'rotate(-1deg)', display: 'block', fontSize: '2.2rem' }}>
              How Marketers
            </div>
            <div className="sticky-note" style={{ transform: 'rotate(0.3deg)', display: 'block', fontSize: '2.2rem', marginTop: '-4px' }}>
              Use <span className="text-parker">Parker.</span>
            </div>
          </div>
          <div className="max-w-xs text-right mt-4">
            <p className="font-inter text-cream text-base leading-relaxed">
              From research to scripts to reports —<br />Parker handles the thinking.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-white/10 rounded-2xl p-1 mb-8 w-fit">
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-xl font-inter font-semibold text-sm transition-all duration-200 ${
                activeTab === i ? 'bg-black text-white' : 'text-cream hover:bg-white/10'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content card */}
        <div className="bg-white border-2 border-black rounded-2xl overflow-hidden">
          <div className="grid grid-cols-2">
            {/* Chat interface */}
            <div className="p-8 border-r border-gray-100">
              {/* User message */}
              <div className="bg-cream rounded-2xl p-4 mb-4">
                <p className="font-inter text-black text-sm leading-relaxed whitespace-pre-line">{tab.chat.user}</p>
              </div>

              {/* Parker response */}
              <div className="bg-green-100 rounded-2xl p-4">
                <p className="font-inter text-black text-sm leading-relaxed whitespace-pre-line">{tab.chat.response}</p>
              </div>
            </div>

            {/* Description panel */}
            <div
              className="p-8 flex flex-col justify-center"
              style={{ background: '#1E3A1E' }}
            >
              <div
                className="border-2 border-dashed border-white/30 rounded-2xl p-6"
              >
                <h3 className="font-playfair font-bold text-3xl text-white mb-4">{tab.label}</h3>
                <p className="font-inter text-cream/80 text-base leading-relaxed">{tab.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
