"use client";
import React, { useState, useEffect } from "react";
import Education from "./resumeComponents/Education";
import Experience from "./resumeComponents/Experience";
import Interview from "./resumeComponents/Interview";
import PortfolioSkill from "./resumeComponents/PortfolioSkill";
import axios from "axios";

const Resume = () => {
  const [currentPage, setCurrentpage] = useState("education");
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8082/api/my-resumes")
      .then((res) => setData(res.data.data[0].attributes))
      .catch((err) => console.log(err));
  }, []);

  const changeDiv = (val) => {
    setCurrentpage(val);
  };

  return (
    <div>
      <div className="mt-28 lg:mt-28">
        <div className="text-center space-y-8">
          <h1 className="text-red-700">{data?.heading}</h1>
          <h1 className="font-bold lg:text-6xl text-3xl">{data?.heading1}</h1>
        </div>
        <div className="flex flex-wrap  mt-5  lg:mt-10 rounded justify-center  lg:justify-evenly space-x-4  p-5">
          <div>
            <button
              onClick={(e) => changeDiv("education")}
              className="rounded shadow_1 hovred_bg lg:w-60 lg:h-14  2xl:w-96 2xl:h-24 2xl:text-2xl w-28   h-14 md:w-36 md:h-20 hover:text-red-700"
            >
              Education
            </button>
          </div>
          <div>
            <button
              onClick={(e) => changeDiv("professional")}
              className=" hover:text-red-700 shadow_1 hovred_bg 2xl:w-96 2xl:h-24 2xl:text-2xl lg:w-60 lg:h-14 w-28 md:w-36 md:h-20   h-14"
            >
              Professional
            </button>
          </div>
          <div>
            <button
              onClick={(e) => changeDiv("experience")}
              className=" hover:text-red-700 shadow_1 hovred_bg 2xl:w-96 2xl:h-24 2xl:text-2xl lg:w-60 lg:h-14 w-28  md:w-36 md:h-20  h-14"
            >
              Experience
            </button>
          </div>
          <div>
            <button
              onClick={(e) => changeDiv("interview")}
              className=" hover:text-red-700 shadow_1 hovred_bg 2xl:w-96 2xl:h-24 2xl:text-2xl lg:w-60 lg:h-14 w-28 md:w-36 md:h-20  h-14"
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
