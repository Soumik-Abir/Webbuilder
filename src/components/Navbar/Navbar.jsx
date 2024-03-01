import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="bg-gray-800 fixed top-0 w-full z-50 flex items-center">
        <div className="container mx-auto px-10 py-4 flex justify-around items-center">
          <div className="flex items-center rounded-lg p-2 text-gray-700 bg-gray-200 md:w-auto">
            <CiSearch className="h-6 w-6 mr-2 text-black" />
            <input
              type="text"
              className="focus:outline-none text-gray-700 bg-gray-200"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <FaBars className="h-6 w-6 text-white m-2" />
          </button>
          <ul className="hidden md:flex flex-row space-x-10">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Website Builders
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Today's Deals
              </a>
            </li>
          </ul>
        </div>
        {/* Display side panel only on small screens when menu is toggled */}
        {isOpen && (
          <div className="bg-gray-800 fixed top-0 left-0 w-64 h-full flex flex-col items-start pt-10 md:hidden">
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-300 py-4 px-6 block hover:text-white"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 py-4 px-6 block hover:text-white"
                >
                  Website Builders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 py-4 px-6 block hover:text-white"
                >
                  Today's Deals
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
