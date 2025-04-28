import React from "react";
import { image1, image2, image3, hexaBG } from "../../assets/assets"; // Import assets from assets.js

const WhyChooseBlockchain = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${hexaBG})`, // Set hexagonal background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-3xl font-semibold text-center pt-8 text-black">Why Choose Blockchain</div>
      <div className="text-lg text-center text-gray-600 mb-12">
        Overcome Blockchain Adoption Challenges
      </div>

      <div className="grid grid-cols-3 gap-4 px-4">
        {/* Pass imported image URLs to Card */}
        <Card image={image1} text="Card 1 content" />
        <Card image={image2} text="Card 2 content" />
        
        {/* Card 3 with heading, spanning 2 rows */}
        <div className="row-span-2">
          <Card image={image3} text="Card 3 content" heading="Card 3 Heading" />
        </div>

        {/* Card 4 with heading */}
        <div className="col-span-2">
          <Card image={image3} text="Card 4 content" heading="Card 4 Heading" />
        </div>
      </div>
    </div>
  );
};

const Card = ({ image, heading, text }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
      <img src={image} alt="box image" className="w-full h-40 object-cover rounded-lg mb-4" />
      {heading && <h3 className="text-xl font-semibold mb-2">{heading}</h3>}
      <p className="text-center text-gray-700">{text}</p>
    </div>
  );
};

export default WhyChooseBlockchain;
