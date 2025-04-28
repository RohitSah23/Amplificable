import React from "react";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import WhyChooseBlockchain from "./components/WhyChooseBlockchain/WhyChooseBlockchain";
import BlockchainAdoption from "./components/BlockchainAdoption/BlockchainAdoption";

const App = () => {
  return (
    <>
      <Hero/>
      <Companies/>
      <WhyChooseBlockchain/>
      <BlockchainAdoption/>
    </>
  );
};
export default App;
