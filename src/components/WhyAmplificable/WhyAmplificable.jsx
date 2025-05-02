import React from "react";
import Button from "../Button/Button";
import { motion } from "motion/react";

import { BG2, Time, Atom, Hand, heroImage } from "../../assets/assets";

const WhyAmplificable = () => {
  const reasons = [
    {
      image: Hand,
      text: "Team of seasoned blockchain consultants with expertise in finance, healthcare, & more.",
    },
    {
      image: Atom,
      text: "Proven track record of delivering scalable blockchain solutions.",
    },
    {
      image: Time,
      text: "Strong partnerships with leading Layer 1 and Layer 2 protocols.",
    },
  ];

  return (
    <div className="relative w-full px-40 h-full ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${BG2}")` }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-center text-neutral-300 text-2xl font-semibold mb-4">
            Why Amplificable?
          </h1>
          <div className="text-4xl md:text-5xl text-center text-white">
            Blockchain and outsourcing experience you can trust.
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row px-6 md:px-12 lg:px-24 gap-8">
        <div className="left flex-1 flex flex-col items-center md:items-start gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={i}
            >
              <img
                src={reason.image}
                alt=""
                className="h-20 w-20 object-contain mb-4"
              />
              <p className="text-white text-3xl text-center md:text-left mb-4">
                {reason.text}
              </p>
            </motion.div>
          ))}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex gap-4 mt-4 pb-20 flex-col "
          >
            <Button text="Learn How We Help" className="text-white" />
            <Button
              text="Book A Quick Call"
              className="bg-white text-black hover:bg-gray-100 border border-gray-300"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="right flex-1 flex justify-center items-center"
        >
          <img src={heroImage} alt="Consulting" className=" object-fill" />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyAmplificable;
