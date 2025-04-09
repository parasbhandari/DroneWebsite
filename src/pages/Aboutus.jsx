import React from "react";
import Mission from "../components/about-us/Mission";
import DroneInfo from "../components/about-us/DroneInfo";
import PopularItem from "../components/about-us/PopularItem";
import Teams from "../components/about-us/Teams";
import BannerSection from "../components/reusable/BannerSection";
function Aboutus() {
  return <div>
    <BannerSection subtitle="Who we are." title="About Us" />
    <DroneInfo />
    <Mission />
    <PopularItem />
    <Teams />
  </div>;
}

export default Aboutus;
