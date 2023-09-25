'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  AiOutlineSlack,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import axios from "axios";


const Slidesecond = () => {
  const [data , setdata]=useState({})
  const [data2 , setdata2]=useState({})
  useEffect(()=>{
    axios
    .get("http://localhost:8082/api/slidec2s")
    .then((res)=>setdata(res.data.data[0].attributes))
    .catch((err)=>console.log(err))

    axios
    .get("http://localhost:8082/api/slidec22s")
    .then((res)=>setdata2(res.data.data[0].attributes))
    .catch((err)=>console.log(err))
  },[])

  return (
    <div className="mt-10">
      <div className="slideDiv lg:flex md:flex md:space-x-5  justify-around mt-10 space-y-10 lg:space-y-0">
        <div className=" text-white lg:w-96 lg:h-1/2 md:h-1.2   shadow_1 hovred_bg  rounded-xl p-10 space-y-5">
          <img
            className="cursor-pointer w-80 h-60 rounded-xl  object-cover transform transition-transform duration-300 hover:scale-110"
            src={data?.slideimg2}
            alt="My Image"
            width={400}
            height={500}
          />

          <div className="flex space-x-32">
            <div className="text-red-700 ">{data?.heading1}</div>

          </div>

          <div className="text-3xl font-bold  hover:text-red-700">
          {data?.heading2}
          </div>

          <div >
          {data?.heading3}
          </div>
        </div>

        <div>
          <div className="flex space-x-80 ">
            <div>
              <AiOutlineSlack className="hidden lg:block   w-32 h-32" />
            </div>
          </div>

          <div className=" text-white lg:w-96 lg:h-80 md:w-80 md:h-96 w-80 h-80 shadow_1 hovred_bg  justify-center rounded-xl p-10 space-y-10">
            <div className="lg:text-3xl text-2xl font-bold">
             {data2?.heading1}
            </div>

            <div>
            {data2?.heading2}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slidesecond