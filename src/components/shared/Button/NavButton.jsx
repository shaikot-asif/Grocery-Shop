import React from "react";

const NavButton = ({ classes, text }) => {
  return (
    <button
      className={`${classes} md:py-[12px] md:px-[24px] rounded-[4px] border border-solid border-white text-sm font-semibold text-white font-rubik `}
    >
      {text}
    </button>
  );
};

export default NavButton;
