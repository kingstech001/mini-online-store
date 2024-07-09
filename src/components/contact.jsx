import contactImage from "../assets/contact-img.svg";
import instagram from "../assets/mdi_instagram.svg";
import facebook from "../assets/ic_baseline-facebook.svg";
import email from "../assets/bxl_gmail.svg";


const Contact = () => {
  return (
    <div id="contact" className="flex flex-col md:flex-row items-center w-full pt-[34px] px-[20px] gap-2">
      <div className="flex-1   flex flex-col items-center pb-[21px]">
        <img src={contactImage} alt="contact image" className="pb-[18px]"/>
      </div>
      <div className="flex flex-1 flex-col items-end lg:pr-[54px] w-full">
        <div className="hidden md:flex gap-[11px]">
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="instagram" />
          <img src={email} alt="instagram" />
        </div>
        <h2 className="text-[20px] sm:text-[30px] md:text-[30px] lg:text-[39px] text-end font-bold text-[#964B00] ">Stay Up To Date With Our Recommendations</h2>
        <div className="flex pt-[6px] gap-[13.8px] w-full">
          <div className="w-full h-[40.2px]  lg:h-[40.2px] bg-[#EAEAEA] rounded-[10.05px] border-2 border-[#BEBEBE]">
            <input type="text" placeholder="Enter Your Email Address " className="w-full h-full bg-transparent pl-[10px]" />
          </div>
          <div className="w-[107.99px] h-[40.18px] ">
          <button className="bg-[#964B00] h-full w-full rounded-[10.05px] text-white">
            Submit
          </button>
          </div>
        </div>
        <div className="md:hidden flex gap-[11px]">
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="instagram" />
          <img src={email} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
