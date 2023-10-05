"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineClockCircle } from "react-icons/ai";
import axios from "axios";

const Blog = () => {
  const [data, setData] = useState({});
  const [cards, setCards] = useState([]);
  const router = useRouter();
  useEffect(() => {
    axios
      .get("http://localhost:8082/api/blogs")
      .then((res) => setData(res.data.data[0].attributes))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8082/api/blog-cards")
      .then((res) => setCards(res.data.data[0].attributes.card))
      .catch((err) => console.log(err));
  }, []);

  const icons = [
    <AiOutlineClockCircle />,
    <AiOutlineClockCircle />,
    <AiOutlineClockCircle />,
  ];

  return (
    <div className="mt-24  items-center">
      <div className=" text-center space-y-4 ">
        <h1 className="text-red-700">{data?.heading1}</h1>
        <h1 className="lg:text-6xl text-4xl font-bold">{data?.heading2}</h1>
      </div>
      <div className="flex flex-wrap lg:space-x-4 mt-14 lg:space-y-0 space-y-5 md:justify-center ">
        {cards.map((card, i) => {
          return (
            <div className="  lg:w-96 w-80 h-96  shadow_1 hovred_bg rounded-xl p-10 space-y-5">
              <img
                onClick={() => router.push(`/${card.id}`)}
                src={card?.img}
                alt=""
                className="cursor-pointer w-80 h-52 rounded-xl  object-cover transform transition-transform duration-300 hover:scale-110"
              />
              <div className="flex lg:space-x-32 space-x-14">
                <div className="text-red-700 ">{card?.heading}</div>
                <div className="flex space-x-1">
                  <div className="mt-1">{icons[i]}</div>
                  <div>{card?.title}</div>
                </div>
              </div>
              <div className="lg:text-2xl text-xl transition-colors duration-500 hover:text-red-700">
                {card?.body}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
