import React from "react";
import Button from "../Button/Button";
import { Potential } from "../../assets/assets"; // <-- Your images here

const UnlockPotential = () => {
  return (
    <div className="relative px-6 py-16 md:px-12 lg:px-20 h-auto bg-gradient-to-br from-orange-500 via-amber-900 to-amber-700 overflow-hidden">
      
      {/* Left Corner Image */}
      <img
        src={Potential}
        alt="Left Decoration"
        className=" bottom-67  left-219.5 absolute  cursor-pointer rotate-180"
      />
      <img
        src={Potential}
        alt="Left Decoration"
        className=" top-66 left-229  absolute  cursor-pointer"
      />

      {/* Right Corner Image */}
      <img
        src={Potential}
        alt="Left Decoration"
        className=" bottom-67  right-229 absolute  cursor-pointer rotate-180"
      />
      <img
        src={Potential}
        alt="Left Decoration"
        className=" top-66 right-219.5  absolute  cursor-pointer"
      />
      {/* Main Content */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-white text-6xl font-semibold mb-4">
          Unlock the Potential of
        </h1>
        <h1 className="text-white text-6xl font-bold mb-4">
          Blockchain for Your Business
        </h1>
        <div className="text-3xl  text-white font-semibold mb-12">
          Let Amplificable guide you through blockchain adoption with customized strategies and expert implementation.
        </div>

        <div className="pb-20">
          <Button
            text="Book A Quick Call"
            className="bg-white text-black hover:bg-gray-100 border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default UnlockPotential;
