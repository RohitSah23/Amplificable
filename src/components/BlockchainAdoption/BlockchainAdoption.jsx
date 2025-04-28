import React from "react";
import { BlockchainAdoptionImage } from "../../assets/assets";
import Button from "../Button/Button";

const BlockchainAdoption = () => {
  return (
    <>
      <div className="bg-gray-200 py-24 text-center">
        <h1 className="text-center text-gray-800 text-xl md:text-2xl font-semibold mb-8">
          Simplifying Blockchain Adoption{" "}
        </h1>
        <div>Our mission is to make blockchain accessible & impactful by</div>
        <div>
          guiding businesses through every step of the journey—from discovery to
          implementation.
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button text="Learn How We Help" />
          <Button text="Book A Call" />
        </div>
        <div className="flex justify-center">
          <img
            src={BlockchainAdoptionImage}
            alt="BlockchainAdoptionImage"
            className="w-full max-w-7xl px-4"
          />
        </div>
      </div>
    </>
  );
};

export default BlockchainAdoption;
