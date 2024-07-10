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
      <div className="flex items-center justify-between px-[5px] pt-[20px] md:px-[76px]">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="w-[202.4px] sm:w-[302.4px] md:w-[402.4px] shadow-custom rounded-[11px] text-center py-3">
          <h3 className="text-[9.17px] sm:text-[19.17px] md:text-[28px] font-bold">OTHERS</h3>
          <p className="text-[14.3px] sm:text-[24.3px] md:text-[40.3px] font-normal">Leather Sofa</p>
          <div className="flex items-center justify-center">
            <img src={heart} alt="heart" className="w-[8.8px] h-[8.8px] sm:w-[16px] sm:h-[16px] md:w-[30px] md:h-[30px]" />
            <p className=" font-normal text-[5.87px] sm:text-[10px] md:text-[15px] text-[#783C00]">
              ADD TO FAVOURITE
            </p>
          </div>
          <div>
            <img src={checkoutimage} alt="checkout" className="w-[167.2px] sm:w-[200.2px] md:w-[300.2px]" />
          </div>
        </div>
        <div className="bg-[#2D2D2D] text-center text-[#FFFFFF] w-[180px] sm:w-[250px] md:w-[350px] rounded-r-[11px] relative pt-[15px] sm:pt-[10px]">
        <NavLink to={"/cart"}>
          <img src={x} alt="cancel" className="absolute right-2 top-2 w-[20px] md:w-[40px]" />
        </NavLink>
          <div className="border-b-[1px] border-[#FFFFFF] mx-5">
            <h3 className="text-[11.47px] md:text-[32.47px] font-bold text-[#FFFFFF]">CHECKOUT</h3>
            <p className="text-[5.88px] sm:text-[10.88px] md:text-[15.88px] font-bold">NAME ON CARD</p>
            <p className="text-[5.88px] sm:text-[10.88px] md:text-[15.88px] font-normal">KING TEC REMI</p>
          </div>
          <div className="border-b-[1px] border-[#FFFFFF] mx-5">
            <h3 className="text-[5.88px] sm:text-[10.88px] md:text-[15.88px]  font-bold text-[#FFFFFF]">
              CARD NUMBER
            </h3>
            <p className="text-[5.88px] sm:text-[10.88px] md:text-[15.88px]  font-normal">5399 2370 5916 7813</p>
          </div>
          <div>
            <div className="flex justify-between pb-[6.88px] sm:pb-[12.88px] px-5">
              <div className="border-[#FFFFFF] border-b-[1px] w-[170px]">
                <p className="text-[5.88px] sm:text-[10.88px] md:text-[15.88px]  font-medium">EXPIRY DATE</p>
                <p className="text-[5.88px] sm:text-[10.88px] md:text-[15.88px]  font-medium">MM/YY</p>
              </div>
              <div className="border-[#FFFFFF] border-b-[1px] w-[170px]">
                <p className="text-[5.88px] sm:text-[10.88px] md:text-[15.88px]  font-medium">CVV</p>
                <p className="text-[5.88px] sm:text-[10.88px] md:text-[15.88px]  font-medium">***</p>
              </div>
            </div>
            <div className="bg-[#783C00] rounded-br-[11px] py-[5px]">
              <Button text={"Pay Now"} style={'sm:text-[10.88px]'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
