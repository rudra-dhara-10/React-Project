import React from 'react'
import ContactForm from './ContactForm'

const Comercial = () => {
  return (
    <div className='lg:px-36 md:px-12 px-6 py-10 bg-[#293748] w-full flex flex-col lg:flex-row gap-5 text-white'>
        <div className="heading lg:w-[40%]">
            <h1 className='lg:text-5xl md:text-4xl text-2xl font-bold'>Let’s Create Your <br className="hidden lg:block" />Next Commercial.</h1>
            <p className='mt-2 lg:text-base md:text-base text-sm'>Have questions about AdCactus or ready to turn your business into <br className="hidden lg:block" />   a professional commercial? Our team is here to help. Tell us what you’re looking to create, and we’ll help you find the right way to get started.</p>
        </div>
        <div className="form flex-1">
            <ContactForm />
        </div>
    </div>
  )
}

export default Comercial