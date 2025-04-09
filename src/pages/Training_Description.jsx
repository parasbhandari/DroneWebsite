import React from "react";
import BannerSection from "../components/reusable/BannerSection";
import CourseDescription from "../components/Training_Description/CourseDescription";
import DaylightCourse from "../components/Training_Description/DaylightCourse";
function Training_Description() {
  return (
    <div>
      <BannerSection subtitle="DJI" title="Drone Classes Description" />
      <div className="wrapper flex md:flex-row flex-col-reverse items-center md:items-start justify-center">
        <CourseDescription />
        <DaylightCourse />
      </div>

    </div>
  );
}

export default Training_Description;
