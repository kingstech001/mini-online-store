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
      <div className="flex justify-between p-4 md:p-10">
        <img src={Logo} alt="logo" className="w-16 md:w-24" />
        <NavLink to={"/home#home"}>
          <img src={backToHomebtn} alt="back to home button" className="w-8 md:w-12" />
        </NavLink>
      </div>
      <div className="flex flex-col md:flex-row lg:p-10 justify-between">
        <div className="px-4 md:px-6 flex-1 mb-3 md:mb-0 max-w-[1000px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#713800]">Cart</h2>
            <div className="flex items-center gap-2">
              <img src={trash1} alt="trash icon" className="w-4 md:w-6" />
              <p className="text-xs md:text-base font-normal">Remove</p>
            </div>
          </div>

          <div className="flex justify-between items-center border-b pb-4 pt-4">
            <div className="flex items-center gap-4 flex-1">
              <img src={tick} alt="check" className="w-4 md:w-8" />
              <p className="text-xs md:text-base font-normal">PRODUCTS</p>
            </div>
            <p className="text-xs md:text-base font-normal flex-1 text-start">QUANTITY</p>
            <p className="text-xs md:text-base font-normal">PRICE</p>
          </div>

          <div className="flex justify-between items-center border-b pb-4 pt-4">
            <div className="flex items-center gap-4 flex-1">
              <img src={tick1} alt="check" className="w-4 md:w-8" />
              <div className="flex items-center gap-2">
                <img
                  src={cartImage1}
                  alt="product"
                  className="w-12 md:w-24"
                />
                <p className="text-xs md:text-base hidden md:block">LEATHER SOFA</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center gap-2 border border-[#B8B8A5] rounded px-4 py-2 w-20 md:w-24">
                <button className="text-xs md:text-base">-</button>
                <p className="text-xs md:text-base">1</p>
                <button className="text-xs md:text-base">+</button>
              </div>
            </div>
            <p className="text-xs md:text-base font-normal">$180.00</p>
          </div>

          <div className="flex justify-between items-center border-b pb-4 pt-4">
            <div className="flex items-center gap-4 flex-1">
              <img src={tick} alt="check" className="w-4 md:w-8" />
              <div className="flex items-center gap-2">
                <img
                  src={cartImage2}
                  alt="product"
                  className="w-12 md:w-24"
                />
                <p className="text-xs md:text-base hidden md:block">RELAX CHAIR</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center gap-2 border border-[#B8B8A5] rounded px-4 py-2 w-20 md:w-24">
                <button className="text-xs md:text-base">-</button>
                <p className="text-xs md:text-base">1</p>
                <button className="text-xs md:text-base">+</button>
              </div>
            </div>
            <p className="text-xs md:text-base font-normal">$980.00</p>
          </div>

          <div className="flex justify-between items-center border-b pb-4 pt-4">
            <div className="flex items-center gap-4 flex-1">
              <img src={tick} alt="check" className="w-4 md:w-8" />
              <div className="flex items-center gap-2">
                <img
                  src={cartImage3}
                  alt="product"
                  className="w-12 md:w-24"
                />
                <p className="text-xs md:text-base hidden md:block">OFFICE CHAIR</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center gap-2 border border-[#B8B8A5] rounded px-4 py-2 w-20 md:w-24">
                <button className="text-xs md:text-base">-</button>
                <p className="text-xs md:text-base">3</p>
                <button className="text-xs md:text-base">+</button>
              </div>
            </div>
            <p className="text-xs md:text-base font-normal">$760.00</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 mt-6 md:mt-0 mb-auto ml-0 border border-[#964B00] p-5">
          <div className="flex justify-between mb-4">
            <p className="text-base md:text-lg">Subtotal</p>
            <p className="text-base md:text-lg">$180.00</p>
          </div>
          <div className="flex justify-between border-b pb-4 mb-6 border-[#B8B8A5]">
            <p className="text-base md:text-lg">Discount</p>
            <p className="text-base md:text-lg">$0</p>
          </div>
          <div className="flex justify-between mb-6">
            <p className="text-base md:text-lg">Grand Total</p>
            <p className="text-base md:text-lg">$180.00</p>
          </div>
          <NavLink to={"/checkout"} className="flex items-center justify-center py-3 bg-[#964B00] text-[#F5F5DC] text-sm md:text-lg font-medium w-full">
            CHECKOUT NOW
          </NavLink>
        </div>
      </div>
      <footer className="bg-[#DEC7B0] flex md:flex-row justify-between items-center p-5 flex-wrap mt-6 gap-4">
        <div>
          <ul>
            <li className="text-lg md:text-xl font-medium mb-2">Home</li>
            <li className="text-sm md:text-base mb-1">All Collection</li>
            <li className="text-sm md:text-base mb-1">Exclusive</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-lg md:text-xl font-medium mb-2">Company</li>
            <li className="text-sm md:text-base mb-1">About Us</li>
            <li className="text-sm md:text-base mb-1">Affiliate</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-lg md:text-xl font-medium mb-2">Support</li>
            <li className="text-sm md:text-base mb-1">FAQs</li>
            <li className="text-sm md:text-base mb-1">Terms of Use</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-lg md:text-xl font-medium mb-2">Payment methods</li>
            <li className="mb-2">
              <img src={visa} alt="visa" className="w-8 md:w-12" />
            </li>
            <li className="mb-2">
              <img src={visaCard} alt="visa card" className="w-8 md:w-12" />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
