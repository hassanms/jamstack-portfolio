"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import WordChangeAnimation from "../wordChangeAnima/WordChangeAnimation";
import { data } from "@/data";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center lg:mt-0 mt-12  lg:flex lg:flex-row  2xl:p-20  lg:justify-center lg:p-16 p-7 2xl:space-x-0 2xl:justify-center 2xl:mt-0">
      <div className="space-y-4   mr-12  lg:mr-0 lg:w-1/2 lg:mb-20 mt-8 lg:mt-0 ">
        <p className="lg:text-xl">{data[0]?.attributes.hero_small}</p>
        <div>
          <h1 className="text-3xl lg:text-6xl font-bold md:text-5xl md:font-extrabold text-white">
            Hi, I'm <span className="text-[#ff014f]">Jone lee</span> a
          </h1>
          <h1>
            {" "}
            <WordChangeAnimation />
          </h1>
        </div>
        <h2 className="text-xl 2xl:w-[500px]  text-justify   md:w-full lg:w-[500px] lg:text-[16px]">
          {data[0]?.attributes.desc}
        </h2>
        <div className="lg:flex md:flex  lg:space-x-14 md:space-x-44 pt-16 lg:mt-10 ">
          <div className="lg:mt-16 ">
            <h1 className="md:text-2xl lg:text-base">Find with me</h1>
            <div className="flex mt-2 md:mt-4 md:space-x-3 space-x-3 lg:space-x-7 ">
              <a href="https://www.facebook.com" target="_blank">
                <div className="box shadow_1  lg:w-14 lg:h-14  rounded transition-transform transform-gpu hover:translate-y-[-3px] hover:duration-1000">
                  <button className="w-16 h-16 p-5 lg:p-3 rounded ">
                    <FiFacebook className="lg:ml-1 lg:mb-1 lg:w-5 lg:h-5 w-5 h-5 " />
                  </button>
                </div>
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <div className="box shadow_1 lg:w-14 lg:h-14  rounded transition-transform transform-gpu hover:translate-y-[-3px] hover:duration-1000">
                  <button className="w-16 h-16 p-5 lg:p-3.5 rounded">
                    <FiInstagram className="lg:ml-1 lg:mb-1 lg:w-5 lg:h-5 w-5 h-5" />
                  </button>
                </div>
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <div className="box shadow_1 lg:w-14 lg:h-14 rounded transition-transform transform-gpu hover:translate-y-[-3px] hover:duration-1000">
                  <button className="w-16 h-16 p-5 lg:p-3   rounded">
                    <FiLinkedin className="lg:ml-1 lg:mb-1 lg:w-5 lg:h-5 w-5 h-5" />
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:mt-16 mt-10 md:mt-0">
            <h1 className="md:text-2xl lg:text-base">Best Skill On</h1>
            <div className=" flex  mt-2 md:mt-4 lg:space-x-7 space-x-3 md:space-x-3">
              <div className="shadow_1 lg:w-14 lg:h-14 lg:p-4  w-16 h-16 p-5 rounded">
                <Image
                  className="cursor-pointer lg:ml-1 lg:mb-1  lg:w-5  lg:h-5 w-5 h-5"
                  src="/images/in.jpg"
                  alt="My Image"
                  width={540}
                  height={555}
                />
              </div>

              <div className="shadow_1 lg:w-14 lg:h-14 lg:p-4 w-16 h-16 p-5 rounded">
                <Image
                  className="cursor-pointer lg:ml-1 lg:mb-  lg:w-5  lg:h-5 w-5 h-5 "
                  src="/images/daimond.jpg"
                  alt="My Image"
                  width={40}
                  height={5}
                />
              </div>
              <div className="shadow_1 lg:w-14 lg:h-14 lg:p-4 w-16 h-16 p-5 rounded">
                <Image
                  className="cursor-pointer lg:ml-1 lg:mb-1  lg:w-5  lg:h-5 w-5 h-5"
                  src="/images/f.jpg"
                  alt="My Image"
                  width={40}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="shadow_1 md:w-screen lg:w-[450px] lg:h-[650px] lg:ml-32 2xl:w-[500px] 2xl:mt-20 2xl:ml-0"
          src={data[0]?.attributes.hero_image1}
          alt="Hero Image"
          width={550}
          height={650}
        />
      </div>
    </div>
  );
};

export default Hero;
