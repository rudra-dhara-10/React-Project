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
    <div className="flex justify-center gap-6">
      {datas.map((data, index) => (
        <div
          key={index}
          className="w-100 p-6 bg-white rounded-2xl flex flex-col items-center justify-center"
        >
          <img
            className="w-full h-55 object-cover rounded-xl"
            src={data.img}
            alt={data.heading}
          />

          <h1 className="text-xl text-black font-semibold mt-5">
            {data.heading}
          </h1>

          <p className="text-zinc-500 mt-3">
            {data.pera}
          </p>

          <button className="mt-5 px-6 py-2 border-none bg-green-300 rounded-full cursor-pointer text-black">
            Get on TV
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;