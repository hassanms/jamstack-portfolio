"use client";
import React, { useEffect, useState } from "react";
import Basic from "./Basic";
import Standard from "./Standard";
import Premium from "./Premium";

const Pricing = () => {
  const [screen, setscreen] = useState("Basic");
  const changeDiv = (val) => {
    setscreen(val);
  };

  return (
    <div>
      <div className="mt-28 lg:mt-28 space-y-8 lg:flex justify-around 2xl:mt-44">
        <div className="space-y-5 text-center mt-10">
          <div className="text-red-700">PRICING</div>
          <div className=" font-bold text-5xl">My Pricing</div>
        </div>
        <div>
          <div className="lg:flex 2xl:space-x-5 items-center 2xl:w-[1200px] ">
            <div className="rounded shadow_1 2xl:w-[500px] 2xl:h-24 2xl:text-3xl 2xl:p-8 lg:w-52 lg:h-16 text-center p-5 text-xl font-bold hover:text-red-700">
              <button onClick={() => changeDiv("Basic")}>Basic</button>
            </div>
            <div className="rounded shadow_1 2xl:w-[500px] lg:w-52 2xl:h-24 2xl:text-3xl 2xl:p-8 lg:h-16 text-center p-5 text-xl font-bold  hover:text-red-700">
              <button onClick={() => changeDiv("Standard")}>Standard</button>
            </div>
            <div className="rounded shadow_1 2xl:w-[500px] 2xl:h-24 2xl:text-3xl 2xl:p-8 lg:w-52 lg:h-16 text-center p-5 text-xl font-bold  hover:text-red-700">
              <button onClick={() => changeDiv("Premium")}>Premium</button>
            </div>
          </div>
          <div className="scrollable element-class">
            {screen === "Basic" ? (
              <div>
                <Basic />
              </div>
            ) : screen === "Standard" ? (
              <div>
                <Standard />
              </div>
            ) : (
              <div>
                <Premium />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
