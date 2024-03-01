import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Dropdown = ({ buttonText, options, className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex gap-1 items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        {/* Render the button text if provided */}
        {buttonText && <div className="text-gray-600 leading-5">{buttonText}</div>}
        {/* Icon */}
        {isDropdownOpen ? (
          <RiArrowDropUpLine className="w-6 h-6 text-gray-600" />
        ) : (
          <RiArrowDropDownLine className="w-6 h-6 text-gray-600" />
        )}
      </div>
      {/* Render the dropdown content if open */}
      {isDropdownOpen && (
        <div className={`absolute mt-2 w-32 border rounded-md shadow-lg bg-white cursor-pointer overflow-y-auto max-h-40 ${className}`}>
          {/* Render dropdown options dynamically */}
          {options.map((option, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-200"
              onClick={() => console.log(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
