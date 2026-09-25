import React from 'react'
import ContactForm from './ContactForm'

const Comercial = () => {
  return (
    <div className='px-36 py-10 bg-[#293748] w-full flex gap-5 text-white'>
        <div className="heading w-[40%]">
            <h1 className='text-5xl font-semibold'>Let’s Create Your <br /> Next Commercial.</h1>
            <p className='mt-2'>Have questions about AdCactus or ready to turn your business into <br />   a professional commercial? Our team is here to help. Tell us what you’re looking to create, and we’ll help you find the right way to get started.</p>
        </div>
        <div className="form flex-1">
            <ContactForm />
        </div>
    </div>
  )
}

export default Comercial