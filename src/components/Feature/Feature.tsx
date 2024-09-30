import React from "react";
import fireflies from "../../assets/fireflies.jpg";
import deathnote from "../../assets/deathnote.jpg";
import demonslayer from "../../assets/demonslayer1.jpg";
import jujustsu from "../../assets/jujutsu.jpg";
import spyxfamily from "../../assets/spyxfamily.jpg";
import tokyorevengers from "../../assets/tokyorevengers.jpg";
import silentvoice from "../../assets/silentvoice.jpg";
import AOT from "../../assets/AOt.jpg";
import yourname from "../../assets/nameyou.jpg";
import "./Feature.css";

const Feature = () => {
  const items = [
    { src: fireflies, position: 1 },
    { src: deathnote, position: 2 },
    { src: demonslayer, position: 3 },
    { src: jujustsu, position: 4 },
    { src: spyxfamily, position: 5 },
    { src: tokyorevengers, position: 6 },
    { src: silentvoice, position: 7 },
    { src: AOT, position: 8 },
    { src: yourname, position: 9 },
  ];

  const quantity = items.length;

  return (
    <div className="banner mt-2 bg-[#beeae7]">
      <div
        style={{ "--quantity": quantity } as React.CSSProperties}
        className="slider"
      >
        {items.map((item, index) => (
          <figure
            key={index}
            style={
              {
                "--position": item.position,
                transform: `rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px)`,
              } as React.CSSProperties
            }
            className="item"
          >
            <img src={item.src} alt={`anime img ${item.position}`} />
          </figure>
        ))}
      </div>
      <div className="content">
        <h1 data-content="MangaVerse " className="text-[#e3c7a8]">
          MangaVerse
        </h1>
      </div>
    </div>
  );
};

export default Feature;
