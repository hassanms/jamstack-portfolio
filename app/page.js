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
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineArrowUp,
} from "react-icons/ai";
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetRef = getTargetRef(name);
      targetRef?.current?.scrollIntoView({
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

  const getTargetRef = (name) => {
    switch (name) {
      case "feature":
        return featureRef;
      case "portfolio":
        return portfolioRef;
      case "resume":
        return resumeRef;
      case "clients":
        return clientsRef;
      case "pricing":
        return pricingRef;
      case "blog":
        return blogRef;
      case "contact":
        return contactRef;
      default:
        return null;
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
      if (localStorage.getItem("fromBlog") === "true") {
        console.log("first");
        goToView("blog");
        localStorage.setItem("fromBlog", false);
      }
    }, 1000);
  }, []);

  return (
    <main className="lg:p-7 md:p-7">
      <div
        className={`${
          scrolled
            ? "fixed top-0 left-0 space-x-14  justify-between  backdrop-blur-md 2xl:p-5 lg:p-5 bg-[rgba(33,36,40,.871)]  z-50 lg:w-screen hidden md:hidden"
            : "hidden"
        } lg:flex 2xl:flex  space-x-14 justify-between transition-all  ease-in-out duration-300`}
      >
        <div className="flex 2xl:flex  lg:space-x-2">
          <Image
            className="cursor-pointer 2xl:mr-[10px]  rounded-full  2xl:w-32  2xl:h-20  lg:w-20 lg:h-16 "
            onClick={() => goToView("home")}
            src="/images/hami.jpg"
            alt="My Image"
            width={450}
            height={500}
          />
          <div className="mt-5 font-bold text-xl 2xl:mt-8">INBIO</div>
        </div>
        <div className="flex  lg:p-2 2xl:p-5">
          <div>
            <ul
              className="flex space-x-4 lg:space-x-8  mt-3 2xl:text-sm lg:text-sm
             "
            >
              <li onClick={() => goToView("home")} className="cursor-pointer">
                HOME
              </li>
              <li
                onClick={() => goToView("feature")}
                className="cursor-pointer"
              >
                FEATURES
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
            <button className="text-[#ff014f] lg:text-sm lg:w-28 lg:h-12 lg:ml-5 lg:mr-4 shadow_1 hovred_bg  rounded w-36 h-12 2xl:w-32 2xl:h-8 2xl:text-sm 2xl:mt-1">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          scrolled
            ? "flex lg:hidden fixed top-0 left-0 space-x-20  justify-between   shadow_1  z-50 w-screen p-3"
            : ""
        } lg:hidden items-center justify-between flex    md:justify-between transition-all ease-in-out duration-300`}
      >
        <div>
          <Image
            className="cursor-pointer w-28"
            src="/images/my-image.jpg"
            alt="My Image"
            width={150}
            height={100}
          />
        </div>
        <div>
          <button
            onClick={() => setIsOpnedDrawer((prev) => !prev)}
            className=" shadow_1  rounded w-16 h-12 flex justify-center"
          >
            <AiOutlineMenu className="mt-4 text-[#ff014f] " />
          </button>
        </div>
      </div>

      {isOpnedDrawer && (
        <div className="lg:hidden h-screen top-0  fixed z-50   left-0 shadow_1 hovred_bg  p-8 md:w-[400px] w-72   ">
          <div className="flex justify-between">
            <Image
              className="cursor-pointer"
              src="/images/my-image.jpg"
              alt="My Image"
              width={150}
              height={100}
            />
            <div className="mt-7 " onClick={() => setIsOpnedDrawer(false)}>
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
        <hr className="border-t border-black " />
      </div>
      {scrolled && !isOpnedDrawer && (
        <div className="fixed z-50 bottom-12 right-5 shadow_1 w-12 h-12 p-3 rounded-full">
          <button onClick={() => goToView("home")}>
            <AiOutlineArrowUp className="w-6 h-6 " />
          </button>
        </div>
      )}
      <div ref={featureRef}>
        <Feature />
        <hr className="border-t border-black mt-16" />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
        <hr className="border-t border-black mt-16" />
      </div>
      <div ref={resumeRef}>
        <Resume />
        <hr className="border-t border-black mt-16" />
      </div>
      <div>
        <Mainslide />
        <hr className="border-t border-black mt-16" />
      </div>
      <div ref={clientsRef}>
        <Client />
        <hr className="border-t border-black mt-16" />
      </div>
      <div ref={pricingRef}>
        <Pricing />
        <hr className="border-t border-black mt-16" />
      </div>
      <div ref={blogRef}>
        <Blog />
        <hr className="border-t border-black mt-16" />
      </div>
      <div ref={contactRef}>
        <Contact />
        <hr className="border-t border-black mt-16" />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
