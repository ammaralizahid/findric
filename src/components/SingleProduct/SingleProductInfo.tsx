"use client";
import React, { useState, useEffect } from "react";
import { Controller, EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import "swiper/css/controller";
import Image from "next/image";
import {
  FaStar,
  FaTag,
  FaTshirt,
  FaPalette,
  FaShoppingCart,
  FaWeightHanging,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaBoxOpen,
  FaInfoCircle,
  FaPlus,
  FaMinus,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  sku: string;
  category: string;
  tags: string[];
  images: string[];
  thumbnails: string[];
  rating: number;
  reviewsCount: number;
  features: string[];
  discountPercentage?: number;
  colors: string[];
  sizes: string[];
  weight?: string;
  dimensions?: string;
  material?: string;
  // careInstructions?: string;
}

const SingleProductInfo = ({
  id,
  name,
  price,
  description,
  sku,
  category,
  tags,
  images,
  thumbnails,
  rating,
  reviewsCount,
  features,
  discountPercentage = 0,
  colors = [], // Default colors
  sizes = [], // Default sizes
  weight,
  dimensions,
  material,
}: // careInstructions,
Product) => {
  const [loadSwiper, setLoadSwiper] = useState(false);
  const [galleryThumbs, setGalleryThumbs] = useState<SwiperType | null>(null);
  const [quantity, setQuantity] = useState(1);

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const galleryThumbsOptions = {
    modules: [Controller],
    spaceBetween: 8,
    speed: 0,
    slidesPerView: 4,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "horizontal" as const, // Default direction

    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 10,
        direction: "horizontal" as const, // Ensure it remains horizontal
      },
      768: {
        direction: "vertical" as const, // Ensure this changes correctly
        slidesPerView: 4,
        spaceBetween: 8,
      },
      1024: {
        direction: "horizontal" as const, // Keep horizontal for larger screens
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  };

  const galleryTopOptions = {
    modules: [EffectFade, Thumbs, Navigation], // Add Navigation module
    spaceBetween: 0,
    effect: "fade" as const,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const handleCount = (operation: "inc" | "dec") => {
    setQuantity((prev) =>
      operation === "inc" ? prev + 1 : Math.max(prev - 1, 1)
    );
  };

  const discountedPrice =
    discountPercentage > 0 ? price - (price * discountPercentage) / 100 : price;

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-8 bg-white">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto">
        {/* Image Gallery (keep same) */}
        <div className="lg:w-2/5 lg:pr-8 mb-6 md:mb-8 lg:mb-0">
          <div className="relative md:flex md:flex-row lg:flex-col md:gap-4">
            {/* Main Image Slider */}
            <div className="md:w-4/5 lg:w-full">
              <Swiper
                {...galleryTopOptions}
                thumbs={{ swiper: galleryThumbs }}
                className=" shadow-xl hover:shadow-2xl transition-shadow duration-300"
                key={`product-gallery-${id}`}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={`main-${index}`}>
                    <div className="aspect-square  lg:aspect-[4/5]  bg-gray-100 overflow-hidden relative transform hover:scale-105 transition-transform duration-300">
                      <Image
                        src={img}
                        alt={`${name} - View ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index === 0}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,..."
                      />
                    </div>
                  </SwiperSlide>
                ))}
                <div className="swiper-button-prev  !left-2 !text-[#20bead] !bg-transparent hover:!bg-[#20bead]/10 !rounded-full !p-2 !w-8 !h-8 !top-1/2 !-translate-y-1/2 transition-all duration-300">
                  <FaChevronLeft className="text-xs" />
                </div>
                <div className="swiper-button-next !right-2 !text-[#20bead] !bg-transparent hover:!bg-[#20bead]/10 !rounded-full !p-2 !w-8 !h-8 !top-1/2 !-translate-y-1/2 transition-all duration-300">
                  <FaChevronRight className="text-xs" />
                </div>
              </Swiper>
            </div>

            {/* Thumbnail Slider - Vertical on md */}
            <div className="md:w-1/5 lg:w-full">
              <Swiper
                {...galleryThumbsOptions}
                className="gallery-thumb h-full mt-2 md:!h-[calc(95vw*0.8)] lg:!h-auto"
              >
                {thumbnails.map((thumb, index) => (
                  <SwiperSlide key={`thumb-${index}`}>
                    <div className="aspect-square bg-gray-100  overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#20bead] transition-all duration-300 relative transform hover:scale-105">
                      <Image
                        src={thumb}
                        alt={`${name} - Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 20vw, 10vw"
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-3/5 font-montserrat lg:pl-8">
          <div className="space-y-6">
            {/* Price and Rating */}
            <div className="border-b pb-2">
              <div className="flex items-center gap-4">
                <FaTag className="text-[#20bead] w-5 h-5" />
                {discountPercentage > 0 && (
                  <p className="text-2xl font-bold text-[#20bead]">
                    ${discountedPrice.toFixed(2)}
                  </p>
                )}
                <p
                  className={`text-2xl font-bold ${
                    discountPercentage > 0
                      ? "line-through text-gray-400"
                      : "text-[#20bead]"
                  }`}
                >
                  ${price.toFixed(2)}
                </p>
                {discountPercentage > 0 && (
                  <span className="text-sm bg-red-500 text-white px-2 py-1 rounded-full shadow-sm">
                    {discountPercentage}% off
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between mt-4">
                <h1 className="text-3xl xs:text-lg font-bold text-gray-900 flex items-center gap-2">
                  <FaBoxOpen className="text-[#20bead]" />
                  {name}
                </h1>
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < rating ? "fill-current" : "fill-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({reviewsCount} reviews)
                  </span>
                </div>
              </div>

              {/* Local Availability */}
              <div className="mt-2 flex items-center bg-teal-50 p-3 rounded-lg border border-teal-100">
                <FaMapMarkerAlt className="text-teal-600 w-5 h-5 mr-2" />
                <div>
                  <p className="text-sm font-medium text-teal-800">
                    Available in 3 stores near you
                  </p>
                  <button className="text-teal-600 text-sm hover:text-teal-700 hover:underline mt-1 transition-colors flex items-center gap-1">
                    View nearby availability
                    <span className="text-teal-600">→</span>
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-gray-600 leading-relaxed flex items-start">
                <FaInfoCircle className="w-5 h-5 text-[#20bead] mr-2 flex-shrink-0" />
                {description}
              </p>

              {/* Features */}
              <ul className="mt-3 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-[#20bead] rounded-full mr-3"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size & Color Selection */}
            <div className="space-y-4 border-b pb-2">
              <div className="flex justify-between ">
                <div className="w-1/2 pr-2 ">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <FaTshirt className="text-[#20bead]" />
                    Select Size
                  </h3>
                  <div className="flex  flex-wrap gap-2 mt-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`px-4 py-2 border-2 rounded-lg text-sm font-medium  transition-all ${
                          selectedSize === size
                            ? "border-[#20bead] bg-[#20bead] text-white"
                            : "border-gray-200 text-gray-700 hover:border-[#20bead]"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className=" w-1/2 pl-2 ">
                  <h3 className="text-lg font-semibold text-gray-900 flex justify-end items-center gap-2">
                    <FaPalette className="text-[#20bead]" />
                    Choose Color
                  </h3>
                  <div className="flex justify-end flex-wrap gap-2 mt-2 ml-8">
                    {colors.map((color, index) => (
                      <button
                        key={index}
                        className={`w-8 h-8 rounded-full border-2 transition-transform ${
                          selectedColor === color
                            ? "border-[#20bead] ring-2 ring-offset-1 ring-[#20bead] scale-110"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="py-2 ">
              <div className="flex items-center justify-between">
                <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
                  <button
                    onClick={() => handleCount("dec")}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors text-black"
                  >
                    <FaMinus className="w-4 h-4" />
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-12 text-center outline-none bg-white text-black font-medium"
                  />
                  <button
                    onClick={() => handleCount("inc")}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors text-black"
                  >
                    <FaPlus className="w-4 h-4" />
                  </button>
                </div>
                <button className="px-4 py-3 bg-[#20bead] text-white hover:bg-[#1aa899] transition-colors rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                  <FaShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
            {/* User Profile and Visit Store */}
            <div className="flex items-center justify-between py-4 border-t">
              {/* User Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={"https://via.placeholder.com/150"} // Default placeholder
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full border border-gray-300"
                />
                <div>
                  <p className="font-medium text-gray-900">john doe</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaMapMarkerAlt className="w-4 h-4 text-[#20bead] mr-1" />
                    {/* {userLocation} */}
                  </div>
                </div>
              </div>

              {/* Visit Store Button */}
              <Link href="/store">
                <button className="px-6 py-2 bg-[#20bead] text-white rounded-lg hover:bg-[#1aa899] transition-colors font-medium shadow-md hover:shadow-lg">
                  Visit Store
                </button>
              </Link>
            </div>

            {/* Enhanced Additional Info */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex items-center">
                  <FaTag className="w-5 h-5 text-[#20bead] mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Product SKU</p>
                    <p className="font-medium text-gray-900">{sku}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <FaBoxOpen className="w-5 h-5 text-[#20bead] mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium text-[#20bead] hover:underline cursor-pointer">
                      {category}
                    </p>
                  </div>
                </div>

                {weight && (
                  <div className="flex items-center">
                    <FaWeightHanging className="w-5 h-5 text-[#20bead] mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Weight</p>
                      <p className="font-medium text-gray-900">{weight}</p>
                    </div>
                  </div>
                )}

                {dimensions && (
                  <div className="flex items-center">
                    <FaRulerCombined className="w-5 h-5 text-[#20bead] mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Dimensions</p>
                      <p className="font-medium text-gray-900">{dimensions}</p>
                    </div>
                  </div>
                )}

                {material && (
                  <div className="flex items-center">
                    <FaInfoCircle className="w-5 h-5 text-[#20bead] mr-2" />
                    <div>
                      <p className="text-sm text-gray-500">Material</p>
                      <p className="font-medium text-gray-900">{material}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="pt-">
                <div className="flex items-start">
                  <FaTag className="w-5 h-5 text-[#20bead] mr-2 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-2">Product Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white border border-[#20bead] rounded-full text-sm text-[#20bead] hover:bg-[#20bead]/10 transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductInfo;
