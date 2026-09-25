import React from "react";
import Navber from "../layout/Navber";
import Vector from "../../assets/Header/Vector.svg";
import Vector1 from "../../assets/Header/Vector1.svg";
import Line1 from "../../assets/Header/Line1.svg";
import HeroImg from "../../assets/Header/Hero_Img.jpg";
import Image1 from "../../assets/Header/image1.jpg";
import Image2 from "../../assets/Header/image2.jpg";
import Image3 from "../../assets/Header/image3.jpg";
import Image4 from "../../assets/Header/image4.jpg";
import Image5 from "../../assets/Header/image5.jpg";
import Image6 from "../../assets/Header/image6.jpg";
import Line from "../../assets/Header/Line9.png";

const Hero = () => {
  return (
    <>
      <Navber />
      <div className="w-full px-36">
        <div className="header flex mt-10 w-full">
          <div className="left-text flex flex-col gap-4 w-[604px] h-[532px]">
            <div className="vector-text flex border rounded-full px-3 py-1 w-96">
              <img className="w-4" src={Vector} alt="" />
              <p className="text-[12px]">
                Now in private beta · Backed by leading health investors
              </p>
            </div>
            <div className="heading">
              <h1 className="text-5xl capitalize font-bold">
                A smarter way <br /> to make your <br /> next commercial.
              </h1>
            </div>
            <div className="about">
              <p>
                Turn your business website or existing video into a professional{" "}
                <br />
                commercial with AI — ready to review, download, and take <br />{" "}
                toward streaming TV.
              </p>
            </div>
            <div className="btn flex gap-3">
              <button className="px-8 py-2 border-none bg-[#A8F0B8] rounded-full cursor-pointer capitalize">
                Get on TV
              </button>
              <button className="px-8 py-2 border-none bg-[#2A3748] text-white rounded-full cursor-pointer capitalize">
                Contact us
              </button>
            </div>
            <div className="rating flex gap-5 mt-2 ">
              <div className="flex gap-1">
                <img className="w-4" src={Vector1} alt="" />
                <h2 className="text-[12px]">HIPAA-grade security</h2>
              </div>
              <img className="h-4" src={Line1} alt="" />
              <div className="flex gap-1">
                <img className="w-4" src={Vector1} alt="" />
                <h2 className="text-[12px]">40+ device integrations</h2>
              </div>
              <div className="flex gap-1">
                <img className="w-4" src={Vector1} alt="" />
                <h2 className="text-[12px]">Cancel anytime</h2>
              </div>
            </div>
          </div>
          <div className="right-img flex items-center justify-center ">
            <img className="h-90% w-full object-cover" src={HeroImg} alt="" />
          </div>
        </div>
        <div className="h-[125px] flex justify-evenly items-center mb-10 border-t border-b border-zinc-300">
          <img className="w-20" src={Image1} alt="" />
          <img src={Line} alt="" />
          <img className="w-20 h-20" src={Image2} alt="" />
          <img src={Line} alt="" />
          <img className="w-20 h-20" src={Image3} alt="" />
          <img src={Line} alt="" />
          <img className="w-20 h-20" src={Image4} alt="" />
          <img src={Line} alt="" />
          <img className="w-20 h-20" src={Image5} alt="" />
          <img src={Line} alt="" />
          <img className="w-20 h-20" src={Image6} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
