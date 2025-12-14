import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const LeftComp = () => {
  return (
    <div className="flex lg:flex-col flex-row items-center align-bottom gap-4 lg:gap-4">
      <div className="flex lg:flex-col flex-row gap-6 lg:gap-8">
        <a href="https://github.com/novice-is-me" target="_blank">
          <GitHubIcon
            className="text-text hover:text-highlight transition-colors"
            fontSize="medium"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/regina-jalandoni-b86172275/"
          target="_blank"
        >
          <LinkedInIcon
            className="text-text hover:text-highlight transition-colors"
            fontSize="medium"
          />
        </a>
      </div>
      <div className="border border-text lg:h-[10rem] h-0 w-[10rem] lg:w-0"></div>
    </div>
  );
};

export default LeftComp;
