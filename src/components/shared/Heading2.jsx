import React from "react";

const Heading2 = ({ classes, text }) => {
  return (
    <>
      <h1
        className={`${classes} font-rubik font-semibold text-[32px] md:text-[48px] tracking-[-0.96px] leading-[56.88px] text-[#212337]  lg:tracking-[-1.6px]`}
      >
        {text}
      </h1>
    </>
  );
};

export default Heading2;
