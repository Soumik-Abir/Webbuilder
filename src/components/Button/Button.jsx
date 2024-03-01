import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded-tr-md rounded-br-md h-10 w-1/4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
