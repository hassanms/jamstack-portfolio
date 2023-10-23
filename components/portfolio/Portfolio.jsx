import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import { baseUrl } from "@/baseUrl";

const Portfolio = () => {
  const [cards, setCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(-1);

  useEffect(() => {
    axios
      .get(`${baseUrl}api/portofliocards`)
      .then((res) => setCards(res.data.data[0].attributes.pf))
      .catch((err) => console.log(err));
  }, []);

  const icons = [
    <AiOutlineHeart />,
    <AiOutlineHeart />,
    <AiOutlineHeart />,
    <AiOutlineHeart />,
    <AiOutlineHeart />,
    <AiOutlineHeart />,
  ];

  const generateIcons2 = (index) => {
    return (
      <AiOutlineArrowRight
        className={`text-[#ff014f] w-5 h-5 lg:mt-1 transition-transform duration-300 ${
          hoveredCard === index
            ? "transform -translate-y-3"
            : "transform translate-y-0"
        }`}
      />
    );
  };

  return (
    <div className="p-10 md:p-8">
      <div className="text-center mt-28 lg:mt-28 space-y-8">
        <h1 className="text-[#ff014f]">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </h1>
        <h1 className="lg:text-6xl text-4xl font-bold">My Portfolio</h1>
      </div>
      <div className="flex gap-16   flex-wrap justify-center lg:space-y-0 lg:space-x-2 space-y-5 md:space-x-3 md:space-y-0 mt-16 lg:mt-20 ]">
        {cards.map((card, i) => {
          return (
            <div
              className={`w-80 h-96 md:w-[280px] lg:w-[300px] lg:h-[380px] 2xl:w-[400px] shadow_1 hovred_bg rounded-xl p-8 space-y-4 transition-transform duration-300 hover:transform scale-110`}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(-1)}
            >
              <img
                src={card?.img}
                alt=""
                className="cursor-pointer 2xl:w-[350px] 2xl:ml-5 w-80 h-52 rounded-xl object-cover transform transition-transform duration-300 hover:scale-110"
              />
              <div className="flex space-x-16 lg:space-x-24 2xl:ml-5 md:space-x-12">
                <div className="text-[#ff014f] lg:text-xs">DEVELOPMENT</div>
                <div className="flex space-x-1">
                  <div>{card.heart}</div>
                  <div className="mt-1">
                    <div> {icons[i]}</div>
                  </div>
                </div>
              </div>
              <div
                className={`text-xl font-bold transition-colors duration-500 lg:text-xl hover:text-[#ff014f] 2xl:ml-5`}
              >
                <div>{card.body}</div>
              </div>

              <div>
                <div
                  className={`transition-opacity duration-500 ${
                    hoveredCard === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {generateIcons2(i)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
