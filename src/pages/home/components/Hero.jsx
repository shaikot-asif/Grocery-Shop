import React from "react";
import images from "../../../constants/Images";
import SectionTopText from "../../../components/shared/SectionTopText";
import Heading1 from "../../../components/shared/Heading1";
import Paragraph1 from "../../../components/shared/Paragraph1";
import PrimaryButton from "../../../components/shared/Button/PrimaryButton";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${images.fullBgHero})` }}
      className="relative max-w-[1440px] block m-auto top-[-100px] w-full h-[800px] lg:h-[877px] overflow-x-hidden overflow-y-hidden "
    >
      <div className=" relative ">
        <div className="w-[30%] lg:w-[34.81%] h-[877px] absolute top-0 right-0  ">
          <img src={images.rightBg} className="h-full w-full" alt="" />
          <div
            style={{ backgroundImage: `url(${images.rightBgMask})` }}
            className="absolute w-full bg-no-repeat bg-cover bg-inherit lg:bg-center h-[877px] top-0 left-0 lg:right-0"
          ></div>
        </div>
      </div>
      <div className="absolute w-[420px] h-[453px] lg:w-[600px]  xl:w-[695px] lg:h-[660px] xl:h-[758px] bottom-0 left-[114px]  md:left-[47.34%] ">
        <img src={images.heroChImg} className="w-full h-full" alt="" />
        <div className="w-[41.99px] h-[40.43px] lg:w-[45.35px] lg:h-[43.47px] absolute left-[2%] top-[42.66%] ">
          <img src={images.sideText} className="w-full h-full" alt="" />
        </div>
      </div>
      <div className="hidden lg:block absolute w-full bg-no-repeat bg-cover top-[94px] ">
        <img src={images.heroClipPth} alt="" />
      </div>

      <div className="pt-[120px]  lg:pt-[178px]  px-2 lg:px-[8.33%] relative ">
        <SectionTopText
          classes={"inline-block mb-[16px] "}
          text={"Welcome to Fresh Harvest"}
        />
        <Heading1
          classes={" relative z-[33] w-[350px] lg:w-[660px]"}
          text={"Fresh Fruits and Vegetables"}
        />
        <div className="relative ">
          <Paragraph1
            classes={
              "w-[360px] lg:w-[488px] mt-[20px] lg:mt-[16px] mb-[22px] lg:mb-[32px] "
            }
            text={
              "At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables"
            }
          />
        </div>
        <div className="relative">
          <PrimaryButton text={"Shop Now"} />

          <div className="hidden lg:block absolute lg:left-[5%] xl:left-[8.82%] w-[55.68px] h-[38.32px] ">
            <img src={images.clipPathShop} alt="" />
          </div>

          <div className="absolute left-[30px] mt-[18px] md:left-[14.67%] w-[192px] lg:w-[280px] xl:w-[331px]  ">
            <img src={images.specialOffer} alt="" />
          </div>

          <div className="absolute top-[-230px] left-[92px] w-[62px]  lg:left-[-16px] lg:top-[168px] lg:w-[51px] lg:h-[67px] ">
            <img src={images.bottomClipPath} alt="" />
          </div>
        </div>

        <div className="mt-[240px] lg:mt-[187px]">
          <p className="font-questrial text-[14px] text-[#4A4A52] mb-[12.75px] ">
            Download App:
          </p>
          <div className="flex gap-[19.77px] ">
            <img src={images.appsStore} alt="" />
            <img src={images.googleplay} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
