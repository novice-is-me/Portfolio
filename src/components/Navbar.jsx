import React, { useState } from "react";
import { logo } from "../assets/image";
import { headerData } from "../constant";
import Button from "./Button";
import resumePDF from "../assets/JALANDONI_REGINA.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Regina_Jalandoni_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="flex h-[100px] padding-l justify-between items-center relative">
      <div>
        <img src={logo} alt="" className="h-12 " />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 lg:gap-10 mr-4 items-center">
        {headerData.map((header, i) => {
          return (
            <ul
              className="flex gap-2 font-mono text-headers text-sm lg:text-base"
              key={i}
            >
              <p className="text-highlight">{header.id}. </p>
              <a
                href={header.loc}
                className="hover:text-highlight cursor-pointer transition-colors duration-300"
                onClick={(e) => handleSmoothScroll(e, header.loc)}
              >
                {header.name}
              </a>
            </ul>
          );
        })}
        <Button text={"Resume"} onClick={downloadResume} />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-headers p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-6 flex flex-col justify-center">
          <span
            className={`block h-0.5 w-6 bg-headers transform transition ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-headers mt-1 transition ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-headers mt-1 transform transition ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full right-0 w-64 bg-[#0a192f] border border-[#233554] shadow-lg transform transition-all duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {headerData.map((header, i) => {
            return (
              <ul className="flex gap-2 font-mono text-headers" key={i}>
                <p className="text-highlight">{header.id}. </p>
                <a
                  href={header.loc}
                  className="hover:text-highlight cursor-pointer transition-colors duration-300"
                  onClick={(e) => handleSmoothScroll(e, header.loc)}
                >
                  {header.name}
                </a>
              </ul>
            );
          })}
          <Button text={"Resume"} onClick={downloadResume} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
