import TruckFast from "../assets/truck-fast.svg";
import Wallet from "../assets/wallet-money.svg";
import Time from "../assets/timer.svg";
import exProductImage from "../assets/exProductImg.svg";
import Button from "./Button";

const Product = () => {
  return (
    <div id="product" className="">
      <div className="bg-[#964B00] px-[5px] md:py-[50px]">
        <div>
          <h2 className="text:text-[20px] sm:text-[49px] font-bold text-[#FEFEFC] text-center lg:mb-[34px]  pb-5">
            Why Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-2 p-[10px] text-center min-w-[100px]">
          <div className="m-auto max-w-[200px]">
            <div className="flex flex-col-reverse sm:flex-col items-center">
              <img src={TruckFast} alt="truck-fast" className="block mx-auto" />
              <h3 className="text-[16px] md:text-[25px] font-normal text-[#FFFFFF]">
                Fast Delivery
              </h3>
            </div>
            <p className="text-[10px] md:text-[13px] font-normal text-[#FFFFFF]">
              with supersonic speed you don’t get held back from living in your
              dream home
            </p>
          </div>
          <div className="m-auto max-w-[200px]">
            <div className="flex flex-col-reverse sm:flex-col items-center">
              <img src={Wallet} alt="wallet-money" className="block mx-auto" />
              <h3 className="text-[16px] md:text-[25px] font-normal text-[#FFFFFF]">
                Keep Money
              </h3>
            </div>
            <p className="text-[10px] md:text-[13px] font-normal text-[#FFFFFF]">
              No need to break savings we got you covered with our flexible
              payment subscription
            </p>
          </div>
          <div className="m-auto max-w-[200px]">
            <div className="flex flex-col-reverse sm:flex-col items-center">
              <img src={Time} alt="timer" className="block mx-auto" />
              <h3 className="text-[16px] md:text-[25px] font-normal text-[#FFFFFF]">
                Save Time
              </h3>
            </div>
            <p className="text-[10px] md:text-[13px] font-normal text-[#FFFFFF]">
              Get it when you want it, how you like it, where you want it: no
              time to check time.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#FEFEFC] pt-[10px] ">
        <h2 className="text-[20px] sm:text-[49px] font-bold text-[#964B00] text-center">
          Our Exclusive Products
        </h2>
        <div className="items-center justify-center sm:flex-nowrap sm:flex pb-[20px] px-[20px] lg:max-w-[1192px] m-auto">
          <img
            src={exProductImage}
            alt="exclusive product"
            className="rounded-[40px]  block m-auto max-w-[100%]"
          />
          <div className="bg-[#FFFFFF] flex flex-col items-center sm:shadow p-[20px] text-center">
            <h3 className="text-[16px] md:text-[31px] text-[#964B00]">
              Haven Family Sofa
            </h3>
            <p className="text-[10px] lg:text-[16px] font-normal text-[#222222] py-[10px] lg:px-[50px]">
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
