import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white p-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
