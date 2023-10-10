"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { AiOutlineClockCircle } from "react-icons/ai";
import axios from "axios";

const BlogId = (params) => {
  const [data, setData] = useState({});
  const [cards, setCards] = useState([]);
  const [richTextArray, setRichTextArray] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/blogs")
      .then((res) => setData(res.data.data[0].attributes))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8082/api/blogs")
      .then((res) => setCards(res.data.data[0].attributes.card))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8082/api/richtext10s")
      .then((res) => {
        const richTextData = res.data.data[0].attributes;
        const richTextArray = [
          richTextData.rt1,
          richTextData.rt2,
          richTextData.rt3,
        ];
        setRichTextArray(richTextArray);
      })
      .catch((err) => console.log(err));
  }, []);

  const icons = [
    <AiOutlineClockCircle />,
    <AiOutlineClockCircle />,
    <AiOutlineClockCircle />,
  ];

  const goToHome = () => {
    router.push("/");
    localStorage.setItem("fromBlog", true);
  };

  return (
    <div className="mt-5 lg:-mt-32 items-center lg:p-40">
      <div className="text-center space-y-4">
        <h1 className="lg:text-6xl text-4xl font-bold">My blog</h1>
      </div>
      <div className="lg:space-x-4 mt-14 lg:space-y-0 space-y-5 md:justify-center">
        {cards.map((card, i) => {
          if (params.params.blogId === card.id) {
            return (
              <div className="shadow_1 rounded-xl p-10 space-y-5" key={i}>
                <img
                  src={card?.img}
                  alt=""
                  className="cursor-pointer w-80 h-52 lg:w-screen lg:h-[500px] rounded-xl  object-cover md:w-screen md:h-[500px]"
                />
                <div className="text-xl text-justify leading-loose">
                  {richTextArray[i] ? (
                    <ReactMarkdown>{richTextArray[i]}</ReactMarkdown>
                  ) : (
                    "Loading rich text..."
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="flex justify-center items-center">
        <button
          className="mt-24 mb-10 shadow_1 hovred_bg transition-colors duration-400 hover:text-red-700 p-5 rounded"
          onClick={goToHome}
        >
          Go To Home page
        </button>
      </div>
    </div>
  );
};

export default BlogId;
