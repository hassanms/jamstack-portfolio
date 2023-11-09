import React, { useEffect, useState } from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import axios from "axios";
import { baseUrl } from "@/baseUrl";
import { AiOutlineArrowRight } from "react-icons/ai";

const Contact = () => {
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/email", formData);
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email.");
    }
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}api/contactsses`)
      .then((res) => setData(res.data.data[0].attributes.contact[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-32 lg:p-0 p-7">
      <div className="text-center space-y-5">
        <h1 className="text-[#ff014f]">CONTACT</h1>
        <h1 className="lg:text-6xl text-3xl font-extrabold  ">
          Contact With Me{" "}
        </h1>
      </div>
      <div className="lg:flex mt-10 lg:justify-evenly">
        <div>
          <div className=" 2xl:w-[600px] 2xl:h-[800px] lg:w-[450px] h-screen shadow_1  rounded-xl p-10 space-y-10 md:space-y-20 lg:space-y-5">
            <img
              className="cursor-pointer 2xl:w-[500px] 2xl:h-[350px] w-80 h-52 md:w-screen md:h-96 lg:w-80 lg:h-64  rounded-xl  object-cover transform transition-transform duration-300 hover:scale-110"
              src={data?.img}
              alt="My Image"
              width={400}
              height={500}
            />
            <div>
              <div className=" 2xl:text-4xl lg:text-2xl text-2xl md:text-5xl ">
                {data?.h1}
              </div>
            </div>
            <div className="space-y-2 2xl:space-y-4">
              <h1 className="2xl:text-3xl text-xl md:text-3xl lg:text-xl ">
                {data?.h2}
              </h1>
              <h1 className="2xl:text-2xl md:text-xl lg:text-xs">{data?.h3}</h1>
              <h1 className="2xl:text-2xl  transition-colors duration-500 hover:text-[#ff014f] md:text-xl lg:text-xs">
                {data?.h4}
              </h1>
              <h1 className="2xl:text-2xl  transition-colors duration-500 hover:text-[#ff014f] md:text-xl lg:text-xs">
                {data?.h5}
              </h1>
              <h1 className="md:text-xl lg:text-xs 2xl:text-2xl  ">
                Find with me
              </h1>
              <div>
                <div className="flex space-x-5 mt-1">
                  <div className="shadow_1 w-12 h-12 p-3  lg:p-4 rounded  transition-transform transform-gpu hover:translate-y-[-3px] hover:duration-1000">
                    <a href="https://www.facebook.com" target="_blank">
                      <button className=" w-6">
                        <FiFacebook className="w-6 h-6 lg:w-4 lg:h-4" />
                      </button>
                    </a>
                  </div>
                  <div className="shadow_1 w-12 h-12 p-3 lg:p-4 rounded  transition-transform transform-gpu hover:translate-y-[-3px] hover:duration-1000">
                    <a href="https://www.instagram.com" target="_blank">
                      <button className="w-6">
                        <FiInstagram className="w-6 h-6 lg:w-4 lg:h-4" />
                      </button>
                    </a>
                  </div>
                  <div className="shadow_1 w-12 h-12 p-3 lg:p-4 rounded  transition-transform transform-gpu hover:translate-y-[-3px] hover:duration-1000">
                    <a href="https://www.linkedin.com" target="_blank">
                      <button className="w-6">
                        <FiLinkedin className="w-6 h-6 lg:w-4 lg:h-4" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" 2xl:w-[800px] 2xl:space-y-5 lg:space-y-5 lg:w-[550px] p-6 shadow_1 shadow-md rounded-lg "
        >
          <div className="mb-4 2xl:text-3xl space-y-3">
            <label htmlFor="name" className="block  ">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2  bg-[#191b1e] text-white rounded-md focus:outline-none focus:-[#ff014f]"
            />
          </div>
          <div className="mb-4 2xl:text-3xl space-y-3">
            <label htmlFor="email" className="block  ">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full  px-3 py-2  bg-[#191b1e] text-white -gray-300  rounded-md focus:outline-none focus:-[#ff014f]"
            />
          </div>
          <div className="mb-4 2xl:text-3xl space-y-3">
            <label htmlFor="phone" className="block  ">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2  bg-[#191b1e] text-white -gray-300  rounded-md focus:outline-none focus:-[#ff014f]"
            />
          </div>
          <div className="mb-4 2xl:text-3xl space-y-3">
            <label htmlFor="message" className="block  ">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-10  bg-[#191b1e] text-white  -gray-300 rounded-md focus:outline-none focus:-[#ff014f]"
            ></textarea>
          </div>
          <div className="lg:mt-16">
            <button
              type="submit"
              className="2xl:w-72 2xl:h-20 2xl:text-2xl 2xl:mt-10 py-3 px-4 rounded-md shadow_1 focus:outline-none transition-transform hover:translate-y-[-5px] "
            >
              <div className="flex space-x-2">
                <div className="text-[#ff014f]">Send Message</div>
                <div>
                  <AiOutlineArrowRight className="text-[#ff014f] mt-1" />
                </div>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
