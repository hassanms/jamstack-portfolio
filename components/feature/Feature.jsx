"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AiOutlineMenu,
  AiOutlineDesktop,
  AiOutlineWifi,
  AiOutlineMobile,
  AiOutlineApple,
  AiFillSlackCircle,
} from "react-icons/ai";
import { baseUrl } from "@/baseUrl";
import { feature } from "@/data";

const Feature = () => {

  const icons = [
    <AiOutlineMenu className="text-red-800 w-9 h-9 font-bold" />,
    <AiOutlineDesktop className="text-red-800 w-9 h-9 font-bold" />,
    <AiOutlineWifi className="text-red-800 w-9 h-9 font-bold" />,
    <AiOutlineMobile className="text-red-800 w-9 h-9 font-bold" />,
    <AiOutlineApple className="text-red-800 w-9 h-9 font-bold" />,
    <AiFillSlackCircle className="text-red-800 w-9 h-9 font-bold" />,
  ];

  return (
    <div className="lg:mt-28 mt-28 ">
      <div className="space-y-4 text-center  lg:justify-center ">
        <h1 className="text-red-800 text-xl">Features</h1>
        <h1 className="lg:text-6xl text-4xl font-bold">What i do</h1>
      </div>
      <div className="flex  flex-wrap items-center mt-5 lg:mt-10 space-x-2  md:justify-center 2xl:space-x-5 2xl:space-y-5">
        {feature[0].attributes.data.map((card, i) => {
          return (
            <div className="transition-all lg:w-96 lg:h-80 2xl:w-[420px] w-80 h-80 shadow_1  hovred_bg rounded-xl p-10 space-y-8">
              <div>
                <div>{icons[i]}</div>
              </div>
              <div className="lg:text-3xl text-2xl font-bold">
                {card.heading}
              </div>
              <div>{card.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
