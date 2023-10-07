"use client";
import Image from "next/image";
import Hero from "@/components/hero/Hero";
import Feature from "@/components/feature/Feature";
import Portfolio from "@/components/portfolio/Portfolio";
import Resume from "@/components/resume/Resume";
import Mainslide from "@/components/slide/Mainslide";
import Client from "@/components/clients/Client";
import Pricing from "@/components/pricing/Pricing";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import { useRef, useState, useEffect } from "react";
import Footer from "@/components/footer/Footer";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Home() {
  const homeRef = useRef();
  const featureRef = useRef();
  const portfolioRef = useRef();
  const resumeRef = useRef();
  const clientsRef = useRef();
  const pricingRef = useRef();
  const blogRef = useRef();
  const contactRef = useRef();
  const [isOpnedDrawer, setIsOpnedDrawer] = useState();
  const [scrolled, setScrolled] = useState(false);

  const goToView = (name) => {
    if (name === "home") {
      homeRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (name === "feature") {
      featureRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (name === "portfolio") {
      portfolioRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (name === "resume") {
      resumeRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (name === "clients") {
      clientsRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (name === "pricing") {
      pricingRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (name === "blog") {
      blogRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (name === "contact") {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("fromBlog")) {
        goToView("blog");
        localStorage.setItem("fromBlog", false);
      }
    }, 1000);
  }, []);

  return (
    <main className=" p-8">
      <div
        className={`${
          scrolled
            ? "fixed top-0 left-0 space-x-14 justify-around   shadow_1  z-50 lg:w-screen hidden md:hidden"
            : "hidden"
        } lg:flex items-center space-x-14 justify-around transition-all ease-in-out duration-300 `}
      >
        <div>
          <Image
            className="cursor-pointer 2xl:mr-[400px] 2xl:w-80 2xl:h-36"
            onClick={() => goToView("home")}
            src="/images/my-image.jpg"
            alt="My Image"
            width={150}
            height={100}
          />
        </div>
        <div className="flex space-x-12  ">
          <div>
            <ul className="flex space-x-4  mt-3 2xl:text-2xl">
              <li onClick={() => goToView("home")} className="cursor-pointer">
                HOME
              </li>
              <li
                onClick={() => goToView("feature")}
                className="cursor-pointer"
              >
                FEATURE
              </li>
              <li
                onClick={() => goToView("portfolio")}
                className="cursor-pointer"
              >
                PORTFOLIO
              </li>
              <li onClick={() => goToView("resume")} className="cursor-pointer">
                RESUME
              </li>
              <li
                onClick={() => goToView("clients")}
                className="cursor-pointer"
              >
                CLIENTS
              </li>
              <li
                onClick={() => goToView("pricing")}
                className="cursor-pointer"
              >
                PRICING
              </li>
              <li onClick={() => goToView("blog")} className="cursor-pointer">
                BLOG
              </li>
              <li
                onClick={() => goToView("contact")}
                className="cursor-pointer"
              >
                CONTACT
              </li>
            </ul>
          </div>
          <div>
            <button className="text-red-700  shadow_1 hovred_bg  rounded w-36 h-12 2xl:w-48 2xl:h-14 2xl:text-2xl">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          scrolled
            ? "flex lg:hidden fixed top-0 left-0 space-x-14 justify-between   shadow_1  z-50 w-screen p-4"
            : ""
        } lg:hidden items-center space-x-14 flex justify-between transition-all ease-in-out duration-300`}
      >
        <div>
          <Image
            className="cursor-pointer "
            src="/images/my-image.jpg"
            alt="My Image"
            width={150}
            height={100}
          />
        </div>
        <div>
          <button
            onClick={() => setIsOpnedDrawer((prev) => !prev)}
            className="text-red-700  shadow_1 hovred_bg  rounded w-28 h-12 flex justify-center"
          >
            <AiOutlineMenu className="mt-4" />
          </button>
        </div>
      </div>

      {isOpnedDrawer && (
        <div className="lg:hidden h-screen top-0  fixed z-50  left-0 shadow_1 hovred_bg ml-5 p-8 md:w-96 w-72   ">
          <div className="flex justify-between">
            <Image
              className="cursor-pointer"
              src="/images/my-image.jpg"
              alt="My Image"
              width={150}
              height={100}
            />
            <div className="mt-7" onClick={() => setIsOpnedDrawer(false)}>
              <AiOutlineClose />
            </div>
          </div>
          <h1 className="mt-4">
            InBio is a persnol portfolio template. You can customize all
          </h1>
          <div className=" justify-start">
            <ul className="   mt-10 space-y-5 ">
              <div onClick={() => setIsOpnedDrawer(false)}>
                <li onClick={() => goToView("home")} className="cursor-pointer">
                  HOME
                </li>
              </div>
              <div onClick={() => setIsOpnedDrawer(false)}>
                <li
                  onClick={() => goToView("feature")}
                  className="cursor-pointer"
                >
                  FEATURE
                </li>
              </div>
              <div onClick={() => setIsOpnedDrawer(false)}>
                <li
                  onClick={() => goToView("portfolio")}
                  className="cursor-pointer"
                >
                  PORTFOLIO
                </li>
              </div>
              <div onClick={() => setIsOpnedDrawer(false)}>
                <li
                  onClick={() => goToView("resume")}
                  className="cursor-pointer"
                >
                  RESUME
                </li>
              </div>
              <div onClick={() => setIsOpnedDrawer(false)}>
                <li
                  onClick={() => goToView("clients")}
                  className="cursor-pointer"
                >
                  CLIENTS
                </li>
              </div>
              <div onClick={() => setIsOpnedDrawer(false)}>
                <li
                  onClick={() => goToView("pricing")}
                  className="cursor-pointer"
                >
                  PRICING
                </li>
              </div>
              <div onClick={() => setIsOpnedDrawer(false)}>
                <li onClick={() => goToView("blog")} className="cursor-pointer">
                  BLOG
                </li>
              </div>
              <div onClick={() => setIsOpnedDrawer(false)}>
                <li
                  onClick={() => goToView("contact")}
                  className="cursor-pointer"
                >
                  CONTACT
                </li>
              </div>
            </ul>
          </div>
          <div className="mt-10">
            <h1>Find with me</h1>

            <div className=" flex   mt-2  space-x-5 ">
              <button>
                <FiFacebook className="  w-7 h-7" />
              </button>
              <button>
                <FiInstagram className=" w-7 h-7" />
              </button>
              <button>
                <FiLinkedin className="  w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      )}
      <div ref={homeRef}>
        <Hero />
      </div>
      <div ref={featureRef}>
        <Feature />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={resumeRef}>
        <Resume />
      </div>
      <div>
        <Mainslide />
      </div>
      <div ref={clientsRef}>
        <Client />
      </div>
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <div ref={blogRef}>
        <Blog />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
