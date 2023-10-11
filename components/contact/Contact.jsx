import React, { useEffect, useState } from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import axios from "axios";
import { baseUrl } from "@/baseUrl";

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
  }

  useEffect(() => {
    axios
      .get(`${baseUrl}api/contactsses`)
      .then((res) => setData(res.data.data[0].attributes.contact[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-32">
      <div className="text-center space-y-5">
        <h1 className="text-red-700">CONTACT</h1>
        <h1 className="lg:text-5xl text-3xl font-bold ">Contact With Me </h1>
      </div>
      <div className="lg:flex mt-10 lg:justify-evenly">
        <div>
          <div className="2xl:w-[600px] 2xl:h-[800px] lg:w-96 h-screen shadow_1  rounded-xl p-10 space-y-10 md:space-y-20 lg:space-y-5">
            <img
              className="cursor-pointer 2xl:w-[500px] 2xl:h-[350px] w-80 h-52 md:w-screen md:h-96 lg:w-80 lg:h-64  rounded-xl  object-cover transform transition-transform duration-300 hover:scale-110"
              src={data?.img}
              alt="My Image"
              width={400}
              height={500}
            />
            <div>
              <div className=" 2xl:text-4xl lg:text-2xl text-2xl md:text-5xl font-bold">
                {data?.h1}
              </div>
            </div>
            <div className="space-y-2 2xl:space-y-4">
              <h1 className="2xl:text-3xl text-xl md:text-3xl lg:text-xl font-bold">
                {data?.h2}
              </h1>
              <h1 className="2xl:text-2xl md:text-xl lg:text-xs">{data?.h3}</h1>
              <h1 className="2xl:text-2xl  transition-colors duration-500 hover:text-red-700 md:text-xl lg:text-xs">
                {data?.h4}
              </h1>
              <h1 className="2xl:text-2xl  transition-colors duration-500 hover:text-red-700 md:text-xl lg:text-xs">
                {data?.h5}
              </h1>
              <h1 className="md:text-xl lg:text-xs 2xl:text-2xl  ">
                Find with me
              </h1>
              <div>
                <div className="space-x-10 mt-1">
                  <a href="https://www.facebook.com" target="_blank">
                    <button className="w-6">
                      <FiFacebook className="w-8 h-8" />
                    </button>
                  </a>
                  <a href="https://www.instagram.com" target="_blank">
                    <button className="w-6">
                      <FiInstagram className="w-8 h-8" />
                    </button>
                  </a>
                  <a href="https://www.linkedin.com" target="_blank">
                    <button className="w-6">
                      <FiLinkedin className="w-8 h-8" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" 2xl:w-[800px] 2xl:space-y-5 lg:w-[500px] p-6 shadow_1 shadow-md rounded-lg"
        >
          <div className="mb-4 2xl:text-3xl">
            <label htmlFor="name" className="block  font-bold">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border  rounded-md focus:outline-none text-black focus:border-red-700"
            />
          </div>
          <div className="mb-4 2xl:text-3xl">
            <label htmlFor="email" className="block  font-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:border-red-700"
            />
          </div>
          <div className="mb-4 2xl:text-3xl">
            <label htmlFor="phone" className="block  font-bold">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:border-red-700"
            />
          </div>
          <div className="mb-4 2xl:text-3xl">
            <label htmlFor="message" className="block  font-bold">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-10 border text-black border-gray-300 rounded-md focus:outline-none focus:border-red-700"
            ></textarea>
          </div>
          <div className="text-center lg:mt-16 ">
            <button
              type="submit"
              className="2xl:w-72 2xl:h-20 2xl:text-2xl 2xl:mt-10 py-3 px-4 rounded-md shadow_1 hovred_bg focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
