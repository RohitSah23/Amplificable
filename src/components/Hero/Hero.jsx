import React from "react";
import { ChevronRight } from "lucide-react";

import heroside from "../../assets/heroPic.avif";

const Hero = () => {
  return (
    <div>
      <div className="px-6 md:px-12 lg:px-40 min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-black via-amber-900 to-amber-700">
        <div className="w-full md:w-1/2 p-4">
          <div className="font-bold mb-4 uppercase rounded-full text-white flex items-center px-3 py-1 text-xs md:text-sm lg:text-base cursor-pointer hover:text-amber-600 transition duration-300">
            Tailored Blockchain and Outsourcing Solutions
            <span className="" aria-hidden="true">
              <ChevronRight size={16} />
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl mb-4 text-white leading-tight">
            Unlock The Power Of Blockchain
            <span className="font-bold block md:inline text-3xl md:text-5xl lg:text-7xl">
              - Without The Complexity
            </span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-4 text-gray-300">
            With Amplificable, you can integrate blockchain solutions seamlessly
            and quickly, along with expert outsourcing services to scale your
            business faster and smarter.
          </p>
          <button className="bg-amber-500 text-lg md:text-base lg:text-lg text-white px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300">
            Learn How We Help
          </button>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <img src={heroside} alt="Hero" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
