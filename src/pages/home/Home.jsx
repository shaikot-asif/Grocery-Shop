import React from "react";
import MainLayout from "../../components/MainLayout";
import Header from "../../components/Header";
import Hero from "./components/Hero";
import OurProducts from "./components/OurProducts";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <OurProducts />
    </MainLayout>
  );
};

export default Home;
