import React from "react";

const PrimaryButton = ({ text, className }) => {
  return (
    <button
      className={`py-[16px] px-[32px] bg-primary-orange font-semibold text-white font-rubik rounded-[8px] `}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
