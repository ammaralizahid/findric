"use client";
import NavbarHome from "../Navbar/NavbarHome";
import Image from "next/image";
import { ProductListCards } from "../Shop/ProductListCrads";
import { productListData } from "@/src/mock/mock";
import React, { useState } from "react";
import StoreSidebar from "../Store/StoreSidebar";
import StoreMap from "../Store/StoreMap";
import { FiX, FiFilter } from "react-icons/fi";
import { sortOptions } from "@/src/mock/mock";

const Store: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSortPopup, setShowSortPopup] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  return (
    <div className="min-h-screen  bg-gray-50">
      <NavbarHome />
      <div className="relative">
        <div className="h-[20vh]">
          <Image
            alt="Banner with text 'Laptop Shine - Dealing in Quality Laptops, Shop Now, Upto 25% Off'"
            src="https://images.unsplash.com/photo-1626770537547-66e789b70e2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative  top-16 flex justify-center  mx-auto h-36 ">
          <div className="absolute  lg:left-14">
            <div className=" w-36 h-36 rounded-full border-4 border-white">
              <div className="absolute inset-0 rounded-full border-4 border-white/80 shadow-xl overflow-hidden aspect-square">
                <Image
                  alt="Storefront of Laptop Shine"
                  src="https://images.unsplash.com/photo-1624886656674-9bf7352dfb52?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 bg-white shadow"></div>
      <main className=" mx-auto px-4 py-8">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="hidden xl:block">
            <StoreSidebar />
          </div>
          <div className="w-full space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="  flex xl:flex w-full justify-between items-center">
                  <div className=" flex items-center gap-4">
                    <p className="text-sm  md:text-base text-gray-600 font-medium">
                      Showing 1-24 of 159
                    </p>
                  </div>
                  <div className=" flex items-center gap-4">
                    <div className="w-full sm:w-48">
                      <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-[#20bead] bg-white shadow-sm">
                        <option>Newest First</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                      </select>
                    </div>
                    <div className="hidden xl:flex gap-4">
                      <select
                        className=" px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-[#20bead] bg-white shadow-sm w-48"
                        value={selectedSort}
                        onChange={(e) => setSelectedSort(e.target.value)}
                      >
                        <option value="">Sort by</option>
                        {sortOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className=" xl:hidden flex gap-4  w-full">
                  <button
                    onClick={() => setShowSidebar(true)}
                    className="xl:hidden flex gap-2 bg-[#20bead] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1da393] transition-colors flex-1 justify-center"
                  >
                    <FiFilter className="w-4 h-4" />
                    Filter
                  </button>
                  <button
                    onClick={() => setShowSortPopup(true)}
                    className=" xl:hidden flex items-center gap-2 bg-[#20bead] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1da393] transition-colors flex-1 justify-center"
                  >
                    Sort by
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productListData?.map((product) => (
                <ProductListCards
                  actualPrice={0}
                  stockLeft={0}
                  soldCount={0}
                  key={product.id}
                  {...product}
                />
              ))}
            </div>
          </div>
          <StoreMap />
        </div>
      </main>

      {showSidebar && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 xl:hidden"
          onClick={() => setShowSidebar(false)}
        >
          <div
            className="fixed left-0 top-0 h-full w-80 bg-white overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowSidebar(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <StoreSidebar variant="mobile" />
            </div>
          </div>
        </div>
      )}

      {showSortPopup && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 xl:hidden"
          onClick={() => setShowSortPopup(false)}
        >
          <div
            className="fixed left-0 top-0 h-full w-80 bg-white overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Sort by</h2>
                <button
                  onClick={() => setShowSortPopup(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-2">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedSort(option.value);
                      setShowSortPopup(false);
                    }}
                    className={`w-full text-left p-2 hover:bg-gray-100 rounded flex items-center justify-between ${
                      selectedSort === option.value ? "bg-gray-50" : ""
                    }`}
                  >
                    <span>{option.label}</span>
                    {selectedSort === option.value && (
                      <svg
                        className="w-4 h-4 text-[#20bead]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;
