import React from "react";
import Nav from "./Nav";
import bannerImg from "../assets/Banner-img.png";

const Banner = () => {
  return (
    <section className="bg-banner">
      <Nav />
      <div className="flex px-20 py-14 items-center">
        <div className="flex-1 -mt-10">
          <p className="text-sm">Hello World!</p>
          <h1 className="text-6xl font-black overflow-hidden py-1">
            I'm Lekside
          </h1>
          <span className="text-[#FF8C92] font-medium block">
            SaaS Animator
          </span>
          <p className="text-sm leading-7 my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
            atque debitis! Deserunt aspernatur totam iure sed ut, dignissimos
            facere odio eius accusantium placeat commodi, autem, quae est magni.
            Libero, omnis.
          </p>
          <button className="py-2 px-8 rounded-full bg-[#263238] text-white text-sm">
            Hire Me
          </button>
        </div>
        <div className="flex-1">
          <img src={bannerImg} className="w-3/4 mx-auto" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
