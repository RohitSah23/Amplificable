import React from "react";
import { MapPin } from 'lucide-react';

import { FooterLogo, Amplificable } from "../../assets/assets"; 

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-10">
      
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row justify-between items-center mb-8">
        <img src={FooterLogo} alt="Footer Logo" className="w-40 h-40 object-contain" />
        <div className="flex items-center text-sm font-medium mt-4 md:mt-0">
          <span className="text-xl mr-2">
             <MapPin />
          </span> USA, INDIA
        </div>
      </div>

      <hr className="border-t border-gray-300 mb-12 "  />

      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-between mb-8 mt-4">
        
        <div className="flex justify-between space-x-6 text-center md:text-left ">
          <a href="#" className="text-black text-2xl p hover:text-gray-600 transition">Home</a>
          <a href="#" className="text-black text-2xl hover:text-gray-600 transition">About</a>
          <a href="#" className="text-black text-2xl hover:text-gray-600 transition">Services</a>
          <a href="#" className="text-black text-2xl hover:text-gray-600 transition">Case Studies</a>
          <a href="#" className="text-black text-2xl hover:text-gray-600 transition">Contact Us</a>
        </div>

        <div className="text-center md:text-right text-black text-xl">
          © Copyright 2025. All rights reserved.
        </div>

      </div>

      <div className="flex justify-center mt-10">
        <img 
          src={Amplificable} 
          alt="Amplificable Logo" 
          className="h-128 w-auto object-cover" 
        />
      </div>

    </footer>
  );
};

export default Footer;
