import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-[6rem] md:h-[2rem] py-8 px-8 md:px-20 block md:flex justify-between items-center overflow-hidden"
    >
      <h1 className="font-bold text-xl">Lekside</h1>
      <ul className="bg-[pink] md:bg-transparent flex gap-4 items-center text-sm mt-2 md:mt-0">
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
    </motion.nav>
  );
};

export default Nav;
