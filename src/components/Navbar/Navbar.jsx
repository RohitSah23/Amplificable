import React from 'react';
import { Logo } from '../../assets/assets';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <div className="w-1/2 mx-auto m-8 bg-white/5 backdrop-blur-2xl border border-black rounded-full py-4 px-6 shadow-md">
      <nav className="flex items-center justify-between">
        
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Amplificable Logo"
            className="w-32 h-auto object-contain"
          />
        </div>

        <div className="flex items-center space-x-8">
          <a href="#" className="text-neutral-300 text-lg hover:text-white transition">Home</a>
          <a href="#" className="text-neutral-300 text-lg hover:text-white transition">About</a>
          <a href="#" className="text-neutral-300 text-lg hover:text-white transition">Services</a>
          <a href="#" className="text-neutral-300 text-lg hover:text-white transition">Case Studies</a>
          
          <Button text="Book A Call" className="text-white cursor-pointer" />
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
