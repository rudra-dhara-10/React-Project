import React, { useState } from "react";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="relative w-full border-b border-zinc-300 px-6 md:px-12 lg:px-10 xl:px-36 py-5 flex justify-between items-center">
      {" "}
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <div>
          <img className="w-28 md:w-34 " src={logo} alt="Logo" />
        </div>

        {/* Links */}
        <div className="hidden lg:block">
          <ul className="flex gap-6 xl:gap-14  text-sm ">
            <li className="font-semibold whitespace-nowrap hover:text-[#A8F0B8]">
              <a href="#">Home</a>
            </li>
            <li className="font-semibold whitespace-nowrap hover:text-[#A8F0B8]">
              <a href="#">Features</a>
            </li>
            <li className="font-semibold whitespace-nowrap hover:text-[#A8F0B8]">
              <a href="#">Why Choose</a>
            </li>
            <li className="font-semibold whitespace-nowrap hover:text-[#A8F0B8]">
              <a href="#">Testimonial</a>
            </li>
            <li className="font-semibold whitespace-nowrap hover:text-[#87eb9c]">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex gap-3">
          <button className="px-8 py-1 border border-[#A8F0B8] rounded-full cursor-pointer active:scale-96">
            Sign in
          </button>
          <button className="px-6 py-1 border-none bg-[#A8F0B8] rounded-full cursor-pointer whitespace-nowrap active:scale-96">
            +1-555-123-4567
          </button>
        </div>
      </div>
      <button
        className="lg:hidden flex flex-col gap-1.5 z-20"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-black transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`w-6 h-0.5 bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`w-6 h-0.5 bg-black transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-300 flex flex-col items-center gap-6 py-6 z-10">
          <ul className="flex flex-col items-center gap-4 text-sm">
            <li>Home</li>
            <li>Features</li>
            <li>Why Choose</li>
            <li>Testimonial</li>
            <li>Contact Us</li>
          </ul>
          <div className="flex flex-col gap-3 w-full px-8">
            <button className="px-8 py-2 border border-[#A8F0B8] rounded-full cursor-pointer">
              Sign in
            </button>
            <button className="px-6 py-2 border-none bg-[#A8F0B8] rounded-full cursor-pointer">
              +1-555-123-4567
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
