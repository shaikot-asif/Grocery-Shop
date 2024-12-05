import React from "react";
import SectionTopText from "../../../components/shared/SectionTopText";
import Heading1 from "../../../components/shared/Heading1";
import Heading2 from "../../../components/shared/Heading2";
import Paragraph1 from "../../../components/shared/Paragraph1";
import AllCategory from "./container/AllCategory";

const OurProducts = () => {
  return (
    <div className="relative max-w-[1439px] text-center block m-auto mt-[100px] mb-[150px] w-full px-2 lg:px-[8.34%] overflow-hidden">
      <SectionTopText
        text={"Our Products"}
        classes={"inline-block m-auto text-center mb-[16px]"}
      />

      <Heading2 text={"Our Fresh Products"} />

      <Paragraph1
        classes={"w-[450px] m-auto mt-[16px]"}
        text={
          "We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
        }
      />

      <AllCategory />
    </div>
  );
};

export default OurProducts;
