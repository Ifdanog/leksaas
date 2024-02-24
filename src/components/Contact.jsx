import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-8 md:px-20 py-10">
      <div className="md:flex items-center gap-4 rounded-2xl bg-[#F3EAEB] p-10 md:p-20">
        <div className="md:w-1/3">
          <h3 className="text-xl lg:text-3xl font-bold py-2">Contact Me</h3>
          <p className="text-xs leading-5">
            Connect with me to explore collaborations, discuss projects, or
            simply share ideas. Your inquiries are valued and I look forward to
            hearing from you. Let's embark on creative journeys together—reach
            out and let's make magic happen.
          </p>
        </div>
        <div className="md:w-2/3">
          <form>
            <div className="md:flex gap-4">
              <div className="flex-1">
                <label htmlFor="name" className="text-xs">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full h-[2.5rem] bg-transparent border border-b-black"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="company" className="text-xs">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="w-full h-[2.5rem] bg-transparent border border-b-black"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="name" className="text-xs">
                How can I help you?
              </label>
              <textarea
                type="text"
                name="name"
                id="name"
                className="w-full h-[4rem] bg-transparent border border-b-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#263238] text-xs text-white py-2 px-6 rounded-full mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
