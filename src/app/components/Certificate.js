import React from 'react'
import "./styles/certificate.css"

const Certificate = () => {
    return (
        <div className='cert-container'>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={process.env.PUBLIC_URL + '/img/certificate/webdev.webp'} className="d-block w-100" alt="web development" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Web Development course by internshala</h5>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={process.env.PUBLIC_URL + '/img/certificate/blockchain.webp'} className="d-block w-100" alt="blockchain" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Blockchain course by internshala</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/img/certificate/bash.webp'} className="d-block w-100" alt="shell script" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Shell Script course by Bitten Tech</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Certificate