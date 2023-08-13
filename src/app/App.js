import React from 'react'
import './app.css'

// import navigation
import Navbar from './navigation/Navbar'
import Footer from './navigation/Footer'

// import pages
import Home from './pages/Home'
import Resume from './pages/Resume'
import Project from './pages/Project'
import Contact from './pages/Contact'

const App = () => {
    return (
        <main>
            <Navbar />

            <div id='home' className='home main-page background' style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + 'img/home/background.webp'})`
            }}>
                <div className="overlay">
                    <div className='container container-y'>
                        <Home />
                    </div>
                </div>
            </div>

            <div id='resume' className='resume main-page'>
                <div className='container container-y'>
                    <Resume />
                </div>
            </div>

            <div id='project' style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + 'img/project/background.webp'})`
            }} className='project main-page background'>
                <div className="overlay">
                    <div className='container container-y'>
                        <Project />
                    </div>
                </div>
            </div>

            <div id='contact' className='contact main-page'>
                <div className='container container-y'>
                    <Contact />
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default App