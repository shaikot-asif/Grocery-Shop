import React from "react";
import MainLayout from "../../components/MainLayout";
import Header from "../../components/Header";
import Hero from "./components/Hero";
import OurProducts from "./components/OurProducts";
import AboutUs from "./components/AboutUs";
import SeasonalFruits from "./components/SeasonalFruits";
import Testimonial from "./components/Testimonial";
import OurBlog from "./components/OurBlog";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <OurProducts />
      <AboutUs />
      <SeasonalFruits />
      <Testimonial />
      <OurBlog />
    </MainLayout>
  );
};

export default Home;
