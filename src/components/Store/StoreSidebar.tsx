'use client';
import React, { useState } from "react";
import { FiSearch } from 'react-icons/fi';
import { categories, conditions, cities, colors, priceOptions } from '@/src/mock/mock';

interface StoreSidebarProps {
    variant?: 'default' | 'mobile';
}

const StoreSidebar = ({ variant = 'default' }: StoreSidebarProps) => {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [isConditionsOpen, setIsConditionsOpen] = useState(false);
    const [isCitiesOpen, setIsCitiesOpen] = useState(false);
    const [isPricesOpen, setIsPricesOpen] = useState(false);
    const [isColorsOpen, setIsColorsOpen] = useState(false);
    const [isCategoriesExpanded, setIsCategoriesExpanded] = useState(false);
    const [isConditionsExpanded, setIsConditionsExpanded] = useState(false);
    const [isCitiesExpanded, setIsCitiesExpanded] = useState(false);
    const [isColorsExpanded, setIsColorsExpanded] = useState(false);
    const [fromPrice, setFromPrice] = useState('');
    const [toPrice, setToPrice] = useState('');

    const handlePriceApply = () => {
        console.log('Applying price filter:', fromPrice, toPrice);
    };

    const DropdownArrow = ({ isOpen }: { isOpen: boolean }) => (
        <svg
            className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    );

    const ExpandableSection = ({
        title,
        isOpen,
        toggle,
        children
    }: {
        title: string;
        isOpen: boolean;
        toggle: () => void;
        children: React.ReactNode;
    }) => (
        <div className="border-t border-gray-100 pt-3">
            <button
                className="w-full flex justify-between items-center text-xs font-semibold mb-1 text-gray-700 hover:text-[#20bead]"
                onClick={toggle}
            >
                <span>{title}</span>
                <DropdownArrow isOpen={isOpen} />
            </button>
            {isOpen && children}
        </div>
    );

    return (
        <div className={`${variant === 'default' ? 'bg-white p-4 rounded-xl shadow-lg border border-gray-100' : ''} w-full lg:w-64 space-y-4`}>
            <div className="mb-3 relative">
                <input
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs bg-white shadow-sm"
                    placeholder="Search products..."
                    type="text"
                />
                <button type="submit" className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-[#20bead] rounded-e-lg border border-[#20bead] hover:bg-[#20bead]/80">
                    <FiSearch className=" w-4 h-4" />
                    <span className="sr-only">Search</span>
                </button>
            </div>
            <div className="space-y-3">
                <ExpandableSection
                    title="CATEGORIES"
                    isOpen={isCategoriesOpen}
                    toggle={() => setIsCategoriesOpen(!isCategoriesOpen)}
                >
                    <div className="space-y-1.5 transition-all duration-300">
                        {categories
                            .slice(0, isCategoriesExpanded ? categories.length : 3)
                            .map((item) => (
                                <label
                                    key={item.id}
                                    className="flex items-center justify-between gap-2 p-1.5 hover:bg-gray-50 rounded-lg"
                                >
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="w-3.5 h-3.5 text-[#20bead] rounded border-gray-300"
                                        />
                                        <span className="text-xs text-gray-600">{item.name}</span>
                                    </div>
                                    <span className="text-[10px] text-gray-400">({item.count})</span>
                                </label>
                            ))}
                        {categories.length > 3 && (
                            <button
                                onClick={() => setIsCategoriesExpanded(!isCategoriesExpanded)}
                                className="text-[#20bead] text-xs mt-1 hover:underline"
                            >
                                {isCategoriesExpanded ? 'See less' : 'See more'}
                            </button>
                        )}
                    </div>
                </ExpandableSection>

                <ExpandableSection
                    title="CONDITIONS"
                    isOpen={isConditionsOpen}
                    toggle={() => setIsConditionsOpen(!isConditionsOpen)}
                >
                    <div className="space-y-1.5 transition-all duration-300">
                        {conditions
                            .slice(0, isConditionsExpanded ? conditions.length : 2)
                            .map((item) => (
                                <label
                                    key={item.id}
                                    className="flex items-center justify-between gap-2 p-1.5 hover:bg-gray-50 rounded-lg"
                                >
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="w-3.5 h-3.5 text-[#20bead] rounded border-gray-300"
                                        />
                                        <span className="text-xs text-gray-600">{item.name}</span>
                                    </div>
                                    <span className="text-[10px] text-gray-400">({item.count})</span>
                                </label>
                            ))}
                        {conditions.length > 2 && (
                            <button
                                onClick={() => setIsConditionsExpanded(!isConditionsExpanded)}
                                className="text-[#20bead] text-xs mt-1 hover:underline"
                            >
                                {isConditionsExpanded ? 'See less' : 'See more'}
                            </button>
                        )}
                    </div>
                </ExpandableSection>

                <ExpandableSection
                    title="CITIES"
                    isOpen={isCitiesOpen}
                    toggle={() => setIsCitiesOpen(!isCitiesOpen)}
                >
                    <div className="space-y-1.5 transition-all duration-300">
                        {cities
                            .slice(0, isCitiesExpanded ? cities.length : 3)
                            .map((item) => (
                                <label
                                    key={item.id}
                                    className="flex items-center justify-between gap-2 p-1.5 hover:bg-gray-50 rounded-lg"
                                >
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="w-3.5 h-3.5 text-[#20bead] rounded border-gray-300"
                                        />
                                        <span className="text-xs text-gray-600">{item.name}</span>
                                    </div>
                                    <span className="text-[10px] text-gray-400">({item.count})</span>
                                </label>
                            ))}
                        {cities.length > 3 && (
                            <button
                                onClick={() => setIsCitiesExpanded(!isCitiesExpanded)}
                                className="text-[#20bead] text-xs mt-1 hover:underline"
                            >
                                {isCitiesExpanded ? 'See less' : 'See more'}
                            </button>
                        )}
                    </div>
                </ExpandableSection>

                <ExpandableSection
                    title="PRICES"
                    isOpen={isPricesOpen}
                    toggle={() => setIsPricesOpen(!isPricesOpen)}
                >
                    <div className="space-y-1.5 transition-all duration-300">
                        <div className="flex gap-1.5 mb-2">
                            <select
                                value={fromPrice}
                                onChange={(e) => setFromPrice(e.target.value)}
                                className="w-1/2 px-2 py-1.5 border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-[#20bead] bg-white"
                            >
                                <option value="">From</option>
                                {priceOptions.map((price, index) => (
                                    <option key={index} value={price}>Rs. {price}</option>
                                ))}
                            </select>
                            <select
                                value={toPrice}
                                onChange={(e) => setToPrice(e.target.value)}
                                className="w-1/2 px-2 py-1.5 border border-gray-200 rounded-lg text-xs focus:ring-2 focus:ring-[#20bead] bg-white"
                            >
                                <option value="">To</option>
                                {priceOptions.map((price, index) => (
                                    <option key={index} value={price}>Rs. {price}</option>
                                ))}
                            </select>
                        </div>
                        <button
                            onClick={handlePriceApply}
                            className="w-full bg-[#20bead] text-white px-3 py-1.5 rounded-lg hover:bg-[#1da393] text-xs font-medium"
                        >
                            Apply
                        </button>
                    </div>
                </ExpandableSection>

                <ExpandableSection
                    title="COLORS"
                    isOpen={isColorsOpen}
                    toggle={() => setIsColorsOpen(!isColorsOpen)}
                >
                    <div className="space-y-1.5 transition-all duration-300">
                        {colors
                            .slice(0, isColorsExpanded ? colors.length : 5)
                            .map((color, index) => (
                                <label
                                    key={index}
                                    className="flex items-center justify-between gap-2 p-1.5 hover:bg-gray-50 rounded-lg cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            className="w-3.5 h-3.5 text-[#20bead] rounded border-gray-300"
                                        />
                                        <div
                                            className="w-3.5 h-3.5 rounded-full border border-gray-200"
                                            style={{
                                                background: color.hex,
                                                backgroundImage: color.hex.includes('gradient')
                                                    ? color.hex
                                                    : undefined
                                            }}
                                        />
                                        <span className="text-xs text-gray-600">
                                            {color.name}
                                        </span>
                                    </div>
                                    <span className="text-[10px] text-gray-400">
                                        ({color.count})
                                    </span>
                                </label>
                            ))}
                        {colors.length > 5 && (
                            <button
                                onClick={() => setIsColorsExpanded(!isColorsExpanded)}
                                className="text-[#20bead] text-xs mt-1 hover:underline"
                            >
                                {isColorsExpanded ? 'See less' : 'See more'}
                            </button>
                        )}
                    </div>
                </ExpandableSection>
            </div>

            <button className="mt-4 w-full text-[#20bead] hover:text-[#1da393] text-xs font-medium">
                Clear All Filters
            </button>
        </div>
    );
};

export default StoreSidebar;