import React from "react";
// components
import HeroSection from "../components/Hero-section";
import Product from "../components/product";
import Stores from "../components/Stores";
import Contact from "../components/contact";

const Home = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <HeroSection />
      <Product/>
      <Stores/>
      <Contact/>
      <footer className="bg-[#964B00] md:h-[50px] "></footer>
    </div>
  );
};

export default Home;
