import React from "react";

const SectionTopText = ({ text, classes }) => {
  return (
    <p
      className={`${classes} text-[#749B3F] text-[14px] md:text-[20px] font-rubik  font-medium rounded-[8px] px-[12px]  py-[4px] bg-[#749b3f] bg-opacity-[0.1]`}
    >
      {text}
    </p>
  );
};

export default SectionTopText;
