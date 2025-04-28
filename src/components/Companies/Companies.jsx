import React from 'react';
import { motion } from "framer-motion";
import companiesImage from "../../assets/companiesImage.webp";

const Companies = () => {
  return (
    <section className="bg-neutral-100 py-24">
      <motion.div
        className="max-w-7xl mx-auto px-4 text-center"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        <h1 className="text-gray-800 text-2xl md:text-3xl font-semibold mb-10">
          Helping to grow the next generation of companies
        </h1>

        <div className="flex justify-center">
          <img 
            src={companiesImage} 
            alt="Companies" 
            className="w-full object-contain" 
          />
        </div>

      </motion.div>
    </section>
  );
};

export default Companies;
