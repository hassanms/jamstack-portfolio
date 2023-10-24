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
  AiOutlineArrowRight,
} from "react-icons/ai";
import { feature } from "@/data";
console.log(feature[0].attributes);

const Feature = () => {
  const [showIcons2, setShowIcons2] = useState(-1);
  const icons = [
    <AiOutlineMenu className="text-[#ff014f] w-12 h-12" />,
    <AiOutlineDesktop className="text-[#ff014f] w-12 h-12" />,
    <AiOutlineWifi className="text-[#ff014f] w-12 h-12" />,
    <AiOutlineMobile className="text-[#ff014f] w-12 h-12" />,
    <AiOutlineApple className="text-[#ff014f] w-12 h-12" />,
    <AiFillSlackCircle className="text-[#ff014f] w-12 h-12" />,
  ];

  const icons2 = [
    <AiOutlineArrowRight className="text-[#ff014f] w-7 h-7" />,
    <AiOutlineArrowRight className="text-[#ff014f] w-7 h-7" />,
    <AiOutlineArrowRight className="text-[#ff014f] w-7 h-7" />,
    <AiOutlineArrowRight className="text-[#ff014f] w-7 h-7" />,
    <AiOutlineArrowRight className="text-[#ff014f] w-7 h-7" />,
    <AiOutlineArrowRight className="text-[#ff014f] w-7 h-7" />,
  ];

  const generateIcons2 = (index) => {
    return (
      <AiOutlineArrowRight
        className={`text-[#ff014f] w-7 h-7 lg:mt-1 transition-transform duration-300 ${
          showIcons2 === index
            ? "transform -translate-y-3"
            : "transform translate-y-0"
        }`}
      />
    );
  };

  return (
    <div className="lg:mt-10 mt-28 p-5 lg:p-0 md:p-4  2xl:p-5">
      <div className="space-y-4 text-center lg:justify-center">
        <h1 className="text-[#ff014f] text-xl">Features</h1>
        <h1 className="lg:text-6xl text-4xl font-bold">What I Do</h1>
      </div>
      <div className="gap-6 flex flex-wrap items-center lg:items-end mt-5 space-x-2 lg:space-y-10 md:justify-center 2xl:space-x-5 2xl:space-y-5 lg:p-6">
        {feature[0].attributes.data.map((card, i) => {
          return (
            <div
              className="transition-all lg:w-[340px] lg:h-80 2xl:w-[420px] w-80 h-80 shadow_1 hovred_bg rounded-xl p-10 space-y-8 relative"
              onMouseEnter={() => setShowIcons2(i)}
              onMouseLeave={() => setShowIcons2(-1)}
            >
              <div
                className={`transition-transform duration-300 ${
                  showIcons2 === i
                    ? "transform -translate-y-3"
                    : "transform translate-y-0"
                }`}
              >
                <div>{icons[i]}</div>
              </div>
              <div
                className={`lg:text-3xl text-2xl font-bold transition-transform duration-300 ${
                  showIcons2 === i
                    ? "transform -translate-y-3"
                    : "transform translate-y-0"
                }`}
              >
                {card.heading}
              </div>
              <div
                className={`transition-transform duration-300 ${
                  showIcons2 === i
                    ? "transform -translate-y-3"
                    : "transform translate-y-0"
                }`}
              >
                {card.body}
              </div>
              <div
                className={`transition-opacity duration-500 ${
                  showIcons2 === i ? "opacity-100 " : "opacity-0"
                }`}
              >
                {generateIcons2(i)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
