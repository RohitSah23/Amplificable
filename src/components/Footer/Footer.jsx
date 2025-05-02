import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";

import { FooterLogo, Amplificable } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mb-8"
      >
        <img
          src={FooterLogo}
          alt="Footer Logo"
          className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
        />
        <div className="flex items-center text-sm sm:text-base font-medium">
          <span className="text-xl mr-2">
            <MapPin />
          </span>
          USA, INDIA
        </div>
      </motion.div>

      <hr className="border-t border-gray-300 mb-12" />

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-8 mt-4"
      >
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-center md:text-left">
          {["Home", "About", "Services", "Case Studies", "Contact Us"].map(
            (link, i) => (
              <a
                key={i}
                href="#"
                className="text-black text-base sm:text-lg md:text-xl hover:text-gray-600 transition"
              >
                {link}
              </a>
            )
          )}
        </div>

        <div className="text-center md:text-right text-sm sm:text-base md:text-lg text-black">
          © Copyright 2025. All rights reserved.
        </div>
      </motion.div>

      <div className="flex justify-center mt-10">
        <img
          src={Amplificable}
          alt="Amplificable Logo"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;
