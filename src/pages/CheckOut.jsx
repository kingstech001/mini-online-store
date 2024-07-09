import React from "react";
import heart from "../assets/Vector.svg";
import checkoutimage from "../assets/checkoutimage.svg";
import Button from "../components/Button";
import x from "../assets/cancel.svg"
import { NavLink } from "react-router-dom";

const CheckOut = () => {
  return (
    <div className="md:flex md:justify-center items-center h-screen md:px-[20px] lg:px-[76px] pt-[50px]">
      <div className="lg:w-[552px] md:shadow-custom md:rounded-[30px] text-center">
        <h3 className="text-[25px] font-bold">OTHERS</h3>
        <p className="text-[39px] font-normal">Leather Sofa</p>
        <div className="flex items-center justify-center">
          <img src={heart} alt="heart" className="w-[25px] h-[25px]" />
          <p className=" font-normal text-[16px] text-[#783C00]">ADD TO FAVOURITE</p>
        </div>
        <div>
          <img src={checkoutimage} alt="checkout" className="" />
        </div>
      </div>
      <div className="bg-[#2D2D2D] text-center text-[#FFFFFF] w-full md:w-[640px] md:rounded-r-[30px] relative pt-5">
        <NavLink to={'/cart'}>
        <img src={x} alt="cancel" className="absolute right-5 top-3"/>
        </NavLink>
        <div className="border-b-[1px] border-[#FFFFFF] mx-5">
          <h3 className="text-[39px] font-bold text-[#FFFFFF]">CHECKOUT</h3>
          <p className="text-[20px] font-bold">NAME ON CARD</p>
          <p className="text-[20px] font-normal">KING TEC REMI</p>
        </div>
        <div className="border-b-[1px] border-[#FFFFFF] mx-5">
          <h3 className="text-[20px] font-bold text-[#FFFFFF]">CARD NUMBER</h3>
          <p className="text-[20px] font-normal">5399 2370 5916 7813</p>
        </div>
        <div>
           <div className="flex justify-between pb-[32px] px-5">
           <div className="border-[#FFFFFF] border-b-[1px] w-[170px]">
                <p className="text-[20px] font-medium">EXPIRY DATE</p>
                <p className="text-[20px] font-medium">MM/YY</p>
            </div>
            <div className="border-[#FFFFFF] border-b-[1px] w-[170px]">
                <p className="text-[20px] font-medium">CVV</p>
                <p className="text-[20px] font-medium">***</p>
            </div>
           </div>
            <div className="bg-[#783C00] md:rounded-br-[30px]">
                <Button text={'Pay Now'}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
