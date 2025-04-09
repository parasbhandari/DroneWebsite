import React from 'react';

function InfoCard({ icon: Icon, value, label }) {
  return (
    <div className="bg-slate-50 border-2 border-gray-200 rounded-lg 
      w-full max-w-[300px] sm:w-1/2  md:w-[300px] xxl:w-1/3
      p-3 md:p-4 
      flex items-center 
      gap-2
      transition-all duration-300 hover:shadow-md">
      
      {/* Icon Container */}
      <div className="flex-shrink-0 
        w-10 h-10 md:w-12 md:h-12 
        flex items-center justify-center 
        rounded-lg bg-slate-900 text-white 
        transition-colors duration-300">
        {Icon && <Icon className="w-5 h-5 md:w-6 md:h-6" />}
      </div>

      {/* Text Content */}
      <div className="flex flex-col space-y-1 md:space-y-1.5">
        <p className="text-slate-900 
          font-bold 
          text-base md:text-lg 
          leading-tight">
          {value}
        </p>
        <p className="text-slate-600 
          font-medium 
          text-sm md:text-sm 
          leading-tight">
          {label}
        </p>
      </div>
    </div>
  );
}

export default InfoCard;