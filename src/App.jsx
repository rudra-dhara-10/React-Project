import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PremiumTvAds from "./components/TvAds/PremiumTvAds";
import PremiumBenefits from "./components/Benefits/PremiumBenefits";
import ComercialProcess from "./components/Comercial/ComercialProcess";
import PrecisionTargeting from "./components/PrecisionTargeting/PrecisionTargeting";
import Commercials from "./components/Commercials/Commercials";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Comercial from "./components/NextCommercial/Comercial";

const Appp = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PremiumTvAds />
      <PremiumBenefits />
      <ComercialProcess />
      <PrecisionTargeting />
      <Commercials />
      <About />
      <Comercial />
      <Footer />
    </div>
  );
};

export default Appp;