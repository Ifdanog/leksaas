import afterEffect from "../assets/aftereffect.webp";
import adobePremiere from "../assets/adobe-premiere.png";
import adobeIllustrator from "../assets/adobe-illustrator.webp";
import figma from "../assets/figma.webp";
import blender from "../assets/blender.webp";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="relative px-8 py-14 md:p-20 text-center bg-[#F5F4F4]">
      <motion.div
        initial={{ transform: "translateY(100%)", opacity: 0 }}
        whileInView={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-xl lg:text-3xl font-bold py-2">
          Professional Skill
        </h3>
        <p className="text-xs md:w-1/3 mx-auto">
          Proficient in SaaS animation with expertise in Adobe After Effects,
          Blender, figma, Adobe Premiere Pro and Adobe Illustrator. Skilled in
          creating captivating visuals, dynamic effects, and seamless
          storytelling.
        </p>
        <a
          href="motion-design-saas-resume.pdf"
          download="motion-design-saas-resume.pdf"
        >
          <button className="px-6 py-2 bg-white rounded-full mt-4 text-xs">
            Download Resume
          </button>
        </a>
      </motion.div>
      <div className="w-3/4 justify-center mt-4 mx-auto flex gap-3 md:block">
        <img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          src={afterEffect}
          alt=""
          className="w-[3rem] md:w-[5rem] lg:w-[7rem] md:absolute md:top-6 "
        />
        <img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          src={adobePremiere}
          alt=""
          className="w-[3rem] md:w-[4rem] lg:w-[8rem] md:absolute md:bottom-6 md:right-[25%]"
        />
        <img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          src={adobeIllustrator}
          alt=""
          className="w-[3rem] md:w-[5rem] lg:w-[9rem] md:absolute md:top-6 md:right-12"
        />
        <img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          src={figma}
          alt=""
          className="w-[3rem] md:w-[4rem] md:absolute md:top-3 md:left-[50%]"
        />
        <img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          src={blender}
          alt=""
          className="w-[3rem] md:w-[6rem] lg:w-[10rem] md:absolute md:bottom-6 md:left-[22%]"
        />
      </div>
    </section>
  );
};

export default Skills;
