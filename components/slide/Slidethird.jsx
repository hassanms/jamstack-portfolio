"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineSlack } from "react-icons/ai";
import axios from "axios";

const SlideThird = ({ slideDirection }) => {
  const [data, setdata] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8082/api/slidethrees")
      .then((res) => setdata(res.data.data[0].attributes.sl3[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-10">
      <div
        className={`lg:flex md:flex md:space-x-5  justify-around mt-10 space-y-10 lg:space-y-0
       ${slideDirection == "right" ? "slideRightDiv" : "slideLeftDiv"}`}
      >
        <div className="  lg:w-96 lg:h-1/2 md:h-1.2   shadow_1 hovred_bg  rounded-xl p-10 space-y-5">
          <img
            className="cursor-pointer w-80 h-60 rounded-xl  object-cover transform transition-transform duration-300 hover:scale-110"
            src={data?.slideimg3}
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
          <div>{data?.heading3}</div>
        </div>
        <div>
          <div className="flex space-x-80 ">
            <div>
              <AiOutlineSlack className="hidden lg:block   w-36 h-36" />
            </div>
          </div>
          <div className="  lg:w-96 lg:h-80 md:w-80 md:h-96 w-80 h-80 shadow_1 hovred_bg  justify-center rounded-xl p-10 space-y-10">
            <div className="lg:text-3xl text-2xl font-bold">{data?.head1}</div>
            <div>{data?.head2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideThird;
