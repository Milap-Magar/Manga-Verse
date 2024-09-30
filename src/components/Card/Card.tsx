import React from "react";
import Faq_Button from "./Faq_Button";

interface CardProps {
  title: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ image, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden shadow-[#a9aeae] transition-transform transform hover:scale-105 hover:rounded-xl cursor-pointer flex flex-col px-2 py-1">
      <div>
        <img
          src={image}
          alt={`${title} cover`}
          className="w-full h-48 object-cover"
        />
        <h3 className="text-lg font-bold truncate flex px-2 py-2">{title}</h3>
      </div>
      <div className="p-4 flex gap-5 ">
        <Faq_Button title={"Read me"} />
      </div>
    </div>
  );
};

export default Card;
