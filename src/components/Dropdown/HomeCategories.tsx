'use client';

import React, { useEffect, useState } from 'react';
import { FaFolder, FaMobileAlt, FaTshirt, FaLaptop, FaHeadphones, FaShoePrints, FaPlug, FaChevronDown, FaBars, FaRunning, FaBook, FaCamera, FaPaintBrush, FaApple, FaGamepad, } from 'react-icons/fa';
import AllCollectioMenu from '../Navbar/AllCollectionMenu';

interface SubCategory {
  name: string;
  link: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface Category {
  name: string;
  subCategories: {
    heading: string;
    items: SubCategory[];
  }[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const categories: Category[] = [
  {
    name: 'Electronics',
    icon: FaMobileAlt,
    subCategories: [
      {
        heading: 'Mobile Devices',
        items: [
          { name: 'Mobile Phones', link: '#', icon: FaMobileAlt },
          { name: 'Smart Watches', link: '#', icon: FaMobileAlt },
          { name: 'Tablets', link: '#', icon: FaMobileAlt },
          { name: 'Smart Glasses', link: '#', icon: FaHeadphones },
          { name: 'Smartphones Accessories', link: '#', icon: FaMobileAlt },
        ],
      },
      {
        heading: 'Computers & Accessories',
        items: [
          { name: 'Laptops', link: '#', icon: FaLaptop },
          { name: 'Monitors', link: '#', icon: FaLaptop },
          { name: 'Keyboards', link: '#', icon: FaLaptop },
          { name: 'External Drives', link: '#', icon: FaLaptop },
          { name: 'Printers', link: '#', icon: FaLaptop },
        ],
      },
      {
        heading: 'Audio & Entertainment',
        items: [
          { name: 'Headphones', link: '#', icon: FaHeadphones },
          { name: 'Bluetooth Speakers', link: '#', icon: FaHeadphones },
          { name: 'Soundbars', link: '#', icon: FaHeadphones },
          { name: 'Home Theater Systems', link: '#', icon: FaHeadphones },
          { name: 'Earbuds', link: '#', icon: FaHeadphones },
        ],
      },
      {
        heading: 'Gaming & VR',
        items: [
          { name: 'Gaming Consoles', link: '#', icon: FaGamepad },
          { name: 'VR Headsets', link: '#', icon: FaHeadphones },
          { name: 'Gaming Accessories', link: '#', icon: FaGamepad },
          { name: 'Game Controllers', link: '#', icon: FaGamepad },
        ],
      },
      {
        heading: 'Wearables',
        items: [
          { name: 'Smartwatches', link: '#', icon: FaMobileAlt },
          { name: 'Fitness Trackers', link: '#', icon: FaMobileAlt },
          { name: 'Smart Rings', link: '#', icon: FaMobileAlt },
        ],
      },
      {
        heading: 'Cameras & Photography',
        items: [
          { name: 'Digital Cameras', link: '#', icon: FaCamera },
          { name: 'Camera Accessories', link: '#', icon: FaCamera },
          { name: 'Drones', link: '#', icon: FaCamera },
        ],
      },
    ],
  },
  {
    name: 'Fashion',
    icon: FaTshirt,
    subCategories: [
      {
        heading: 'Clothing',
        items: [
          { name: 'T-Shirts', link: '#', icon: FaTshirt },
          { name: 'Jeans', link: '#', icon: FaTshirt },
          { name: 'Jackets', link: '#', icon: FaTshirt },
          { name: 'Sweaters', link: '#', icon: FaTshirt },
        ],
      },
      {
        heading: 'Footwear',
        items: [
          { name: 'Sneakers', link: '#', icon: FaShoePrints },
          { name: 'Boots', link: '#', icon: FaShoePrints },
          { name: 'Sandals', link: '#', icon: FaShoePrints },
          { name: 'Formal Shoes', link: '#', icon: FaShoePrints },
        ],
      },
      {
        heading: 'Accessories',
        items: [
          { name: 'Hats', link: '#', icon: FaTshirt },
          { name: 'Belts', link: '#', icon: FaTshirt },
          { name: 'Watches', link: '#', icon: FaTshirt },
        ],
      },
    ],
  },
  {
    name: 'Home Appliances',
    icon: FaFolder,
    subCategories: [
      {
        heading: 'Kitchen Appliances',
        items: [
          { name: 'Refrigerators', link: '#', icon: FaFolder },
          { name: 'Microwaves', link: '#', icon: FaFolder },
          { name: 'Blenders', link: '#', icon: FaFolder },
          { name: 'Coffee Makers', link: '#', icon: FaFolder },
        ],
      },
      {
        heading: 'Cleaning Appliances',
        items: [
          { name: 'Vacuum Cleaners', link: '#', icon: FaPlug },
          { name: 'Air Purifiers', link: '#', icon: FaPlug },
          { name: 'Steam Cleaners', link: '#', icon: FaPlug },
        ],
      },
      {
        heading: 'Laundry Appliances',
        items: [
          { name: 'Washing Machines', link: '#', icon: FaFolder },
          { name: 'Dryers', link: '#', icon: FaFolder },
          { name: 'Irons', link: '#', icon: FaFolder },
        ],
      },
    ],
  },
  {
    name: 'Sports & Outdoors',
    icon: FaRunning,
    subCategories: [
      {
        heading: 'Outdoor Gear',
        items: [
          { name: 'Tents', link: '#', icon: FaFolder },
          { name: 'Sleeping Bags', link: '#', icon: FaFolder },
          { name: 'Backpacks', link: '#', icon: FaFolder },
          { name: 'Camping Stoves', link: '#', icon: FaFolder },
        ],
      },
      {
        heading: 'Sports Equipment',
        items: [
          { name: 'Bikes', link: '#', icon: FaRunning },
          { name: 'Tennis Rackets', link: '#', icon: FaRunning },
          { name: 'Football', link: '#', icon: FaRunning },
          { name: 'Hiking Shoes', link: '#', icon: FaRunning },
        ],
      },
      {
        heading: 'Books',
        items: [
          { name: 'Fiction', link: '#', icon: FaBook },
          { name: 'Non-fiction', link: '#', icon: FaBook },
          { name: 'Comics', link: '#', icon: FaBook },
          { name: 'Educational', link: '#', icon: FaBook },
        ],
      },
    ],
  },
  {
    name: 'Books & Media',
    icon: FaBook,
    subCategories: [
      {
        heading: 'Books',
        items: [
          { name: 'Fiction', link: '#', icon: FaBook },
          { name: 'Non-fiction', link: '#', icon: FaBook },
          { name: 'Comics', link: '#', icon: FaBook },
          { name: 'Educational', link: '#', icon: FaBook },
        ],
      },
      {
        heading: 'Movies & TV',
        items: [
          { name: 'Action', link: '#', icon: FaCamera },
          { name: 'Comedy', link: '#', icon: FaCamera },
          { name: 'Drama', link: '#', icon: FaCamera },
          { name: 'Documentary', link: '#', icon: FaCamera },
        ],
      },
    ],
  },
  {
    name: 'Beauty & Personal Care',
    icon: FaPaintBrush,
    subCategories: [
      {
        heading: 'Skincare',
        items: [
          { name: 'Face Creams', link: '#', icon: FaPaintBrush },
          { name: 'Face Masks', link: '#', icon: FaPaintBrush },
          { name: 'Sunscreens', link: '#', icon: FaPaintBrush },
        ],
      },
      {
        heading: 'Hair Care',
        items: [
          { name: 'Shampoo', link: '#', icon: FaPaintBrush },
          { name: 'Conditioners', link: '#', icon: FaPaintBrush },
          { name: 'Hair Brushes', link: '#', icon: FaPaintBrush },
        ],
      },
      {
        heading: 'Makeup',
        items: [
          { name: 'Lipsticks', link: '#', icon: FaPaintBrush },
          { name: 'Foundation', link: '#', icon: FaPaintBrush },
          { name: 'Eyeshadows', link: '#', icon: FaPaintBrush },
        ],
      },
    ],
  },
  {
    name: 'Gadgets & Tools',
    icon: FaApple,
    subCategories: [
      {
        heading: 'Smart Home Devices',
        items: [
          { name: 'Smart Lights', link: '#', icon: FaApple },
          { name: 'Smart Plugs', link: '#', icon: FaApple },
          { name: 'Smart Thermostats', link: '#', icon: FaApple },
        ],
      },
      {
        heading: 'Tools & Equipment',
        items: [
          { name: 'Power Tools', link: '#', icon: FaApple },
          { name: 'Hand Tools', link: '#', icon: FaApple },
          { name: 'Garden Tools', link: '#', icon: FaApple },
        ],
      },
      {
        heading: 'Makeup',
        items: [
          { name: 'Lipsticks', link: '#', icon: FaPaintBrush },
          { name: 'Foundation', link: '#', icon: FaPaintBrush },
          { name: 'Eyeshadows', link: '#', icon: FaPaintBrush },
        ],
      },
    ],
  },
];

const HomeCatrgories = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<SubCategory | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(activeCategory);

  return (

    <div>
      {!isMobile ? (
        <>



          <div
            className="absolute inline-block text-left"
            onMouseEnter={() => !isMobile && setDropdownVisible(true)}
            onMouseLeave={() => !isMobile && setDropdownVisible(false)}
          >


            {/* Dropdown Button */}
            <button
              className={` px-6 leading-normal md:px-8 h-[40px] w-auto md:w-[256px] rounded-full transition-colors duration-300  flex items-center justify-between ${dropdownVisible
                ? 'font-medium bg-[#f2f2f2] text-[#20BEAD] text-base	 '
                : 'text-[#222222] border border-[#20BEAD] hover:bg-[#f2f2f2] hover:text-[#222222]'
                }`}
              onClick={() => isMobile && setDropdownVisible(!dropdownVisible)}
              onMouseLeave={() => !isMobile && setActiveSubCategory(null)}

            >
              <FaBars className="text-sm text-[#20BEAD] " />
              <span className="md:block mr-8 	text-[#20BEAD] font-montserrat  text-sm leading-normal">
                All Categories
              </span>
              <span
                className={`ml-2 transform transition-transform duration-300 ${dropdownVisible ? 'rotate-180' : 'rotate-0'
                  }`}
              >
                <FaChevronDown className="text-xs text-[#20BEAD]" />
              </span>
            </button>



            {/* Dropdown Menu */}
            {dropdownVisible && (
              <div
                onMouseLeave={() => !isMobile && setActiveCategory(null)}
                className={` md:left-0 ${activeCategory ? ' ' : ''}  text-[#222222]  min-h-[530px] h-auto origin-top-left mt-[-13.5px]  focus:outline-none flex flex-col md:flex-row`}
              >
                {/* Sidebar for Categories */}
                <div
                  className={`  bg-[#f2f2f2] md:w-[256px] rounded-b-3xl   overflow-y-auto`}>
                  <div className="py-2">

                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className={`group  relative cursor-pointer py-3  rounded transition-all duration-100 ease-in-out ${activeCategory?.name === category.name
                          ? 'bg-[white] text-[14px] font-medium		 text-[#000000]'
                          : 'text-[rgb(25, 25, 25)] font-light text-[14px]  leading-normal hover:bg-[#f2f2f2]'
                          }`}
                        onMouseEnter={() => !isMobile && setActiveCategory(category)}
                        // onMouseLeave={() => !isMobile && setActiveSubCategory(null)}

                        onClick={() => isMobile && setActiveCategory(category)}
                      >
                        <div className="flex items-center  font-montserrat tracking-normal">
                          <category.icon className="w-4 h-4 mr-4 ml-8 text-[#20BEAD] font-light " />
                          {category.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>



                {/* Right Section for Subcategories */}
                <div
                  className={`flex-grow overflow-hidden bg-white ${isMobile
                    ? ' overflow-y-auto max-h-[400px]'
                    : 'some-other-class overflow-y-auto max-h-[550px] shadow'
                    } ${activeCategory ? 'rounded-xl	' : 'hidden'}`}
                >
                  {activeCategory ? (
                 <div
                 className={`py-2 px-2 grid gap-4 ${
                   activeCategory.subCategories.length === 2 ? "grid-cols-2" : "grid-cols-1 md:grid-cols-3"
                 }`}
               >
                 {activeCategory.subCategories.map((subCategory, subIndex) => (
                   <div key={subIndex} className="">
                     <div className="text-sm font-montserrat mt-4 font-medium text-[#20BEAD] ml-4">
                       {subCategory.heading}
                     </div>
                     <div className="flex flex-col gap-2">
                       {subCategory.items.map((item, itemIndex) => (
                         <a
                           key={itemIndex}
                           href={item.link}
                           className={`flex items-center leading-18 font-custom font-light px-3 mt-2 text-sm text-gray-500 hover:text-[#20BEAD] transition-all duration-300 ease-in-out ${
                             activeSubCategory?.name === item.name ? "text-[red]" : ""
                           }`}
                           onMouseEnter={() => setActiveSubCategory(item)}
                           onClick={() => setActiveSubCategory(item)}
                         >
                           <item.icon className="w-4 h-4 mr-2" />
                           {item.name}
                         </a>
                       ))}
                     </div>
                   </div>
                 ))}
               </div>
                  )
                    :
                    (
                      <div className="text-center py-20 text-gray-400">No Sub-categories</div>
                    )
                  }

                </div>

              </div>
            )}
          </div>
        </>
      ) :
        <div className="">
          <AllCollectioMenu />
        </div>

      }
    </div>


  );
};

export default HomeCatrgories;