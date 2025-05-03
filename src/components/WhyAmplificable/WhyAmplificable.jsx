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
    <div className="relative w-full overflow-hidden py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${BG2}")` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-neutral-300 text-2xl font-semibold mb-2">
            Why Amplificable?
          </h1>
          <div className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Blockchain and outsourcing experience you can trust.
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div className="flex-1 space-y-10">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-4"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src={reason.image}
                  alt="reason icon"
                  className="w-16 h-16 object-contain"
                />
                <p className="text-white text-lg md:text-xl text-center md:text-left">
                  {reason.text}
                </p>
              </motion.div>
            ))}
  <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center gap-4 mt-12 flex-col md:flex-row"
          >
            <Button text="Learn How We Help" className="text-white" />
            <Button
              text="Book A Quick Call"
              className="bg-white text-black hover:bg-gray-100 border border-gray-300"
            />
          </motion.div>
          </div>

          <motion.div
            className="flex-1 hidden lg:block"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={heroImage}
              alt="Consulting"
              className="w-full hidden lg:block h-auto max-h-[32rem] object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyAmplificable;
