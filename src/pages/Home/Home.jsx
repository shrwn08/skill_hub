import React from 'react'
import Hero from '../../components/Hero/Hero'
import Works from '../../components/HowItWorks/Works'
import Stats from '../../components/Stats/Stats'
import Features from '../../components/Features/Features'
import Testimonial from '../../components/Testimonial/Testimonial'
import CTA from '../../components/CTA/CTA'

const Home = () => {
  return (
    <div>
        <Hero />
        <Works />
        <Stats />
        <Features />
        <Testimonial />
        <CTA/>
    </div>
  )
}

export default Home