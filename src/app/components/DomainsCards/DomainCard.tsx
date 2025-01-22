'use client';
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

// Define the type for the domain prop
interface Domain {
  id: number;
  image: string;
  title: string;
  details: string;
}

interface DomainCardProps {
  domains: Domain[]; // Accept domains as a prop
}

const DomainCard: React.FC<DomainCardProps> = ({ domains }) => {
  const [selectedDomain, setSelectedDomain] = useState<number | null>(null);

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
    autoplaySpeed: 3000,
    appendDots: (dots: JSX.Element[]) => (
      <div className="slick-dots mt-20" style={{ marginTop: "20px" }}>
        {dots}
      </div>
    ),
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
    <div className="container mx-auto pb-20">
      <Slider {...settings}>
        {domains.map((domain) => (
          <div
            key={domain.id}
            className={`cursor-pointer mb-8 relative max-w-sm rounded-xl shadow-xl py-10 lg:mx-14 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl ${
              selectedDomain === domain.id ? "border-4 border-[#20BEAD] shadow-2xl scale-105" : ""
            }`}
            onClick={() => setSelectedDomain(domain.id)}
          >
            <div className="relative w-full h-48 mb-3 min-h-[300px] lg:min-h-[300px]">
              <Image
                src={domain?.image}
                alt={domain?.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg transition-opacity duration-500 ease-in-out"
              />
            </div>
            <span className="flex justify-center text-2xl lg:mt-10 font-semibold mb-5">
              {domain.title}
            </span>
            <span className="flex justify-center text-lg text-gray-600">
              {domain.details}
            </span>
          </div>
        ))}
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
    className="absolute mt-10 left-0 z-10 flex items-center justify-center text-white bg-[#20BEAD] rounded-full hover:bg-[#1a8b81] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
    onClick={onClick}
    style={{
      top: "40%",
      transform: "translateY(-50%)",
      fontSize: "30px",
      width: "40px",
      height: "40px",
    }}
  >
    &lt;
  </button>
);

const SampleNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    className="absolute mt-10 right-0 z-10 flex items-center justify-center text-white bg-[#20BEAD] rounded-full hover:bg-[#1a8b81] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
    onClick={onClick}
    style={{
      top: "40%",
      transform: "translateY(-50%)",
      fontSize: "30px",
      width: "40px",
      height: "40px",
    }}
  >
    &gt;
  </button>
);

export default DomainCard;
