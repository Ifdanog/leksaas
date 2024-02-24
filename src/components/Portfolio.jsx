import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="mt-10 px-8 py-14 md:p-20 text-center bg-[#F5F4F4]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-xl lg:text-3xl font-bold py-2">My Projects</h3>
        <p className="text-xs md:w-1/3 mx-auto">
          Here are some of the projects, I have worked on, both for clients and
          personal projects.
        </p>
      </motion.div>

      <div className="mt-10">
        <motion.div
          initial={{ transform: "translateX(-100%)" }}
          whileInView={{ transform: "translateX(0)" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-[pink] py-10 px-8 md:px-20 md:flex items-center gap-4"
        >
          <div className="flex-1 text-left">
            <h3 className="font-bold">SaaS Platform Explainer Video</h3>
            <p className="text-xs">
              Tailored for product designers and owners. Streamline organization
              and collaboration, empowering teams to spread out their creativity
              and deliver exceptional results. Join us in revolutionizing the
              way you bring your product visions to life.
            </p>
            <button className="px-6 py-2 bg-white rounded-full my-4 text-xs">
              See More
            </button>
          </div>
          <iframe
            src="https://www.behance.net/embed/project/176997245?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
            className="flex-1 w-full"
          ></iframe>
        </motion.div>
      </div>

      <div className="mt-10">
        <motion.div
          initial={{ transform: "translateX(100%)" }}
          whileInView={{ transform: "translateX(0)" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-[#F3EAEB] py-10 px-8 md:px-20 md:flex items-center gap-4"
        >
          <iframe
            src="https://www.behance.net/embed/project/176996543?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
            className="flex-1 w-full"
          ></iframe>
          <div className="flex-1 text-left">
            <h3 className="font-bold mt-4">SaaS Animation Explainer Video</h3>
            <p className="text-xs">
              Revolutionize organization for buyers and sellers with seamless
              work coordination. Enjoy drag-and-drop simplicity for website
              design, empowering users to craft stunning digital landscapes
              effortlessly.
            </p>
            <button className="px-6 py-2 bg-white rounded-full mt-4 text-xs">
              See More
            </button>
          </div>
        </motion.div>
      </div>

      <div className="mt-10">
        <motion.div
          initial={{ transform: "translateX(-100%)" }}
          whileInView={{ transform: "translateX(0)" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-[pink] py-10 px-8 md:px-20 md:flex items-center gap-4"
        >
          <div className="flex-1 text-left">
            <h3 className="font-bold">Fullview Explainer Video</h3>
            <p className="text-xs">
              Your solution for streamlined organization and issue management.
              Empower support teams to tackle customer inquiries effectively and
              enhance overall service delivery. Experience the difference with
              Fulview
            </p>
            <button className="px-6 py-2 bg-white rounded-full my-4 text-xs">
              See More
            </button>
          </div>
          <iframe
            src="https://www.behance.net/embed/project/176995983?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
            className="flex-1 w-full"
          ></iframe>
        </motion.div>
      </div>

      <div className="mt-10">
        <motion.div
          initial={{ transform: "translateX(100%)" }}
          whileInView={{ transform: "translateX(0)" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-[#F3EAEB] py-10 px-8 md:marker:px-20 md:flex items-center gap-4"
        >
          <iframe
            src="https://www.behance.net/embed/project/176755163?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
            className="flex-1 w-full"
          ></iframe>
          <div className="flex-1 text-left">
            <h3 className="font-bold mt-4">SaaS Explainer Video</h3>
            <p className="text-xs">
              Seamlessly capture leads and streamline organization for
              unparalleled efficiency. Transform your sales pipeline with
              intuitive tools designed to maximize conversions.
            </p>
            <button className="px-6 py-2 bg-white rounded-full mt-4 text-xs">
              See More
            </button>
          </div>
        </motion.div>
      </div>

      <div className="mt-10">
        <motion.div
          initial={{ transform: "translateX(-100%)" }}
          whileInView={{ transform: "translateX(0)" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-[pink] py-10 px-8 md:px-20 md:flex items-center gap-4"
        >
          <div className="flex-1 text-left">
            <h3 className="font-bold">Safe Monitor Explainer Video</h3>
            <p className="text-xs">
              Your shield against fraud. Stay ahead with real-time notifications
              on suspicious activities, ensuring your safety online. Empower
              yourself with proactive security measures and peace of mind."
            </p>
            <button className="px-6 py-2 bg-white rounded-full my-4 text-xs">
              See More
            </button>
          </div>
          <iframe
            src="https://www.behance.net/embed/project/176995713?ilo0=1"
            height="316"
            width="404"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
            className="flex-1 w-full"
          ></iframe>
        </motion.div>
      </div>

      <a href="https://www.behance.net/leksidejohn">
        <button className="py-2 px-8 rounded-full bg-[#263238] text-white text-sm mt-14">
          See more
        </button>
      </a>
    </section>
  );
};

export default Portfolio;
