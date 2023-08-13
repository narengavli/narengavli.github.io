import React from 'react'
import './styles/formField.css'

const FormField = ({ inputType, label, linkId }) => {
    return (
        <div className='contact-section'>
            <div className='contact-row'>
                <label htmlFor={linkId} className='contact-label'>{label}</label>
            </div>
            <div className='contact-row'>
                <input type={inputType} id={linkId} name={linkId} className='contact-input py-3' placeholder='Your answer' required></input>
            </div>
        </div>
    )
}

export default FormField