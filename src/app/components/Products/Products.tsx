// Products.tsx
'use client';
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Button from "../Button";
import Image from 'next/image';

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
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        if (Array.isArray(data)) {
          setProducts(data);
          console.log("products>>>>>>>>>>",data)
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
            setError(err.message); // Safely handle the error message
        } else if (typeof err === "string") {
            setError(err); // Handle string errors
        } else {
            setError("An unknown error occurred."); // Handle unexpected errors
        }
    } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const truncateDescription = (description: string, maxLength: number = 40) => {
    return description.length > maxLength ? description.slice(0, maxLength) + "..." : description;
  };

  const truncateTitle = (title: string, maxLength: number = 20) => {
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: false },
      },
    ],
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto py-12 px-6">
      {/* <p className="text-center text-32 opacity-70">🔥</p> */}
      {/* <h2 className="text-3xl font-bold mb-8 text-center font-montserrat text-red-400">Hot Products</h2> */}
      <Slider {...settings}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
              <Image
                src={product.image}
                alt={product.title}
                // layout="fill"
                // objectFit="cover"
                width={100}
                height={100}
                className=" rounded-t-lg mb-16"
              />
              <h3 className="text-lg font-semibold mb-2">{truncateTitle(product.title)}</h3>
              <p className="text-gray-500 mb-2">{truncateDescription(product.description)}</p>
              <p className="text-lg font-bold text-blue-600 mb-4">${product.price}</p>
              <div className="flex items-center mb-4">
                <span className="text-yellow-400">
                  {"★".repeat(Math.round(product.rating.rate))}
                  {"☆".repeat(5 - Math.round(product.rating.rate))}
                </span>
                <span className="ml-2 text-gray-600">{product.rating.rate} / 5</span>
              </div>
              <Button type={"button"} text={"View Product"} className="w-full text-white bg-customGreen p-2  font-semibold" />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </Slider>
    </div>
  );
};

// Custom Arrow Component for Previous Button
interface ArrowProps {
  onClick?: () => void;
}

const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute left-0 z-10 flex items-center justify-center text-white bg-customGreen rounded-full hover:bg-gray-200 shadow-lg"
    onClick={onClick}
    style={{ top: "50%", transform: "translateY(-50%)", fontSize: "30px", width: "40px", height: "40px" }}
  >
    &lt;
  </button>
);

SamplePrevArrow.displayName = "SamplePrevArrow";

const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute right-0 z-10 flex items-center justify-center text-white bg-customGreen rounded-full hover:bg-gray-200 shadow-xl"
    onClick={onClick}
    style={{ top: "50%", transform: "translateY(-50%)", fontSize: "30px", width: "40px", height: "40px" }}
  >
    &gt;
  </button>
);

SampleNextArrow.displayName = "SampleNextArrow";

export default Products;