import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form className="p-5 flex flex-col gap-3 bg-[#4C5F76] rounded-3xl w-full">
        <h1 className="text-3xl font-semibold text-white">Get Started with AdCactus</h1>
        <div className="allInput w-full flex flex-col gap-3">
          <div className="inputs flex gap-4">
            <div className="input flex flex-col gap-2 flex-1">
              <label className="text-white">Full Name</label>
              <input type="text" placeholder="Full name" className="bg-white text-black rounded-lg px-3 py-2 outline-none" />
            </div>
            <div className="input flex flex-col gap-2 flex-1">
              <label className="text-white">Phone Number</label>
              <input type="text" placeholder="Phone number" className="bg-white text-black rounded-lg px-3 py-2 outline-none" />
            </div>
          </div>
          <div className="inputs flex gap-4">
            <div className="input flex flex-col gap-2 flex-1">
              <label className="text-white">Email Address</label>
              <input type="text" placeholder="Email address" className="bg-white text-black rounded-lg px-3 py-2 outline-none" />
            </div>
            <div className="input flex flex-col gap-2 flex-1">
              <label className="text-white">Company Name</label>
              <input type="text" placeholder="Company name" className="bg-white text-black rounded-lg px-3 py-2 outline-none" />
            </div>
          </div>
          <div className="inputs flex gap-4">
            <div className="input flex flex-col gap-2 flex-1">
              <label className="text-white">Company Website</label>
              <input type="text" placeholder="Company website url" className="bg-white text-black rounded-lg px-3 py-2 outline-none" />
            </div>
            <div className="input flex flex-col gap-2 flex-1">
              <label className="text-white">Inquiry Type</label>
              <input type="text" placeholder="Select inquiry type" className="bg-white text-black rounded-lg px-3 py-2 outline-none" />
            </div>
          </div>
          <div className="inputs flex">
            <div className="input flex flex-col gap-2 flex-1">
              <label className="text-white">Message</label>
              <input  type="text" placeholder="Write your message" className="bg-white h-15 text-black rounded-lg px-3 py-2 outline-none" />
            </div>
          </div>
        </div>
        <button type="submit" className="bg-green-300 rounded-full px-6 py-2 w-fit text-slate-900 font-medium">
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};

export default ContactForm;