import React from 'react'
import { useForm } from '@formspree/react';
import Title from './../components/Title'
import FormField from './../components/FormField';

const Contact = () => {
    const [state, handleSubmit] = useForm("mjvdzqbv");
    if (state.succeeded) {
        return (
            <>
                <Title title={"Contact"} />
                <div className='text-center'>
                    <img src={process.env.PUBLIC_URL + 'img/contact/thank.png'} height={'120px'} alt='thank you' />
                    <div className='fs-2 text-success'>
                        Thank you for contacting me!
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <Title title={"Contact"} />
            <div className='contact-form-body'>
                <form onSubmit={handleSubmit}>
                    <FormField inputType={'text'} label={'Name'} linkId={'user-name'} />
                    <FormField inputType={'text'} label={'Mobail Number'} linkId={'mobail-number'} />
                    <FormField inputType={'email'} label={'Email ID'} linkId={'user-email-id'} />
                    <FormField inputType={'text'} label={'Massage'} linkId={'user-massage'} />
                    <div className='d-flex justify-content-between'>
                        <button type="submit" className="btn btn-primary" disabled={state.submitting}>
                            Submit
                        </button>
                        <button type='reset' className='btn btn-link text-decoration-none'>Clear form</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact