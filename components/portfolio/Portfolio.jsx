"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";

const Portfolio = () => {
  const [data, setData] = useState({});
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8082/api/portfolios")
      .then((res) => setData(res.data.data[0].attributes))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8082/api/portofliocards")
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
  return (
    <div>
      <div className="text-center mt-28 lg:mt-28 space-y-8">
        <h1 className="text-red-700">{data?.title}</h1>
        <h1 className=" lg:text-6xl text-4xl font-bold">
          {data?.heading}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center lg:space-y-0 lg:space-x-2 space-y-5 md:space-x-3 md:space-y-0 mt-5 lg:mt-10 ]">
        {cards.map((card, i) => {
          return (
            <div className="w-80 h-96 lg:w-96 shadow_1 hovred_bg  rounded-xl p-8 space-y-4 ">
              <img
                src={card?.img}
                alt=""
                className="cursor-pointer w-80 h-52 rounded-xl  object-cover transform transition-transform duration-300 hover:scale-110"
              />
              <div className="flex space-x-16 lg:space-x-32">
                <div className="text-red-700">DEVELOPMENT</div>
                <div className="flex space-x-1">
                  <div className="mt-1">
                    <div> {icons[i]}</div>
                  </div>
                  <div>
                    <div>{card.heart}</div>
                  </div>
                </div>
              </div>
              <div className="text-xl font-bold transition-colors duration-500  hover:text-red-700">
                <div>{card.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
