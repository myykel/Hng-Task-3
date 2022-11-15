import React from "react";
import { HeartIcon } from ".";

const HouseCard = ({ img }) => {
  return (
    <div className="border rounded-xl relative p-3 font-rr space-y-3 cursor-pointer transit">
      <img
        src={img}
        alt="house"
        className="rounded-xl object-cover hover:object-cover"
      />
      {/* className="rounded-xl object-cover hover:object-cover h-[265px] w-[260px]" */}
      <div className="flex justify-between text-xs">
        <p>Desert King</p>
        <p className="font-semibold">1MBT per night</p>
      </div>
      <div className="flex justify-between text-xs">
        <p>2345km away</p>
        <p>available for 2weeks stay</p>
      </div>
      <div className="flex space-x-1">
        <p className="star">
          <i className="fas fa-star fa-sm"></i>
        </p>
        <p className="star">
          <i className="fas fa-star fa-sm"></i>
        </p>
        <p className="star">
          <i className="fas fa-star fa-sm"></i>
        </p>
        <p className="star">
          <i className="fas fa-star fa-sm"></i>
        </p>
        <p className="star">
          <i className="fas fa-star fa-sm"></i>
        </p>
      </div>
      <div className="absolute top-3 right-5">
        <HeartIcon />
      </div>
    </div>
  );
};

export default HouseCard;
