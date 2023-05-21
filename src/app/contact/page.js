import React from 'react'
import './style/Contact.css'

import Title from "./../global/Title"
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div className='container'>
            <Title title={"Contact"} />
            <ContactForm />
        </div>
    )
}

export default Contact