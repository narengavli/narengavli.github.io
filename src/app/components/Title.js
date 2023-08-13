import React from 'react'
import "./styles/title.css"

const Title = ({ title }) => {
    return (
        <div className='main-title text-center mb-4'>
            <span className='title-txt h3 text-uppercase'>{title}</span>
        </div>
    )
}

export default Title