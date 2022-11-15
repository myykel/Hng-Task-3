import { Heart } from "iconsax-react";
import React, { useState } from "react";

const Hero = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="hover:scale-125 transition transform duration-200 ease-out"
      >
        <Heart
          size="24"
          color={active ? "#ff0000" : "#D7D7D7"}
          variant="Bold"
        />
      </button>
    </>
  );
};

export default Hero;
