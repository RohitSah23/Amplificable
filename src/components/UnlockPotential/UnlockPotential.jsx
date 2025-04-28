import React from "react";
import Button from "../Button/Button";
import { PotentialBG } from "../../assets/assets";
import { motion } from "motion/react";

const UnlockPotential = () => {
  return (
    <div className="relative py-20 w-full overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${PotentialBG}")`,
        }}
      ></div>
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-white text-6xl md:text-6xl font-semibold mb-4">
            Unlock the Potential of
          </h1>
          <h1 className="text-white text-6xl md:text-6xl font-bold mb-8">
            Blockchain for Your Business
          </h1>
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl text-white mb-12"
        >
          Let Amplificable guide you through blockchain adoption and outsourced
          services with customized strategies, products, and expert
          implementation.{" "}
        </motion.div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pb-10"
        >
          <Button
            text="Book A Quick Call"
            className="bg-white text-black hover:bg-gray-100 border border-gray-300"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default UnlockPotential;
