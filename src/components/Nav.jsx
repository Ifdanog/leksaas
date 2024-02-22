import React from "react";

const Nav = () => {
  return (
    <nav className="w-full h-[2rem] py-8 px-20 flex justify-between items-center overflow-hidden">
      <h1 className="font-bold text-xl">Lekside</h1>
      <ul className="flex gap-4 items-center text-sm">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
