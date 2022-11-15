import React from "react";

const Hero = () => {
  return (
    <main>
      <div className="grid md:grid-cols-2 lg:px-20 md:px-10 px-5 md:pt-20 pt-10 pb-10 items-center lg:gap-0 md:gap-3">
        <div className="font-rr space-y-7">
          <p className="lg:text-5xl text-3xl md:text-left text-center leading-normal md:pr-7">
            Rent a <span className="text-primary font-bold">Place </span>
            away from
            <span className="text-primary font-bold"> Home</span> in the
            <span className="text-primary font-bold"> Metaverse</span>
          </p>
          <p className="lg:text-xl md:text-base md:text-left text-center">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="flex">
            <input
              type="text"
              className="rounded-l-lg border border-slate-300 placeholder:text-xs placeholder:font-light py-2 w-full pl-2"
              placeholder="Search for location"
            />
            <button className="bg-primary text-white px-10 py-2 rounded-r-lg border border-transparent">
              Search
            </button>
          </div>
        </div>

        <div className="md:flex hero-images justify-center space-x-3 hidden">
          <div className="space-y-3 mt-20">
            <img
              src="/heroimage2.jpg"
              alt=""
              className="rounded-xl w-[200px]"
            />
            <img
              src="/heroimage4.jpg"
              alt=""
              className="rounded-xl w-[200px]"
            />
          </div>
          <div className="space-y-3">
            <img
              src="/heroimage1.jpg"
              alt=""
              className="rounded-xl w-[200px]"
            />
            <img
              src="/heroimage3.jpg"
              alt=""
              className="rounded-xl w-[200px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
