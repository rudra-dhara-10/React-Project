import React from "react";
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
      <div className="w-full lg:px-36 px-6 md:px-12">
        <div className=" lg:flex flex-row gap-5 mt-10 w-full ">
          <div className="left-text flex flex-col gap-4 w-3/5 lg:h-110">
            <div className="vector-text flex gap-1 border rounded-full w-65 px-2 lg:px-3 py-1 lg:w-85">
              <img className="lg:w-4 w-2" src={Vector} alt="" />
              <p className="lg:text-[12px] text-[9px]">
                Now in private beta · Backed by leading health investors
              </p>
            </div>
            <div className="heading">
              <h1 className="lg:text-5xl text-2xl md:4xl capitalize font-bold">
                A smarter way <br className="hidden lg:block" /> to make your <br className="hidden lg:block" /> next <br className="block lg:hidden" /> commercial.
              </h1>
            </div>
            <div className="about">
              <p>
                Turn your business website or existing video into a professional
                <br className="hidden lg:block" />
                commercial with AI — ready to review, download, and take <br className="hidden lg:block" /> 
                toward streaming TV.
              </p>
            </div>
            <div className="btn flex gap-3">
              <button className="lg:px-8 lg:py-2 lg:text-base text-sm px-2 py-1 border-none bg-[#A8F0B8] rounded-full cursor-pointer capitalize">
                Get on TV
              </button>
              <button className="lg:px-8 lg:py-2 lg:text-base text-sm px-2 py-1 border-none bg-[#2A3748] text-white rounded-full cursor-pointer capitalize">
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
          <div className="right-img py-2 lg:flex items-center justify-center w-full ">
            <img className="lg:w-full  lg:h-100 lg:object-cover w-full" src={HeroImg} alt="" />
          </div>
        </div>
        <div className="h-25 mt-5 flex justify-evenly items-center mb-10 border-t border-b border-zinc-300">
          <img className="lg:w-20 w-10" src={Image1} alt="" />
          <img src={Line} alt="" />
          <img className="lg:w-20 w-10 lg:h-20" src={Image2} alt="" />
          <img src={Line} alt="" />
          <img className="lg:w-20 w-10 lg:h-20" src={Image3} alt="" />
          <img src={Line} alt="" />
          <img className="lg:w-20 w-10 lg:h-20" src={Image4} alt="" />
          <img src={Line} alt="" />
          <img className="lg:w-20 w-10 lg:h-20" src={Image5} alt="" />
          <img src={Line} alt="" />
          <img className="lg:w-20 w-10 lg:h-20" src={Image6} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
