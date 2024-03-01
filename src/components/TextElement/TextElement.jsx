import React from "react";

const TextElement = ({ text, className = "", disableHover }) => {
  const hoverClass = disableHover ? "" : "hover:text-blue-500 cursor-pointer";
  const textColorClass = className.includes("text-white") ? "" : "text-gray-500"; // Check if className already includes text-white

  return (
    <div className={`${textColorClass} ${hoverClass} transition-colors duration-300 ${className}`}>
      {text}
    </div>
  );
};

export default TextElement;
