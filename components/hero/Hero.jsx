"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import WordChangeAnimation from "../wordChangeAnima/WordChangeAnimation";
import axios from "axios";

const Hero = () => {
   
  const isProduction = process.env.NODE_ENV === 'production';
  const BASE_URL = isProduction
  ? process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL
  : process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL;

  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`${BASE_URL}api/homes`)
      .then((res) => setData(res.data.data[0].attributes))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col-reverse items-center  mt-12 lg:mt-20 lg:flex lg:flex-row  2xl:p-10">
      <div className="space-y-4   lg:w-1/2  p-10">
        <p className="lg:text-2xl">{data?.hero_small}</p>
        <div>
          <h1 className="text-3xl lg:text-6xl font-bold">
            Hi, i am <span className="text-red-700">Jone lee</span> a
          </h1>
          <WordChangeAnimation />
        </div>
        <h2 className="text-xl 2xl:w-[700px]  text-justify w-56  md:w-full lg:w-96">
          {data?.desc}
        </h2>
        <div className="flex lg:space-x-14 space-x-10 pt-16 lg:pt-34 md:">
          <div>
            <h1>Find with me</h1>
            <div className="flex mt-2 justify-between lg:space-x-7">
              <a href="https://www.facebook.com" target="_blank">
                <button>
                  <FiFacebook className="lg:w-8 lg:h-8 w-5 h-5" />
                </button>
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <button>
                  <FiInstagram className="lg:w-8 lg:h-8 w-5 h-5" />
                </button>
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <button>
                  <FiLinkedin className="lg:w-8 lg:h-8 w-5 h-5" />
                </button>
              </a>
            </div>
          </div>
          <div>
            <h1>Best Skill On</h1>
            <div className="flex justify-between mt-2 lg:space-x-7">
              <Image
                className="cursor-pointer lg:w-8 lg:h-8 w-5 h-5"
                src="/images/in.jpg"
                alt="My Image"
                width={540}
                height={555}
              />
              <Image
                className="cursor-pointer lg:w-8 lg:h-8 w-5 h-5 "
                src="/images/daimond.jpg"
                alt="My Image"
                width={40}
                height={5}
              />
              <Image
                className="cursor-pointer lg:w-8 lg:h-8 w-5 h-5"
                src="/images/f.jpg"
                alt="My Image"
                width={40}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className=" shadow_1 md:w-screen lg:w-96 lg:ml-32 2xl:w-[500px] 2xl:mt-20"
          src={data?.hero_image1}
          alt="Hero Image"
          width={550}
          height={650}
        />
      </div>
    </div>
  );
};

export default Hero;
