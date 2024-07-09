import React from "react";
import Button from "../components/Button";
// images
import heroImshe from "../assets/hero-image.svg";
import groupCircle from "../assets/group-circle.svg"
import groupCircleLeft from "../assets/group-circle-left.svg"
import ArrowDown from "../assets/arrow-down.svg"



const HeroSection = () => {
  return (
    <div className="pt-20" id="home">
    <div className="flex flex-col items-center text-center">
      <h1 className="text-[#964B00] text-[30px] lg:text-[60px] md:text-[40px] font-black text-center">
        Furniture For The Way You Live
      </h1>
      <div>
        <img src={heroImshe} alt="hero-image" className="" />
      </div>
      <div className="flex justify-between w-full px-[20px] lg:px-[76px]">
      <img src={groupCircleLeft} alt="group-circle-left" className="hidden sm:block transition-all duration-300" />
        <div className="">
          <p className="w-full  lg:w-[649px] sm:text-[20px] lg:mb-[11px] ">
            Transform your space, with the chairs, tables, cupboards, beds and
            bookcases that feels like home
          </p>
          <Button
            text={"Shop Now"}
            style={
              "bg-[#964B00] text-white rounded-2xl  text[25px] font-medium px-[20px] py-[10px] block"
            }
          />
        </div>
        <img src={groupCircle} alt="group-circle" className="hidden sm:block transition-all duration-300" />
      </div>
    </div>
    <div className="flex flex-col justify-center items-center">
      <p className="text-[#964B00]">Down to explore products</p>
      <img src={ArrowDown} alt="arrow-down"  />
    </div>
    </div>
  );
};

export default HeroSection;
