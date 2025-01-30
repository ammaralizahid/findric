'use client'
import React from "react";

interface StarRatingProps {
  rating: number; // The current rating value, e.g., 3.5
  maxRating?: number; // The maximum number of stars (default is 5)
  className?: string; // Optional additional class names for styling
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  className = "",
}) => {
  // Ensure rating is within the acceptable range
  const clampedRating = Math.max(0, Math.min(rating, maxRating));

  // Create an array based on the max rating
  const stars = Array.from({ length: maxRating }, (_, index) => {
    const isFullStar = clampedRating - index >= 1;
    const isHalfStar = clampedRating - index >= 0.5;

    return (
      <span key={index} className={`text-yellow-500 ${className}`}>
        {isFullStar ? (
          "★" // Full star
        ) : isHalfStar ? (
          "☆" // Use a different character for half star if preferred
        ) : (
          "☆" // Empty star
        )}
      </span>
    );
  });

  return <div className="flex">{stars}</div>;
};

export default StarRating;
