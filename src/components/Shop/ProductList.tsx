"use client";

import React, { useState } from 'react';
import { productListData } from '@/src/components/mock/mock';
import { ProductListCards } from './ProductListCrads';

const ProductList: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Most Popular');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto md:ml-10 px-4 sm:px-6 lg:px-8">
      <div className="shop-products">
        {/* Top Section */}
        <div className="flex flex-col mt-4 sm:mt-6 md:mt-8 sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-y-4 sm:gap-x-4">
          <div className="text-[#20bead] text-sm sm:text-base">
            Showing 1–9 of 12 results
          </div>

          {/* Dropdown */}
          <div className="relative w-full sm:w-56 md:w-64">
            <div
              className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border border-[#20bead] rounded-lg cursor-pointer bg-white hover:border-teal-500 transition-colors"
              onClick={toggleDropdown}
            >
              <span className="text-[#20bead] text-sm sm:text-base">{selectedOption}</span>
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 ml-2 text-[#20bead] transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {isDropdownOpen && (
              <ul className="absolute top-full mt-1 sm:mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                {[
                  'Most Popular',
                  'Sort by average rating',
                  'Price [Lowest to Highest]',
                  'Price [Highest to Lowest]',
                ].map((option) => (
                  <li
                    key={option}
                    className="px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-700 hover:bg-teal-50 cursor-pointer hover:text-[#20bead] transition-colors first:rounded-t-lg last:rounded-b-lg"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {productListData?.map((product) => (
            <ProductListCards
              key={product?.id}
              id={product?.id}
              image={product?.image}
              name={product?.name}
              price={product?.price}
              stars={product?.stars}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <nav className="flex space-x-1 sm:space-x-2">
            <a href="#0" className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base text-teal-600 bg-teal-50 rounded-lg hover:bg-teal-100">
              1
            </a>
            <a href="#0" className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base text-gray-600 rounded-lg hover:bg-gray-100">
              2
            </a>
            <a href="#0" className="px-3 py-1.5 sm:px-4 sm:py-2 text-gray-600 rounded-lg hover:bg-gray-100 flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductList;