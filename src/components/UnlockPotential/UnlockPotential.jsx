import React from "react";
import Button from "../Button/Button";
import { PotentialBG } from "../../assets/assets"; 

const UnlockPotential = () => {
  return (
    <div className="relative py-20 w-full overflow-hidden flex items-center justify-center">
      
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${PotentialBG}")`,
        }}
      >
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center px-6">
        <h1 className="text-white text-6xl md:text-6xl font-semibold mb-4">
          Unlock the Potential of
        </h1>
        <h1 className="text-white text-6xl md:text-6xl font-bold mb-8">
          Blockchain for Your Business
        </h1>
        <p className="text-3xl text-white mb-12">
        Let Amplificable guide you through blockchain adoption and outsourced services with customized strategies, products, and expert implementation.        </p>

        <div className="pb-10">
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
