import React from "react";
import { PoweringImage } from "../../assets/assets";
import { motion } from "motion/react";

const PoweringProtocols = () => {
  return (
    <>
      <div className="px-6 py-16 md:px-12 lg:px-40 h-auto bg-gradient-to-br from-black from-15% via-amber-900 to-amber-700">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-center text-neutral-300 text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Blockchain Protocols Supported
          </h1>
          <div className="text-4xl sm:text-5xl md:text-6xl text-center mb-12 text-white">
            Powering 40+ Blockchain Protocols
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <img
            src={PoweringImage}
            alt="Powering Protocols"
            className="w-full max-w-7xl px-4 object-contain"
          />
        </motion.div>
      </div>
    </>
  );
};

export default PoweringProtocols;
