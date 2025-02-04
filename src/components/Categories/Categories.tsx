'use client';
import React from "react";
import Slider from "react-slick";
import Button from "../Button";
import Image from "next/image";

// Interface for Product
interface Rating {
    rate: number;
    count: number;
}

interface Product {
    title: string;
    id: number;
    image: string;
    price: number;
    description: string;
    rating: Rating;
    button: number;
}

interface CategoriesProps {
    products: Product[];  
}

const Categories: React.FC<CategoriesProps> = ({ products }) => {

    const truncateDescription = (description: string, maxLength: number = 40) => {
        return description?.length > maxLength ? description.slice(0, maxLength) + "..." : description;
    };

    const truncateTitle = (title: string, maxLength: number = 20) => {
        return title?.length > maxLength ? title.slice(0, maxLength) + "..." : title;
    };

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1, dots: true },
            },
            {
                breakpoint: 650,
                settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
            },
        ],
    };

    return (
        <div className="container mx-auto lg:p-20">
            <Slider {...settings}>
                {products?.length > 0 ? (
                    products?.map((product) => (
                        <div
                            key={product?.id}
                            className="bg-white shadow-2xl rounded-lg p-6 mb-10 hover:shadow-xl transition-shadow duration-300 mx-2 transform hover:scale-105"
                        >
                            <div className="relative w-full h-48 mb-3">
                                <Image
                                    src={product?.image}
                                    alt={product?.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-lg"
                                />
                            </div>
                            
                            <h3 className="text-md font-semibold mb-1">{truncateTitle(product?.title)}</h3>
                            <p className="text-sm text-gray-500 mb-2">{truncateDescription(product?.description)}</p>
                            {
                                product?.price &&

                                <p className="text-lg font-bold text-[#20BEAD] mb-4">${product?.price}</p>
                            }
                            {
                                product?.rating &&
                                <div className="flex items-center mb-3">
                                <span className="text-yellow-400">
                                    {"★".repeat(Math.round(product?.rating?.rate))}
                                    {"☆".repeat(5 - Math.round(product?.rating?.rate))}
                                </span>
                                <span className="ml-2 text-gray-600">{product?.rating?.rate} / 5</span>
                            </div>
                            }
                            {
                                product?.button ===0 &&
                                <Button
                                type={"button"}
                                text={"View Product"}
                                className="w-full text-white bg-[#20BEAD] p-2 font-semibold hover:bg-[#1a8b81]"
                                />
                            }
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No products available.</p>
                )}
            </Slider>
        </div>
    );
};

interface ArrowProps {
    onClick?: () => void;
}

const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
        className="absolute lg:left-[-40px] left-0 z-10 flex items-center justify-center text-white bg-[#20BEAD] rounded-full hover:bg-[#1a8b81] shadow-lg"
        onClick={onClick}
        style={{ top: "40%", transform: "translateY(-50%)", fontSize: "30px", width: "40px", height: "40px" }}
    >
        &lt;
    </button>
);

const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
        className="absolute lg:right-[-40px] right-0 z-10 flex items-center justify-center text-white bg-[#20BEAD] rounded-full hover:bg-[#1a8b81] shadow-lg"
        onClick={onClick}
        style={{ top: "40%", transform: "translateY(-50%)", fontSize: "30px", width: "40px", height: "40px" }}
    >
        &gt;
    </button>
);

export default Categories;
