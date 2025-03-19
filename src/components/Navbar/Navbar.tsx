// app/components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import mainLogo from "@/public/assets/mainLogo_1.png";
import arrow from "@/public/assets/arrow.svg";
import MobileMenuToggle from "../MobileMenuToggle";
import Dropdown from "../Pricing/DropDown";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white  border-b-[#ddd] border-b-[0.5px] lg:border-b-0">
      <nav className="w-full px-6 md:px-10 xl:px-[88px] py-4 md:py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl md:text-2xl  font-bold flex items-center">
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
        <MobileMenuToggle />
        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center space-x-4 md:space-x-6 lg:space-x-8 text-sm md:text-lg relative">
          <li>
            <Link href="#here">
              <button className="flex flex-row gap-1 ml-2 md:ml-4 px-3 md:px-4 h-11 items-center bg-[#4d94fb] border text-white rounded-lg transition-colors duration-300">
                <div className="alert"></div>
                <div className="font-montserrat text-sm md:text-base">
                  Live Product Demo
                </div>
              </button>
            </Link>
          </li>
          <li>
            <Link href="#features-section" className="text-gray-600 hover:text-gray-900">
              <div className="flex flex-row">
                <div className="ml-[-30px] md:ml-[-45px] mt-[-10px] md:mt-[-20px]">
                  <Image
                    src={arrow}
                    alt="Logo"
                    width={50} // Adjust width for smaller screens
                    height={10}
                    className="h-auto"
                  />
                </div>
                <div className="flex items-center justify-center text-[#161f32] hover:text-[#20bead] font-montserrat text-sm md:text-base font-medium">
                  100+ Features
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="#pricing-section"
              className="text-[#161f32] hover:text-[#20bead] font-montserrat text-sm md:text-base font-medium"
            >
              Pricing
            </Link>
          </li>
          {/* Use Dropdown component */}
          <li>
            <Dropdown />
          </li>
          <li className="flex items-center">
            <Link href="/home">
              <button className="ml-1 md:ml-2 px-6 md:px-8 h-11 bg-[#20bead] border border-white text-white rounded-lg hover:bg-[#20bead] hover:text-white transition-colors duration-300">
                Explore Products
              </button>
            </Link>
            <Link href="/your-target-route">
              <button className="ml-3 md:ml-6 px-6 md:px-8 h-11 bg-white border border-[#20bead] text-[#20bead] rounded-lg hover:bg-[#20bead] hover:text-white transition-colors duration-300">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
