import React from "react";

const Nav = () => {
  return (
    <nav className="w-full h-[2rem] py-8 px-20 flex justify-between items-center overflow-hidden">
      <h1 className="font-bold text-xl">Lekside</h1>
      <ul className="flex gap-4 items-center text-sm">
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
