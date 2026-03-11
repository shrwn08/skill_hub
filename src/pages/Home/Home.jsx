import React from 'react'
import Hero from '../../components/Hero/Hero'
import Works from '../../components/HowItWorks/Works'
import Stats from '../../components/Stats/Stats'
import Features from '../../components/Features/Features'

const Home = () => {
  return (
    <div>
        <Hero />
        <Works />
        <Stats />
        <Features />
    </div>
  )
}

export default Home