"use client";
import React, { useEffect, useState } from "react";
import Slidefirst from "./Slidefirst";
import Slidesecond from "./Slidesecond";
import SlideThird from "./Slidethird";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Mainslide = () => {
  const [currentPage, setCurrentpage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  return (
    <div className="mt-28 lg:mt-28 overflow-hidden p-7 lg:p-0">
      <div className="text-center space-y-4">
        <h1 className="text-[#ff014f]">WHAT CLIENT SAY</h1>
        <h1 className=" lg:text-6xl text-4xl font-extrabold ">Testimonial</h1>
      </div>
      <div className="flex lg:absolute justify-end lg:right-48 space-x-3 md:mr-5 lg:mt-10 mt-10 2xl:mr-16 2xl:mb-10">
        <div className="shadow_1 lg:w-12 lg:h-12 lg:p-3 rounded md:w-12 md:h-12 md:p-2">
          <button
            onClick={() => {
              setSlideDirection("right"),
                setCurrentpage(currentPage === 0 ? 2 : currentPage - 1);
            }}
          >
            <AiOutlineArrowLeft className=" md:w-7 md:h-7 w-8 h-8 2xl:w-14 2xl:h-14 lg:w-6 lg:h-6 hover:text-[#ff014f]" />
          </button>
        </div>
        <div className="shadow_1 lg:w-12 lg:h-12 lg:p-3 rounded md:w-12 md:h-12 md:p-2">
          <button
            onClick={() => {
              setSlideDirection("left"),
                setCurrentpage(currentPage === 2 ? 0 : currentPage + 1);
            }}
          >
            <AiOutlineArrowRight className="md:w-7 md:h-7 w-8 h-8 2xl:w-14 2xl:h-14 lg:w-6 lg:h-6 hover:text-[#ff014f]" />
          </button>
        </div>
      </div>

      {currentPage === 0 ? (
        <div>
          <Slidefirst slideDirection={slideDirection} />
        </div>
      ) : currentPage === 1 ? (
        <div>
          <Slidesecond slideDirection={slideDirection} />
        </div>
      ) : (
        <div>
          <SlideThird slideDirection={slideDirection} />
        </div>
      )}
    </div>
  );
};

export default Mainslide;
