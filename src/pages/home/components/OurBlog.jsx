import React from "react";
import SectionTop from "./container/SectionTop";
import images from "../../../constants/Images";
import BlogCart from "./container/BlogCart";

const blog = [
  {
    photo: images.blog1,
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    date: "May 23, 2024",
  },
  {
    photo: images.blog2,
    title:
      "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
    date: "May 23, 2024",
  },
  {
    photo: images.blog3,
    title:
      "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
    date: "May 23, 2024",
  },
];

const OurBlog = () => {
  return (
    <div className="relative max-w-[1440px]  text-center block m-auto mt-[66px] md:my-[150px] w-full px-4 lg:px-[8.33%] overflow-hidden">
      <SectionTop
        hText={"Fresh Harvest Blog"}
        pText={
          "Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
        }
        text={"Our Blog"}
        hClasses={"px-[50px] "}
      />
      <div className=" mt-[40px] flex flex-row gap-[24px] justify-evenly flex-wrap">
        {blog.map((item, index) => (
          <BlogCart
            key={index}
            date={item.date}
            photo={item.photo}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
