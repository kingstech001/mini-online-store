import trash1 from "../assets/remove.svg";
import tick from "../assets/icon-2.svg";
import tick1 from "../assets/icon.svg";
import cartImage1 from "../assets/Rectangle 31.svg";
import visa from "../assets/visa.svg";
import visaCard from "../assets/visa card.svg";
import cartImage2 from "../assets/cartimage.svg";
import cartImage3 from "../assets/cartimage2.svg";
import { NavLink } from "react-router-dom";
import backToHomebtn from "../assets/arrow-square-left.svg";
import Logo from "../assets/logo.svg";

const Cart = () => {
  return (
    <div>
      <div className="flex justify-between p-[40px]">
        <img src={Logo} alt="logo" />
        <NavLink to={"/home#home"}>
          <img src={backToHomebtn} alt="back to home button" />
        </NavLink>
      </div>
      <div className="md:flex lg:p-[40px]">
        <div className="px-[10px] sm:h-full h-[60vh] flex-1 mb-3">
          <div className="flex justify-between items-center">
            <h2 className="text-[20px] font-bold text-[#713800]">Cart</h2>
            <div className="flex items-center">
              <img src={trash1} alt="trash icon" />
              <p className="text-[10px] sm:text-[16px] font-normal">Remove</p>
            </div>
          </div>

          <div className="flex justify-between items-center border-b-[1px] pb-[22px] pt-[19px]">
            <div className="flex items-center gap-[16px] flex-1">
              <img src={tick} alt="check" className="w-[15px] sm:w-[30px]" />
              <p className="text-[10px] sm:text-[16px] font-normal">PRODUCTS</p>
            </div>
            <p className="text-[10px] sm:text-[16px] font-normal flex-1">
              QUANTITY
            </p>
            <p className="text-[10px] sm:text-[16px] font-normal">PRICE</p>
          </div>

          <div className="flex justify-between items-center border-b-[1px] pb-[22px] pt-[19px] m-auto">
            <div className="flex items-center gap-[16px] flex-1">
              <img src={tick1} alt="check" className="w-[15px] sm:w-[30px]" />
              <div className="flex items-center">
                <img
                  src={cartImage1}
                  alt="product"
                  className="w-[50px] sm:w-[100px]"
                />
                <p className="text-[10px] sm:text-[16px] hidden md:block">
                  LEATHER SOFA
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center gap-[10px] border-[1px] border-[#B8B8A5] rounded-[8px] w-[81.57px] h-[26.03px] sm:w-[94px] sm:h-[30px]">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <p className="text-[10px] sm:text-[16px font-normal">$180.00</p>
          </div>

          <div className="flex justify-between items-center border-b-[1px] pb-[22px] pt-[19px] m-auto">
            <div className="flex items-center gap-[16px] flex-1">
              <img src={tick} alt="check" className="w-[15px] sm:w-[30px]" />
              <div className="flex items-center">
                <img
                  src={cartImage2}
                  alt="product"
                  className="w-[50px] sm:w-[100px]"
                />
                <p className="text-[10px] sm:text-[16px] hidden md:block">
                  RELAX CHAIR
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center gap-[10px] border-[1px] border-[#B8B8A5] rounded-[8px] w-[81.57px] h-[26.03px] sm:w-[94px] sm:h-[30px]">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <p className="text-[10px] sm:text-[16px font-normal">$980.00</p>
          </div>

          <div className="flex justify-between items-center border-b-[1px] pb-[22px] pt-[19px] m-auto">
            <div className="flex items-center gap-[16px] flex-1">
              <img src={tick} alt="check" className="w-[15px] sm:w-[30px]" />
              <div className="flex items-center">
                <img
                  src={cartImage3}
                  alt="product"
                  className="w-[50px] sm:w-[100px]"
                />
                <p className="text-[10px] sm:text-[16px] hidden md:block">
                  OFFICE CHAIR
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center gap-[10px] border-[1px] border-[#B8B8A5] rounded-[8px] w-[81.57px] h-[26.03px] sm:w-[94px] sm:h-[30px]">
                <button>-</button>
                <p>3</p>
                <button>+</button>
              </div>
            </div>
            <p className="text-[10px] sm:text-[16px font-normal">$760.00</p>
          </div>
        </div>
        <div className=" w-[67.1] block md:mt-0 mb-[20px] md:mb-auto border-[1px] border-[#964B00] p-5 mx-[61.86px] md:ml-0">
          <div className="flex justify-between">
            <p className="text-[14.13px]">Subtotal</p>
            <p className="text-[14.13px]">$180.00</p>
          </div>
          <div className="flex justify-between border-b-[1px] pb-[23px] mb-[30px] border-[#B8B8A5]">
            <p className="text-[14.13px]">Discount</p>
            <p className="text-[14.13px]">$0</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[14.13px]">Grand Total</p>
            <p className="text-[14.13px]">$180.00</p>
          </div>
          <div className="flex items-center justify-center p-[20px] bg-[#964B00] text-[#F5F5DC] text-[1] md:text-[25px] font-medium w-full h-[60px]">
            <NavLink to={"/checkout"}>CHECKOUT NOW</NavLink>
          </div>
        </div>
      </div>
      <footer className=" bg-[#DEC7B0] flex justify-between items-center p-[20px] flex-wrap mt-[20px]">
        <div>
          <ul>
            <li className="text-[9.87px] md:text-[20px] font-medium">Home</li>
            <li className="text-[6.4px] md:text-[13px]">All Collection</li>
            <li className="text-[6.4px] md:text-[13px]">Exclisive</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-[9.87px] md:text-[20px] font-medium">
              Company
            </li>
            <li className="text-[6.4px] md:text-[13px]">About Us</li>
            <li className="text-[6.4px] md:text-[13px]">Affliate</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-[9.87px] md:text-[20px] font-medium">
              Support
            </li>
            <li className="text-[6.4] md:text-[13px]">FAQs</li>
            <li className="text-[6.4px] md:text-[13px]">Terms of Use</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-[9.87px] md:text-[20px] font-medium">
              Payment methods
            </li>
            <li>
              <img src={visa} alt="visa" />
            </li>
            <li>
              <img src={visaCard} alt="visa card" />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
