"use client";

import { useState } from "react";
import { FaBars, FaMobileAlt, FaLaptop, FaHeadphones, FaCamera, FaGamepad, FaTshirt, FaShoePrints, FaFolder, FaRunning, FaBook, FaPaintBrush, FaApple, FaPlug, FaTimes, FaChevronRight } from "react-icons/fa";
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

interface Category {
    name: string;
    icon: React.ElementType;
    subCategories: SubCategory[];
}

interface SubCategory {
    heading: string;
    items: MenuItem[];
}

interface MenuItem {
    name: string;
    link: string;
    icon: React.ElementType;
}

const AllCollectioMenu = () => {
    const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
    const [openSubCategories, setOpenSubCategories] = useState<Record<string, string | null>>({});
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

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
                        { name: 'Smartphones Accessories', link: '#', icon: FaMobileAlt },
                        { name: 'Smartphones Accessories', link: '#', icon: FaMobileAlt },
                        { name: 'Smartphones Accessories', link: '#', icon: FaMobileAlt },
                        { name: 'Smartphones Accessories', link: '#', icon: FaMobileAlt },
                        { name: 'Smartphones Accessories', link: '#', icon: FaMobileAlt },
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
            ],
        },
    ];

    const toggleCategory = (categoryName: string) => {
        setOpenCategories((prev) => {

            if (prev[categoryName]) {
                return {};
            }

            return { [categoryName]: true };
        });
        setOpenSubCategories({});
    };

    const toggleSubCategory = (categoryName: string, subCategoryName: string) => {
        setOpenSubCategories((prev) => ({
            ...prev,
            [categoryName]: prev[categoryName] === subCategoryName ? null : subCategoryName,
        }));
    };

    const renderMenu = (categories: Category[]) => {
        return categories.map((category) => (
            <div
                key={category.name}
                className=" border-[#0392AA]  space-y-4 max-h-96 overflow-y-auto  "
            >

                {/* Main Category Button */}

                <button
                    className="flex justify-between items-center w-full px-4 py-3 text-[] hover:text-white  hover:bg-[gray] transition-all duration-200"
                    onClick={() => toggleCategory(category.name)}
                >
                    <div className="flex items-center gap-3">
                        {category.icon && (
                            <category.icon className="text-2xl" />
                        )}
                        <span className="text-lg font-medium font-montserrat">{category.name}</span>
                    </div>
                    <span className="text-sm">
                        {openCategories[category.name] ? (
                            <FaChevronUp className="text-white" />
                        ) : (
                            <FaChevronDown className="text-[]" />
                        )}
                    </span>
                </button>

                {/* Subcategories */}
                {openCategories[category.name] && (
                    <div className="space-y-3 bg-white">
                        {category.subCategories.map((subCategory) => (
                            <div
                                key={subCategory.heading}
                                className="bg- p-3 rounded-md shadow-sm"
                            >
                                {/* Subcategory Button */}
                                <button
                                    className="flex justify-between items-center w-full px-3 py-2 bg-gray-200 rounded-md text-gray-700 hover:text-white hover:bg-[gray] transition-all duration-150"
                                    onClick={() =>
                                        toggleSubCategory(category.name, subCategory.heading)
                                    }
                                >
                                    <span className="text-sm font-montserrat">
                                        {subCategory.heading}
                                    </span>
                                    <span className="text-sm">
                                        {openSubCategories[category.name] ===
                                            subCategory.heading
                                            ? <FaChevronUp className="text-white" />
                                            : <FaChevronDown className="text-black" />
                                        }
                                    </span>
                                </button>

                                {/* Nested Items */}
                                {openSubCategories[category.name] === subCategory.heading && (
                                    <div className="mt-2 space-y-2 max-h-48 overflow-y-auto">
                                        {subCategory.items.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.link}
                                                className="flex items-center w-full px-3 py-2 bg-white rounded-md text-gray-600 hover:bg-[#20BEAD] transition-all duration-150"
                                            >
                                                <item.icon className="mr-2 text-lg" />
                                                <span className="text-sm">{item.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>


        ));
    };

    return (
        <div className="relative ">
            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-[#EDF2FA] p-6 border-r border-gray-200 shadow-lg md:hidden transition-transform duration-300 transform ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"}`}
            >
                {isSidebarVisible && (
                    <FaTimes
                        className="absolute top-4 right-4 w-6 h-6 text-[#0392AA] cursor-pointer"
                        onClick={() => setIsSidebarVisible(false)}
                    />
                )}

                <div className="mt-8 mb-8 flex items-center text-[#20BEAD] font-extrabold text-xl">
                    {!isSidebarVisible && (
                        <FaBars
                            className="w-6 h-6 text-[#20BEAD] cursor-pointer"
                            onClick={() => setIsSidebarVisible(true)}
                        />
                    )}
                    <span className="flex-1 ml-20  ">All Collections</span>
                </div>

                {/* Main Menu */}
                <div className="space-y-4   max-h-[calc(100vh-160px)] overflow-y-auto">{renderMenu(categories)}</div>
            </div>


            {/* Main Content */}
            <div className="p-6">
                <button
                    className="px-6 bg-[#f5f5f5] leading-normal md:px-8 h-[40px] w-auto md:w-[256px] border rounded-full transition-colors duration-300 flex items-center justify-between"
                    onClick={() => setIsSidebarVisible(true)}
                >
                    <FaBars className="text-sm" />
                    <span className="md:block mr-8 ml-8 font-montserrat text-font-black text-sm leading-normal">
                        All Categories
                    </span>

                    <FaChevronRight className="ml-2 text-xs" />
                </button>
            </div>
        </div>
    );
};

export default AllCollectioMenu;
