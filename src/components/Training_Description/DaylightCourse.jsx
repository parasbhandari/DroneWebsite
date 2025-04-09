import React from "react";
import DayLightImg from "../../assets/training/DayLight.png";
import { MdLibraryBooks } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function DaylightCourse() {
  const navigate = useNavigate();
  return (
    <div className="w-[70%] md:w-[30%] mt-30 md:mt-[-100px] bg-white  z-30 shadow-lg rounded-lg h-[350px] sm:h-[400px]">
      <div className=" ">
        <img
          src={DayLightImg}
          alt="_DayLightCourseImage"
          className="w-full h-auto rounded-t-lg"
        />
      </div>
      <div className="px-2.5 pt-2 pb-6">
        <button className="bg-[#0F334C] p-1 lg:p-2.5 w-full text-white rounded-[8px] " onClick={() => navigate("/inquiryform")}>
          Take This Course
        </button>
        <div className="pt-2">
          <h2 className=" text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[500]">
            Course Includes
          </h2>
          <div className="flex gap-5 items-center pt-4 ">
            <MdLibraryBooks className="w-[20px] h-[20px]" />
            <p className="font-[400] text-[16px] leading-6 text-[#0F334D]">
              6 Lessons
            </p>
          </div>
          <div className="flex gap-5 items-center pt-2">
            <FaRegQuestionCircle className="w-[20px] h-[20px]" />
            <p className="font-[400] text-[16px] leading-6 text-[#0F334D]">
              1 Quiz
            </p>
          </div>
          <div className="flex gap-5 items-center pt-2">
            <AiTwotoneSafetyCertificate className="w-[20px] h-[20px]" />
            <p className="font-[400] text-[16px] leading-6 text-[#0F334D]">
              Course Certificate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaylightCourse;
