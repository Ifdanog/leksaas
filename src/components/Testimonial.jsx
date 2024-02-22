import quote from "../assets/Quote-icon.png";
import people from "../assets/people.png";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";

const Testimonial = () => {
  return (
    <div className="p-8 md:p-20">
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
        <div className="flex-1">
          <p className="text-xs italic leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
            pariatur numquam dolore impedit doloribus possimus sapiente
            voluptatibus reprehenderit sit id quas tempore ipsum, voluptatum,
            repudiandae corporis. Quos consequuntur aut esse.
          </p>
          <h3 className="font-medium">Nancey Ubban</h3>
          <span className="text-xs">CTO, Daba</span>
        </div>
        <div className="flex-1">
          <img src={people} className="w-3/4 mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
