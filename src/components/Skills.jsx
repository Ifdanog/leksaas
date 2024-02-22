import afterEffect from "../assets/aftereffect.webp";
import adobePremiere from "../assets/adobe-premiere.png";
import adobeIllustrator from "../assets/adobe-illustrator.webp";
import figma from "../assets/figma.webp";
import blender from "../assets/blender.webp";

const Skills = () => {
  return (
    <div
      id="portfolio"
      className="relative px-8 py-14 md:p-20 text-center bg-[#F5F4F4]"
    >
      <h3 className="text-xl lg:text-3xl font-bold py-2">Professional Skill</h3>
      <p className="text-xs md:w-1/3 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nostrum
        deleniti molestiae tempore officiis.
      </p>
      <button className="px-6 py-2 bg-white rounded-full mt-4 text-xs">
        Download Resume
      </button>
      <img
        src={afterEffect}
        alt=""
        className="w-[5rem] lg:w-[7rem] absolute top-6 "
      />
      <img
        src={adobePremiere}
        alt=""
        className="w-[4rem] lg:w-[8rem] absolute bottom-6 right-[30%]"
      />
      <img
        src={adobeIllustrator}
        alt=""
        className="w-[5rem] lg:w-[9rem] absolute top-6 right-12"
      />
      <img src={figma} alt="" className="w-[4rem] absolute top-3 left-[50%]" />
      <img
        src={blender}
        alt=""
        className="w-[6rem] lg:w-[10rem] absolute bottom-6 left-[28%]"
      />
    </div>
  );
};

export default Skills;
