import { useState } from "react";
import { logo } from "../../scripts/Images";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

const HomePageHeader = () => {

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const HeaderMenu = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Training", link: "/training" },
    { id: 3, title: "Shops", link: "/shops" },
    { id: 4, title: "About us", link: "/about-us" },
    { id: 5, title: "Contact-Us", link: "/contactus" },
    { id: 6, title: <IoMdCart className="text-3xl" />, link: "/cart" }
  ];

  return (
    <div className="fixed top-0 left-0 w-full  bg-[var(--background-color)] z-50">
      <div className="wrapper flex items-center justify-between h-[93px]">
        <img
          className="w-[110px] md:w-[80px] lg:w-[130px] h-auto mt-[3px] ml-[-22px] hover:cursor-pointer"
          src={logo}
          alt="logo"
        />

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            className="text-[--secondary-color] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // ✅ Added toggle function
          >
            {isMenuOpen ? (
              // Cross Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className={` items-center md:gap-6 lg:gap-10 hidden md:flex`}>
          {HeaderMenu.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `text-[10px] md:text-[12px] lg:text-[14px]  hover:text-[var(--secondary-color)] hover:cursor-pointer font-[400] ${isActive
                    ? "text-[var(--secondary-color)]"
                    : "text-[var(--primary-color)]"
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <button onClick={() => navigate("/login")} className="bg-[#0F334C] h-full px-10 hover:bg-[#F26122] cursor-pointer text-white hidden md:block ">
          Login
        </button>

      </div>

      {/* Overlay and Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div className="fixed top-[93px] left-0 w-full h-[calc(100vh-93px)] bg-black bg-opacity-80 z-40"></div>

          {/* Mobile Menu */}
          <div className="md:hidden bg-(--background-color) w-full absolute top-[93px] left-0 shadow-md z-50">
            <ul className="flex flex-col items-center space-y-4 py-4">
              {HeaderMenu.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.link}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-[15px] hover:text-[--secondary-color] font-[400] ${isActive ? "text-[var(--secondary-color)]" : ""
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            <button onClick={() => navigate("/login")} className="bg-[#0F334C] text-white w-[90%] mx-auto block mb-4 py-2 hover:bg-[#F26122]">
              Login
            </button>

          </div>
        </>
      )}
    </div>
  );
};
export default HomePageHeader;
