"use client";
import React, { useState, useEffect } from "react";
import Education from "./resumeComponents/Education";
import Experience from "./resumeComponents/Experience";
import Interview from "./resumeComponents/Interview";
import PortfolioSkill from "./resumeComponents/PortfolioSkill";

const Resume = () => {
  const [currentPage, setCurrentpage] = useState("education");
  const changeDiv = (val) => {
    setCurrentpage(val);
  };

  return (
    <div className="lg:p-0 p-7 ">
      <div className="mt-28 lg:mt-28">
        <div className="text-center space-y-8">
          <h1 className="text-[#ff014f]">7+ YEARS OF EXPERIANCE</h1>
          <h1 className="font-bold lg:text-6xl text-3xl">MY RESUME</h1>
        </div>
        <div className="flex flex-wrap  mt-5  lg:mt-10 rounded justify-center  lg:space-x-0 gap-3">
          <div>
            <button
              onClick={(e) => changeDiv("education")}
              className="rounded shadow_1 lg:w-64 lg:h-20  2xl:w-96 2xl:h-24 2xl:text-2xl w-36  h-14 md:w-36 md:h-20 hover:text-[#ff014f]"
            >
              Education
            </button>
          </div>
          <div>
            <button
              onClick={(e) => changeDiv("professional")}
              className=" hover:text-[#ff014f] shadow_1 2xl:w-96 2xl:h-24 2xl:text-2xl lg:w-64 lg:h-20 w-36 md:w-36 md:h-20   h-14"
            >
              Professional
            </button>
          </div>
          <div>
            <button
              onClick={(e) => changeDiv("experience")}
              className=" hover:text-[#ff014f] shadow_1 2xl:w-96 2xl:h-24 2xl:text-2xl lg:w-64 lg:h-20 w-36  md:w-36 md:h-20  h-14"
            >
              Experience
            </button>
          </div>
          <div>
            <button
              onClick={(e) => changeDiv("interview")}
              className=" hover:text-[#ff014f] shadow_1 2xl:w-96 2xl:h-24 2xl:text-2xl lg:w-64 lg:h-20 w-36 md:w-36 md:h-20  h-14"
            >
              Interview
            </button>
          </div>
        </div>
      </div>
      {currentPage === "education" ? (
        <Education />
      ) : currentPage === "professional" ? (
        <PortfolioSkill />
      ) : currentPage === "experience" ? (
        <Experience />
      ) : (
        <Interview />
      )}
    </div>
  );
};

export default Resume;
