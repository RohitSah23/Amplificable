import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-amber-500 font-semibold text-lg md:text-base lg:text-lg  px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
