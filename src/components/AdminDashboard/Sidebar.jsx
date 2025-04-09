import { useState } from "react";
import Logo from "../../assets/logo.png";
import { MdDashboard, MdInventory, MdOutlineSettings } from "react-icons/md";
import { FaUsers, FaCartPlus } from "react-icons/fa6";
import { RiLogoutCircleRLine, RiCloseLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { BiHome } from "react-icons/bi";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-5 left-4 z-50 p-2 text-white bg-[#0F334C] rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <RiCloseLine className="w-5 h-5" />
        ) : (
          <FiMenu className="w-5 h-5" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative w-[300px] bg-[#0F334C] text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } transition-transform duration-300 ease-in-out z-40 h-screen overflow-y-auto`}
      >
        {/* Logo */}
        <div className="hidden md:flex justify-center pt-5">
          <img onClick={() => navigate("/")} src={Logo} alt="Logo" className="w-[100px] h-full contrast-[100] brightness-[100] cursor-pointer" />
        </div>

        {/* Navigation Links */}
        <div className="flex mt-20 flex-col items-center align-end md:items-end md:mt-4">
          <ul className="w-[214px]">
            {[
              { icon: BiHome, text: "Home", url: "/" },
              { icon: MdDashboard, text: "Dashboard", url: "/admin/dashboard" },
              { icon: MdInventory, text: "Products", url: "/admin/products" },
              { icon: FaUsers, text: "Users", url: "/admin/users" },
              { icon: FaCartPlus, text: "Classes", url: "/admin/classes" },
              {
                icon: MdOutlineSettings,
                text: "Setting",
                url: "/admin/setting",
              },
            ].map((item, index) => (
              <NavLink
                to={item.url}
                key={index}
                className={({ isActive }) =>
                  isActive ? "bg-white text-orange-400" : ""
                }
                onClick={() => setIsOpen(false)} // Close sidebar after click (mobile)
              >
                <li className="flex items-center justify-start md:justify-start gap-3 hover:text-black p-4 md:px-[9px] md:py-[37px] hover:bg-white w-full h-[60px] md:h-[45px] md:rounded-bl-[43px] md:rounded-tl-[43px] font-[500]">
                  <item.icon className="w-6 h-6 md:w-[18px] md:h-[18px]" />
                  <span className="md:block">{item.text}</span>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Logout Button (Desktop) */}
        <NavLink to="/login">
          <button
            className="w-[187px] mx-auto rounded-[44px] font-[600] mt-40 py-[9px] px-[44px] hidden md:flex gap-2.5 items-center text-black bg-white"
          >
            <RiLogoutCircleRLine className="w-[18px] h-[18px]" />
            <p>Logout</p>
          </button>
        </NavLink>

        {/* Logout Button (Mobile) */}
        <button
          className="md:hidden absolute bottom-8 left-0 right-0 flex justify-center text-white"
          onClick={() => navigate("/login")}
        >
          <RiLogoutCircleRLine className="w-6 md:w-8 h-8" />
        </button>
      </div>
    </>
  );
}

export default Sidebar;
