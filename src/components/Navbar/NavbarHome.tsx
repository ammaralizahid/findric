import React from "react";
import Link from "next/link";
import Image from "next/image";
import mainLogo from "@/public/assets/mainLogo_1.png";
import MobileMenuToggle from "../MobileMenuToggle";
import HomeCatrgories from "../Dropdown/HomeCategories";
import PageNameButton from "./PageNameButton";

const NavbarHome = () => {

  return (
    <header className="sticky top-0 z-50 bg-white ring-offset-[#20bead]">
      <nav className="w-full px-6 md:px-10 xl:px-[88px] py-4 md:py-5 flex flex-wrap border justify-between">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="text-xl md:text-2xl font-bold">
            <Link href="/" className="text-gray-800 break-words inline-block">
              <Image
                src={mainLogo}
                alt="Logo"
                width={150}
                height={80}
                className="h-auto max-w-full lg_1:w-100"
              />
            </Link>
          </div>

          <div className="sm:block xs1:hidden ml-[-23px] md:mb-10 md:ml-6">
            <HomeCatrgories />
          </div>
        </div>

        <MobileMenuToggle />

        <div className="xs1:block hidden">
          <HomeCatrgories />
        </div>

        <ul className="hidden lg:flex items-center space-x-4 md:space-x-6 lg:space-x-8 text-sm md:text-lg relative">
          <li>
            <PageNameButton />
          </li>
          <li className="flex items-center">
            <Link href="/product-list">
              <button className="ml-3 md:ml-6 px-6 md:px-8 h-11 bg-white border border-[#20bead] text-[#20bead] rounded-lg hover:bg-[#20bead] hover:text-white transition-colors duration-300">
                Seller
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarHome;