import React from "react";
import BgImage from "../../assets/Comercials/Background.png";
import Line from "../../assets/Comercials/Line 250.png";
import Vector1 from "../../assets/Comercials/Vector1.jpg";
import Vector2 from "../../assets/Comercials/Vector2.jpg";

const Comercials = () => {
  return (
    <div className="bg-[#2D3F55] px-36 py-15 text-white flex flex-col gap-5 items-center text-center">
      <h1 className="text-5xl font-semibold capitalize">
        See what happens when great <br /> businesses become great commercials.
      </h1>
      <p className="text-sm">
        Explore how businesses can turn their existing content into professional
        advertising creative with <br /> AdCactus — from the first idea to the
        finished commercial.
      </p>
      <div
        className="images w-[60%] h-80  bg-cover bg-center bg-no-repeat rounded-2xl flex flex-col justify-between py-10 px-5 text-left "
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <span>DIRECTV</span>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">
            From Website to a Commercial <br /> That Makes People Hungry
          </h1>
          <p className="text-sm text-zinc-200">
            Harbor Kitchen had a strong online presence but no professional
            commercial. AdCactus <br /> analyzed its website, products, imagery,
            and brand style to c
          </p>
          <button className="px-5 w-30 text-sm py-2 border-none bg-[#ffffff] text-black rounded-4xl cursor-pointer capitalize">
            Read More
          </button>
        </div>
      </div>
      <div className="flex gap-5 w-full items-center">
        <img className="h-1 w-[92%] flex-1  object-contain" src={Line} alt="" />
        <div className="flex w-[8%] gap-3 ">
          <div className="w-10 h-10 border rounded-full flex items-center justify-center">
            <img src={Vector1} alt="" />
          </div>
          <div className="w-10 h-10 border rounded-full flex items-center justify-center">
            <img src={Vector2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comercials;
