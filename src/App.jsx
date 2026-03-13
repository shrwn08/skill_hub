import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/stats'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

const App = () => {
  return (
    <div className='h-min-screen w-full '>
        <Header />
          <Navbar />
          <Hero />
          <Stats />
          <Features />
          <Testimonials />
          <CTA />
        <Footer />
    </div>
  )
}

export default App
