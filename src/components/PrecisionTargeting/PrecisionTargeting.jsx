import React from 'react'
import Img1 from '../../assets/Precision/Img1.png'


const PrecisionTargeting = () => {
  return (
    <div className='lg:px-36 md:px-12 px-6  py-15 bg-zinc-100'>
      <div className="top flex flex-col lg:flex-row gap-10 justify-between">
        <div className="left flex flex-col gap-3">
          <h1 className='lg:text-5xl md:text-3xl text-xl font-bold'>Reach Your Highest-Value <br className="hidden lg:block" /> Customers With Precision</h1>
          <p className='text-sm '>Built around performance, transparency, and smarter targeting, we help you put your TV advertising budget in <br className="hidden lg:block" />   front of the audiences most likely to engage with your business.</p>
          <button className='px-8 w-35 py-2 border-none bg-[#A8F0B8] rounded-4xl cursor-pointer capitalize'>Get On TV</button>
        </div>
        <div className="right bg-[#2D3F55] text-white rounded-3xl p-5 lg:w-[25%] flex flex-col gap-3">
          <h1 className='text-5xl font-semibold'>39%</h1>
          <h2 className='font-semibold text-lg'>Reduced PPC cost-per-lead</h2>
          <p className='text-sm'>Revenue mapping tells the TV budget exactly where to work hardest.</p>
        </div>
      </div>
      <div className="bottom mt-10 flex flex-col lg:flex-row w-full gap-5">
        <img className='lg:w-[73%] order-2 lg:order-1 object-cover  shadow-md rounded-4xl' src={Img1} alt="" />
        <div className='order-1 lg:order-2 flex-1 flex flex-col lg:gap-8 gap-5'>
          <div className="top bg-[#ffffff] rounded-3xl p-5 w-full flex flex-col gap-3 shadow-md h-50">
            <h1  className='text-5xl font-semibold'>4X</h1>
            <h2 className='font-semibold text-lg'>Revenue lift potential</h2>
            <p className='text-sm'>CTV inventory layered over the postal codes that already convert.</p>
          </div>
          <div className="bottom top bg-[#ffffff] rounded-3xl p-5 w-full flex flex-col gap-3 shadow-md h-50 ">
            <h1  className='text-5xl font-semibold'>30s</h1>
            <h2 className='font-semibold text-lg'>Unskippable attention</h2>
            <p className='text-sm'>Full-message spots on premium streaming screens.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrecisionTargeting