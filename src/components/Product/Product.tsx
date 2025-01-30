'use client';
import Button from "../Button/index";
import { CardItem } from "../mookdata/mook";
import Image from "next/image";

interface CardProps {
  item: CardItem;
}

const product: React.FC<CardProps> = ({ item }) => (
  <div
    className="flex-shrink-0 text-center mx-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-[325px] bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
    role="article"
    aria-label={item.title}
  >
    {/* Image Section */}
    <div className="relative h-48 overflow-hidden group">
      <Image
        src={item.image}
        alt={item.title}
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
        {item?.title}
      </h3>
      <p className="text-gray-400 mb-4 ">
        {item?.description}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gray-700">{item?.price}</span>
        <Button
         type={"button"}
         text={"View Details"}
          className="px-4 py-2 bg-[#4DB6AC]/80 text-white rounded-lg hover:bg-[#4DB6AC]"
          aria-label={item?.title}
        />
      </div>
    </div>
  </div>
);

export default product;
