import React from "react";

const Nft = () => {
  return (
    <div className="md:flex bg-primary lg:py-24 md:py-12 py-10 lg:px-20 md:px-10 px-5 items-center font-rr text-white md:space-y-0 space-y-5">
      <div className="md:w-[40%] md:space-y-10 space-y-6">
        <h3 className="font-bold lg:text-5xl md:text-4xl text-3xl md:text-left text-center">
          Metabnb NFTs
        </h3>
        <p className="lg:text-lg md:text-base font-light leading-relaxed md:text-left text-center">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-white text-primary py-3 px-7 rounded-md">
            Learn more
          </button>
        </div>
      </div>
      <div className="md:w-[60%]">
        <img src="/nft.png" alt="nft" className="mx-auto md:w-auto w-[70%]" />
      </div>
    </div>
  );
};

export default Nft;
