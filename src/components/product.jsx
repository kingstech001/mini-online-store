import TruckFast from "../assets/truck-fast.svg";
import Wallet from "../assets/wallet-money.svg";
import Time from "../assets/timer.svg";
import exProductImage from "../assets/exProductImg.svg";
import Button from "./Button";

const Product = () => {
  return (
    <div id="product">
      <div className="bg-[#964B00] pb-[70px] flex flex-col items-center justify-center">
        <div>
          <h2 className="text-[49px] font-bold text-[#FEFEFC] text-center lg:mb-[34px] lg:mt-[38px]">
            Why Choose Us
          </h2>
        </div>
        <div className=" gap-5 flex flex-wrap p-5 justify-center items-center sm:justify-between sm:w-full sm:px-[50px] md:px-[100px] lg:px-[207px]">
          <div className="w-[168px]">
            <img src={TruckFast} alt="truck-fast" className="block m-auto" />
            <h3 className="text-[25px] font-bold text-[#FFFFFF] text-center">
              Fast Delivery
            </h3>
            <p className="text-[13px] font-normal text-[#FFFFFF] text-center">
              with supersonic speed you don’t get held back from living in your
              dream home
            </p>
          </div>
          <div className="w-[168px]">
            <img src={Wallet} alt="wallet-money" className="block m-auto" />
            <h3 className="text-[25px] font-bold text-[#FFFFFF] text-center">
              Money Back Guarantee
            </h3>
            <p className="text-[13px] font-normal text-[#FFFFFF] text-center">
              No need to break savings we got you covered with our flexible
              payment subscription{" "}
            </p>
          </div>
          <div className="w-[168px]">
            <img src={Time} alt="timer" className="block m-auto" />
            <h3 className="text-[25px] font-bold text-[#FFFFFF] text-center">
              24/7 Support
            </h3>
            <p className="text-[13px] font-normal text-[#FFFFFF] text-center">
              Get it when you want it, how you like it, where you want it: no
              time to check time.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FEFEFC] px-[20px]">
        <h2 className="text-[49px] font-bold text-[#964B00] text-center">
          Our Exclusive Products
        </h2>
        <div className="items-center justify-center lg:flex-nowrap md:flex pb-[20px] sm:mx-[30px]">
          <img
            src={exProductImage}
            alt="exclusive product"
            className="rounded-[40px]  block m-auto"
          />
          <div className="bg-[#FFFFFF] block m-auto items-center shadow  p-[10px] text-center">
            <h3 className="text-[31px] text-[#964B00]">Haven Family Sofa</h3>
            <p className="text-[13px] lg:text-[16px] font-normal text-[#222222] py-[10px] lg:px-[50px]"> 
              Find your haven with our signature sofa, designed for comfort and
              style. Plush cushions, a sturdy wooden frame, and a sleek, modern
              silhouette come together to create the perfect spot to relax and
              unwind. Whether you're curling up with a good book or hosting a
              cozy night in with friends, the Haven Sofa is the epitome of
              warmth and invitation
            </p>
            <Button
              text={"Shop Now"}
              style={
                "bg-[#964B00] text-white rounded-2xl  text[25px] font-medium px-[20px] py-[10px] block m-auto"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
