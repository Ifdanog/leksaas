import quote from "../assets/Quote-icon.png";
import people from "../assets/people.png";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="p-8 md:p-20">
      <div className="md:flex items-center justify-between">
        <div className="flex gap-4 ">
          <img
            src={quote}
            className="w-[2.5rem] h-[2.5rem] md:h-[4rem] md:w-[4rem]"
            alt=""
          />
          <h3 className="w-[20rem] md:text-2xl font-semibold">
            What Are People Saying About My Work
          </h3>
        </div>
        <div className="flex gap-6">
          <img src={arrowLeft} className="w-[3rem]" alt="" />
          <img src={arrowRight} className="w-[3rem]" alt="" />
        </div>
      </div>
      <div className="mt-10 md:flex items-center">
        <motion.div
          initial={{ transform: "translateX(-100%)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1"
        >
          <p className="text-xs italic leading-6">
            Our SaaS animation project received rave reviews! Users praised its
            intuitive interface, seamless animations, and ability to bring
            concepts to life effortlessly. The feedback underscores our
            commitment to delivering top-notch animation solutions.
          </p>
          <h3 className="font-medium">Nancey Ubban</h3>
          <span className="text-xs">CTO, Daba</span>
        </motion.div>
        <motion.div
          initial={{ transform: "translateX(100%)", opacity: 0 }}
          whileInView={{ transform: "translateX(0)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1"
        >
          <img src={people} className="w-3/4 mx-auto" alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
