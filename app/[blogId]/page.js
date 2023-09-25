"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";

AiOutlineClockCircle;
import { AiOutlineClockCircle } from "react-icons/ai";
import axios from "axios";

const BlogId = (params) => {
  const [data, setData] = useState({});
  const [image, setImage] = useState([]);
  const [cards, setCards] = useState([]);
  const [richText, setRichText] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8082/api/blogs")
      .then((res) => setData(res.data.data[0].attributes))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8082/api/blog-imgs")
      .then((res) => setImage(res.data.data[0].attributes.images.urls))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8082/api/blog-cards")
      .then((res) => setCards(res.data.data[0].attributes.card))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8082/api/richtexts")
      .then((res) => setRichText(res.data.data[0].attributes.rt))
      .catch((err) => console.log(err));
  }, []);

  const icons = [
    <AiOutlineClockCircle />,
    <AiOutlineClockCircle />,
    <AiOutlineClockCircle />,
  ];

  const router = useRouter();
  return (
    <div className="mt-5 lg:-mt-32  items-center lg:p-40">
      <div className="text-white text-center space-y-4 ">
        <h1 className="lg:text-6xl text-4xl font-bold">My blog</h1>
      </div>

      <div className="lg:space-x-4 mt-14 lg:space-y-0 space-y-5 md:justify-center ">
        {cards.map((card, i) => {
          if (params.params.blogId === card.id) {
            return (
              <div className=" text-white   shadow_1  rounded-xl p-10 space-y-5">
                <img
                  src={image[i]}
                  alt=""
                  className="cursor-pointer w-80 h-52 lg:w-screen lg:h-[500px] rounded-xl  object-cover md:w-screen md:h-[500px]"

                />

             
                <div className="text-xl text-justify leading-loose">
                  {richText ? (
                    <ReactMarkdown>{richText}</ReactMarkdown>
                  ) : (
                    "Loading rich text..."
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>

      <div class="flex justify-center items-center">
        <button
          class="mt-24 mb-10 text-white  shadow_1 hovred_bg transition-colors duration-400 hover:text-red-700 p-5 rounded"
          onClick={() => router.push("/")}
        >
          Go To Home page
        </button>
      </div>
    </div>
  );
};

export default BlogId;
