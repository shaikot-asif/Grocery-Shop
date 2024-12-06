import React from "react";
import images from "../../../../constants/Images";

const BlogCart = ({ photo, title, date }) => {
  return (
    <div className="w-full sm:w-[384px]">
      <div className="sm:w-[384px] w-full h-[232px] sm:h-[260px] rounded-[20px] ">
        <img
          src={photo}
          className="w-full h-full rounded-[20px] "
          alt={title}
        />
      </div>
      <div className="text-left">
        <p className="font-questrial text-[18px] text-[#4A4A52] mt-[24px]">
          {date}
        </p>
        <h3 className="text-[#212337] text-[18px] mt-[8px] mb-[16px] font-semibold font-rubik ">
          {title}
        </h3>
        <button className="text-primary-orange font-semibold text-[18px] flex justify-center items-center group gap-[12px]  ">
          <span className="group-hover:underline">Read More</span>
          <span>
            <img src={images.rightIcon} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default BlogCart;
