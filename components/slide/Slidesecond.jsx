"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineSlack } from "react-icons/ai";
import axios from "axios";
import { baseUrl } from "@/baseUrl";

const Slidesecond = ({ slideDirection }) => {
  const [data, setdata] = useState({});

 
  useEffect(() => {
    axios
      .get(`${baseUrl}api/silders`)
      .then((res) => {
        const responseData = res.data.data[0].attributes.sl2[0];
        const dataArray = [];[0]
  
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            dataArray.push({ key, value: responseData[key] });
          }
        }
        setdata(dataArray);
        // console.log(dataArray)
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="mt-10">
      <div
        className={`lg:flex md:flex md:space-x-5  justify-around mt-10 space-y-10 lg:space-y-0
       ${slideDirection == "right" ? "slideRightDiv" : "slideLeftDiv"}`}
      >
        <div className="2xl:w-[600px] 2xl:h-[600px]  lg:w-96 lg:h-1/2 md:h-1.2   shadow_1 hovred_bg  rounded-xl p-10 space-y-5">
          <img
            className="cursor-pointer 2xl:w-screen 2xl:h-96  w-80 h-60 rounded-xl  object-cover transform transition-transform duration-300 hover:scale-110"
            src={data[0]?.value}
            alt="My Image"
            width={400}
            height={500}
          />
          <div className="flex space-x-32">
            <div className="text-red-700 2xl:text-2xl">{data[1]?.value}</div>
          </div>
          <div className="text-3xl font-bold  hover:text-red-700">
            {data[2]?.value}
          </div>
          <div className="2xl:text-xl">{data[3]?.value}</div>
        </div>
        <div>
          <div className="flex space-x-80 ">
            <div>
              <AiOutlineSlack className="hidden lg:block   w-36 h-36" />
            </div>
          </div>
          <div className=" 2xl:w-[500px] 2xl:h-[430px] lg:w-96 lg:h-80 md:w-80 md:h-96 w-80 h-80 shadow_1 hovred_bg  justify-center rounded-xl p-10 space-y-10">
            <div className="lg:text-3xl text-2xl font-bold">{data[4]?.value}</div>
            <div>{data[5]?.value}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidesecond;
