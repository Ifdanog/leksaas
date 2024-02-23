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
      <img
        src={afterEffect}
        alt=""
        className="w-[5rem] lg:w-[7rem] absolute top-6 "
      />
      <img
        src={adobePremiere}
        alt=""
        className="w-[4rem] lg:w-[8rem] absolute bottom-6 right-[25%]"
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
        className="w-[6rem] lg:w-[10rem] absolute bottom-6 left-[22%]"
      />
    </div>
  );
};

export default Skills;
