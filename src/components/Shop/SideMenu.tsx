"use client";

import React, { ChangeEvent } from "react";
import Image from "next/image";

const SideMenu: React.FC = () => {
    const priceGap = 1000;

    const handlePriceInput = (e: ChangeEvent<HTMLInputElement>) => {
        const priceInput = document.querySelectorAll<HTMLInputElement>(".price-input input");
        const rangeInput = document.querySelectorAll<HTMLInputElement>(".range-input input");

        const minPrice = parseInt(priceInput[0].value);
        const maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= parseInt(rangeInput[1].max)) {
            if (e.currentTarget.classList.contains("input-min")) {
                rangeInput[0].value = minPrice.toString();
            } else {
                rangeInput[1].value = maxPrice.toString();
            }
        }
    };

    const handleRangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const rangeInput = document.querySelectorAll<HTMLInputElement>(".range-input input");
        const priceInput = document.querySelectorAll<HTMLInputElement>(".price-input input");
        const range = document.querySelector<HTMLDivElement>(".progress");
        const minThumb = document.querySelector<HTMLDivElement>(".thumb-min");
        const maxThumb = document.querySelector<HTMLDivElement>(".thumb-max");

        const minVal = parseInt(rangeInput[0].value);
        const maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.currentTarget.classList.contains("range-min")) {
                rangeInput[0].value = (maxVal - priceGap).toString();
            } else {
                rangeInput[1].value = (minVal + priceGap).toString();
            }
        } else {
            priceInput[0].value = minVal.toString();
            priceInput[1].value = maxVal.toString();

            if (range && minThumb && maxThumb) {
                const minPercent = (minVal / 10000) * 100;
                const maxPercent = 100 - (maxVal / 10000) * 100;

                range.style.left = `${minPercent}%`;
                range.style.right = `${maxPercent}%`;

                minThumb.style.left = `${minPercent}%`;
                maxThumb.style.left = `${100 - maxPercent}%`;

                // Update tooltips
                minThumb.querySelector(".tooltip")!.textContent = `$${minVal}`;
                maxThumb.querySelector(".tooltip")!.textContent = `$${maxVal}`;
            }
        }
    };

    return (
        <div className="w-full md:w-[330px] p-4 bg-white rounded-xl shadow-sm border-gray-100">
        <div className="space-y-6 md:space-y-8">
            {/* Search */}
            <div className="search p-2">
                <form>
                    <div className="flex items-center border border-[#20bead] rounded-lg overflow-hidden bg-gray-50 hover:bg-white transition-colors focus-within:ring-2 ring-teal-500">
                        <input
                            type="text"
                            name="shop_search"
                            placeholder="Search products..."
                            className="flex-1 px-3 py-2 sm:px-4 sm:py-3 outline-none bg-transparent text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                        />
                        <button
                            type="submit"
                            className="px-3 py-2 sm:px-4 sm:py-3 text-gray-500 hover:text-teal-600 transition-colors"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

            {/* Categories */}
            <div className="categories p-2">
                <h6 className="text-base md:text-lg font-semibold font-montserrat mb-3 md:mb-4 text-gray-800">Categories</h6>
                <ul className="space-y-1 md:space-y-2">
                    {["Technology", "Accessories", "Furniture", "Clothes", "Jewellery"].map((category, index) => (
                        <li key={index}>
                            <a href="#0" className="flex items-center justify-between px-2 py-1.5 sm:px-3 sm:py-2.5 text-gray-600 hover:text-[#20bead] rounded-lg transition-colors group text-sm sm:text-base">
                                <span>{category}</span>
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Range Filter */}
            <div className="price-range p-2 bg-white rounded-xl   border-gray-100">
                    <h6 className="text-lg font-semibold mb-6 font-montserrat text-gray-800">Price Range</h6>

                    {/* Price Display */}
                    <div className="flex justify-between text-sm font-montserrat text-gray-600 mb-6">
                        <span className="font-medium">$10</span>
                        <span className="font-medium">$10,000</span>
                    </div>

                    {/* Slider Track */}
                    <div className="relative h-12">
                        {/* Background Track */}
                        <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-200 rounded-full transform -translate-y-1/2"></div>

                        {/* Progress Bar - Add ref to this element */}
                        <div
                            className="progress absolute top-1/2 h-1.5 bg-teal-500 rounded-full transform -translate-y-1/2"
                            style={{ left: '0%', right: '25%' }}
                        ></div>

                        {/* Thumb Handles - Add data attributes for easy selection */}
                        <div className="relative">
                            <div
                                className="thumb-min absolute top-6 w-5 h-5 bg-teal-500 rounded-full shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                                data-min-thumb
                                style={{ left: '0%' }}
                            >
                                <div className="tooltip absolute bottom-full mb-2 px-2.5 py-1 text-xs font-medium bg-gray-800 text-white font-montserrat rounded-md shadow-sm">
                                    $10
                                </div>
                            </div>

                            <div
                                className="thumb-max absolute top-6 w-5 h-5 bg-teal-500 rounded-full shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                                data-max-thumb
                                style={{ left: '75%' }}
                            >
                                <div className="tooltip absolute bottom-full mb-2 px-2.5 py-1 text-xs font-montserrat bg-gray-800 text-white rounded-md shadow-sm">
                                    $7500
                                </div>
                            </div>
                        </div>

                        {/* Hidden Range Inputs - Add name attributes */}
                        <div className="range-input absolute top-0 left-0 right-0 h-full">
                            <input
                                type="range"
                                name="range-min"
                                min="10"
                                max="10000"
                                step="100"
                                defaultValue="10"
                                className="absolute w-full h-full opacity-0 cursor-pointer"
                                onInput={handleRangeInput}
                            />
                            <input
                                type="range"
                                name="range-max"
                                min="0"
                                max="10000"
                                step="100"
                                defaultValue="7500"
                                className="absolute w-full h-full opacity-0 cursor-pointer"
                                onInput={handleRangeInput}
                            />
                        </div>
                    </div>

                    {/* Price Inputs - Add data attributes */}
                    <div className="price-input grid grid-cols-2 gap-4 mt-8">
                        <div className="relative">
                            <label className="block text-sm text-gray-600 mb-1.5">Min Price</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                                <input
                                    type="number"
                                    data-min-input
                                    className="input-min w-full pl-8 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    defaultValue="10"
                                    onInput={handlePriceInput}
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <label className="block text-sm text-gray-600 mb-1.5">Max Price</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                                <input
                                    type="number"
                                    data-max-input
                                    className="input-max w-full pl-8 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    defaultValue="7500"
                                    onInput={handlePriceInput}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            {/* Best Sellers */}
            <div className="best-sale p-3 sm:p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <h6 className="text-base md:text-lg font-medium mb-3 md:mb-4 font-montserrat text-gray-800">Trending Now</h6>
                <div className="space-y-3 sm:space-y-4">
                    {[0, 0, 0, 0].map((num) => (
                        <div key={num} className="group cursor-pointer flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg transition-colors hover:bg-gray-50">
                            <div className="relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-lg border border-gray-200" style={{ width: '90px', height: '90px' }}>
                                <Image
                                    src={`https://images.unsplash.com/photo-1688413467024-c539918fdd7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                                    alt="Product"
                                    fill
                                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                                    sizes="(max-width: 768px) 80px, 100px"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h6 className="text-xs sm:text-sm font-medium text-gray-700 font-montserrat mb-1">Classic  Jacket</h6>
                                    <span className="text-sm sm:text-lg font-semibold font-montserrat text-[#20bead]">$130</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-1 text-amber-400">
                                        {/* Rating Stars */}
                                    </div>
                                    <span className="text-xs sm:text-sm text-[#20bead]">128 reviews</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popular Tags */}
            <div className="tags ">
                <h6 className="text-sm md:text-lg font-semibold mb-3 md:mb-4 font-montserrat text-gray-800">Popular Tags</h6>
                <div className="flex flex-wrap gap-1 sm:gap-1">
                    {["Design", "Development", "Tech", "Blog", "Branding", "Mobile", "ThemesCamp"].map((tag, index) => (
                        <a
                            href="#0"
                            key={index}
                            className=" sm:px-3 sm:py-1.5 text-xs sm:text-xs bg-[#20bead] text-white border border-[#20bead] rounded-full hover:bg-gray-100 hover:border-[#20bead] hover:text-[#20bead] transition-all duration-200 hover:scale-105"
                        >
                            {tag}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
};

export default SideMenu;