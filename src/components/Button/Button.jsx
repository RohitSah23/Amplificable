import React from "react";

const Button = ({ text, onClick = () => {}, className = "", type = "button", ...props }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-amber-500 md:font-semibold text-base md:text-sm lg:text-base px-6 py-3 rounded-full hover:bg-amber-600 transition duration-300 ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
