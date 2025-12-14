import React, { useEffect, useState } from "react";
import { workExp } from "./constant";
import WorkExp from "./components/WorkExp";

const Experience = () => {
  const [active, setActive] = useState("default");

  const handleClick = (value) => {
    setActive(value);
  };

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <section className="my-16 md:my-[10rem] mx-0" id="experience">
      <div className="flex items-center">
        <p className="text-highlight font-mono text-2xl md:text-4xl">02.</p>
        <p className="font-Poppins font-semibold text-headers text-2xl md:text-4xl whitespace-pre-wrap">
          Work Experienced
        </p>
        <div className="ml-4 border border-[#233554] w-[30%] h-0 "></div>
      </div>
      <div className="mt-8 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-14">
        <div className="md:min-w-[300px]">
          {workExp.map((work, i) => {
            return (
              <div className="flex text-left w-full md:w-[300px]" key={i}>
                <p
                  className={`text-text text-base md:text-xl font-Poppins p-3 md:p-4 hover:text-highlight hover:cursor-pointer w-full
               ${
                 active === work.value
                   ? "border-l-2 md:border-l border-highlight bg-[#112240] md:bg-transparent"
                   : ""
               }`}
                  onClick={() => handleClick(work.value)}
                >
                  {work.name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex-1">
          {active === "default" && <WorkExp props={workExp[0]} />}
          {active === "8box" && <WorkExp props={workExp[1]} />}
          {active === "yaramay" && <WorkExp props={workExp[2]} />}
        </div>
      </div>
    </section>
  );
};

export default Experience;
