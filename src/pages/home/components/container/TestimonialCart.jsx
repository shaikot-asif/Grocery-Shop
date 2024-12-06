import React from "react";
import images from "../../../../constants/Images";
import Paragraph1 from "../../../../components/shared/Paragraph1";

const TestimonialCart = ({ text, photo, name, title }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-[20px] justify-between items-center text-left   ">
      <div className="w-[205px] h-[282px] md:w-[287px] md:h-[396px] xl:w-[287px] xl:h-[396px]  lg:w-[205px] lg:h-[282px] rounded-[145px] relative mt-[42px] ">
        <img className="w-full h-full rounded-full" src={photo} alt={name} />
        <img
          src={images.sideText}
          className="absolute  top-0 right-0 md:right-[-30px] md:top-[-20px] rotate-[68deg] "
          alt=""
        />
      </div>
      <div className=" w-full mt-[24px] lg:mt-0 lg:w-[460px] xl:w-[643px] p-[32px] rounded-[24px] bg-[#F4F6F6] ">
        <Paragraph1 text={text} />

        <p className="pt-[32px] ">
          {" "}
          <strong className="font-rubik">{name} - </strong> {title}{" "}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCart;
