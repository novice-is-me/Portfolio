import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaWordpress,
  FaReact,
  FaPhp,
  FaVuejs,
  FaLaravel,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiMysql, SiPostman } from "react-icons/si";
import { me } from "./assets/image";

const About = () => {
  return (
    <section className="my-16 md:my-[10rem] mx-0" id="about">
      <div className="flex items-center">
        <p className="text-highlight font-mono text-2xl md:text-4xl">01.</p>
        <p className="font-Poppins font-semibold text-headers text-2xl md:text-4xl whitespace-pre-wrap">
          {" "}
          About Me
        </p>
        <div className="ml-4 border border-[#233554] w-[30%] md:w-[30%] h-0 "></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        <div className="flex flex-col gap-8 lg:flex-1">
          <div className="font-Poppins text-text text-sm md:text-[16px] leading-relaxed">
            <p>
              Hello! I’m <strong>Regina Jalandoni!</strong> <br /> A web
              developer who builds clean, responsive, and user-focused websites
              and web applications. I work with modern technologies like{" "}
              <strong>
                JavaScript, Vue.js, React, Laravel, PHP, REST APIs, and MySQL
              </strong>
              , creating interfaces that are both visually appealing and
              performant. I value clean architecture, reusable components, and
              practical solutions that are easy to maintain and scale.
            </p>
            <br />
            <p>Here are some of the technologies I work with:</p>
          </div>
          <div className="flex flex-wrap gap-x-8 md:gap-x-20 gap-y-6 md:gap-y-8 justify-center">
            <FaHtml5 className="h-8 w-6 md:h-[3rem] md:w-[2rem] text-highlight" />
            <FaCss3 className="h-8 w-6 md:h-[3rem] md:w-[2rem] text-highlight" />
            <IoLogoJavascript className="h-8 w-6 md:h-[3rem] md:w-[2rem] text-highlight" />
            <FaBootstrap className="h-8 w-6 md:h-[3rem] md:w-[2rem] text-highlight" />
            <SiTailwindcss className="h-8 w-6 md:h-[3rem] md:w-[2rem] text-highlight" />
            <FaWordpress className="h-8 w-6 md:h-[3rem] md:w-[2rem] text-highlight" />
            <FaReact className="h-8 w-6 md:h-[3rem] md:w-[2rem] text-highlight" />
            <FaPhp className="h-8 w-6 md:h-[3rem] md:w-[2rem] text-highlight" />
            <FaVuejs className="h-8 w-6 md:h-[3rem] md:w-[2rem] text-highlight" />
            <FaLaravel className="h-8 w-6 md:h-[3rem] md:w-[2rem] text-highlight" />
            <SiMysql className="h-8 w-6 md:h-[3rem] md:w-[2rem] text-highlight" />
            <FaGithub className="h-8 w-6 md:h-[3rem] md:w-[2rem] text-highlight" />
            <FaFigma className="h-8 w-6 md:h-[3rem] md:w-[2rem] text-highlight" />
            <SiPostman className="h-8 w-6 md:h-[3rem] md:w-[2rem] text-highlight" />
          </div>
        </div>
        <div className="sm:hidden justify-center lg:justify-end lg:flex-1 md:flex">
          <img
            src={me}
            alt=""
            className="hidden md:block h-64 md:h-80 lg:h-[60%] w-auto image-hover brightness-50 hover:brightness-100"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
