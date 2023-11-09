import { baseUrl } from "@/baseUrl";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AiOutlineCheck,
  AiOutlineClockCircle,
  AiOutlineStock,
} from "react-icons/ai";

const Standard = () => {
  const [data, setData] = useState({});
  const isProduction = process.env.NODE_ENV === "production";
  const BASE_URL = isProduction
    ? process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL
    : process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL;

  useEffect(() => {
    axios
      .get(`${baseUrl}api/pricings`)
      .then((res) => setData(res.data.data[0].attributes.StandardPrice[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="  shadow_1 hovred_bg rounded p-10 mt-5 2xl:p-20  lg:w-[670px] 2xl:w-[950px] 2xl:ml-32">
      <div className=" lg:flex mt-5 md:flex md:justify-between lg:space-x-20  justify-around ">
        <div className="">
          <h1 className="lg:text-3xl font-bold md:text-3xl text-2xl 2xl:text-5xl">
            {data?.heading1}
          </h1>
          <h1 className="text-xl opacity-25 2xl:text-3xl 2xl:mt-4">
            {data?.heading2}
          </h1>
        </div>
        <div className="text-[#ff014f] lg:shadow_1 rounded font-extrabold text-3xl 2xl:text-5xl ">
          {data?.dollar}
        </div>
      </div>
      <div className=" mt-10">
        <p className="text-xl opacity-25 lg:w-96 2xl:text-2xl 2xl:w-2/3">
          {data?.heading3}
        </p>
      </div>
      <div className="lg:flex md:flex lg:space-x-10 mt-5 text-xl md:justify-between">
        <div className="flex space-x-2 ">
          <div className="space-y-6 text-xs lg:text-xl lg:space-y-7 md:text-2xl 2xl:text-3xl">
            <div className="mt-1">
              <AiOutlineCheck />
            </div>
            <div className="mt-1 lg:mt-2">
              <AiOutlineCheck />
            </div>
            <div className="mt-1 lg:mt-3">
              <AiOutlineCheck />
            </div>
            <div className="mt-1 lg:mt-3">
              <AiOutlineCheck />
            </div>
            <div className="mt-1 lg:mt-3">
              <AiOutlineCheck />
            </div>
            <div className="mt-1 lg:mt-3">
              <AiOutlineCheck />
            </div>
          </div>
          <div className="space-y-5 text-xs lg:text-xl md:text-xl 2xl:text-3xl 2xl:mt-1">
            <div>{data?.h1}</div>
            <div>{data?.h2}</div>
            <div>{data?.h3}</div>
            <div>{data?.h4}</div>
            <div>{data?.h5}</div>
            <div>{data?.h6}</div>
          </div>
        </div>
        <div className="flex space-x-2 mt-5 lg:mt-0 md:mt-0">
          <div className="space-y-6 text-xs lg:text-xl lg:space-y-7 md:text-2xl  2xl:text-3xl">
            <div className="mt-1">
              <AiOutlineCheck />
            </div>
            <div className="mt-2">
              <AiOutlineCheck />
            </div>
            <div className="mt-2">
              <AiOutlineCheck />
            </div>
            <div className="mt-2">
              <AiOutlineCheck />
            </div>
            <div className="mt-2">
              <AiOutlineCheck />
            </div>
            <div className="mt-2">
              <AiOutlineCheck />
            </div>
          </div>
          <div className="space-y-5 text-xs lg:text-xl md:text-xl 2xl:text-3xl 2xl:mt-1">
            <div>{data?.h7}</div>
            <div>{data?.h8}</div>
            <div>{data?.h9}</div>
            <div>{data?.h10}</div>
            <div>{data?.h11}</div>
            <div>{data?.h12}</div>
          </div>
        </div>
      </div>
      <div className="2xl:w-[800px] 2xl:h-[80px] 2xl:text-2xl 2xl:p-5 font-bold text-center lg:w-[500px] lg:h-12  md:h-16 md:text-xl lg:text-sm md:p-4  h-10 rounded shadow_1 hovred_bg mt-5 p-2 hover:text-[#ff014f] shadow_1 lg:p-5 ">
        <button>Order Now</button>
      </div>
      <div className="lg:flex md:flex lg:space-x-6 lg:ml-32 md:space-x-6 2xl:text-3xl 2xl:ml-0 2xl:mt-5 md:justify-center lg:justify-normal 2xl:justify-center">
        <div className="flex mt-3 text-center space-x-2 lg:text-sm md:text-xl  2xl:text-3xl">
          <div className="mt-1">
            <AiOutlineClockCircle />
          </div>
          <div>{data?.h13}</div>
        </div>
        <div className="flex mt-3 text-center space-x-2 lg:text-sm md:text-xl  2xl:text-3xl">
          <div className="mt-1">
            <AiOutlineStock />
          </div>
          <div>{data?.h14}</div>
        </div>
      </div>
    </div>
  );
};

export default Standard;
