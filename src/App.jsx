import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import ParkerTellsYou from './components/ParkerTellsYou'
import TrustedBy from './components/TrustedBy'
import HowItWorks from './components/HowItWorks'
import WhyParker from './components/WhyParker'
import WhatMakesParkerDifferent from './components/WhatMakesParkerDifferent'
import HowMarketersUseParker from './components/HowMarketersUseParker'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <ParkerTellsYou />
      <TrustedBy />
      <HowItWorks />
      <WhyParker />
      <WhatMakesParkerDifferent />
      <HowMarketersUseParker />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
