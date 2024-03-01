// TextElement.jsx
import React from "react";

const TextElement = ({ text, className }) => {
  return (
    <div className={`text-gray-600 leading-5 hover:text-blue-500 transition-colors duration-300 cursor-pointer ${className}`}>
      {text}
    </div>
  );
};

export default TextElement;
