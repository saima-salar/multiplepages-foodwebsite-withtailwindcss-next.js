

import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen max-w-screen-2xl ">
      <Image
        className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10"
        src="/hero2.png"
        width={540}
        height={340}
        alt="hero_bg"
      />
      <Navbar />
      <div className="container h-[calc(100vh-120px)] grid items-center my-0 mx-0">
        <div className="space-y-4 bg-[#ffffff98] w-fit p-2 my-5">
          <p className="uppercase font-medium">Wide options of choice</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Delicious <span className="text-accent">Food</span>
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px]">
            Delicious food color, aroma and taste.
            <br /> What are you waiting for?
          </p>

          <button className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;