import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/baseUrl";

const Productdesign = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${baseUrl}api/clients`)
      .then((res) => {
        const responseData = res.data.data[0].attributes.pd[0];
        const dataArray = [];

        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            dataArray.push({ key, value: responseData[key] });
          }
        }
        setData(dataArray);
        // console.log(dataArray)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lg:flex lg:space-x-5 ">
      <div>
        <div className="lg:flex md:flex space-y-10 md:space-y-0  md:space-x-2 lg:space-x-5 space-x-0 ">
          <div className="shadow_1 hovred_bg rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data[0]?.value}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data[1]?.value}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data[2]?.value}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data[3]?.value}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data[4]?.value}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data[5]?.value}
            </div>
          </div>
        </div>
        <div className="lg:flex md:flex space-y-10 md:space-y-0  md:space-x-2 lg:space-x-5 space-x-0">
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data[6]?.value}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data[7]?.value}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data[8]?.value}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data[9]?.value}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data[10]?.value}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data[11]?.value}
            </div>
          </div>
        </div>
        <div className="lg:flex md:flex space-y-10 md:space-y-0  md:space-x-2 lg:space-x-5 space-x-0 ">
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data[12]?.value}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data[13]?.value}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data[14]?.value}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data[15]?.value}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data[16]?.value}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data[17]?.value}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdesign;
