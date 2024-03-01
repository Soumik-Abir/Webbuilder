import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Dropdown = () => {
  // Manage the dropdown state within the Dropdown component
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
      <div className="text-gray-600 leading-5">Top Relevant</div>
        {/* Icon */}
        {isDropdownOpen ? (
          <RiArrowDropUpLine className="w-6 h-6 text-gray-600" />
        ) : (
          <RiArrowDropDownLine className="w-6 h-6 text-gray-600" />
        )}
      </div>
      {/* Render the dropdown content if open */}
      {isDropdownOpen && (
        <div className="absolute mt-2 w-32 border rounded-md shadow-lg bg-white cursor-pointer">
          {/* Dropdown options */}
          <div className="p-2" onClick={() => console.log("Option 1")}>
            Option 1
          </div>
          <div className="p-2" onClick={() => console.log("Option 2")}>
            Option 2
          </div>
          <div className="p-2" onClick={() => console.log("Option 3")}>
            Option 3
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;