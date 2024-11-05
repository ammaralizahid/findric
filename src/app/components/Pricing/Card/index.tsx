import React from "react";
import Button from "../../Button";

interface Feature {
  label: string;
}

interface CardProps {
  bg_color?: string;
  text_color?: string;
  title?: string;
  pricing?: string;
  description?: string;
  features?: Feature[]; // Array of features
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({
  bg_color,
  text_color,
  title = "STANDARD",
  pricing = "$2.5",
  description = "Ideal for the in-house teams, freelancers, or contractor teams of any size.",
  features = [], // Default to an empty array
  buttonText = "Try Free For 10 Days",
}) => {
  return (
    <div
      style={{ backgroundColor: bg_color }}
      className="flex flex-col gap-5 py-10 px-7 rounded-2xl overflow-hidden cursor-pointer mx-auto"
    >
      {/* Header Section */}
      <div className="flex flex-row gap-3 items-center">
        <h1
          className="text-lg font-semibold"
          style={{ color: text_color }} // Use inline style for text color
        >
          {title} {/* Use title from props */}
        </h1>
        <div
          className="py-1 px-3 rounded-3xl text-white font-semibold"
          style={{ backgroundColor: text_color }} // Use inline style for background color
        >
          Time
        </div>
      </div>

      {/* Pricing Section */}
      <div className="flex flex-row gap-5 items-center relative">
  <h1 className="text-5xl font-extrabold font-montserrat relative">
    {pricing}
    <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-black transform -translate-y-1/2 w-full"></span>
  </h1>
  <div>
    <p className="font-bold text-16">FREE</p>
  <p className="text-[#3d4d69] flex items-end font-medium">per user/month</p>
    </div>
</div>



      {/* Description */}
      <p className="font-medium">{description}</p> {/* Use description from props */}

      {/* Features List */}
      <ul className="space-y-2 mt-4">
        {/* List of features with tick marks */}
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="font-bold" style={{ color: text_color }}>✓</span>
            <span className="ml-2" style={{ color: text_color }}>{feature.label}</span> {/* Use feature label from props */}
          </li>
        ))}
      </ul>
      
      <Button 
        type="button" 
        text={buttonText} // Use button text from props
        className={`text-white font-semibold border-none p-2`} // Removed the inline class for button background
        style={{ backgroundColor: text_color, borderColor: "none" }} // Use inline style for button background color
      />
    </div>
  );
};

export default Card;
