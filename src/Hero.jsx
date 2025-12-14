import React from "react";
import Button from "./components/Button";

const Hero = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-12 text-center md:text-left">
      <div className="font-Poppins space-y-4">
        <p className="font-mono text-highlight text-sm md:text-base">
          Hi, my Name is
        </p>
        <h1 className="font-semibold text-headers text-3xl sm:text-4xl md:text-8xl lg:text-[5rem] leading-tight">
          Regina Jalandoni.
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] font-semibold text-[#B6BED6] leading-tight">
          I am a Front-end Developer
        </h2>
        <p className="text-text text-sm sm:text-base lg:text-lg leading-relaxed mt-4 md:mt-10 max-w-2xl">
          I develop modern, user-focused web applications with an emphasis on
          performance and clean design.
        </p>
      </div>
      <div className="w-full sm:w-[50%] md:w-[40%] lg:w-[30%]">
        <a href="#contact">
          <Button text={"Contact Me"} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
