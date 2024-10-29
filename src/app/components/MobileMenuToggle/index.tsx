"use client"; // This is a client-side component for interactivity

import { useState } from "react";
import Link from "next/link"; // Import Link from next/link

const MobileMenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Icon */}
      <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-all duration-500 ease-in-out absolute left-0 top-full w-full bg-white shadow-lg z-40 border-t border-t-[#ddd] border-t-[0.5px] `}
      >
        <ul className="flex flex-col items-start space-y-4 py-4 px-2">
          <li className="border-b border-b-[#ddd] border-b-[0.5px] w-full">
            <Link href="/" className="block text-gray-800 hover:text-black py-2">
              Home
            </Link>
          </li>
          <li className="border-b border-b-[#ddd] border-b-[0.5px] w-full">
            <Link
              href="/about"
              className="block text-gray-800 hover:text-black py-2"
            >
              About
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/contact"
              className="block text-gray-800 hover:text-black py-2"
            >
              Contact
            </Link>
          </li>
          <li className="flex flex-col gap-3 w-full">
          <Link href="/test">
              <button className="w-full max-w-[728px] px-6 py-2 bg-[#20bead] border border-white text-white rounded-lg hover:bg-[#20bead] hover:text-white transition-colors duration-300">
                Explore Store
              </button>
            </Link>
            <Link href="/your-target-route">
              <button className="w-full max-w-[728px] px-6  py-2 bg-white border border-[#20bead] text-[#20bead] rounded-lg hover:bg-[#20bead] hover:text-white transition-colors duration-300">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenuToggle;
