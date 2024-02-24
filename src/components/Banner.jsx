import React from "react";
import Nav from "./Nav";
import bannerImg from "../assets/Banner-img.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="bg-banner">
      <Nav />
      <div className="md:flex px-8 md:px-20 py-14 items-center">
        <motion.div
          initial={{ transform: "translateX(-120%)" }}
          animate={{ transform: "translateX(0)" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 -mt-10"
        >
          <p className="text-sm">Hello World!👋</p>
          <h1 className="text-4xl lg:text-6xl font-black overflow-hidden py-1">
            I'm Lekside
          </h1>
          <span className="text-[#FF8C92] font-medium block">
            SaaS Animator
          </span>
          <p className="text-sm leading-7 my-4">
            Innovation meets artistry to breathe life into your visions. Join me
            and animate your way to the future
          </p>
          <a href="https://wa.link/oyds3e" target="_blank">
            <button className="py-2 px-8 rounded-full bg-[#263238] text-white text-sm">
              Hire Me
            </button>
          </a>
        </motion.div>
        <motion.div
          initial={{ transform: "translateX(100%)" }}
          animate={{ transform: "translateX(0)" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1"
        >
          <img src={bannerImg} className="w-3/4 mx-auto" alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
