import React from "react";
import Vector1 from "../../assets/PremiumBenifits/Vector1.svg";
import Vector2 from "../../assets/PremiumBenifits/Vector2.svg";
import Vector3 from "../../assets/PremiumBenifits/Vector3.svg";
import Vector4 from "../../assets/PremiumBenifits/Vector4.svg";
import Right from "../../assets/PremiumBenifits/right.jpg";
import Line from "../../assets/PremiumBenifits/Line 114.svg";

const PremiumBenefits = () => {
  const premiumBenefitsData = [
    {
      id: 1,
      title: "Reduce Lead Costs",
      description: "Automatically check generated creatives against",
      icon: Vector1,
      active: true,
    },
    {
      id: 2,
      title: "Reach More Customers",
      description: "Turn your approved commercial into a campaign",
      icon: Vector2,
      active: false,
    },
    {
      id: 3,
      title: "Capture Attention",
      description: "Define where your campaign runs and reach",
      icon: Vector3,
      active: false,
    },
    {
      id: 4,
      title: "Build Local Authority",
      description: "Manage active campaigns, monitor performance",
      icon: Vector4,
      active: false,
    },
  ];

  return (
    <div className="lg:px-36 md:px-12 px-6 py-15 w-full mb-5">
      <div className="heading flex gap-2 flex-col lg:flex-row lg:justify-between lg:items-center">
        <h1 className="lg:text-5xl lg:flex-1 text-3xl font-bold">Unlock Premium Benefits <br className="hidden lg:block" /> With Our Advanced Features</h1>
        <h3 className="lg:w-[40%] lg:ml-auto lg:pl-35 ">
          Give us your website and let AI understand your <br className="hidden lg:block" /> business. AdCactus
          analyzes your content, <br className="hidden lg:block" /> brand, products, and visual assets.
        </h3>
      </div>
      <div className="other flex flex-col lg:flex-row py-10 gap-5">
        <div className="left lg:w-[45%] ">
          {premiumBenefitsData.map((item) => (
            <div id={item.id} className="card  px-4 py-2 flex flex-col gap-1">
              <div className="heading  flex gap-2 ">
                <img className="w-7 border p-2 rounded-md" src={item.icon} alt="" />
                <h2>{item.title}</h2>
              </div>
              <p>{item.description}</p>
              <img className="mt-3 mb-3" src={Line} alt="" />
            </div>
          ))}
        </div>
        <div className="right p-5 bg-white shadow-lg rounded-2xl">
          <img className="rounded-2xl h-60 w-full " src={Right} alt="" />
          <h1 className="mt-3 lg:text-2xl text-xl font-semibold">Lower Your Cost Per Lead With Smarter TV Advertising</h1>
          <p className="text-sm ">Reach people who have already shown interest in your business, reduce wasted ad spend, and <br className="hidden lg:block" /> put your budget toward audiences most likely to convert.</p>
        </div>
      </div>
    </div>
  );
};

export default PremiumBenefits;
