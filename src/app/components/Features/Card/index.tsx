import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string | StaticImageData;
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
      className="w-full font-montserrat py-10 px-3 rounded-2xl overflow-hidden cursor-pointer mx-auto lg:h-[480px] shadow-xl"
      onClick={onClick}
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {/* Replace \n with line breaks */}
        <p className="text-gray-700 font-medium">
          {description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
      {imageUrl && (
        <div className="relative w-full h-64">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
    </div>
  );
};

export default Card;
