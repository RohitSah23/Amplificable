import React from "react";
import Button from "../Button/Button";
import Card from "./Card";
import { Adopt, Discover, Plan, BG2 } from "../../assets/assets";

const WhatWeOffer = () => {
  const cardsData = [
    {
      image: Discover,
      heading: "Discover",
      text: "Identify potential blockchain use cases tailored to your business.",
    },
    {
      image: Plan,
      heading: "Plan",
      text: "Strategic roadmaps designed for your unique requirements.",
    },
    {
      image: Adopt,
      heading: "Adopt",
      text: "Implementation and scaling with expert project management.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url("${BG2}")` }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20">
        <h1 className="text-center text-neutral-300 text-2xl font-semibold mb-4">
          What We Offer?
        </h1>
        <div className="text-4xl md:text-5xl text-center mb-2 text-white">
          Comprehensive Blockchain
        </div>
        <div className="text-4xl md:text-5xl text-center font-semibold mb-8 text-white">
          Consulting Services
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col flex-grow basis-full md:basis-[30%] max-w-sm"
            >
              <Card image={card.image} heading={card.heading} text={card.text} />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Button text="Learn How We Help" className="text-white" />
          <Button
            text="Book A Quick Call"
            className="bg-white text-black hover:bg-gray-100 border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
