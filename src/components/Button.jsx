import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div
      className="bg-transparent border border-highlight hover:button-hover 
     px-4 md:px-5 py-2 md:py-3 text-center rounded-[5px] w-full cursor-pointer"
      onClick={onClick}
    >
      <p className="text-highlight font-mono text-sm md:text-base">{text}</p>
    </div>
  );
};

export default Button;
