import React from "react";
import { FaUserFriends } from "react-icons/fa";

function ClassCard({ classStatus, classTime, classNumber }) {
  return (
    <div className="w-full sm:w-2/5   2xl:w-[32rem] 
      bg-slate-50 text-slate-900 border-2 border-gray-400 
      p-4 sm:p-4 md:p-5 lg:p-6 rounded-lg box-border
      transition-all duration-300 hover:shadow-lg
      shadow-sm "> {/* Added subtle shadow */}
      
      {/* Header Section */}
      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 
        font-semibold leading-snug sm:leading-tight line-clamp-2"> {/* Better line control */}
        {classStatus}
      </h2>
      
      {/* Content Section */}
      <div className="mt-4 sm:mt-5 md:mt-6 flex flex-col gap-3 sm:gap-4"> {/* Using flex gap for spacing */}
        {/* Icon Container */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 
          lg:w-20 lg:h-20 text-white flex items-center justify-center 
          bg-slate-900 rounded-lg sm:rounded-xl md:rounded-2xl
          shadow-md"> {/* Added depth */}
          <FaUserFriends className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 
            lg:w-10 lg:h-10 transition-transform hover:scale-105" /> {/* Interactive icon */}
        </div>
        
        {/* Text Content */}
        <div className="space-y-1 sm:space-y-2"> {/* Better vertical spacing */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl 
            font-semibold text-slate-900 leading-tight">
            {classTime}
          </p>
          
          <p className="text-xs sm:text-sm md:text-base 
            font-medium text-slate-500 tracking-wide"> {/* Improved readability */}
            {classNumber}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClassCard;