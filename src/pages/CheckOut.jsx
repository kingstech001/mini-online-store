import React from "react";
import heart from "../assets/Vector.svg";
import checkoutimage from "../assets/checkoutimage.svg";
import Button from "../components/Button";
import x from "../assets/cancel.svg";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

const CheckOut = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 pt-5 md:px-20">
        <img src={Logo} alt="Logo" className="w-12 md:w-20" />
      </div>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="w-48 sm:w-72 md:w-96 shadow-custom rounded-md text-center py-4">
          <h3 className="text-xs sm:text-lg md:text-2xl font-bold">OTHERS</h3>
          <p className="text-base sm:text-2xl md:text-4xl font-normal">Leather Sofa</p>
          <div className="flex items-center justify-center gap-2">
            <img src={heart} alt="heart" className="w-2 sm:w-4 md:w-7" />
            <p className="font-normal text-[10px] sm:text-sm md:text-lg text-[#783C00]">
              ADD TO FAVOURITE
            </p>
          </div>
          <div className="flex  mt-4">
            <img src={checkoutimage} alt="checkout" className="w-40 sm:w-60 md:w-80" />
          </div>
        </div>
        <div className="bg-[#2D2D2D] text-center text-[#FFFFFF] w-48 sm:w-72 md:w-96 rounded-r-md relative pt-4">
          <NavLink to={"/cart"}>
            <img src={x} alt="cancel" className="absolute right-2 top-2 w-5 md:w-10" />
          </NavLink>
          <div className="border-b border-[#FFFFFF] mx-5 pb-3">
            <h3 className="text-sm md:text-2xl font-bold text-[#FFFFFF]">CHECKOUT</h3>
            <p className="text-[10px] sm:text-xs md:text-base font-bold">NAME ON CARD</p>
            <p className="text-[10px] sm:text-xs md:text-base font-normal">KING TEC REMI</p>
          </div>
          <div className="border-b border-[#FFFFFF] mx-5 pb-3">
            <h3 className="text-[10px] sm:text-xs md:text-base font-bold text-[#FFFFFF]">
              CARD NUMBER
            </h3>
            <p className="text-[10px] sm:text-xs md:text-base font-normal">5399 2370 5916 7813</p>
          </div>
          <div>
            <div className="flex justify-between pb-2 sm:pb-4 px-5">
              <div className="border-[#FFFFFF] border-b w-[60px] sm:w-[100px] md:w-[140px]">
                <p className="text-[10px] sm:text-xs md:text-base font-medium">EXPIRY DATE</p>
                <p className="text-[10px] sm:text-xs md:text-base font-medium">MM/YY</p>
              </div>
              <div className="border-[#FFFFFF] border-b w-[60px] sm:w-[100px] md:w-[140px]">
                <p className="text-[10px] sm:text-xs md:text-base font-medium">CVV</p>
                <p className="text-[10px] sm:text-xs md:text-base font-medium">***</p>
              </div>
            </div>
            <div className="bg-[#783C00] rounded-br-md py-2 flex justify-center">
              <Button text={"Pay Now"} style={'text-[10px] sm:text-sm md:text-base'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
