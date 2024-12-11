import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          {/* Display logo using the Image component for optimization */}
          <Image
            src="/logoimg.png" // Replace with your uploaded logo's path
            alt="Discount Me Logo"
            width={180} // Adjust width as per your design
            height={50} // Adjust height as per your design
          />
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex flex-1 mx-4">
          {/* Search bar with input field and button */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600">
              Search
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center space-x-6">
          {/* Individual navigation links */}
          <Link href="#" className="text-gray-700 hover:text-orange-500">
            All Category
          </Link>

          <Link
            href="/register"
            className="text-gray-700 hover:text-orange-500"
          >
            Register/Login
          </Link>
          <Link href="#" className="text-gray-700 hover:text-orange-500">
            Coupon
          </Link>
          <Link href="#" className="text-gray-700 hover:text-orange-500">
            Support
          </Link>

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link href="#" className="text-gray-700 hover:text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18l-2 13H5L3 3zm3 16a2 2 0 11-4 0h4zm15 0a2 2 0 11-4 0h4z"
                />
              </svg>
            </Link>
            {/* User Icon */}
            <Link href="#" className="text-gray-700 hover:text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 5.121a1.5 1.5 0 012.121 0L12 9.879l4.758-4.758a1.5 1.5 0 012.121 0l2 2a1.5 1.5 0 010 2.121L16.242 12l4.758 4.758a1.5 1.5 0 010 2.121l-2 2a1.5 1.5 0 01-2.121 0L12 14.121l-4.758 4.758a1.5 1.5 0 01-2.121 0l-2-2a1.5 1.5 0 010-2.121L7.758 12 3 7.242a1.5 1.5 0 010-2.121l2-2z"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          {/* Hamburger menu button */}
          <button className="text-gray-700 hover:text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden px-4 pb-4">
        {/* Dropdown links for mobile view */}
        <div className="flex flex-col space-y-2">
          <Link href="#" className="text-gray-700 hover:text-orange-500">
            All Category
          </Link>
          <Link
            href="/register"
            className="text-gray-700 hover:text-orange-500"
          >
            Register/Login
          </Link>
          <Link href="#" className="text-gray-700 hover:text-orange-500">
            Coupon
          </Link>
          <Link href="#" className="text-gray-700 hover:text-orange-500">
            Support
          </Link>
        </div>
        {/* Mobile search bar */}
        <div className="mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
