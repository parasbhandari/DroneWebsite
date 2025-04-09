import React from 'react'
import { FaLock } from "react-icons/fa";
function CourseContent({content}) {
  return (
    <div className='bg-[#0F334D] text-white p-3 sm:p-5 py-[20px] w-full lg:w-[60%] text-[16px] md:text-[20px] rounded-[8px] flex items-center justify-between mb-3 sm:mb-10'>
      {content}
      <FaLock/>
    </div>
  )
}

export default CourseContent