import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white grid md:grid-cols-4 md:text-left text-center md:space-y-0 space-y-7 py-10 lg:px-20 md:px-10">
      <div className="md:flex flex-col justify-between md:space-y-0 space-y-4">
        <div className="flex items-center md:justify-start justify-center">
          <img src="/house-white.svg" alt="" />
          <h1 className="lg:text-4xl text-2xl font-bold">Metabnb</h1>
        </div>
        <div className="">
          <div className="space-y-5">
            <div className="flex text-white space-x-10 md:justify-start justify-center">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>

            <div className="">
              <p> &copy; 2022 Metabnb </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- */}

      <div className="font-rr">
        <h3 className="font-semibold">Community</h3>
        <ul className="mt-4 space-y-3 font-light">
          <li>
            <a href="#!">NFT</a>
          </li>
          <li>
            <a href="#!">Tokens</a>
          </li>
          <li>
            <a href="#!">Landlords</a>
          </li>
          <li>
            <a href="#!">Discord</a>
          </li>
        </ul>
      </div>

      {/* --- */}

      <div className="font-rr">
        <h3 className="font-semibold">Places</h3>
        <ul className="mt-4 space-y-3 font-light">
          <li>
            <a href="#!">Castle</a>
          </li>
          <li>
            <a href="#!">Farms</a>
          </li>
          <li>
            <a href="#!">Beach</a>
          </li>
          <li>
            <a href="#!">Learn More</a>
          </li>
        </ul>
      </div>

      {/* --- */}

      <div className="font-rr">
        <h3 className="font-semibold">About Us</h3>
        <ul className="mt-4 space-y-3 font-light">
          <li>
            <a href="#!">Road map</a>
          </li>
          <li>
            <a href="#!">Creators</a>
          </li>
          <li>
            <a href="#!">Career</a>
          </li>
          <li>
            <a href="#!">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
