import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-black">
      <div className="max-w-6xl mx-auto px-8 pt-24 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-2 gap-16 mb-20">
          {/* Newsletter */}
          <div>
            <h3 className="font-playfair font-bold text-4xl text-white mb-6">Join our newsletter.</h3>
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your mail"
                className="flex-1 bg-white text-black font-inter text-sm px-4 py-3 rounded-xl outline-none border-2 border-transparent focus:border-white/50"
              />
              <button
                className="font-inter font-semibold text-sm px-6 py-3 rounded-xl text-white transition-colors hover:opacity-90"
                style={{ background: '#2B4A2B' }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-end gap-20">
            <div>
              <h4 className="font-inter font-bold text-white text-sm mb-4">Home</h4>
              <nav className="flex flex-col gap-3">
                {['How it works', 'Why Parker', 'Pricing', 'Testimonials'].map(link => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                    className="font-inter text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-inter font-bold text-white text-sm mb-4">Connect</h4>
              <nav className="flex flex-col gap-3">
                <a href="#" className="font-inter text-gray-400 text-sm hover:text-white transition-colors">Linkedin</a>
                <a href="#" className="font-inter text-gray-400 text-sm hover:text-white transition-colors">X (Twitter)</a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex items-center justify-between mb-0">
          <span className="font-inter text-gray-500 text-sm">© 2026 Parker, All rights reserved</span>
          <span className="font-inter text-gray-500 text-sm">Site by Ashwin</span>
          <div className="flex items-center gap-2">
            <a href="https://heyparker.ai/support/terms-of-service" className="font-inter text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</a>
            <span className="text-gray-600">•</span>
            <a href="#" className="font-inter text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Giant Parker wordmark */}
      <div className="overflow-hidden pb-0 leading-none">
        <div
          className="text-center font-lobster parker-wordmark select-none"
          style={{
            fontSize: 'clamp(80px, 18vw, 240px)',
            color: '#D94F2F',
            WebkitTextStroke: '4px white',
            lineHeight: 0.85,
            letterSpacing: '0.02em',
            paddingBottom: 0,
          }}
        >
          Parker
        </div>
      </div>
    </footer>
  )
}
