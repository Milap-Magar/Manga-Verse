import React from "react";

interface CardProps {
  title: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ image, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden shadow-[#a9aeae] transition-transform transform hover:scale-105 hover:rounded-xl cursor-pointer">
      <img
        src={image}
        alt={`${title} cover`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold truncate">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
