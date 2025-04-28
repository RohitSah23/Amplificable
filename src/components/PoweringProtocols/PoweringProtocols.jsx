import React from "react";
import { PoweringImage } from "../../assets/assets";

const PoweringProtocols = () => {
  return (
    <>
      <div className="px-6 py-16 md:px-12 lg:px-40 h-132 bg-gradient-to-br from-black from-15% via-amber-900 to-amber-700  ">
        <h1 className="text-center text-neutral-300 text-2xl font-semibold mb-4">
          Blockchain Protocols Supported
        </h1>
        <div className="text-5xl text-center mb-12 text-white">
          Powering 40+ Blockchain Protocols
        </div>

        <div className="flex justify-center">
          <img
            src={PoweringImage}
            alt="Powering Protocols"
            className="w-full max-w-7xl px-4"
          />
        </div>
      </div>
    </>
  );
};

export default PoweringProtocols;
