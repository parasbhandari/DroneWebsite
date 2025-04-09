import React from "react";
import { useNavigate } from "react-router-dom";

const ProgramsCard = ({ imageUrl, title, description }) => {
  const navigate = useNavigate();
  return (
    <div className="relative grid h-[24rem] sm:h-[22rem] md:h-[28rem] lg:h-[35rem] w-[260px] sm:w-[230px] md:w-[384px] flex-col items-end justify-start overflow-hidden rounded-sm bg-white group">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-cover bg-center transition-all duration-300 ease-in-out group-hover:brightness-50 border-t-4 border-t-(--primary-color)"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-b from-(--primary-color)/30 to-white/80 transition-all duration-300 ease-in-out group-hover:from-white/30 group-hover:to-(--primary-color)/80"></div>
      </div>

      {/* Text & Button */}
      <div className="relative text-start py-14 px-6 sm:py-14 md:px-12 transition-all duration-300 ease-in-out">
        <p className="mb-2 text-xs md:text-xl font-bold text-(--primary-color) group-hover:text-[#F8F5F5]">
          {description}
        </p>
        <h5 className="mb-2 text-xl sm:text-3xl font-bold text-(--primary-color) group-hover:text-[#F8F5F5]">
          {title}
        </h5>
        <button className="border-2 border-white hover:border-(--secondary-color) text-white rounded-2xl px-4 hidden group-hover:block transition-all duration-300 cursor-pointer" onClick={() => navigate("/training/description")}>
          Details
        </button>
      </div>
    </div>
  );
};

export default ProgramsCard;
