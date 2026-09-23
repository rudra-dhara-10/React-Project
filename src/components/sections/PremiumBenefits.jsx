import React from "react";
import Card from "../common/Card";

const PremiumBenefits = () => {
  return (
    <div className="w-full h-[800px] bg-[#2D3F55] px-36 text-white flex justify-center ">
      <div className="heading mt-20 flex flex-col items-center gap-2">
        <h1 className="text-5xl font-semibold capitalize">Premium TV ads without the premium cost</h1>
        <h3 className="mb-10">Become a local household name with streaming TV.</h3>
        <Card />
      </div>
    </div>
  );
};

export default PremiumBenefits;
