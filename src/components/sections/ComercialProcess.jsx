import React from "react";
import Vector from "../../assets/ComercialProcess/Vector.svg";
import Right from "../../assets/ComercialProcess/RightVector.svg";
import Wrong from "../../assets/ComercialProcess/WrongVector.svg";

const withItems = [
  "Start with your website or existing video",
  "AI-powered commercial creation",
  "Choose 15, 30, or 60 seconds",
  "Preview and approve before moving forward",
  "Built-in content moderation and review",
  "Download finished commercial or continue to campaign",
];

const traditionalItems = [
  "Start with a lengthy production process",
  "Multiple creative and production teams",
  "Fixed production requirements and formats",
  "Limited visibility until production is complete",
  "Separate review and compliance processes",
  "Separate workflows for distribution and advertising",
];

const ComercialProcess = () => {
  return (
    <div className="flex flex-col bg-[#A8F0B8] px-36 py-16 font-['Urbanist'] text-[#293748]">
      {/* Heading */}
      <div className="heading flex flex-col items-center gap-5 text-center">
        <h1 className="text-5xl font-semibold capitalize">
          The commercial process doesn't have <br /> to be complicated.
        </h1>
        <p className="text-sm">
          AdCactus brings creation, review, and campaign preparation into one
          streamlined experience.
        </p>
      </div>

      {/* Comparison card: no padding, dark panel is flush */}
      <div className="boxes mx-auto mt-10 flex w-full max-w-[1500px] rounded-3xl bg-white">
        {/* Left: dark panel */}
        <div className="left w-[52%] shrink-0 rounded-3xl bg-[#293748] px-7 py-8 text-white">
          <h1 className="mb-4 text-[22px] font-semibold">With AdCactus</h1>
          <div className="flex flex-col gap-5">
            {withItems.map((text) => (
              <p
                key={text}
                className="flex items-center justify-between gap-4 text-[17px]"
              >
                <span className="flex items-center gap-3">
                    <img className="h-5 w-5" src={Vector} alt="" />
                  {text}
                </span>
                <img src={Right} alt="" className="h-5 w-5 shrink-0" />
              </p>
            ))}
          </div>
        </div>

        {/* Right: white panel */}
        <div className="right flex-1 px-12 py-8">
          <h1 className="mb-4 text-[22px] font-semibold">
            Traditional Commercial
          </h1>
          <div className="flex flex-col gap-5">
            {traditionalItems.map((text) => (
              <p key={text} className="flex items-center gap-3 text-[17px]">
                <img src={Wrong} alt="" className="h-5 w-5 shrink-0" />
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComercialProcess;