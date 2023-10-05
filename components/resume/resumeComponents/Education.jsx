import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Education = () => {
  const [data, setData] = useState({});
  const [cards, setCards] = useState([]);
  const [data2, setData2] = useState({});
  const [cards2, setCards2] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/education1s")
      .then((res) => setData(res.data.data[0].attributes))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8082/api/resume-educations")
      .then((res) => setCards(res.data.data[0].attributes.education))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/education2s")
      .then((res) => setData2(res.data.data[0].attributes))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8082/api/resume-education2s")
      .then((res) => setCards2(res.data.data[0].attributes.job))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lg:flex md:flex ">
      <div className="mt-5 ">
        <div className="flex  lg:justify-center  items-start space-x-10 md:justify-evenly ">
          <div className="space-y-5">
            <h1 className="text-red-700">{data?.year}</h1>
            <h1 className=" lg:text-4xl font-bold">
              {data?.heading}
            </h1>
          </div>
        </div>
        <div className="flex md:justify-center flex-wrap lg:space-y-2  lg:items-center lg:space-x-0  md:space-y-0 mt-10 space-y-5 md:space-x-3">
          {cards.map((card) => {
            return (
              <div className="  lg:w-96  md:w-80   h-80 shadow_1 hovred_bg rounded p-5 space-y-2 ">
                <div className="lg:text-3xl text-xl font-bold">
                  <div>{card.heading}</div>
                </div>
                <div className="flex space-x-24">
                  <div>
                    <div>{card.uni}</div>
                  </div>
                  <div className="text-red-700">
                    <div>{card.rate}</div>
                  </div>
                </div>
                <hr />
                <div>
                  <div>{card.body}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-5 ">
        <div className="flex lg:mr-24 items-start space-x-10 md:justify-evenly ">
          <div className="space-y-5">
            <h1 className="text-red-700">{data2?.year}</h1>
            <h1 className=" lg:text-4xl font-bold ">
              {data2?.heading}
            </h1>
          </div>
        </div>
        <div className="flex md:justify-center flex-wrap lg:space-y-2  lg:items-center lg:space-x-0  md:space-y-0 mt-10 space-y-5 md:space-x-3">
          {cards2.map((card) => {
            return (
              <div className="  lg:w-96 md:w-80   h-80 shadow_1 hovred_bg rounded p-5 space-y-2">
                <div className="lg:text-3xl text-xl font-bold">
                  <div>{card.heading2}</div>
                </div>
                <div className="flex space-x-24">
                  <div>
                    <div>{card.uni2}</div>
                  </div>
                  <div className="text-red-700">
                    <div>{card.rate2}</div>
                  </div>
                </div>
                <hr />
                <div>
                  <div>{card.body2}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
