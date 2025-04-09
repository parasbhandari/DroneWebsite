import React from "react";
import { HomeDroneImages } from "../../storage/HomeDb";
import "../../index.css";

const DroneImages = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="relative overflow-hidden w-full">
        <div className="flex animate-scroll">
          {HomeDroneImages.concat(HomeDroneImages).map((item, index) => (
            <div key={index} className="flex-none w-[200px] h-[150px] md:w-[350px] md:h-[220px]">
              <img
                src={item.img}
                alt={`Drone ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DroneImages;
