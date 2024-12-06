import React, { useState } from "react";
import SectionTop from "./container/SectionTop";
import images from "../../../constants/Images";
import TestimonialCart from "./container/TestimonialCart";

const testimonial = [
  {
    image: images.testiminialImg,
    name: "Jane Doe",
    title: "professional Chef",
    content:
      "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
  },
  {
    image: images.asif,
    name: "Asif Ahmed",
    title: "Customer",
    content:
      "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
  },
  {
    image: images.asif,
    name: "Shaikot Ahmed Asif",
    title: "Customer",
    content:
      "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
  },
];

const Testimonial = () => {
  const [TIndex, setTIndex] = useState(0);

  return (
    <div className="relative max-w-[1440px]  text-center block m-auto mt-[66px] md:mt-[150px] w-full px-4 lg:px-[14.86%] overflow-hidden">
      <SectionTop
        hText={"What Our Customers Say"}
        pText={
          "Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:"
        }
        text={"Testimonial"}
        hClasses={"px-[50px] "}
      />

      <div className="absolute left-[16px] top-[12px] lg:top-[80px] lg:left-[150px] xl:left-[200px] rotate-[45deg] ">
        <img src={images.bottomClipPath} alt="" />
      </div>
      <div className="absolute right-[16px] top-0  lg:top-[134px] lg:right-[185px]  ">
        <img src={images.bottomClipPath} alt="" />
      </div>

      <div className="mt-[16px] flex flex-col gap-[64px] ">
        <TestimonialCart
          name={testimonial[TIndex].name}
          photo={testimonial[TIndex].image}
          text={testimonial[TIndex].content}
          title={testimonial[TIndex].title}
        />

        <div className=" flex justify-center items-center gap-2 ">
          {testimonial.map((item, index) => (
            <span
              onClick={() => setTIndex(index)}
              key={index}
              className={` ${
                index === TIndex ? "bg-primary-green" : "bg-[#D9D9D9] "
              } w-[16px] h-[16px] rounded-full block cursor-pointer `}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
