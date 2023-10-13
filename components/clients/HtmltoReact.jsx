import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/baseUrl";

const HtmltoReact = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${baseUrl}api/clients`)
      .then((res) => setData(res.data.data[0].attributes.hr[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lg:flex lg:space-x-5 ">
      <div>
        <div className="lg:flex md:flex space-y-10 md:space-y-0  md:space-x-2 lg:space-x-5 space-x-0 ">
          <div className="shadow_1 hovred_bg rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data?.img1}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data?.head1}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data?.img2}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data?.head2}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data?.img3}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data?.head3}
            </div>
          </div>
        </div>
        <div className="lg:flex md:flex space-y-10 md:space-y-0  md:space-x-2 lg:space-x-5 space-x-0">
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data?.img4}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data?.head4}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data?.img5}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data?.head5}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data?.img6}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data?.head6}
            </div>
          </div>
        </div>
        <div className="lg:flex md:flex space-y-10 md:space-y-0  md:space-x-2 lg:space-x-5 space-x-0 ">
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data?.img7}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data?.head7}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data?.img8}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data?.head8}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8">
            <img
              className="cursor-pointer w-48 h-32 2xl:w-80 2xl:h-60"
              src={data?.img9}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className="mt-8 text-center text-2xl font-bold">
              {data?.head9}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmltoReact;
