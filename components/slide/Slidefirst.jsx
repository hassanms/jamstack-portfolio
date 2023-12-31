"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineSlack } from "react-icons/ai";
import axios from "axios";
import { baseUrl } from "@/baseUrl";

const Slidefirst = ({ slideDirection }) => {
  const [data, setdata] = useState({});

  useEffect(() => {
    axios
      .get(`${baseUrl}api/silders`)
      .then((res) => setdata(res.data.data[0].attributes.sl1[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-10">
      <div
        className={`lg:flex md:flex md:space-x-5 lg:gap-3 justify-around lg:justify-center mt-10 space-y-10 lg:space-y-0 
      ${slideDirection == "right" ? "slideRightDiv" : "slideLeftDiv"}`}
      >
        <div className="  lg:w-96 lg:h-[530px] md:h-1.2   shadow_1 hovred_bg  rounded-xl p-10 space-y-5 2xl:w-[600px] 2xl:h-[600px]">
          <img
            className="cursor-pointer w-80 h-60 2xl:w-screen 2xl:h-96 rounded-xl  object-cover transform transition-transform duration-300 hover:scale-110"
            src={data?.slideimg1}
            alt="My Image"
            width={400}
            height={500}
          />
          <div className="flex space-x-32">
            <div className="text-[#ff014f] 2xl:text-2xl">{data?.heading1}</div>
          </div>
          <div className="text-3xl font-bold ">{data?.heading2}</div>
          <div className="2xl:text-xl">{data?.heading3}</div>
        </div>
        <div>
          <div className="flex space-x-80 ">
            <div>
              <AiOutlineSlack className="hidden lg:block w-36 h-36" />
            </div>
          </div>
          <div className=" 2xl:mt-5 2xl:w-[500px] 2xl:h-[430px] lg:w-[500px] lg:h-96 md:w-80 md:h-[450px] w-80 h-96 shadow_1 hovred_bg  justify-center rounded-xl p-10 space-y-10">
            <div className="lg:text-3xl text-2xl  2xl:text-4xl">
              {data?.head1}
            </div>
            <div className=" 2xl:text-2xl">{data?.head2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidefirst;
