import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './pages/Main/Main'

const App = () => {
  return (
    <div className='h-min-screen w-full '>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default App
