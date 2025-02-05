import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg py-4 px-8 flex items-center justify-between">
      {/* Logo */}
     
        
     

      {/* Hamburger Menu for Mobile */}
      <button
        className="lg:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Search Bar and Navigation Links */}
      <div
        className={`lg:flex lg:items-center lg:space-x-8 ${isMenuOpen ? "block" : "hidden"}`}
      >
        {/* Search Bar */}
        <div className="relative flex-grow mx-8 max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            🔍
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition duration-300 relative group"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition duration-300 relative group"
            >
              About Us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition duration-300 relative group"
            >
              Products
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;