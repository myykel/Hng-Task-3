import React from "react";
import { HouseCard } from "./";

const Houses = () => {
  return (
    <div className="font-rr lg:px-20 md:px-10 px-5 lg:py-20 md:py-10 py-5">
      <h3 className="font-bold lg:text-5xl md:text-3xl text-lg text-center">
        Inspiration for your next adventure
      </h3>
      <div className="md:pt-10 pt-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-7 gap-4">
        <HouseCard img={"/house1.jpg"} />
        <HouseCard img={"/house2.jpg"} />
        <HouseCard img={"/house3.jpg"} />
        <HouseCard img={"/house4.jpg"} />
        <HouseCard img={"/house5.jpg"} />
        <HouseCard img={"/house6.jpg"} />
        <HouseCard img={"/house7.jpg"} />
        <HouseCard img={"/house8.jpg"} />
      </div>
    </div>
  );
};

export default Houses;
