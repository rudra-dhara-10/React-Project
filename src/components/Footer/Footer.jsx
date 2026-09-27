import React from "react";
import Logo from "../../assets/logo.svg";
import Phone from "../../assets/Vector.svg";

const Footer = () => {
  return (
    <div className="lg:px-36 md:px-12 px-6 bg-[#303D4E] w-full">
      <div className="top w-full flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between py-10 border-b border-zinc-200">
        <img className="lg:w-40 md:w-35 w-28" src={Logo} alt="" />
        <ul className="flex lg:gap-7 md:gap-5 gap-2 text-white">
          <li className="text-sm lg:text-base md:text-sm">Home</li>
          <li className="text-sm lg:text-base md:text-sm">Features</li>
          <li className="text-sm lg:text-base md:text-sm">Why Choose</li>
          <li className="text-sm lg:text-base md:text-sm">Testimonial</li>
          <li className="text-sm lg:text-base md:text-sm">Contact Us</li>
        </ul>
        <button className="lg:px-5 px-1 w-40 text-sm py-2 border-none bg-[#A8F0B8] rounded-full cursor-pointer capitalize flex lg:gap-2 gap-1 items-center justify-center ">
          <img className="w-3" src={Phone} alt="" /> +1-555-123-4567
        </button>
      </div>
      <div className="down text-white flex flex-col lg:flex-row gap-1 py-5 justify-between">
        © AdCactus 2026. All Rights Reserved
        <div className="right flex gap-5">
          <h2>Privacy Policy</h2>
          <h2>Terms & Conditions</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
