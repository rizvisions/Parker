import { useEffect, useState } from 'react'

export default function Hero() {
  return (
    <section className="bg-cream min-h-screen flex flex-col items-center justify-center pt-28 pb-0 px-4">
      <div className="text-center max-w-5xl mx-auto">
        <h1
          className="font-playfair font-black text-black leading-tight mb-6"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
        >
          Meet Parker - your new<br />AI Creative Strategist
        </h1>
        <p className="font-inter text-black text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Parker has been trained on the frameworks, formulas,<br />
          and techniques that top&nbsp;strategists use.
        </p>
        <a
          href="https://app.heyparker.ai/login"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-black text-white font-inter font-semibold text-base px-10 py-4 rounded-2xl hover:bg-gray-800 transition-colors shadow-lg"
        >
          Hire Parker Today
        </a>
      </div>

      {/* App mockup */}
      <div className="mt-16 w-full max-w-5xl mx-auto px-4">
        <div className="border-2 border-black rounded-2xl overflow-hidden bg-white shadow-2xl">
          <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="mx-4 flex-1 bg-gray-200 rounded-full h-6 flex items-center px-3">
              <span className="text-xs text-gray-500">app.heyparker.ai</span>
            </div>
          </div>
          <div className="flex h-80 bg-white">
            {/* Sidebar */}
            <div className="w-48 bg-white border-r border-gray-100 p-3 flex-shrink-0">
              <div className="flex items-center gap-2 mb-4 px-2">
                <span className="font-lobster text-parker text-lg">Parker</span>
              </div>
              {['Overview', 'Chat', 'Research', 'Customer Reviews', 'Ad Comments', 'TikTok', 'Competitors', 'Reddit', 'Ideas', 'Performance', 'Settings'].map((item, i) => (
                <div
                  key={item}
                  className={`px-2 py-1.5 rounded-lg text-xs font-inter mb-0.5 cursor-pointer flex items-center gap-2 ${i === 5 ? 'bg-black text-white font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {item}
                </div>
              ))}
            </div>
            {/* Main content */}
            <div className="flex-1 p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-inter font-bold text-sm text-gray-900">TikTok Inspiration</h3>
                  <p className="text-xs text-gray-500">Parker-recommended videos tailored for your brand</p>
                </div>
                <button className="text-xs bg-gray-100 px-3 py-1 rounded-lg font-inter">Configure</button>
              </div>
              <div className="flex gap-2 mb-3">
                <button className="text-xs bg-black text-white px-3 py-1 rounded-full font-inter">This Week's Recommendations</button>
                <button className="text-xs text-gray-500 px-3 py-1 rounded-full font-inter">All Recommendations</button>
              </div>
              {/* Video grid */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  { title: 'Bad Breath part 8 Tongue Scraper Alternatives', bg: 'bg-purple-100' },
                  { title: 'FREE BIO HACKS', bg: 'bg-green-100' },
                  { title: 'Best skincare tips', bg: 'bg-pink-100' },
                  { title: 'Morning routine', bg: 'bg-blue-100' },
                ].map((vid, i) => (
                  <div key={i} className={`${vid.bg} rounded-lg aspect-[9/16] relative overflow-hidden flex items-end p-1.5`}>
                    <div className="bg-white/90 rounded p-1 w-full">
                      <p className="text-xs font-inter font-semibold text-gray-900 leading-tight" style={{ fontSize: '9px' }}>{vid.title}</p>
                    </div>
                    <div className="absolute top-1 right-1 bg-white/80 rounded-full p-0.5">
                      <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
