import React from 'react'
import './style/Home.css'

const Home = () => {
    return (
        <div className='home-bg' style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + 'img/home/profile_bg.webp'})`
        }}>
            <div className='home-overlay d-flex flex-column justify-content-center align-items-center text-center text-white'>
                <div className='container'>
                    <img src='./img/home/narengavli.png' className='user-photo' alt='narengavli'></img>
                    <div className='mb-4'>
                        <div className='dev-name'>NARENDRA GAVLI</div>
                        <div className='fs-4'>Designer, Developer & Problem Solver</div>
                    </div>
                    <div className="resume-div mb-5">
                        <a href='https://drive.google.com/drive/folders/18sLfSX49nVR0OxylHHokZyxWCT7ENOG9?usp=sharing' target='_blank' rel="noreferrer">
                            <button className="btn btn-outline-primary rounded btn-lg">Download Resume</button>
                        </a>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Home