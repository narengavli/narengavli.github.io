import React from 'react'

// import global css
import './app.css'

// import component and page 
import Navbar from './global/Navbar'
import Home from './home/page'
import About from './about/page'
import Work from './work/page'
import Contact from './contact/page'
import Footer from './global/Footer'

const App = () => {
  return (
    <>
      <Navbar />

      <div id='home'>
        <Home />
      </div>
      <div id='about' className='py-5'>
        <About />
      </div>
      <div id='work' className='py-5'>
        <Work />
      </div>
      <div id='contact' className='py-5'>
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App