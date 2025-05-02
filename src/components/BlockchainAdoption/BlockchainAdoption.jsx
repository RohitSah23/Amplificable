import React from "react";
import { BlockchainAdoptionImage } from "../../assets/assets";
import Button from "../Button/Button";
import { motion } from "motion/react";

const BlockchainAdoption = () => {
  return (
    <div className="bg-neutral-100 py-20 text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-semibold mb-8 text-gray-800"
      >
        Simplifying Blockchain Adoption
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xl md:text-3xl font-semibold mb-2 text-neutral-500"
      >
        Our mission is to make blockchain accessible & impactful by
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xl md:text-3xl font-semibold mb-8 text-neutral-500"
      >
        guiding businesses through every step of the journey
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center gap-4 mt-8 mb-6 flex-col md:flex-row items-center"
      >
        <Button text="Learn How We Help" className="text-white" />
        <Button
          text="Book A Quick Call"
          className="bg-white text-black hover:bg-gray-100 border border-gray-300"
        />
      </motion.div>

      <motion.div
        className="flex justify-center pt-8"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={BlockchainAdoptionImage}
          alt="Blockchain Adoption"
          className="w-full  px-6"
        />
      </motion.div>
    </div>
  );
};

export default BlockchainAdoption;
