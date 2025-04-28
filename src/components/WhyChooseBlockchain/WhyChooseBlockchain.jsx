import React from "react";
import Card from "./Card";
import { image1, image2, image3, image4, BGHexa } from "../../assets/assets";
import { motion } from "motion/react";

const WhyChooseBlockchain = () => {
  return (
    <div
      className="min-h-screen px-6 md:px-12 lg:px-40 flex items-center justify-center"
      style={{
        backgroundImage: `url("${BGHexa}")`,
      }}
    >
      <div className="max-w-6xl w-full mb-2">
        <div className="text-2xl font-semibold text-center pt-8 mb-4 text-gray-800">
          Why Choose Blockchain?
        </div>
        <div className="text-4xl text-center font-semibold text-neutral-400 mb-12">
          Overcome Blockchain Adoption Challenges
        </div>

        <div className="md:grid md:grid-cols-3 md:gap-4 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card
              image={image1}
              text="Integration challenges with existing systems"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card
              image={image2}
              text="Difficulty in identifying suitable use cases"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="row-span-2"
          >
            <Card
              image={image3}
              heading="Lack of understanding of blockchain trends"
              text="Query your repository with our typesafe SDK, or with any GraphQL Client of your choosing."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="col-span-2"
          >
            <Card
              image={image4}
              heading="Query your repository with our typesafe SDK, or with any GraphQL Client of your choosing."
              text="High initial costs and uncertain ROI"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseBlockchain;
