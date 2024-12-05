import React from "react";

const Paragraph1 = ({ classes, text }) => {
  return (
    <p
      className={`${classes} font-questrial font-normal text-[12px] leading-[24px] lg:text-[14px] lg:leading-[18px] `}
    >
      {text}
    </p>
  );
};

export default Paragraph1;
