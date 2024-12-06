import React from "react";
import images from "../../../constants/Images";
import SectionTopText from "../../../components/shared/SectionTopText";
import Heading1 from "../../../components/shared/Heading1";
import Heading2 from "../../../components/shared/Heading2";
import Clock from "./container/Clock";

const SeasonalFruits = () => {
  return (
    <div
      style={{ backgroundImage: `url(${images.fullBgHero})` }}
      className="max-w-[1440px] mt-[66px] h-[660px] lg:h-[640px] px-4 lg:px-[8.33%] md:mt-[150px] relative"
    >
      <div>
        <img
          src={images.seasonalClip}
          alt=""
          className="absolute right-0 top-0 "
        />
        <img
          src={images.seasonalClip}
          alt=""
          className="absolute bottom-0 left-0 transform rotate-[180deg] "
        />
        <img
          src={images.bottomClipPath}
          alt=""
          className="absolute  lg:top-[50px] rotate-[-120deg] lg:right-[28.2%] top-[38px] right-[7px] "
        />
        <img
          src={images.seasonalClipP1}
          alt=""
          className="absolute  right-0 bottom-[11px] "
        />
        <img
          src={images.seasonalClipP2}
          alt=""
          className="absolute  left-0 bottom-0 "
        />

        <img
          src={images.seasonalFruits}
          alt=""
          className="hidden lg:block lg:w-[313px] xl:w-[627px] bottom-[150px] right-10  absolute  xl:right-[46px] xl:top-[132px] "
        />
      </div>

      <div className="relative z-10 py-[90px]  text-center lg:text-left ">
        <SectionTopText text={"Seasonal Offer"} classes={"inline-block"} />
        <Heading1
          text={"Seasonal Fruit Bundle"}
          classes={"mt-[12px] mb-[8px]"}
        />
        <h3 className="text-[32px] lg:text-[48px] font-semibold font-rubik text-blacks ">
          Discount Up to <span className="text-primary-orange">80% OFF</span>
        </h3>

        <div className="flex flex-row gap-[18px] lg:gap-[24px] justify-center lg:justify-start items-center my-[32px] ">
          <Clock text={"Days"} time={"03"} />
          <Clock text={"Hours"} time={"18"} />
          <Clock text={"Min"} time={"54"} />
          <Clock text={"Sec"} time={"21"} />
        </div>

        <button className="px-[32px] py-[16px] rounded-full  font-rubik font-semibold text-[32px] text-white bg-[#176D38] ">
          CODE : <span className="text-[#FAC714]">FRUIT28</span>
        </button>
      </div>
    </div>
  );
};

export default SeasonalFruits;
