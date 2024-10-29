'use client';
// app/components/Dropdown.tsx
import { useState } from 'react';
import Link from 'next/link';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    {
      title: "Blog",
      description: "Read our latest articles and updates.",
      link: "",
    },
    {
      title: "Book a Demo",
      description: "Schedule a demo to see our product in action.",
      link: "#book-demo",
    },
    {
      title: "Support",
      description: "Get help and support for your inquiries.",
      link: "#support",
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-[#161f32] hover:text-[#20bead] font-montserrat text-sm md:text-base font-medium"
      >
        More
      </button>
      {isOpen && (
        <div
          className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-4 z-10 w-72"  // Set width here
        >
          {options.map((option, index) => (
            <div key={index} className="mb-2">
              <Link href={option.link}>
                <h3 className="font-semibold text-[#161f32] hover:text-[#20bead]">
                  {option.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
