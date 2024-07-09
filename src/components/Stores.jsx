import Button from "./Button";
import { Products } from "./Products";
import carticon from "../assets/shopping-cart2.svg";

const Stores = () => {
  return (
    <div
      id="stores"
      className="bg-[#964B00] sm:pt-[105px] pb-[50px] sm:pb-[104px] "
    >
      <h3 className="font-bold text-[31px] text-[#FFFFFF]  mb-[45px] text-center sm:text-start pl-[30px]">
        Our Collection Of Furniture.
      </h3>
      <div className="flex gap-3 flex-wrap items-center justify-center mb-[55px]">
        <Button text={"Stools"} style={"bg-[#FFFFFF]"} />
        <Button text={"beds"} style={"bg-[#FFFFFF] text-[#964B00]"} />
        <Button text={"Chiars"} style={"bg-[#FFFFFF] text-[#964B00]"} />
        <Button text={"Tables"} style={"bg-[#FFFFFF] text-[#964B00]"} />
        <Button text={"Others"} style={"bg-[#FFFFFF] text-[#964B00]"} />
      </div>
      <div className="flex flex-wrap gap-[24px] md:gap-[60px] items-center justify-center lg:px-[76px] ">
        {Products.map((product) => (
          <div key={product.id} className="relative">
            <img src={product.image} alt={product.name} className="w-[114px] md:w-[216px] " />
            <div className="absolute bottom-0 rounded-b-md z-0 w-[114px] md:w-[216px] px-2.5 bg-[#D9D9D999]">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-[#964B00] text-[8.48px] md:text-[16px] font-bold">
                    {product.name}
                  </h4>
                  <div className="flex gap-2">
                    <p className="text-[#964B00] text-[8.48px] md:text-[16px] font-medium">
                      ${product.price}
                    </p>
                    <p className="text-[#C32C0A] text-[5.3px] md:text-[15px]">
                      {product.price2}
                    </p>
                  </div>
                </div>
                <img src={carticon} alt="cart icon" className="w-[12.72px] md:w-[24px]"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;
