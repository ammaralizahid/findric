import React from "react";
import Image, { StaticImageData } from "next/image";
interface CardProps {
  title: string;
  description: string;
  imageUrl?: string | StaticImageData; // Accept both string and StaticImageData
  onClick?: () => void;
  bg_color?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  bg_color,
  onClick,
}) => {
  return (
    <div
      style={{ backgroundColor: bg_color }}
      className="w-full py-10 px-3 rounded-2xl overflow-hidden cursor-pointer mx-auto lg:h-[480px] shadow-xl" // Ensure w-full is added here
      onClick={onClick}
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 font-semibold">{description}</p>
      </div>
      {imageUrl && (
        <div className="relative w-full h-64"> {/* Container for the image */}
          <Image
            src={imageUrl}
            alt={title}
            layout="fill" // This makes the image fill the container
            objectFit="contain" // Ensures the image is fully displayed without being cropped
          />
        </div>
      )}
    </div>
  );
};


export default Card;
