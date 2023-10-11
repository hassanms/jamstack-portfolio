"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineClockCircle } from "react-icons/ai";
import axios from "axios";
import { baseUrl } from "@/baseUrl";

const Blog = () => {
  const [cards, setCards] = useState([]);
  const router = useRouter();
  useEffect(() => {
    axios
      .get(`${baseUrl}api/blogs`)
      .then((res) => {
        const responseData = res.data.data[0].attributes.card;
        const dataArray = [];
  
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            dataArray.push({ key, value: responseData[key] });
          }
        }
        setCards(dataArray);
        console.log(dataArray)
      })
      .catch((err) => console.log(err));
  }, []);

  const icons = [
    <AiOutlineClockCircle />,
    <AiOutlineClockCircle />,
    <AiOutlineClockCircle />,
  ];

  return (
    <div className="mt-24  items-center 2xl:mt-44">
      <div className=" text-center space-y-4 ">
        <h1 className="text-red-700">VISIT MY BLOG AND KEEP YUR FEEDBACK</h1>
        <h1 className="lg:text-6xl text-4xl font-bold">My Blog</h1>
      </div>
      <div className="flex flex-wrap lg:space-x-4 mt-14 lg:space-y-0 space-y-5 md:justify-center ">
        {cards.map((card, i) => {
          return (
            <div className="2xl:w-[550px] 2xl:h-[600px] lg:w-96 w-80 h-96  shadow_1 hovred_bg rounded-xl p-10 space-y-5 2xl:p-20">
              <img
                onClick={() => router.push(`/${card.value.id}`)}
                src={card?.value.img}
                alt=""
                className="cursor-pointer 2xl:w-[550px] 2xl:h-72 w-80 h-52 rounded-xl  object-cover transform transition-transform duration-300 hover:scale-110"
              />
              <div className="flex lg:space-x-32 space-x-14 2xl:space-x-28">
                <div className="text-red-700 2xl:text-4xl">{card?.value.heading}</div>
                <div className="flex space-x-1">
                  <div className="mt-1 2xl:text-2xl">{icons[i]}</div>
                  <div className="2xl:text-2xl">{card?.value.title}</div>
                </div>
              </div>
              <div className="2xl:text-4xl lg:text-2xl text-xl transition-colors duration-500 hover:text-red-700">
                {card?.value.body}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
