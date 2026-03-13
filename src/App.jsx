import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './pages/Main/Main'
import HowItWork from './pages/howItWork/HowItWork'

const App = () => {
  return (
    <div className='h-min-screen w-full '>
        <Header />
        {/* <Main /> */}
        <HowItWork />
        <Footer />
    </div>
  )
}

export default App
