import React from "react";
import { image1, image3, hexaBG } from "../../assets/assets"; 

const WhyChooseBlockchain = () => {
  return (
    <div
      className="min-h-screen px-40"
      style={{
        backgroundImage: `url(${hexaBG})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl">

      <div className="text-3xl font-semibold text-center pt-8 text-black">
        Why Choose Blockchain
      </div>
      <div className="text-lg text-center text-gray-600 mb-12">
        Overcome Blockchain Adoption Challenges
      </div>

      <div className="grid grid-cols-3 gap-4 px-4">
        <Card
          image={image1}
          text="Integration challenges with existing systems"
          />
        <Card
          image={image1}
          text="Difficulty in identifying suitable use cases"
          />

        <div className="row-span-2">
          <Card
            image={image3}
            text="Query your repository with our typesafe SDK, or with any GraphQL Client of your choosing."
            heading="Lack of understanding of blockchain trends"
            />
        </div>

        <div className="col-span-2">
          <Card
            image={image3}
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
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
      <img
        src={image}
        alt={image}
        className="w-full h-40 object-fill rounded-lg mb-4"
      />
      {heading && <h3 className="text-xl font-semibold mb-2">{heading}</h3>}
      <p className=" text-gray-700">{text}</p>
    </div>
  );
};

export default WhyChooseBlockchain;
