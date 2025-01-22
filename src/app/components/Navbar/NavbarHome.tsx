import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mainLogo from '@/public/assets/mainLogo.svg';
import MobileMenuToggle from '../MobileMenuToggle';
import HomeCatrgories from '../Dropdown/HomeCategories';
// import AllCollectioMenu from './AllCollectionMenu';

const NavbarHome = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border ring-offset-[#20bead]">
      <nav className="w-full px-6 md:px-10 xl:px-[88px] py-4 md:py-5 flex flex-wrap items-center justify-between">
        {/* Logo and Categories Dropdown */}
        <div className="flex flex-col md:flex-row items-start md:items-center">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold">
            <Link href="/" className="text-gray-800 break-words inline-block">
              <Image
                src={mainLogo}
                alt="Logo"
                width={150} // Adjust width for smaller screens
                height={80} // Adjust height for smaller screens
                className="h-auto max-w-full lg_1:w-100" // Maintain aspect ratio
              />
            </Link>
          </div>

    {/* <AllCollectioMenu/> */}


          {/* Categories Dropdown */}
          <div className="mt-4 ml-[-23px] md:mt-0 md:ml-6">
            <HomeCatrgories />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <MobileMenuToggle />

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center space-x-4 md:space-x-6 lg:space-x-8 text-sm md:text-lg relative">
          <li>
            <Link
              href="#pricing-section"
              className="text-[#161f32] hover:text-[#20bead] font-montserrat text-sm md:text-base font-medium"
            >
              Market Place
            </Link>
          </li>

          <li className="flex items-center">
            <Link href="/your-target-route">
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