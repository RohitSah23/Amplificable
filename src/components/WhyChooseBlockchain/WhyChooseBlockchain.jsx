import React from "react";
import Card from "./Card";
import { image1, image2, image3, image4, hexaBG } from "../../assets/assets";

const WhyChooseBlockchain = () => {
  return (
    <div
      className="min-h-screen px-40 flex items-center justify-center bg-gray-100 "
      style={{
        backgroundImage: `url(${hexaBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mb-2">
        <div className="text-2xl font-semibold text-center pt-8 mb-4 text-gray-800">
          Why Choose Blockchain?
        </div>
        <div className="text-4xl text-center font-semibold text-neutral-400 mb-12">
          Overcome Blockchain Adoption Challenges
        </div>

        <div className="md:grid md:grid-cols-3 md:gap-4 flex flex-col gap-4">
          <Card
            image={image1}
            text="Integration challenges with existing systems"
          />
          <Card
            image={image2}
            text="Difficulty in identifying suitable use cases"
          />

          <div className="row-span-2 ">
            <Card
              image={image3}
              text="Query your repository with our typesafe SDK, or with any GraphQL Client of your choosing."
              heading="Lack of understanding of blockchain trends"
            />
          </div>

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

export default WhyChooseBlockchain;
