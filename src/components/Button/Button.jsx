import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-amber-500 text-lg md:text-base lg:text-lg text-white px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
