'use client';
import Button from "../Button/index";
import { CardItem } from "../mookdata/mook";
import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const product: React.FC<CardProps> = ({ title, image, description }) => (
  <div
    className="flex-shrink-0 text-center  w-full  bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
    role="article"
    aria-label={title}
  >
    {/* Image Section */}
    <div className="relative h-48 overflow-hidden">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        loading="lazy"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae";
        }}
      />
    </div>

    {/* Content Section */}
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-400 text-16 mb-4 ">
        {description}
      </p>
      {/* <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-700">{item?.price}</span>
        <Button
         type={"button"}
         text={"View Details"}
          className="px-4 py-2 bg-[#4DB6AC]/80 text-white rounded-lg hover:bg-[#4DB6AC]"
          aria-label={item?.title}
        />
      </div> */}     
    </div>
  </div>
);

export default product;



