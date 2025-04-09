import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row max-h-screen">
      <div className="w-full lg:w-4/12 bg-[#0F334C] min-h-[300px] lg:h-screen text-white flex justify-center items-center flex-col gap-5 md:gap-7">
        <h2 className="text-[24px] md:text-[28px] lg:text-[36px] font-[600]">
          Welcome
        </h2>
        <p className="text-[15px] md:text-[16px] lg:text-[20px] font-[500] w-10/12 lg:w-7/12 text-center px-4 lg:px-0">
          To keep connected with us Signup with your personal info
        </p>
        <Link
          to="/login"
          className="border-2 w-fit border-[#FFFFFF] py-2.5 text-[14px] md:text-[16px] lg:text-[20px] font-[600] px-8 lg:px-10 cursor-pointer transition-transform duration-300 hover:scale-108"
        >
          Login
        </Link>
      </div>

      <div className="w-full lg:w-8/12 bg-white flex flex-col items-center justify-start sm:justify-center gap-5 md:gap-7 py-14 sm:py-0 h-screen">
        <h1 className="text-[30px] md:text-[36px] lg:text-[56px] font-[700] text-[#0F334C] text-center px-4 w-full">
          Create an Account
        </h1>

        <div className="flex gap-4 md:gap-6">
          <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 bg-[#D9D9D9] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer">
            <FaFacebookF className="w-4 md:w-6 lg:w-7 h-4 md:h-6 lg:h-7 text-[#0F334C]" />
          </div>
          <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 bg-[#D9D9D9] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer">
            <FaGoogle className="w-4 md:w-6 lg:w-7 h-4 md:h-6 lg:h-7 text-[#0F334C]" />
          </div>
          <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 bg-[#D9D9D9] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer">
            <IoMdMail className="w-4 md:w-6 lg:w-7 h-4 md:h-6 lg:h-7 text-[#0F334C]" />
          </div>
        </div>

        <p className="text-[12px] md:text-[14px] lg:text-[16px] font-[500]">
          or use your email for registration
        </p>

        <form
          action=""
          className="w-full sm:w-11/12 md:w-8/12 lg:w-5/12 flex flex-col items-center gap-3 md:gap-5 px-4 sm:px-0"
        >
          <input
            type="text"
            className="border-2 border-[#7B7B7B] text-[#7B7B7B] outline-none p-2 sm:p-3 rounded text-[12px] sm:text-[14px] md:text-[16px] font-[500] w-full"
            placeholder="Name"
          />
          <input
            type="email"
            className="border-2 border-[#7B7B7B] text-[#7B7B7B] outline-none p-2 sm:p-3 rounded text-[12px] sm:text-[14px] md:text-[16px] font-[500] w-full"
            placeholder="Email"
          />
          <input
            type="password"
            className="border-2 border-[#7B7B7B] text-[#7B7B7B] outline-none p-2 sm:p-3 rounded text-[12px] sm:text-[14px] md:text-[16px] font-[500] w-full"
            placeholder="Password"
          />
          <button className="text-[#FFFFFF] text-[16px] md:text-[18px] lg:text-[20px] font-[600] bg-[#0F334C] px-12 lg:px-16 py-3 cursor-pointer transition-transform duration-300 hover:scale-110">
            Signup
          </button>
        </form>

        <div className="w-11/12 md:w-8/12 lg:w-5/12 flex sm:flex-row flex-col sm:flex justify-between items-center gap-2 px-4 sm:px-0">
          <h2 className="text-[14px] md:text-[16px] font-[500]">
            Already have an account?
          </h2>
          <Link
            to="/login"
            className="text-[14px] md:text-[16px] font-[500] text-[#F26122] hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
