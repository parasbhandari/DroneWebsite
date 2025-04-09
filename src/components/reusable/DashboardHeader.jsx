import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";

function DashboardHeader({ pagename }) {
  return (
    <>
    <div className='wrapper'>

   
      <div className="ml-[15%] sm:ml-12 md:ml-0 p-4 md:w-fit xl:w-[80%] xxl:w-full">
        <div className="flex flex-wrap gap-4 justify-between items-center bg-orange-50 p-3 rounded-lg">
          <h1 className="text-base md:text-xl font-semibold">
            Welcome Admin!
          </h1>
          
          <div className="relative flex w-full sm:w-48 md:w-80 order-3 sm:order-2">
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-8 md:h-10 pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          
          <div className="order-2 sm:order-3">
            <IoMdNotifications className="w-6 h-6 text-gray-700 hover:text-gray-900" />
          </div>
        </div>
      </div>
      
      <h2 className="text-xl md:text-2xl font-semibold  mt-4 ml-2 pl-4" >
        {pagename}
      </h2>
      </div>
    </>
  );
}

export default DashboardHeader;