import React from "react";
import Button from "../Button/Button";
import { BG2 ,heroImage,HeroArrow} from "../../assets/assets";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${BG2}")`, 
        }}
      ></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-40 flex flex-col md:flex-row items-center justify-between min-h-screen">
        <div className="w-full md:w-1/2 p-4">
          <div className="font-bold mb-4 uppercase rounded-full text-white flex items-center px-3 py-1 text-xs md:text-sm lg:text-base cursor-pointer hover:text-amber-600 transition duration-300">
            Tailored Blockchain and Outsourcing Solutions
            <img src={HeroArrow}  className="ml-2" />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl mb-4 text-white leading-tight">
            Unlock The Power Of Blockchain
            <span className="block md:inline font-bold">
              {" "}– Without The Complexity
            </span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-4 text-gray-300">
            With Amplificable, you can integrate blockchain solutions seamlessly
            and quickly, along with expert outsourcing services to scale your
            business faster and smarter.
          </p>
          <Button text="Learn How We Help" className="text-white" />
        </div>

        <div className="w-full md:w-1/2 p-4">
          <img src={heroImage} alt="heroImage" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
