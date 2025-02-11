"use client";

import React, { useState, useEffect } from "react";
import SideMenu from "./SideMenu";
import ProductList from "./ProductList";
import NavbarHome from "../Navbar/NavbarHome";
import { IoClose, IoFilter } from "react-icons/io5";
// import Loader from "../Loader/Loader";

function List() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);
  const closeSideMenu = () => setIsSideMenuOpen(false);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isSideMenuOpen]);

  return (
    <>
      {/* <Loader/> */}
      <NavbarHome />
      <section className="main-shop py-8 sm:py-12 lg:py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Filter Button for Mobile */}
          <button
            className="fixed bottom-6 right-6 z-40 md:hidden p-4 bg-[#20bead] text-white rounded-full shadow-lg hover:bg-teal-600 transition-all"
            onClick={toggleSideMenu}
          >
            <IoFilter className="w-6 h-6" />
          </button>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
            {/* Mobile Overlay Backdrop */}
            {isSideMenuOpen && (
              <div
                className="fixed inset-0 z-40 bg-black/50 md:hidden"
                onClick={closeSideMenu}
              />
            )}

            {/* SideMenu Container */}
            <div
              className={`side-menu fixed md:relative left-0 top-0 h-screen md:h-auto w-full max-w-[85vw]  bg-white transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
                isSideMenuOpen ? "translate-x-0 overflow-y-auto z-50" : "-translate-x-full"
              } md:block md:w-64 lg:w-72 md:ml-8 lg:ml-[50px] shadow-xl md:shadow-none`}
            >
              <div className="p-4 md:hidden flex justify-end">
                <button
                  onClick={closeSideMenu}
                  className="p-2 hover:text-[#20bead] transition-colors"
                >
                  <IoClose className="w-6 h-6" />
                </button>
              </div>
              <SideMenu onCloseMobile={closeSideMenu} />
            </div>

            {/* ProductList Container */}
            <div className="w-full md:flex-1 md:ml-[0px] lg:ml-[-18px] font-montserrat">
              <ProductList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default List;