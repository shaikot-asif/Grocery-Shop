import React from "react";

const Heading2 = ({ classes, text }) => {
  return (
    <>
      <h1
        className={`${classes} font-rubik font-semibold text-[48px] leading-[56.88px] text-[#212337]  lg:tracking-[-1.6px]`}
      >
        {text}
      </h1>
    </>
  );
};

export default Heading2;
