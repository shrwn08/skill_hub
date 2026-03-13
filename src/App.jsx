import React from 'react'
import Navbar from './components/Navbar'

import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'


const App = () => {
  return (
    <div className='h-min-screen w-full '>
    <Navbar />
          <Home />
          <Footer />
    </div>
  )
}

export default App
