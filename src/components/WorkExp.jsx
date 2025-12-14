import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const WorkExp = ({ props }) => {
  return (
    <div className="text-sm md:text-[16px] w-full">
      <div className="font-Poppins">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <h3 className="text-lg md:text-xl text-headers">{props.title}</h3>
          <p className="text-highlight">@{props.name}</p>
        </div>
        <p className="text-text mt-2 text-sm md:text-base">{props.date}</p>
      </div>
      <div className="text-text font-Poppins mt-4 flex flex-col gap-3 md:gap-4">
        {props.role.map((item, i) => {
          return (
            <ul key={i}>
              <li className="flex items-start">
                <ArrowRightIcon
                  fontSize="medium"
                  style={{ color: "#64ffda", marginTop: "2px", flexShrink: 0 }}
                />
                <span className="ml-1">{item}</span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExp;
