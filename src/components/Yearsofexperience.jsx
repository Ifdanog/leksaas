import video from "../assets/video.mp4";

const Yearsofexperience = () => {
  return (
    <div className="px-8 md:px-20 py-10 md:flex items-center">
      <div className="lg:flex gap-4 lg:w-[40%] mx-auto">
        <h2 className="lg:w-1/4 text-6xl font-black overflow-hidden pr-4 text-[#FF8C92]">
          05
        </h2>
        <div className="lg:w-3/4">
          <h3 className="text-xl font-bold">Years Experience in Field</h3>
          <p className="text-xs">
            With 5 years of experience pioneering SaaS animation solutions, I've
            crafted immersive digital experiences, blending innovation and
            design seamlessly. My expertise in SaaS animation empowers creators
            to bring their visions to life effortlessly.
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 flex flex-1 mx-auto mt-8 md:mt-0">
        <video controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Yearsofexperience;
