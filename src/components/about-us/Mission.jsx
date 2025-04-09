import React from "react";
import MissionImage from "../../assets/home/drones/Mission.png";
import { dronew } from "../../scripts/Images";
function Mission() {
  return (
    <div className="wrapper">
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <hr className="border-2 border-[#F26122] mr-3 w-8" />

          <p className="text-[#F26122]">Our</p>
          <hr className="border-2 border-[#F26122] ml-3 w-8" />
        </div>

        <h2 className="text-[30px] md:text-[40px] lg:text-[56px] font-bold text-(--primary-color)">
          Mission & Vision
        </h2>
      </div>
      <div className="mt-12 md:mt-20 flex flex-col xl:flex-row items-center justify-between gap-6 md:gap-10 mb-10">
        <img src={dronew} alt="mission&visionimage" className="rounded-3xl" />
        <p className="text-sm mt-4 font-[400] leading-5 md:leading-7 lg:text-[18px] text-justify">
          To Provide the variouses training about drones. Our main goal is to
          provides various knowledge reltetade drones. how to execute bdrone etc
          etc.How to run drone by our proffesional trainners . We are here to
          provide various education about drones. To Provide the variouses
          training about drones. Our main goal is to provides various knowledge
          reltetade drones. how to execute bdrone etc etc.How to run drone by
          our proffesional trainners . We are here to provide various education
          about drones. To Provide the variouses training about drones. Our main
          goal is to provides various knowledge reltetade drones. how to execute
          bdrone etc etc.How to run drone by our proffesional trainners . We are
          here to provide various education about drones. To Provide the
          variouses training about drones. Our main goal is to provides various
          knowledge reltetade drones. how to execute{" "}
        </p>
      </div>
    </div>
  );
}

export default Mission;
