import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className="bg-white border-2 border-black rounded-2xl transition-all duration-300"
        style={{
          padding: scrolled ? '10px 20px' : '12px 24px',
        }}
      >
        {scrolled ? (
          /* Compact nav */
          <div className="flex items-center gap-6">
            <span className="font-lobster text-parker text-2xl">Parker</span>
            <a
              href="https://app.heyparker.ai/login"
              target="_blank"
              rel="noreferrer"
              className="bg-black text-white font-inter font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Hire Parker Today
            </a>
          </div>
        ) : (
          /* Full nav */
          <div className="flex items-center gap-8">
            <span className="font-lobster text-parker text-2xl mr-4">Parker</span>
            <a href="#how-it-works" className="font-inter text-black font-medium text-sm hover:text-gray-600 transition-colors">How it works</a>
            <a href="#why-parker" className="font-inter text-black font-medium text-sm hover:text-gray-600 transition-colors">Why Parker</a>
            <a href="#pricing" className="font-inter text-black font-medium text-sm hover:text-gray-600 transition-colors">Pricing</a>
            <a href="#testimonials" className="font-inter text-black font-medium text-sm hover:text-gray-600 transition-colors">Testimonials</a>
            <a
              href="https://app.heyparker.ai/login"
              target="_blank"
              rel="noreferrer"
              className="ml-4 bg-black text-white font-inter font-semibold text-sm px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Hire Parker Today
            </a>
          </div>
        )}
      </nav>
    </div>
  )
}
