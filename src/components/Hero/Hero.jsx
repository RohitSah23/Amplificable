import React from "react";
import { motion } from "motion/react";
import Button from "../Button/Button";
import { BG2, heroImage, HeroArrow } from "../../assets/assets";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden lg:min-h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url("${BG2}")` }}
      />
      <div className="relative z-20">
        <Navbar />
      </div>
      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16 py-12 flex flex-col md:flex-row items-center gap-8 pt-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex-1 space-y-6 text-center md:text-left lg:text-left lg:pt-14">
          <motion.div
            className="inline-flex items-center uppercase text-white border border-black bg-white/5 backdrop-blur px-3 py-1 rounded-full text-xs lg:text-base sm:text-sm md:text-xs "
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Tailored Blockchain and Outsourcing Solutions
            <img
              src={HeroArrow}
              alt="→"
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
            />
          </motion.div>
          <motion.h1
            className="text-white font-semibold leading-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Unlock The Power Of Blockchain
            <span className="block font-black">– Without The Complexity</span>
          </motion.h1>
          <motion.p
            className="text-neutral-300"
            style={{ fontSize: "clamp(1rem,3vw,1.25rem)" }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            With Amplificable, integrate blockchain seamlessly and scale smarter
            with expert outsourcing services.
          </motion.p>
          <Button text="Learn How We Help" className="text-white lg:my-4" />
        </div>
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={heroImage}
            alt="Blockchain integration illustration"
            className="w-full lg:h-180 md:h-120 h-100 md:max-w-lg lg:max-w-2xl object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
