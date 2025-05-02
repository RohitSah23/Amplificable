import React from "react";
import Button from "../Button/Button";
import { PotentialBG } from "../../assets/assets";
import { motion } from "motion/react";

const UnlockPotential = () => {
  return (
    <div className="relative py-20 w-full overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${PotentialBG}")` }}
      ></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-4">
            Unlock the Potential of
          </h1>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Blockchain for Your Business
          </h1>
        </motion.div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-10 max-w-4xl"
        >
          Let Amplificable guide you through blockchain adoption and outsourced
          services with customized strategies, products, and expert implementation.
        </motion.div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Button
            text="Book A Quick Call"
            className="bg-white text-black hover:bg-gray-100 border border-gray-300 px-6 py-3 text-base sm:text-lg cursor-pointer"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default UnlockPotential;
