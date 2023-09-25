import React, { useEffect, useState } from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";

const Contact = () => {
  //   const[name  , setName] = useState("")
  //   const[phone , setPhone] = useState("null")
  //   const[email, setEmail] = useState("")
  //   const[subject , setSubject] = useState("")
  //   const[message, setMessage] = useState("")

  // const sendMessage = async () => {
  //   const url = 'http://localhost:1337/api/contacts';

  //   const formData = {
  //     data: {
  //       name,
  //       phone,
  //       email,
  //       subject,
  //       message
  //     },
  //   };

  //   try {
  //     const response = await axios.post(url, formData);
  //     console.log('Message sent successfully:', response.data);
  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //   }
  // };

  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8082/api/contacts")
      .then((res) => setData(res.data.data[0].attributes))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-32">
      <div className="text-center space-y-5">
        <h1 className="text-red-700">{data?.heading1}</h1>
        <h1 className="lg:text-5xl text-3xl font-bold text-white">
          {data?.heading2}
        </h1>
      </div>

      <div className="lg:flex mt-10 lg:justify-evenly">
        <div>
          <div>
            <div className=" text-white lg:w-96 h-screen shadow_1  rounded-xl p-10 space-y-10 md:space-y-20 lg:space-y-5">
              <img
                className="cursor-pointer  w-80 h-52 md:w-screen md:h-96 lg:w-80 lg:h-64  rounded-xl  object-cover transform transition-transform duration-300 hover:scale-110"
                src={data?.img}
                alt="My Image"
                width={400}
                height={500}
              />
              <div>
                <div className="text-white lg:text-2xl text-2xl md:text-5xl font-bold">
                  {data?.h1}
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-xl md:text-3xl lg:text-xl font-bold">
                  {data?.h2}
                </h1>
                <h1 className="md:text-xl lg:text-xs">{data?.h3}</h1>
                <h1 className="transition-colors duration-500 hover:text-red-700 md:text-xl lg:text-xs">
                  {data?.h4}
                </h1>
                <h1 className="transition-colors duration-500 hover:text-red-700 md:text-xl lg:text-xs">
                  {data?.h5}
                </h1>
                <h1 className="md:text-xl lg:text-xs  ">Find with me</h1>

                <div>
                  <div className="space-x-10 mt-1">
                    <button className="w-6">
                      <FiFacebook className="w-8 h-8" />
                    </button>
                    <button className="w-6">
                      <FiInstagram className="w-8 h-8" />
                    </button>
                    <button className="w-6">
                      <FiLinkedin className="w-8 h-8" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" shadow_1 lg:w-1/2.5 lg:p-10 p-5 rounded mt-5 lg:mt-0 md:p-10">
          <div className="lg:flex lg:space-x-1">
            <div className="space-y-2">
              <h1 className="text-white md: text-xl">Your Name</h1>
              <input
                // onChange={(e) => setName(e.target.value)}
                className="lg:w-48 md:w-[600px] w-64 h-10 rounded  bg-gray-950  text-white"
                type="text"
              />
            </div>

            <div className="space-y-2">
              <h1 className="text-white md:text-xl">Phone No</h1>
              <input
                // onChange={(e) => setPhone(e.target.value)}
                className="lg:w-48 w-64 md:w-[600px] h-10 rounded bg-gray-950 border-red-700 text-white"
                type="text"
              />
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <h1 className="text-white text-xl">Email</h1>
            <input
              // onChange={(e) => setEmail(e.target.value)}
              className="lg:w-96 w-64 md:w-[600px] h-10 rounded  bg-gray-950 border-red-700 text-white"
              type="text"
            />
          </div>

          <div className="mt-5 space-y-5">
            <h1 className="text-white md:text-xl">Subject</h1>
            <input
              // onChange={(e) => setSubject(e.target.value)}
              className="lg:w-96 w-64 md:w-[600px] h-10 rounded  bg-gray-950 border-red-700 text-white"
              type="text"
            />
          </div>

          <div className="mt-5 space-y-5">
            <h1 className="text-white md:text-xl">Your Message</h1>
            <textarea
              // onChange={(e) => setMessage(e.target.value)}
              className="lg:w-96 w-64 md:w-[600px] h-40 rounded bg-gray-950 border-red-700 border-none text-white resize-none break-all"
      
            ></textarea>
          </div>

          <div className="text-white  font-bold transition-colors duration-500 hover:text-red-700 mt-8 flex space-x-1">
            {/* onClick={sendMessage} */}
            <button className="md:text-xl ">Send Message</button>
            <AiOutlineArrowRight className="mt-1 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
