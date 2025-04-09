import { logo } from "../../scripts/Images";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-(--primary-color) ">
      <div className="wrapper">
        <div className="flex flex-col gap-10 md:gap-8 lg:gap-36 xl:gap-48 sm:flex-row h-auto sm:h-[371px] items-start justify-start sm:items-center sm:justify-between pb-3 sm:pb-0 sm:mt-0 ">
          <div className=" flex flex-col flex-1 ">
            <img
              src={logo}
              className="w-[110px] h-auto mt-[3px] ml-[-5px] hover:cursor-pointer brightness-[100] contrast-[100]"
              alt=""
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/");
              }}
            />

            <div className="flex flex-col ">
              <p className="text-[12px] sm:text-[10px] md:text-xs lg:text-base mb-1 font-[400] text-white ">
                Bharatpur-04, Gaindachowk, Chitwan, Nepal
              </p>
              <a href="tel:+9779849819005" className="text-[12px] mb-1 sm:text-[10px] md:text-xs lg:text-base font-[400] text-white hover:text-(--secondary-color)">
                +977 9849081900
              </a>
              <a href="mailto:eversetskyflyingacademy@gmail.com" className="text-[12px] mb-1 sm:text-[10px] md:text-xs lg:text-base font-[400] text-white hover:text-(--secondary-color)">
                eversetskyflyingacademy@gmail.com
              </a>

              <a
                href="https://www.eversetskyflyingacademy.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] sm:text-[10px] md:text-xs font-[400] text-white hover:text-(--secondary-color) "
              >
                www.eversetskyflyingacademy.com.np
              </a>

            </div>

            <div className="flex gap-2 mt-7 sm:mt-3 md:mt-7 ">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mr-2  hover:scale-110 transition-transform"
              >
                <FaFacebook size={32} className="text-white" />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:scale-110 mr-2 transition-transform"
              >
                <FaInstagram size={32} />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:scale-110 transition-transform"
              >
                <FaWhatsapp size={32} />
              </a>
            </div>
          </div>

          <div className=" flex-1 flex flex-col items-start sm:items-center   h-[203px]">
            <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-poppins font-[600] text-start mb-4 sm:mb-8 text-white">
              Quick Links
            </h2>
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                className={({ isActive }) => ` ${isActive ? "text-[var(--secondary-color)]" : "text-white"} text-[12px] sm:text-[10px] md:text-xs lg:text-base  font-[400] font-poppins `}
              >
                Home
              </NavLink>
              <NavLink
                to="/training"
                className={({ isActive }) => ` ${isActive ? "text-[var(--secondary-color)]" : "text-white"} text-[12px] sm:text-[10px] md:text-xs lg:text-base font-[400] font-poppins `}
              >
                Training
              </NavLink>
              <NavLink
                to="/shops"
                className={({ isActive }) => ` ${isActive ? "text-[var(--secondary-color)]" : "text-white"} text-[12px] sm:text-[10px] md:text-xs lg:text-base font-[400] font-poppins `}
              >
                Shops
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) => `${isActive ? "text-[var(--secondary-color)]" : "text-white"} text-[12px] sm:text-[10px] md:text-xs lg:text-base font-[400] font-poppins`}
              >
                About Us

              </NavLink>
              <NavLink
                to="/contactus"
                className={({ isActive }) => `${isActive ? "text-[var(--secondary-color)]" : "text-white"} text-[12px] sm:text-[10px] md:text-xs lg:text-base font-[400] font-poppins`}
              >
                Contact Us
              </NavLink>


            </div>
          </div>

          <div className=" flex-1 h-[204px]">
            <h2 className="font-[600] text-[16px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-poppins text-white mb-4 sm:mb-8 ">
              About Us Info
            </h2>
            <p className="text-[10px] md:text-xs lg:text-base text-white font-[400] mb-3">
              Subscribe to our Newsletter
            </p>

            <div className="flex mb-3  ">
              <input
                placeholder="Email Address"
                type="text"
                className=" placeholder-[2px] sm:placeholder-[5px] lg:placeholder-base p-[10px] w-full md:w-[250px] lg:w-[250px] xl:w-[300px] bg-slate-400 rounded-lg text-white outline-none "
              />
              <button className="bg-(--secondary-color)  py-[10px] px-[40px] sm:px-[10px] md:px-[20px] lg:px-[25px] xl:px-[30px]  text-[10px] md:text-xs lg:text-base font-[600] rounded-[5px] rounded-l-none! text-white border-none cursor-pointer ml-[-80px] sm:ml-[-50px] md:ml-[-90px]  lg:ml-[-120px]">
                Subscribe
              </button>
            </div>
            <div className="flex gap-2 items-center  ">
              <p className="text-white font-[400] text-[14px]">&#8226;</p>
              <p className="text-white font-[400] text-[10px] md:text-xs lg:text-[14px]">
                we&apos;ll never share your email address
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
