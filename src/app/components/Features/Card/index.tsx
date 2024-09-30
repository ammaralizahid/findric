// app/components/Card.tsx
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
      style={{ backgroundColor: bg_color }} // Use inline styles for dynamic bg color
      className="py-10 px-3 rounded-2xl overflow-hidden cursor-pointer h-[450px]"
      onClick={onClick}
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 font-semibold">{description}</p>
      </div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          width={100} // Set your desired width
          height={100} // Set your desired height
        />
      )}
    </div>
  );
};

export default Card;
