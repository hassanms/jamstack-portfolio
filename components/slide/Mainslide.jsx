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
    <div className="mt-28 lg:mt-28 overflow-hidden">
      <div className="text-center space-y-4">
        <h1 className="text-red-700">WHAT CLIENT SAY</h1>
        <h1 className=" lg:text-5xl text-4xl font-bold">Testimonial</h1>
      </div>
      <div className="flex lg:absolute justify-end lg:right-48 space-x-3 lg:mt-28 mt-10 2xl:mr-16 2xl:mb-10">
        <div>
          <button
            onClick={() => {
              setSlideDirection("right"),
                setCurrentpage(currentPage === 0 ? 2 : currentPage - 1);
            }}
          >
            <AiOutlineArrowLeft className="w-8 h-8 2xl:w-14 2xl:h-14  hover:text-red-700" />
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setSlideDirection("left"),
                setCurrentpage(currentPage === 2 ? 0 : currentPage + 1);
            }}
          >
            <AiOutlineArrowRight className="w-8 h-8 2xl:w-14 2xl:h-14 hover:text-red-700" />
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
