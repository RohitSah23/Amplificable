import React from "react";
import Button from "../Button/Button";
import Card from "./Card";
import { Offer1,Offer2,Offer3 } from "../../assets/assets";

const WhatWeOffer = () => {
  return (
    <div className="px-6 md:px-12 lg:px-40 min-h-screen bg-gradient-to-br from-black via-amber-900 to-amber-700 py-16">
      <h1 className="text-center text-neutral-300 text-2xl font-semibold mb-4">
        What We Offer?
      </h1>
      <div className="text-5xl text-center mb-2 text-white">
        Comprehensive Blockchain
      </div>
      <div className="text-5xl text-center font-semibold mb-8 text-white">
        Consulting Services
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col flex-grow basis-full md:basis-[45%] max-w-md">
          <Card
            image={Offer1}
            text="Identify potential blockchain use cases tailored to your business."
            heading="Discover"
          />
        </div>
        <div className="flex flex-col flex-grow basis-full md:basis-[45%] max-w-md">
          <Card
            image={Offer2}
            text="Strategic roadmaps designed for your unique requirements."
            heading="Plan"
          />
        </div>
        <div className="flex flex-col flex-grow basis-full md:basis-[45%] max-w-md">
          <Card
            image={Offer3}
            text="Implementation and scaling with expert project management."
            heading="Adopt"
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <Button text="Learn How We Help" className="text-white" />
        <Button
          text="Book A Quick Call"
          className="bg-white text-black hover:bg-gray-100 border border-gray-300"
        />
      </div>
    </div>
  );
};

export default WhatWeOffer;
