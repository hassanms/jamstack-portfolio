import React, { useEffect, useState } from "react";
import { client } from "@/data";

const ReactToLaravel = () => {
  return (
    <div className="lg:flex  lg:space-x-5 ">
      <div>
        <div className=" lg:flex lg:gap-5 md:flex space-y-10 md:space-y-0  md:space-x-2 lg:space-x-5 space-x-0 ">
          <div className="shadow_1 hovred_bg rounded p-8 lg:w-52 lg:h-52  2xl:w-60 2xl:h-60">
            <img
              className="cursor-pointer w-48 h-32 lg:w-36 lg:h-24 2xl:w-80 2xl:h-32"
              src={client[0]?.attributes.rl[0].img1}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className=" mt-8 text-center text-2xl font-bold">
              {client[0]?.attributes.rl[0].head1}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8 lg:w-52 lg:h-52 2xl:w-60 2xl:h-60">
            <img
              className="cursor-pointer w-48 h-32 lg:w-36 lg:h-24 2xl:w-80 2xl:h-32"
              src={client[0]?.attributes.rl[0].img2}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className=" mt-8 text-center text-2xl font-bold">
              {client[0]?.attributes.rl[0].head2}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8 lg:w-52 lg:h-52 2xl:w-60 2xl:h-60">
            <img
              className="cursor-pointer w-48 h-32 lg:w-36 lg:h-24 2xl:w-80 2xl:h-32"
              src={client[0]?.attributes.rl[0].img3}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className=" mt-8 text-center text-2xl font-bold">
              {client[0]?.attributes.rl[0].head3}
            </div>
          </div>
        </div>
        <div className="lg:flex lg:gap-5 lg:mt-5 md:flex space-y-10 md:space-y-0  md:space-x-2 lg:space-x-5 space-x-0 ">
          <div className="shadow_1 hovred_bg  rounded p-8 lg:w-52 lg:h-52 2xl:w-60 2xl:h-60">
            <img
              className="cursor-pointer w-48 h-32 lg:w-36 lg:h-24 2xl:w-80 2xl:h-32"
              src={client[0]?.attributes.rl[0].img4}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className=" mt-8 text-center text-2xl font-bold">
              {client[0]?.attributes.rl[0].head4}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8 lg:w-52 lg:h-52 2xl:w-60 2xl:h-60">
            <img
              className="cursor-pointer w-48 h-32 lg:w-36 lg:h-24 2xl:w-80 2xl:h-32"
              src={client[0]?.attributes.rl[0].img5}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className=" mt-8 text-center text-2xl font-bold">
              {client[0]?.attributes.rl[0].head5}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8 lg:w-52 lg:h-52 2xl:w-60 2xl:h-60">
            <img
              className="cursor-pointer w-48 h-32 lg:w-36 lg:h-24 2xl:w-80 2xl:h-32"
              src={client[0]?.attributes.rl[0].img6}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className=" mt-8 text-center text-2xl font-bold">
              {client[0]?.attributes.rl[0].head6}
            </div>
          </div>
        </div>
        <div className="lg:flex md:flex lg:gap-5 lg:mt-5 space-y-10 md:space-y-0  md:space-x-2 lg:space-x-5 space-x-0 ">
          <div className="shadow_1 hovred_bg  rounded p-8 lg:w-52 lg:h-52 2xl:w-60 2xl:h-60">
            <img
              className="cursor-pointer w-48 h-32 lg:w-36 lg:h-24 2xl:w-80 2xl:h-32"
              src={client[0]?.attributes.rl[0].img7}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className=" mt-8 text-center text-2xl font-bold">
              {client[0]?.attributes.rl[0].head7}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8 lg:w-52 lg:h-52 2xl:w-60 2xl:h-60">
            <img
              className="cursor-pointer w-48 h-32 lg:w-36 lg:h-24 2xl:w-80 2xl:h-32"
              src={client[0]?.attributes.rl[0].img8}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className=" mt-8 text-center text-2xl font-bold">
              {client[0]?.attributes.rl[0].head8}
            </div>
          </div>
          <div className="shadow_1 hovred_bg  rounded p-8 lg:w-52 lg:h-52 2xl:w-60 2xl:h-60">
            <img
              className="cursor-pointer w-48 h-32 lg:w-36 lg:h-24 2xl:w-80 2xl:h-32"
              src={client[0]?.attributes.rl[0].img9}
              alt="My Image"
              width={850}
              height={500}
            />
            <div className=" mt-8 text-center text-2xl font-bold">
              {client[0]?.attributes.rl[0].head9}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactToLaravel;
