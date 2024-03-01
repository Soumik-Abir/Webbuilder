import React from "react";

const TextElement = ({ text, className, disableHover }) => {
  const hoverClass = disableHover ? "" : "hover:text-blue-500 cursor-pointer";

  return (
    <div className={`text-gray-500 ${hoverClass} transition-colors duration-300 ${className}`}>
      {text}
    </div>
  );
};

export default TextElement;
