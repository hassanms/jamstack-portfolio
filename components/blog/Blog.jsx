"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineClockCircle } from "react-icons/ai";
import axios from "axios";
import { baseUrl } from "@/baseUrl";
import { blog } from "@/data"; 

const Blog = () => {
  const [cards, setCards] = useState([]);
  const router = useRouter();

  const icons = [
    <AiOutlineClockCircle />,
    <AiOutlineClockCircle />,
    <AiOutlineClockCircle />,
  ];

  return (
    <div className="mt-24  items-center 2xl:mt-44 lg:p-0 p-7 2xl:p-8 ">
      <div className=" text-center space-y-4 ">
        <h1 className="text-[#ff014f]">VISIT MY BLOG AND KEEP YUR FEEDBACK</h1>
        <h1 className="lg:text-6xl text-4xl font-extrabold">My Blog</h1>
      </div>
      <div className="flex 2xl:justify-center lg:justify-center flex-wrap md:gap-6 lg:space-x-4 mt-14 lg:space-y-0 space-y-5 md:space-y-0 ">
        {blog[0].attributes.card.map((card, i) => {
          return (
            <div className="2xl:w-[500px] 2xl:h-[600px] lg:w-[340px] lg:h-[400px] w-80 h-96 md:w-[300px]  shadow_1 hovred_bg rounded-xl p-10 space-y-5 2xl:p-20">
              <img
                onClick={() => router.push(`/${card.id}`)}
                src={card?.img}
                alt=""
                className="cursor-pointer 2xl:w-[550px] 2xl:h-72 w-80 h-52 rounded-xl  object-cover transform transition-transform duration-300 hover:scale-110"
              />
              <div className="flex lg:space-x-24 space-x-14 2xl:space-x-28">
                <div className="text-[#ff014f] 2xl:text-4xl">
                  {card?.heading}
                </div>
                <div className="flex space-x-1">
                  <div className="mt-1 2xl:text-2xl">{icons[i]}</div>
                  <div className="2xl:text-2xl">{card?.title}</div>
                </div>
              </div>
              <div className="2xl:text-4xl  md:text-xl md:font-bold lg:text-2xl text-xl transition-colors duration-500 hover:text-[#ff014f]">
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
