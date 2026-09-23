import React from 'react'
import logo from '../../assets/logo.svg'

const Navber = () => {
  return (
    <nav className='w-full  border-b border-zinc-300 py-5 px-36 flex justify-between items-center h-[125px]'>
      {/* sticky top-0 z-50 bg-white */}
      <div className="logo ">
        <img className='w-38' src={logo} alt="" />
      </div>
      <div className="nav-links ">
        <ul className='flex justify-between gap-15 text-sm'>
          <li>Home</li>
          <li>Features</li>
          <li>Why Choose</li>
          <li>Testimonial</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="nav-btn flex gap-3  ">
        <button className='px-8 py-1 border border-green-300 rounded-full cursor-pointer'>Sign in</button>
        <button className='px-6 py-1 border-none bg-green-300 rounded-full cursor-pointer'>+1-555-123-4567</button>
      </div>
    </nav>
  )
}

export default Navber