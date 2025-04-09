import React from "react";
import CourseContent from "./CourseContent";

function CourseDescription() {
  const courseContentList = [
    "10000 - Day light Operation Course Introduction",
    "10000 - Regulation",
    "Operation at Night",
    "Illusions of perception",
    "Safety During Night Operation",
    "Daylights Operation Waiver Quize",
  ];
  return (
    <div className="w-full md:w-[70%] mt-20">
      <p className="font-[400] text-[16px] leading-6 mr-0 sm:mr-10 text-justify">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature,
      </p>
      <h2 className="py-8 sm:py-10 font-[700] text-2xl">
        Course <span className="text-[#EE6122]">Content</span>
      </h2>
      {courseContentList.map((course, index) => (
        <CourseContent key={index} content={course} />
      ))}
    </div>
  );
}

export default CourseDescription;
