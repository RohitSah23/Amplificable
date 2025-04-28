import React from "react";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import WhyChooseBlockchain from "./components/WhyChooseBlockchain/WhyChooseBlockchain";
import BlockchainAdoption from "./components/BlockchainAdoption/BlockchainAdoption";
import WhatWeOffer from "./components/WhatWeOffer/WhatWeOffer";
import IndustriesWeServe from "./components/IndustriesWeServe/IndustriesWeServe";
import WhyAmplificable from "./components/WhyAmplificable/WhyAmplificable";
import Blogs from "./components/Blogs/Blogs";
import PoweringProtocols from "./components/PoweringProtocols/PoweringProtocols";
import FAQ from "./components/FAQ/FAQ";
import UnlockPotential from "./components/UnlockPotential/UnlockPotential";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Hero />
      <Companies />
      <WhyChooseBlockchain />
      <BlockchainAdoption />
      <WhatWeOffer />
      <IndustriesWeServe />
      <WhyAmplificable />
      <Blogs />
      <PoweringProtocols />
      <FAQ />
      <UnlockPotential />
      <Footer />
    </>
  );
};
export default App;
