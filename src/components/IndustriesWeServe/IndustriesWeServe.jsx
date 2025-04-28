import React from "react";
import IndustryCard from "./IndustryCard";
import {
  Energy,
  Finance,
  GovSector,
  HealthCare,
  SupplyChain,
  RealEstate,
} from "../../assets/assets";
import { motion } from "motion/react";

const IndustriesWeServe = () => {
  const industries = [
    {
      img: HealthCare,
      heading: "Healthcare",
      subHeading: "Patient data security and drug traceability.",
      desc: "Enabling secure patient data management, drug traceability, and personalized care solutions.",
    },
    {
      img: Finance,
      heading: "Finance & Banking",
      subHeading: "Secure transactions and fraud prevention",
      desc: "Redefining trust with secure transactions, fraud prevention, and instant cross-border payments.",
    },
    {
      img: SupplyChain,
      heading: "Supply Chain",
      subHeading: "Transparency from source to consumer.",
      desc: "Ensuring transparency, traceability, and efficiency from source to consumer.",
    },
    {
      img: RealEstate,
      heading: "Real Estate",
      subHeading: "Tokenization and secure property transactions.",
      desc: "Streamlining property transactions with smart contracts, tokenization, and immutable ownership records.",
    },
    {
      img: Energy,
      heading: "Energy & Utilities",
      subHeading: "Optimizing energy distribution and transaction security.",
      desc: "Enhancing energy distribution with blockchain solutions, ensuring transparency and security.",
    },
    {
      img: GovSector,
      heading: "Government & Public Sector",
      subHeading: "Ensuring transparency in public records.",
      desc: "Implementing blockchain to ensure transparency, traceability, and efficiency in government operations.",
    },
  ];

  return (
    <div className="bg-neutral-100 py-24 text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-neutral-500 text-4xl mb-8">Industries We Serve</h1>

        <div className="text-3xl font-semibold mb-12 text-gray-800">
          Driving Change Across Industries
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 p-4">
        {industries.map((item, index) => (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            key={index}
            className="flex-grow basis-[45%] max-w-md"
          >
            <IndustryCard
              image={item.img}
              heading={item.heading}
              subHeading={item.subHeading}
              description={item.desc}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;
