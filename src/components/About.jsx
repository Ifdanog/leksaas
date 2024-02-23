import facebook from "../assets/Fb.svg";
import instagram from "../assets/Insta.svg";
import linkedin from "../assets/In.svg";
import behance from "../assets/behance-1.svg";
import productHunt from "../assets/product-hunt.svg";
import telegram from "../assets/telegram-1.svg";
import tiktok from "../assets/tiktok.svg";
import whatsapp from "../assets/whatsapp.svg";

const About = () => {
  return (
    <div id="about" className="py-10 px-8 md:px-20">
      <div className="bg-[#263238] mx-auto text-center py-20 rounded-xl mt-20">
        <h3 className="text-xl w-2/3 mx-auto font-bold  text-[#999]">
          Hey👋 I’m Lekside, a SaaS Animator with 05 years experience sketching,
          building & coaching. I love fun SaaS Animation video in both 2d and
          3d, collaboration and making helpful products that connect people.
        </h3>
        <hr className="text-[#333] m-10" />
        <h3 className="text-xl lg:text-3xl font-bold py-2 text-[pink]">
          Connect With Me
        </h3>
        <div className="w-3/5 mx-auto text-center justify-center flex flex-wrap gap-4 mt-4">
          <a
            href="https://web.facebook.com/olamilekanolakunle.olakunle"
            target="_blank"
            className="bg-white py-2 px-4 flex gap-2 items-center rounded-full"
          >
            <img src={facebook} alt="" className="w-[1.5rem]" />
            <p className="text-xs">Facebook</p>
          </a>
          <a
            href="https://www.instagram.com/leksidejohn5/"
            target="_blank"
            className="bg-white py-2 px-4 flex gap-2 items-center rounded-full"
          >
            <img src={instagram} alt="" className="w-[1.5rem]" />
            <p className="text-xs">Instagram</p>
          </a>
          <a
            href="https://www.linkedin.com/in/john-lekside-052755259/"
            target="_blank"
            className="bg-white py-2 px-4 flex gap-2 items-center rounded-full"
          >
            <img src={linkedin} alt="" className="w-[1.5rem]" />
            <p className="text-xs">LinkedIn</p>
          </a>
          <a
            href="https://www.behance.net/leksidejohn"
            target="_blank"
            className="bg-white py-2 px-4 flex gap-2 items-center rounded-full"
          >
            <img src={behance} alt="" className="w-[1.5rem]" />
            <p className="text-xs">Behance</p>
          </a>
          <a
            href="https://www.producthunt.com/@john_lekside"
            target="_blank"
            className="bg-white py-2 px-4 flex gap-2 items-center rounded-full"
          >
            <img src={productHunt} alt="" className="w-[1.5rem]" />
            <p className="text-xs">Product Hunt</p>
          </a>
          <a
            href="https://t.me/leksidelex"
            target="_blank"
            className="bg-white py-2 px-4 flex gap-2 items-center rounded-full"
          >
            <img src={telegram} alt="" className="w-[1.5rem]" />
            <p className="text-xs">Telegram</p>
          </a>
          <a
            href="https://wa.link/oyds3e"
            target="_blank"
            className="bg-white py-2 px-4 flex gap-2 items-center rounded-full"
          >
            <img src={whatsapp} alt="" className="w-[1.5rem]" />
            <p className="text-xs">WhatsApp</p>
          </a>
          <a
            href="https://vm.tiktok.com/ZMMeGr1cx/"
            target="_blank"
            className="bg-white py-2 px-4 flex gap-2 items-center rounded-full"
          >
            <img src={tiktok} alt="" className="w-[1.5rem]" />
            <p className="text-xs">Tiktok</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
