import React from "react";

import img1 from "../../assets/PremiumTvAds/image1.jpg";
import img2 from "../../assets/PremiumTvAds/image2.jpg";
import img3 from "../../assets/PremiumTvAds/image3.jpg";


const Card = () => {
  const datas = [
    {
      img: img1,
      heading: "Get your own custom TV ad",
      pera: "Professional TV ads tailored to your brand. Made to capture attention and drive results.",
    },
    {
      img: img2,
      heading: "We map your revenue to target your audience",
      pera: "Advanced targeting that connects your brand with the right households.",
    },
    {
      img: img3,
      heading: "Broadcast your brand on premium streaming platforms",
      pera: "Run your ads where your audience is already watching.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 justify-items-center">
      {datas.map((data, index) => (
        <div
          key={index}
          className="w-full max-w-sm p-5 bg-white rounded-2xl flex flex-col gap-2 lg:gap-3 lg:items-center lg:justify-center"
        >
          <img
            className="w-full lg:h-55 object-cover rounded-xl"
            src={data.img}
            alt={data.heading}
          />

          <h1 className="lg:text-xl lg:px-5 text-left lg:text-center text-black font-semibold">
            {data.heading}
          </h1>

          <p className="text-zinc-500 lg:px-8 lg:text-sm text-left lg:text-center">
            {data.pera}
          </p>

          <button className="lg:mt-5 lg:px-4 lg:py-2 w-25 px-2 py-1 text-sm border-none bg-green-300 rounded-full cursor-pointer text-black">
            Get on TV
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;