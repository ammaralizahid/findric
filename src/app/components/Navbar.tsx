// app/components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import mainLogo from "../../../public/assets/mainLogo.svg";
import arrow from "../../../public/assets/arrow.svg";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="w-full px-[88px] py-5 flex justify-between items-center">
        {" "}
        {/* Reduced px-4 to px-2 */}
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <Link href="/" className="text-gray-800">
            <Image
              src={mainLogo}
              alt="Logo"
              width={180} // Set your desired width
              height={100} // Set your desired height
              className="h-auto" // Maintain aspect ratio
            />
          </Link>
        </div>
        {/* Navigation Links */}
        <ul className="flex items-center space-x-8 text-lg">
          <li>
            <Link href="/your-target-route">
              <button className="flex flex-row gap-1 ml-4 px-4 py-2 bg-[#4d94fb] border text-white rounded-lg transition-colors duration-300">
                <div className="alert"></div>
                <div className="font-montserrat text-base">Live Product Demo</div>
              </button>
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              <div className="flex flex-row">
                <div className="ml-[-45px] mt-[-20px]">
                  <Image
                    src={arrow}
                    alt="Logo"
                    width={70} // Set your desired width
                    height={10} // Set your desired height
                    className="h-auto" // Maintain aspect ratio
                  />
                </div>
                <div className="flex items-center justify-center text-[#161f32] hover:text-[#20bead] font-montserrat text-base font-medium">
                100+ Features</div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-[#161f32] hover:text-[#20bead] font-montserrat text-base font-medium">
            Pricing

            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-[#161f32] hover:text-[#20bead] font-montserrat text-base font-medium">
              More
            </Link>
          </li>
          <li>
            <Link href="/test">
              <button className="ml-2 px-8 py-2 bg-[#20bead] border border-white text-white rounded-lg hover:bg-[#20bead] hover:text-white transition-colors duration-300">
                Explore Store
              </button>
            </Link>
            <Link href="/your-target-route">
              <button className="ml-6 px-8 py-2 bg-white border border-[#20bead] text-[#20bead] rounded-lg hover:bg-[#20bead] hover:text-white transition-colors duration-300">
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
