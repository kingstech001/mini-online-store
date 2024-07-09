import trash1 from "../assets/remove.svg";
import tick from "../assets/icon-2.svg";
import tick1 from "../assets/icon.svg";
import cartImage1 from "../assets/Rectangle 31.svg";
import trash2 from "../assets/trash.svg";
import visa from "../assets/visa.svg";
import visaCard from "../assets/visa card.svg";
import cartImage2 from "../assets/cartimage.svg"
import cartImage3 from "../assets/cartimage2.svg"
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <div className=" pt-[100px] sm:pt-[147px]">
      <div className="lg:flex lg:p-[40px]">
        <div className="px-[10px] sm:px-[50px] sm:h-full h-[70vh] flex-1 mb-3">
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
                <p className="text-[10px] sm:text-[16px]">LEATHER SOFA</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center gap-[10px] border-[1px] border-[#B8B8A5] rounded-[8px] w-[50px] h-[20px] sm:w-[94px] sm:h-[30px]">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <div className="flex items-center">
                <img src={trash2} alt="trash icon" />
                <p className="text-[10px] sm:text-[16px">Remove</p>
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
                <p className="text-[10px] sm:text-[16px]">RELAX CHAIR</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center gap-[10px] border-[1px] border-[#B8B8A5] rounded-[8px] w-[50px] h-[20px] sm:w-[94px] sm:h-[30px]">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <div className="flex items-center">
                <img src={trash2} alt="trash icon" />
                <p className="text-[10px] sm:text-[16px">Remove</p>
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
                <p className="text-[10px] sm:text-[16px]">OFFICE CHAIR</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center gap-[10px] border-[1px] border-[#B8B8A5] rounded-[8px] w-[50px] h-[20px] sm:w-[94px] sm:h-[30px]">
                <button>-</button>
                <p>3</p>
                <button>+</button>
              </div>
              <div className="flex items-center">
                <img src={trash2} alt="trash icon" />
                <p className="text-[10px] sm:text-[16px">Remove</p>
              </div>
            </div>
            <p className="text-[10px] sm:text-[16px font-normal">$760.00</p>
          </div>
        </div>
        <div className="w-full sm:w-[378px] block md:mt-0 sm:m-auto mx-auto mb-[20px]  border-[1px] border-[#964B00] p-5">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>$180.00</p>
          </div>
          <div className="flex justify-between border-b-[1px] pb-[23px] mb-[30px] border-[#B8B8A5]">
            <p>Discount</p>
            <p>$0</p>
          </div>
          <div className="flex justify-between">
            <p>Grand Total</p>
            <p>$180.00</p>
          </div>
          <div className="flex items-center justify-center p-[20px] bg-[#964B00] text-[#F5F5DC] text-[25px] font-medium w-full h-[60px]">
            <NavLink to={'/checkout'}>CHECKOUT NOW</NavLink>
          </div>
        </div>
      </div>
      <footer className=" bg-[#DEC7B0] flex justify-between items-center p-[20px] flex-wrap">
        <div>
          <ul>
            <li className="text-[20px] font-medium">Home</li>
            <li>All Collection</li>
            <li>Exclisive</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-[20px] font-medium">Company</li>
            <li>About Us</li>
            <li>Affliate</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-[20px] font-medium">Support</li>
            <li>FAQs</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-[20px] font-medium">Payment methods</li>
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
