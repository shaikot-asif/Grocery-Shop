import React from "react";

const Paragraph1 = ({ classes, text }) => {
  return (
    <p
      className={`${classes} font-questrial text-[#4A4A52]  font-normal text-[12px] lg:leading-[24px] lg:text-[14px] leading-[18px] `}
    >
      {text}
    </p>
  );
};

export default Paragraph1;
