import React from "react";
import { image1, image3, image4, hexaBG } from "../../assets/assets";

const WhyChooseBlockchain = () => {
  return (
    <div
      className="min-h-screen px-40 flex items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url(${hexaBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl">
        <div className="text-2xl font-semibold text-center pt-8 mb-4 text-gray-800">
          Why Choose Blockchain?
        </div>
        <div className="text-4xl text-center font-semibold text-gray-400 mb-12">
          Overcome Blockchain Adoption Challenges
        </div>

        <div className="grid grid-cols-3 gap-4 ">
          <Card
            image={image1}
            text="Integration challenges with existing systems"
          />
          <Card
            image={image1}
            text="Difficulty in identifying suitable use cases"
          />

          {/* Card 3 with heading, spanning 2 rows */}
          <div className="row-span-2 ">
            <Card
              image={image3}
              text="Query your repository with our typesafe SDK, or with any GraphQL Client of your choosing."
              heading="Lack of understanding of blockchain trends"
            />
          </div>

          {/* Card 4 with heading */}
          <div className="col-span-2">
            <Card
              image={image4}
              text="High initial costs and uncertain ROI"
              heading="Query your repository with our typesafe SDK, or with any GraphQL Client of your choosing."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ image, heading, text }) => {
  return (
    <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg h-full">
      <img
        src={image}
        alt={image}
        className="h-full object-contain rounded-lg "
      />
      {heading && <h3 className="text-xl font-semibold mb-2 text-gray-700">{heading}</h3>}
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default WhyChooseBlockchain;
