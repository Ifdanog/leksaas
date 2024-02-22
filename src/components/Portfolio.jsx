const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="mt-10 px-8 py-14 md:p-20 text-center bg-[#F5F4F4]"
    >
      <h3 className="text-xl lg:text-3xl font-bold py-2">My Projects</h3>
      <p className="text-xs md:w-1/3 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nostrum
        deleniti molestiae tempore officiis.
      </p>
      <div className="mt-10">
        <div className="bg-[pink] py-10 px-8 md:px-20 md:flex items-center gap-4">
          <div className="flex-1 text-left">
            <h3 className="font-bold">SaaS Platform Explainer Video</h3>
            <p className="text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              facere, tenetur quam voluptatem excepturi vero alias consectetur
              et natus, perspiciatis esse reprehenderit? Accusantium quasi vero
              temporibus exercitationem sequi cum hic?
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
        </div>
        <div className="mt-10">
          <div className="bg-[#F3EAEB] py-10 px-8 md:px-20 md:flex items-center gap-4">
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                facere, tenetur quam voluptatem excepturi vero alias consectetur
                et natus, perspiciatis esse reprehenderit? Accusantium quasi
                vero temporibus exercitationem sequi cum hic?
              </p>
              <button className="px-6 py-2 bg-white rounded-full mt-4 text-xs">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="bg-[pink] py-10 px-8 md:px-20 md:flex items-center gap-4">
            <div className="flex-1 text-left">
              <h3 className="font-bold">Fullview Explainer Video</h3>
              <p className="text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                facere, tenetur quam voluptatem excepturi vero alias consectetur
                et natus, perspiciatis esse reprehenderit? Accusantium quasi
                vero temporibus exercitationem sequi cum hic?
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
          </div>
        </div>
        <div className="mt-10">
          <div className="bg-[#F3EAEB] py-10 px-8 md:marker:px-20 md:flex items-center gap-4">
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                facere, tenetur quam voluptatem excepturi vero alias consectetur
                et natus, perspiciatis esse reprehenderit? Accusantium quasi
                vero temporibus exercitationem sequi cum hic?
              </p>
              <button className="px-6 py-2 bg-white rounded-full mt-4 text-xs">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="bg-[pink] py-10 px-8 md:px-20 md:flex items-center gap-4">
            <div className="flex-1 text-left">
              <h3 className="font-bold">Safe Monitor Explainer Video</h3>
              <p className="text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                facere, tenetur quam voluptatem excepturi vero alias consectetur
                et natus, perspiciatis esse reprehenderit? Accusantium quasi
                vero temporibus exercitationem sequi cum hic?
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
          </div>
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
