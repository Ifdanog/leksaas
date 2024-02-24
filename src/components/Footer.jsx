import facebook from "../assets/Fb.svg";
import instagram from "../assets/Insta.svg";
import linkedin from "../assets/In.svg";
import behance from "../assets/behance-1.svg";
import productHunt from "../assets/product-hunt.svg";
import telegram from "../assets/telegram-1.svg";
import tiktok from "../assets/tiktok.svg";
import whatsapp from "../assets/whatsapp.svg";
import letsChat from "../assets/letschat.png";

const Footer = () => {
  return (
    <section className="p-8 md:p-20">
      <div className="md:flex">
        <h3 className="md:w-1/4 lg:w-2/5 text-xl lg:text-3xl font-bold py-2">
          Lekside
        </h3>

        <ul className="md:w-1/5 lg:w-1/4 mt-8 md:mt-0">
          <h4 className="font-bold">Quick Links</h4>
          <li>
            <a href="#about" className="text-xs">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-xs">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="text-xs">
              Contact
            </a>
          </li>
        </ul>

        <ul className="md:w-1/4 lg:w-1/5 mt-8 md:mt-0">
          <h4 className="font-bold">Stay Connected</h4>
          <a href="mailto:leksideloko@gmail.com" className="text-xs underline">
            leksideloko@gmail.com
          </a>
          <li className="text-xs underline">
            Phone:
            <a href="tel:+2349169618835">+234 916 961 8835</a>
          </li>
          <div className="w-3/4 flex flex-wrap gap-4 mt-4">
            <a
              href="https://web.facebook.com/olamilekanolakunle.olakunle"
              target="_blank"
            >
              <img src={facebook} alt="" className="w-[1.5rem]" />
            </a>
            <a href="https://www.instagram.com/leksidejohn5/" target="_blank">
              <img src={instagram} alt="" className="w-[1.5rem]" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-lekside-052755259/"
              target="_blank"
            >
              <img src={linkedin} alt="" className="w-[1.5rem]" />
            </a>
            <a href="https://www.behance.net/leksidejohn" target="_blank">
              <img src={behance} alt="" className="w-[1.5rem]" />
            </a>
            <a href="https://www.producthunt.com/@john_lekside" target="_blank">
              <img src={productHunt} alt="" className="w-[1.5rem]" />
            </a>
            <a href="https://t.me/leksidelex" target="_blank">
              <img src={telegram} alt="" className="w-[1.5rem]" />
            </a>
            <a href="https://wa.link/oyds3e" target="_blank">
              <img src={whatsapp} alt="" className="w-[1.5rem]" />
            </a>
            <a href="https://vm.tiktok.com/ZMMeGr1cx/" target="_blank">
              <img src={tiktok} alt="" className="w-[1.5rem]" />
            </a>
          </div>
        </ul>

        <ul className="md:w-1/4 lg:w-1/5 mt-8 md:mt-0">
          <h4 className="font-bold">🤝Thanks for scrolling</h4>
          <a
            href="https://www.github.com/ifdanog"
            target="_blank"
            className="underline text-sm"
          >
            &copy; by DevDan 2024
          </a>
          <a href="mailto:ogunniyidanif18@gmail.com">
            <img src={letsChat} alt="" className="w-1/4 md:w-1/2 mt-4" />
          </a>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
