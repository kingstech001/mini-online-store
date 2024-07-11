import Button from "./Button";
import { Products } from "./Products";
import carticon from "../assets/shopping-cart2.svg";

const Stores = () => {
  return (
    <div id="stores" className="bg-[#964B00] p-5 ">
      <h3 className="font-bold text-[16px] min-[300px]:text-[31px] text-[#FFFFFF]  mb-[45px] text-center sm:text-start ">
        Our Collection Of Furniture.
      </h3>
      <div className="flex lg:max-w-[952px]">
        <Button
          text={"Stools"}
          style={
            "bg-[#FFFFFF] text-[#964B00] px-[10px] py-[5px] sm:px-[15px] sm:py-[7px] md:px-[20px] md:py-[10px] w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
          }
        />

        <Button
          text={"Beds"}
          style={
            "bg-[#FFFFFF] text-[#964B00] px-[10px] py-[5px] sm:px-[15px] sm:py-[7px] md:px-[20px] md:py-[10px] w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
          }
        />
        <Button
          text={"Chairs"}
          style={
            "bg-[#FFFFFF] text-[#964B00] px-[10px] py-[5px] sm:px-[15px] sm:py-[7px] md:px-[20px] md:py-[10px] w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
          }
        />
        <Button
          text={"Tables"}
          style={
            "bg-[#FFFFFF] text-[#964B00] px-[10px] py-[5px] sm:px-[15px] sm:py-[7px] md:px-[20px] md:py-[10px] w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
          }
        />
        <Button
          text={"Others"}
          style={
            "bg-[#FFFFFF] text-[#964B00] px-[10px] py-[5px] sm:px-[15px] sm:py-[7px] md:px-[20px] md:py-[10px] w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
          }
        />
      </div>
      <div className="grid grid-cols-auto-fill min-w-[200px] p-[10px] gap-2  lg:max-w-[952px] m-auto">
        {Products.map((product) => (
          <div key={product.id} className="relative flex mb-[20px]">
            <img
              src={product.image}
              alt={product.name}
              className="flex-1 md:w-[216px] "
            />
            <div className="absolute bottom-0 rounded-b-md z-0 w-full px-2.5 py-[10px] bg-[#D9D9D999]">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-[#964B00] text-[16px] font-bold">
                    {product.name}
                  </h4>
                  <div className="flex gap-2">
                    <p className="text-[#964B00] text-[16px] font-medium">
                      ${product.price}
                    </p>
                    <p className="text-[#C32C0A] text-[15px]">
                      {product.price2}
                    </p>
                  </div>
                </div>
                <img src={carticon} alt="cart icon" className="w-[24px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;
