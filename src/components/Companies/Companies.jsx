import React from 'react';
import { motion } from "framer-motion";
import companiesImage from "../../assets/companiesImage.webp";

const Companies = () => {
  return (
    <section className="bg-neutral-100 py-24">
      <motion.div
        className="max-w-7xl mx-auto px-4 text-center text-gray-800 text-2xl md:text-3xl font-semibold mb-10"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Helping to grow the next generation of companies
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-4 text-center flex justify-center"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={companiesImage}
          alt="Logos of companies supported by our services"
          className="w-full max-w-5xl h-auto object-contain"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default Companies;
