import { useState } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 my-6">
      {/* Previous Button */}
      <button
        className={` bg-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-[#0F334C]"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoMdArrowDropleft className="w-8 h-8 md:w-10 md:h-10 " />
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[600] ${
              currentPage === pageNumber
                ? "bg-[#0F334C] text-white"
                : "bg-white text-[#0F334C]"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        className={`bg-white w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-[#0F334C]"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoMdArrowDropright className="w-8 h-8 md:w-10 md:h-10  " />
      </button>
    </div>
  );
};
export default Pagination;
