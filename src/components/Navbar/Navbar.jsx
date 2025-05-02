import React, { useState, useEffect, useRef } from "react";
import { Logo } from "../../assets/assets";
import Button from "../Button/Button";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Case Studies", href: "#" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-3xl md:mx-auto mt-6 md:mt-8 mx-2 bg-white/4 transition-all duration-300 backdrop-blur-2xl border border-black py-4 px-6 shadow-md rounded-full"
      >
        <nav className="flex items-center justify-between">
          <div className="flex items-center w-full justify-between">
            <img
              src={Logo}
              alt="Amplificable Logo"
              className="w-32 h-auto object-contain"
            />
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-300 text-lg hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
              <Button
                text="Book A Call"
                className="text-white cursor-pointer"
              />
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.div>

      {isMobileMenuOpen && (
        <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      
          ref={menuRef}
          className="md:hidden flex flex-col items-center space-y-6 py-6 mt-2 bg-white/5 backdrop-blur-2xl border border-black mx-4 px-6 shadow-md rounded-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-lg hover:text-amber-500 transition"
            >
              {link.label}
            </a>
          ))}
          <Button text="Book A Call" className="text-white cursor-pointer" />
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
