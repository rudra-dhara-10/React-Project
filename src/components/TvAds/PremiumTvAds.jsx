import React from 'react'
import Card from "./Card";

const PremiumTvAds = () => {
  return (
    <div className="w-full lg:h-200 bg-[#2D3F55] lg:px-36 md:px-12 px-6 py-10 text-white flex justify-center ">
      <div className="heading mt-10 flex flex-col items-center text-center gap-2">
        <h1 className="lg:text-5xl md:text-3xl text-2xl  font-semibold capitalize">Premium TV ads without the premium cost</h1>
        <h3 className="mb-10 text-sm lg:text-base md:text-base">Become a local household name with streaming TV.</h3>
        <Card />
      </div>
    </div>
  )
}

export default PremiumTvAds