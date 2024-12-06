import React from "react";

const Clock = ({ text, time }) => {
  return (
    <div className=" lg:w-[98px] w-[72px] h-[90px] lg:h-[122px] bg-white shadow-md rounded-[10px] flex flex-col justify-center items-center gap-[10px] ">
      <span className="font-rubik text-[28px] lg:text-[40px] font-medium text-[#212337] ">
        {time}
      </span>
      <span className="font-questrial text-[12px] lg:text-[18px] text-[#212337]  ">
        {text}
      </span>
    </div>
  );
};

export default Clock;
