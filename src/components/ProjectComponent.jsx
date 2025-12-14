import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { projectData } from "../constant";

const ProjectComponent = () => {
  return (
    <>
      {projectData.map((proj, i) => {
        return (
          <div
            className="mt-8 md:mt-16 flex flex-col lg:flex-row relative"
            key={i}
          >
            <div
              className={`w-full lg:w-[60%] ${
                proj.value % 2 === 0 ? "lg:order-1" : ""
              } mb-4 lg:mb-0 relative z-10`}
            >
              <a href={proj.link} target="_blank">
                <img
                  src={proj.image}
                  alt=""
                  className="brightness-50 hover:brightness-100 w-full h-auto rounded-lg lg:rounded-none"
                />
              </a>
            </div>
            <div
              className={`w-full lg:w-[40%] flex flex-col gap-4 lg:gap-6 ${
                proj.value % 2 === 0 ? "lg:mr-4 lg:-ml-16" : "lg:ml-4 lg:-mr-16"
              } relative z-20`}
            >
              <div
                className={`text-left ${
                  proj.value % 2 === 0 ? "lg:text-left" : "lg:text-right"
                }`}
              >
                <p className="font-mono text-highlight text-base lg:text-[1.2rem]">
                  Featured Project
                </p>
                <p className="text-headers font-Poppins text-xl lg:text-[2rem] font-semibold">
                  {proj.title}
                </p>
              </div>
              <div
                className={`bg-[#112240] p-4 lg:p-6 text-left ${
                  proj.value % 2 === 0 ? "lg:text-left" : "lg:text-right"
                } rounded-lg shadow-lg`}
              >
                <p className="text-text font-Poppins text-sm lg:text-base leading-relaxed">
                  {proj.description}
                </p>
              </div>
              <div
                className={`text-left ${
                  proj.value % 2 === 0 ? "lg:text-left" : "lg:text-right"
                }`}
              >
                <p className="text-text font-mono text-sm lg:text-base">
                  {proj.tech}
                </p>
              </div>
              <div
                className={`flex gap-4 ${
                  proj.value % 2 === 0
                    ? "justify-start lg:justify-start"
                    : "justify-start lg:justify-end"
                }`}
              >
                <a
                  href="https://github.com/novice-is-me"
                  target="_blank"
                  className="hover:text-highlight transition-colors"
                >
                  <GitHubIcon style={{ color: "#8892b0" }} />
                </a>
                <a
                  href={proj.link}
                  target="_blank"
                  className="hover:text-highlight transition-colors"
                >
                  <ExitToAppIcon style={{ color: "#8892b0" }} />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectComponent;
