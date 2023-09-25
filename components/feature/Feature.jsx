"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineDesktop,
  AiOutlineWifi,
  AiOutlineMobile,
  AiOutlineApple,
  AiFillSlackCircle,
} from "react-icons/ai";

const Feature = () => {
  const [data, setData] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log("first");

    axios
      .get("http://localhost:8082/api/features")
      .then((res) => setData(res.data.data[0].attributes))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8082/api/card1s")
      .then((res) => setCards(res.data.data[0].attributes.data))
      .catch((err) => console.log(err));
  }, []);

 const icons = [
  <AiOutlineMenu className='text-red-800 w-9 h-9 font-bold' />,
  <AiOutlineDesktop className='text-red-800 w-9 h-9 font-bold' />,
  <AiOutlineWifi className='text-red-800 w-9 h-9 font-bold' />,
  <AiOutlineMobile className='text-red-800 w-9 h-9 font-bold' />,
  <AiOutlineApple className='text-red-800 w-9 h-9 font-bold' />,
  <AiFillSlackCircle className='text-red-800 w-9 h-9 font-bold' />
]



  return (
    <div className="mt-10 ">
      <div className="space-y-4 text-center lg:text-left lg:ml-10 ">
        <h1 className="text-red-800 text-x1">{data?.h1}</h1>
        <h1 className="text-white lg:text-6xl text-4xl font-bold">
          {data?.heading}
        </h1>
      </div>
      <div className="flex  flex-wrap items-center mt-5 space-x-2  md:justify-center">
        {cards.map((card,i) => {
          return (
            <div className="  text-white lg:w-96 lg:h-80  w-80 h-80 shadow_1  hovred_bg rounded-xl p-10 space-y-8">
              <div>
                
                <div>
                 {icons[i]}
                </div>
              </div>

              <div className="lg:text-3xl text-2xl font-bold">
                {card.heading}
              </div>

              <div>{card.body}</div>
            </div>
          );
        })}
      </div>
    </div>

    // <div className="mt-32">
    //   <div className="space-y-4 text-center lg:text-left lg:ml-24">
    //     <h1 className="text-red-800 text-x1">Features</h1>
    //     <h1 className="text-white lg:text-6xl text-4xl   font-bold"> what i do </h1>
    //   </div>

    //   <div className="flex flex-wrap justify-center md:space-y-0 md:space-x-4 lg:space-y-0 lg:space-x-5 mt-6 space-y-5 ">

    //     <div className=" text-white lg:w-96 lg:h-80 md:w-52  md:h-96 w-80 h-80 shadow_1  hovred_bg rounded-xl p-10 space-y-8">
    //       <div>
    //         <AiOutlineMenu className="text-red-800 w-9 h-9 font-bold" />
    //       </div>

    //       <div className="lg:text-3xl text-2xl font-bold">Business Strategy</div>

    //       <div>
    //         I throqh myself down among the tall grass of the stream as i lie
    //         close to the earth.
    //       </div>
    //     </div>

    //     <div className=" text-white lg:w-96 lg:h-80 md:w-52  md:h-96 w-80 h-80 shadow_1  hovred_bg rounded-xl p-10 space-y-8">
    //       <div>
    //         <AiOutlineApple className="text-red-800 w-10 h-10 font-bold" />
    //       </div>

    //       <div className="lg:text-3xl text-2xl font-bold">App Development</div>

    //       <div>
    //         I throqh myself down among the tall grass of the stream as i lie
    //         close to the earth.
    //       </div>
    //     </div>

    //     <div className=" text-white lg:w-96 lg:h-80 md:w-52  md:h-96 w-80 h-80 shadow_1  hovred_bg rounded-xl p-10 space-y-8">
    //       <div>
    //         <AiOutlineDesktop className="text-red-800 w-10 h-10 font-bold" />
    //       </div>

    //       <div className="lg:text-3xl text-2xl font-bold">App development</div>

    //       <div>
    //         I throqh myself down among the tall grass of the stream as i lie
    //         close to the earth.
    //       </div>
    //     </div>

    //   </div>

    // </div>
  );
};

export default Feature;
