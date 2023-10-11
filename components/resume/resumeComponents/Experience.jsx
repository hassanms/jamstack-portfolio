import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "@/baseUrl";

const Experience = () => {
  const [card1, setCard1] = useState([]);
  const [card2, setCard2] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}api/resumes`)
      .then((res) => {
        const responseData = res.data.data[0].attributes.ex;
        const dataArray = [];
  
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            dataArray.push({ key, value: responseData[key] });
          }
        }
        setCard1(dataArray);
        // console.log(dataArray)
      })
      .catch((err) => console.log(err));
  }, []);

 
  useEffect(() => {
    axios
      .get(`${baseUrl}api/resumes`)
      .then((res) => {
        const responseData = res.data.data[0].attributes.exx;
        const dataArray = [];
  
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            dataArray.push({ key, value: responseData[key] });
          }
        }
        setCard2(dataArray);
        // console.log(dataArray)
      })
      .catch((err) => console.log(err));
  }, []);
  

  return (
    <div className="lg:flex md:flex ">
      <div className="mt-5 ">
        <div className="flex  lg:justify-center  items-start space-x-10 md:justify-evenly ">
          <div className="space-y-5">
            <h1 className="text-red-700">2007 - 2010</h1>
            <h1 className="lg:text-4xl font-bold">Educational Quallity</h1>
          </div>
        </div>
        <div className="flex 2xl:space-y-4 md:justify-center flex-wrap lg:space-y-2  lg:items-center lg:space-x-0  md:space-y-0 mt-10 space-y-5 md:space-x-3">
          {card1.map((card) => {
            return (
              <div className="  lg:w-96 2xl:w-[550px] 2xl:h-96 2xl:space-y-10 md:w-80   h-80 shadow_1 hovred_bg rounded p-5 space-y-2 ">
                <div className="lg:text-3xl 2xl:text-4xl text-xl font-bold">
                  <div>{card.value.heading}</div>
                </div>
                <div className="flex space-x-24 2xl:text-2xl">
                  <div>
                    <div>{card.value.uni}</div>
                  </div>
                  <div className="text-red-700">
                    <div>{card.value.rate}</div>
                  </div>
                </div>
                <hr />
                <div className="2xl:text-xl">
                  <div>{card.value.body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-5 ">
        <div className="flex lg:mr-24 lg:justify-center items-start space-x-10 md:justify-evenly ">
          <div className="space-y-5">
            <h1 className="text-red-700">2007 - 2010</h1>
            <h1 className="lg:text-4xl font-bold ">Job experience</h1>
          </div>
        </div>
        <div className="flex 2xl:space-y-4 md:justify-center flex-wrap lg:space-y-2  lg:items-center lg:space-x-0  md:space-y-0 mt-10 space-y-5 md:space-x-3">
          {card2.map((card) => {
            return (
              <div className="  lg:w-96 2xl:w-[550px] 2xl:h-96 2xl:space-y-10 md:w-80   h-80 shadow_1 hovred_bg rounded p-5 space-y-2 ">
                <div className="lg:text-3xl 2xl:text-4xl text-xl font-bold">
                  <div>{card.value.heading2}</div>
                </div>
                <div className="flex space-x-24 2xl:text-2xl">
                  <div>
                    <div>{card.value.uni2}</div>
                  </div>
                  <div className="text-red-700">
                    <div>{card.value.rate2}</div>
                  </div>
                </div>
                <hr />
                <div className="2xl:text-xl">
                  <div>{card.value.body2}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
