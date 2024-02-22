const Portfolio = () => {
  return (
    <div id="portfolio" className="px-8 py-14 md:p-20 text-center bg-[#F5F4F4]">
      <h3 className="text-xl lg:text-3xl font-bold py-2">My Projects</h3>
      <p className="text-xs md:w-1/3 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nostrum
        deleniti molestiae tempore officiis.
      </p>
      <div className="mt-10">
        <div className="">
          <iframe
            src="https://www.behance.net/embed/project/176997245?ilo0=1"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="mt-10">
          <iframe
            src="https://www.behance.net/embed/project/176996543?ilo0=1"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="mt-10">
          <iframe
            src="https://www.behance.net/embed/project/176995983?ilo0=1"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="mt-10">
          <iframe
            src="https://www.behance.net/embed/project/176755163?ilo0=1"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="mt-10">
          <iframe
            src="https://www.behance.net/embed/project/176995713?ilo0=1"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="mt-10">
          <iframe
            src="https://www.behance.net/embed/project/176995133?ilo0=1"
            allowfullscreen
            lazyload
            frameborder="0"
            allow="clipboard-write"
            refererPolicy="strict-origin-when-cross-origin"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <a href="https://www.behance.net/leksidejohn">
        <button className="py-2 px-8 rounded-full bg-[#263238] text-white text-sm mt-14">
          See more
        </button>
      </a>
    </div>
  );
};

export default Portfolio;
