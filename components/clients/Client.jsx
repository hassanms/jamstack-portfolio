"use client";
import React, { useEffect, useState } from "react";
import Javascript from "./Javascript";
import Productdesign from "./Productdesign";
import Wordpress from "./Wordpress";
import HtmltoReact from "./HtmltoReact";
import ReactToLaravel from "./ReactToLaravel";
import Python from "./Python";

const Client = () => {
  const [tech, setTech] = useState("Javascript");
  const changeDiv = (val) => {
    setTech(val);
  };

  return (
    <div className="mt-28 lg:mt-28">
      <div className="text-center">
        <div className="text-red-700">POPULAR CLIENTS</div>
        <div className="text-5xl font-bold">Awesome Client</div>
      </div>
      <div className="flex mt-24 lg:mt-10 lg:space-y-10 lg:ml-0 pos ml-8 md:justify-center">
        <div className="lg:flex">
          <div className="2xl:mr-16 2xl:space-y-5 flex flex-col  md:w-96 md:items-center  md:ml-36 lg:ml-0 ">
            <div className="space-y-8">
              <div className="hover:text-red-700 2xl:w-96 2xl:h-28 2xl:text-2xl 2xl:p-9 lg:w-60 md:w-96 w-60 h-20 rounded shadow_1 hovred_bg text-center p-7 mt-10">
                <button onClick={() => changeDiv("Javascript")}>
                  Java Script
                </button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="hover:text-red-700 2xl:w-96 2xl:h-28 2xl:text-2xl 2xl:p-9  lg:w-60 w-60 md:w-96 h-20 rounded shadow_1 hovred_bg text-center p-7">
                <button onClick={() => changeDiv("Productdesign")}>
                  Product Design
                </button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="hover:text-red-700 2xl:w-96 2xl:h-28 2xl:text-2xl 2xl:p-9 lg:w-60 md:w-96 w-60  h-20 rounded shadow_1 hovred_bg text-center p-7">
                <button onClick={() => changeDiv("Wordpress")}>
                  Word Press
                </button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="hover:text-red-700 2xl:w-96 2xl:h-28 2xl:text-2xl 2xl:p-9 lg:w-60 md:w-96  w-60 h-20 rounded shadow_1 hovred_bg text-center p-7">
                <button onClick={() => changeDiv("HtmltoReact")}>
                  Html To React
                </button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="hover:text-red-700 2xl:w-96 2xl:h-28 2xl:text-2xl 2xl:p-9 lg:w-60 md:w-96 w-60 h-20 rounded shadow_1 hovred_bg text-center p-7">
                <button onClick={() => changeDiv("ReactToLaravel")}>
                  React To Laravel
                </button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="hover:text-red-700 2xl:w-96 2xl:h-28 2xl:text-2xl 2xl:p-9 lg:w-60 md:w-96 w-60 h-20 rounded shadow_1 hovred_bg text-center p-7">
                <button onClick={() => changeDiv("Python")}>Python</button>
              </div>
            </div>
          </div>

          <div className=" mt-10 scrollable element-class">
            {tech === "Javascript" ? (
              <div>
                <Javascript />
              </div>
            ) : tech === "Productdesign" ? (
              <div>
                <Productdesign />
              </div>
            ) : tech === "Wordpress" ? (
              <div>
                <Wordpress />
              </div>
            ) : tech === "HtmltoReact" ? (
              <div>
                <HtmltoReact />
              </div>
            ) : tech === "ReactToLaravel" ? (
              <div>
                <ReactToLaravel />
              </div>
            ) : (
              <div>
                <Python />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
