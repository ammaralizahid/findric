"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";
import Image from "next/image";

// Define the Product type
interface Product {
  id: number;
  title: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  inStock: boolean;
}

const Collection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<number[]>([]); // Array to keep track of favorite products

  // Type the useRef hook with HTMLDivElement for the slider container
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const products: Product[] = [
    {
      id: 1,
      title: "Premium Wireless Headphones with Noise Cancellation",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      originalPrice: 299.99,
      discountedPrice: 249.99,
      inStock: true,
    },
    {
      id: 2,
      title: "Smart Fitness Watch with Heart Rate Monitor",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      originalPrice: 199.99,
      discountedPrice: 159.99,
      inStock: true,
    },
    {
      id: 3,
      title: "Professional Camera Lens Kit",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      originalPrice: 599.99,
      discountedPrice: 499.99,
      inStock: false,
    },
    {
      id: 4,
      title: "Ergonomic Gaming Mouse",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
      originalPrice: 89.99,
      discountedPrice: 69.99,
      inStock: true,
    },
    {
      id: 5,
      title: "Mechanical Gaming Keyboard RGB",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      originalPrice: 159.99,
      discountedPrice: 129.99,
      inStock: true,
    },
    // New Products Added
    {
      id: 6,
      title: "4K Ultra HD Smart TV",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      originalPrice: 999.99,
      discountedPrice: 849.99,
      inStock: true,
    },
    {
      id: 7,
      title: "Wireless Bluetooth Earbuds",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      originalPrice: 129.99,
      discountedPrice: 99.99,
      inStock: true,
    },
    {
      id: 8,
      title: "Electric Toothbrush with UV Sanitizer",
      image: "https://images.unsplash.com/photo-1600691415284-cbce7b956b44",
      originalPrice: 79.99,
      discountedPrice: 59.99,
      inStock: true,
    },
    {
      id: 9,
      title: "Gaming Chair with Reclining Backrest",
      image: "https://images.unsplash.com/photo-1604044383965-4e763b1ea703",
      originalPrice: 199.99,
      discountedPrice: 159.99,
      inStock: true,
    },
  ];

  // Auto-play functionality using useEffect hook
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 3000);
    }
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isAutoPlaying]);

  // Navigation functions
  const handlePrev = (): void => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.floor(products.length / 4) : prev - 1
    );
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) =>
      prev === Math.floor(products.length / 4) ? 0 : prev + 1
    );
  };

  // Handle dot navigation
  const handleDotClick = (index: number): void => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  const totalSlides = Math.ceil(products.length / 4); // Total number of visible sets of products

  // Toggle favorite functionality
  const toggleFavorite = (id: number) => {
    console.log(typeof id); // Ensure this logs 'number'

    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favoriteId) => favoriteId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Heading for All Collections */}
      <h2 className="text-3xl text-[#20BEAD] font-bold text-center mb-6">
        All Collections
      </h2>

      <div
        className="relative w-11/12 mx-auto overflow-hidden py-8"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Product Slider"
      >
        <div
          ref={sliderRef}
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-full sm:min-w-[45%] lg:min-w-[30%] xl:min-w-[25%] p-4"
            >
              <div className="relative bg-white rounded-lg shadow-md min-h-[413px] hover:shadow-xl transition-transform hover:scale-105 overflow-hidden">
                {/* Favorite Button */}
                {/* {showFavoriteButton === product.id && ( */}
                <button
                  className="absolute top-2 right-2 p-2 text-red-500 hover:text-red-700 z-10"
                  onClick={() => toggleFavorite(product.id)}
                  aria-label={`Add ${product.title} to favorites`}
                >
                  <FaHeart
                    className={`transition-colors ${
                      favorites.includes(product.id) ? "text-red-600" : ""
                    }`}
                  />
                </button>
                {/* )} */}

                <div className="relative  overflow-hidden aspect-[4/3]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#20BEAD] line-clamp-2 mb-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-gray-500 line-through mr-2">
                        ${product.originalPrice}
                      </span>
                      <span className="text-[#20BEAD] font-bold">
                        ${product.discountedPrice}
                      </span>
                    </div>
                    <span
                      className={`text-sm ${
                        product.inStock ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                  <button
                    className="w-full bg-[#20BEAD] hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    disabled={!product.inStock}
                    aria-label={`Add ${product.title} to cart`}
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-r-lg transition-colors hidden sm:block"
        aria-label="Previous slide"
        disabled={currentIndex === 0}
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-l-lg transition-colors hidden sm:block"
        aria-label="Next slide"
        disabled={currentIndex === totalSlides - 1}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Collection;
