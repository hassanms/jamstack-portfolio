'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

AiOutlineClockCircle;
import { AiOutlineClockCircle } from "react-icons/ai";
import axios from "axios";

const Blog = () => {
  const [data, setData] = useState({});
  // const [image, setImage] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/blogs")
      .then((res) => setData(res.data.data[0].attributes))
      .catch((err) => console.log(err));

    // axios
    //   .get("http://localhost:8082/api/blog-imgs")
    //   .then((res) => setImage(res.data.data[0].attributes.images.urls))
    //   .catch((err) => console.log(err));

    axios
      .get("http://localhost:8082/api/blog-cards")
      .then((res) => setCards(res.data.data[0].attributes.card))
      .catch((err) => console.log(err));
  }, []);

  const icons = [
    <AiOutlineClockCircle />,
    <AiOutlineClockCircle />,
    <AiOutlineClockCircle />,
  ];

  // const [selectedCard, setSelectedCard] = useState(null);

const router = useRouter();

// const handleImageClick = (index) => {
//   // const hashedId = handleEncrypt(index); 
//   router.push(`/${index}`); // Navigate using the hashed ID
// };
  return (
    <div className="mt-24  items-center">
      <div className="text-white text-center space-y-4 ">
        <h1 className="text-red-700">{data?.heading1}</h1>
        <h1 className="lg:text-6xl text-4xl font-bold">{data?.heading2}</h1>
      </div>

      <div className="flex flex-wrap lg:space-x-4 mt-14 lg:space-y-0 space-y-5 md:justify-center ">
        {cards.map((card, i) => {
          return (
            <div
          
              // onClick={() => setSelectedCard({card:card,index:i})}
              
                  // onClick={() => handleImageClick(card.id)}
              className=" text-white lg:w-96 w-80 h-96  shadow_1 hovred_bg rounded-xl p-10 space-y-5"
            >
              <img
             onClick={() => router.push(`/${card.id}`)}

                src={card?.img}
                alt=""
                className="cursor-pointer w-80 h-52 rounded-xl  object-cover transform transition-transform duration-300 hover:scale-110"
              />

              <div className="flex lg:space-x-32 space-x-14">
                <div className="text-red-700 ">{card?.heading}</div>

                <div className="flex space-x-1">
                  <div className="mt-1">{icons[i]}</div>
                  <div>{card?.title}</div>
                </div>
              </div>

              <div className="lg:text-2xl text-xl transition-colors duration-500 hover:text-red-700">
                {card?.body}
              </div>
            </div>
          );
        })}
      </div>
      {/* {selectedCard && (
        <div className="mt-4 p-4 text-white shadow_1 rounded-lg absolute z-10 overlay  overflow-y-auto max-h-screen  ">
          <button
            className="absolute top-0 right-0 p-2 text-white mr-4 lg:text-3xl text-3xl md:text-3xl mt-20 lg:mt-14"
            onClick={() => setSelectedCard(null)}
          >
            x
          </button>

          <div className="">
          <img src={image[selectedCard.index]} className="lg:w-screen lg:h-screen w-96 h-80 md:w-screen rounded lg:z-50 lg:mt-14 mt-20 " alt="" />
          <div className="font-bold mt-10 lg:text-4xl text-2xl">{selectedCard?.card.h1}</div>
          <div className="mt-4">{selectedCard?.card.p1}</div>
          <div className="font-bold mt-12 lg:text-4xl text-2xl">{selectedCard?.card.h2}</div>
          <div className="mt-4">{selectedCard?.card.p2}</div>
          <div className="font-bold mt-12 lg:text-4xl text-2xl">{selectedCard?.card.h3}</div>
          <div className="mt-4">{selectedCard?.card.p3}</div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Blog;
