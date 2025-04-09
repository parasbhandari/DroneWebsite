import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { GiDeliveryDrone, GiMonkeyWrench, GiTeacher, GiWrench } from "react-icons/gi";
import { RiSlideshow3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const HomeServices = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="mt-20 flex items-center justify-center md:justify-start gap-4">
        <hr className="border-2 border-[#F26122] mr-3 w-8" />
        <p className="text-(--secondary-color) font-semibold text-lg md:text-xl">
          Services
        </p>
        <hr className="border-2 border-[#F26122] ml-3 w-8 flex md:hidden" />
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="w-full md:w-7/12 ">
          <h2 className="font-bold text-center md:text-start  text-[36px] md:text-[48px] lg:text-[56px] text-[#0F334C]">
            We Help you Embrace your Future.
          </h2>
          <p className="text-base text-[#0F334C] mt-4 leading-7 text-justify">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even
            slightly believable.There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some
            form, by injected humour, or randomised words which don't look even
            slightly believable.
          </p>
          <div className="flex items-center gap-6 mt-8 hover:text-(--secondary-color)" onClick={() => navigate("/training")}>
            <div className="border-3 p-3 rounded-full">
              <FaPlay className="" />
            </div>
            <button className="font-semibold  text-base md:text-xl hover:cursor-pointer ">
              Discover More
            </button>
          </div>
        </div>
        <div className="p-10 sm:p-20">
          <div className=" flex gap-4 sm:gap-20 md:gap-10 lg:gap-20">
            <div className="w-28 h-28 lg:w-40 lg:h-40  bg-white flex flex-col lg:flex-row items-center gap-2 md:gap-3 lg:gap-4 justify-center shadow-lg rounded border-t-2 border-(--primary-color) p-1">
              <GiDeliveryDrone className="text-(--primary-color) text-5xl " />
              <div className="">
                <p className="font-semibold text-(--secondary-color) text-base">
                  01
                </p>
                <p className="font-bold text-xs sm:text-sm text-(--primary-color)">
                  Sales
                </p>
              </div>
            </div>
            <div className="w-28 h-28 lg:w-40 lg:h-40 bg-white flex flex-col lg:flex-row items-center gap-2 md:gap-3 lg:gap-4  justify-center shadow-lg rounded border-t-2 border-(--primary-color) p-1">
              <RiSlideshow3Fill className="text-(--primary-color) text-5xl " />
              <div className="">
                <p className="font-semibold text-(--secondary-color) text-base">
                  02
                </p>
                <p className="font-bold text-xs sm:text-sm text-(--primary-color)">
                  Renting
                </p>
              </div>
            </div>
          </div>
          <div className=" flex gap-4 sm:gap-20 md:gap-10 lg:gap-20">
            <div className="w-28 h-28 lg:w-40 lg:h-40 bg-white flex flex-col lg:flex-row  items-center gap-2 md:gap-3 lg:gap-4  justify-center shadow-lg rounded border-t-2 border-(--primary-color) mt-10 p-1 ">
              <GiTeacher className="text-(--primary-color) text-5xl " />
              <div className="">
                <p className="font-semibold text-(--secondary-color) text-base">
                  03
                </p>
                <p className="font-bold text-xs sm:text-sm text-(--primary-color)">
                  Training
                </p>
              </div>
            </div>
            <div className="w-28 h-28 lg:w-40 lg:h-40 bg-white flex flex-col lg:flex-row items-center gap-2 md:gap-3 lg:gap-4  justify-center shadow-lg rounded border-t-2 border-(--primary-color) pl-4 mt-10 p-1">
              <FaScrewdriverWrench className="text-(--primary-color) text-5xl" />
              <div className="">
                <p className="font-semibold text-(--secondary-color) text-base">
                  04
                </p>
                <p className="font-bold text-xs sm:text-sm text-(--primary-color)">
                  Maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
