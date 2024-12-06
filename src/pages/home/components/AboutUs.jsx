import React from "react";
import images from "../../../constants/Images";
import SectionTopText from "../../../components/shared/SectionTopText";
import Heading2 from "../../../components/shared/Heading2";
import Paragraph1 from "../../../components/shared/Paragraph1";
import NavButton from "../../../components/shared/Button/NavButton";

const AboutUs = () => {
  return (
    <div className="mx-w-[1213] px-4 lg:px-[8.33%] flex flex-wrap md:flex-nowrap md:flex-row md:mt-[150px] mt-[64px] justify-center items-center gap-[66px] m-auto ">
      <div className="w-[686px] ">
        <img src={images.aboutImg} className="w-full" alt="about image" />
      </div>
      <div className="w-[461px] ">
        <SectionTopText
          text={"About Us"}
          classes={"inline-block text-[12px] "}
        />
        <Heading2
          text={"About Fresh Harvest"}
          classes={"my-[16px] text-[32px] "}
        />
        <Paragraph1
          classes={"text-[12px] "}
          text={
            "Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience."
          }
        />

        <NavButton
          classes={
            "text-primary-orange border-primary-orange text-[12px] rounded-[8px] mt-[16px] hover:bg-primary-orange hover:text-white transition-all duration-300 "
          }
          text={"Read More"}
        />
      </div>
    </div>
  );
};

export default AboutUs;
