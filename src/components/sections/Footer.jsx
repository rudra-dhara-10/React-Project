import React from "react";
import Logo from "../../assets/logo.svg";
import Phone from "../../assets/Vector.svg";

const Footer = () => {
  return (
    <div className="px-36 bg-[#303D4E] w-full">
      <div className="top w-full flex items-center justify-between py-10 border-b border-zinc-200">
        <img className="w-40" src={Logo} alt="" />
        <ul className="flex gap-7 text-white">
          <li>Home</li>
          <li>Features</li>
          <li>Why Choose</li>
          <li>Testimonial</li>
          <li>Contact Us</li>
        </ul>
        <button className="px-5 text-sm py-2 border-none bg-[#A8F0B8] rounded-full cursor-pointer capitalize flex gap-2 items-center justify-center ">
          <img className="w-3" src={Phone} alt="" /> +1-555-123-4567
        </button>
      </div>
      <div className="down text-white flex py-5 justify-between">
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
