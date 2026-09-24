import React from 'react'
import Img1 from '../../assets/Precision/Img1.png'


const PrecisionTargeting = () => {
  return (
    <div className='px-36 py-15 bg-zinc-100'>
      <div className="top flex gap-10 justify-between">
        <div className="left flex flex-col gap-3">
          <h1 className='text-5xl font-semibold'>Reach Your Highest-Value <br /> Customers With Precision</h1>
          <p>Built around performance, transparency, and smarter targeting, we help you put your TV advertising budget in <br />   front of the audiences most likely to engage with your business.</p>
          <button className='px-8 w-35 py-2 border-none bg-[#A8F0B8] rounded-4xl cursor-pointer capitalize'>Get On TV</button>
        </div>
        <div className="right bg-[#2D3F55] text-white rounded-3xl p-5 w-[25%] flex flex-col gap-3">
          <h1 className='text-5xl font-semibold'>39%</h1>
          <h2 className='font-semibold text-lg'>Reduced PPC cost-per-lead</h2>
          <p className='text-sm'>Revenue mapping tells the TV budget exactly where to work hardest.</p>
        </div>
      </div>
      <div className="bottom mt-10 flex w-full gap-5">
        <img className='w-[73%] object-cover  shadow-md rounded-4xl' src={Img1} alt="" />
        <div className='flex-1 flex flex-col gap-8 '>
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