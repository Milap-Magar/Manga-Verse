import React from "react";
import Faq_Button from "./Faq_Button";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-gray-100 text-gray-900 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer flex flex-col">
      {/* Image Section */}
      <div className="w-full">
        <img
          src={image}
          alt={`${title} cover`}
          className="w-full h-64 sm:h-48 md:h-64 lg:h-72 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="p-4 flex flex-col items-center text-center">
        {/* Title Section */}
        <h3 className="text-xl sm:text-lg md:text-2xl font-bold uppercase tracking-wide mb-1 w-full truncate">
          {title}
        </h3>

        {/* Description Section */}
        <p
          className="px-2 text-sm sm:text-xs md:text-base font-medium text-gray-600 tracking-wide mb-2 overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            lineHeight: "1.5rem", 
            maxHeight: "4.5rem",
          }}
        >
          {description}
        </p>
      </div>

      {/* Button Section */}
      <div className="p-4 flex justify-center">
        <Faq_Button title={"Read Manga"} />
      </div>
    </div>
  );
};

export default Card;
