import React from "react";

const Heading1 = ({ classes, text }) => {
  return (
    <h1
      className={`${classes} font-rubik font-semibold tracking-[-0.96px] lg:tracking-[-1.6px] lg:text-[80px] text-[48px] leading-[58px]  lg:leading-[94.8px] text-[#212337] `}
    >
      {text}
    </h1>
  );
};

export default Heading1;
