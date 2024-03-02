import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Dropdown = ({ options, className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    setSelectedOption(options[0]); // Set initial selected option
  }, [options]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    toggleDropdown();
  };

  return (
    <div className="relative">
      <div
        className="flex gap-1 items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="text-gray-600">{selectedOption}</div>
        {isDropdownOpen ? (
          <RiArrowDropUpLine className="w-6 h-6 text-gray-600" />
        ) : (
          <RiArrowDropDownLine className="w-6 h-6 text-gray-600" />
        )}
      </div>
      
      {isDropdownOpen && (
        <div className={`absolute mt-2 w-32 border rounded-md shadow-lg bg-white cursor-pointer overflow-y-auto max-h-40 ${className}`} style={{ scrollbarWidth: "thin", scrollbarColor: "#4A5568 #EDF2F7", right:"0" }}>
          {options.map((option, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-200"
              onClick={() => handleOptionClick(option)}
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
