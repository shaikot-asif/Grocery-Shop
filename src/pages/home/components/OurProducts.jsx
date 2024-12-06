import AllCategory from "./container/AllCategory";
import images from "../../../constants/Images";
import SectionTop from "./container/SectionTop";

const OurProducts = () => {
  return (
    <div className="relative max-w-[1440px] text-center block m-auto mt-[100px] w-full px-2 lg:px-[8.33%] overflow-hidden">
      <SectionTop
        hText={"Our Fresh Products"}
        pText={
          "We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
        }
        text={"Our Products"}
      />

      <div className="absolute top-0">
        <img src={images.ourProductClip} alt="" />
      </div>

      <AllCategory />
    </div>
  );
};

export default OurProducts;
