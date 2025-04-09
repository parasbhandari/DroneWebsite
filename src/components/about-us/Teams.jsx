import React, { useState, useEffect } from "react";
import { Teacher1, Teacher2, Teacher3 } from "../../scripts/Images";
import TeamsCard from "../reusable/TeamsCard";

function Teams() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsData = [
    {
      imageUrl: Teacher1,
      name: "Sita Ghimire",
      job: "Drone Tutor",
    },
    {
      imageUrl: Teacher2,
      name: "Sachin Club",
      job: "Drone Tutor",
    },
    {
      imageUrl: Teacher3,
      name: "Samip Drone",
      job: "Drone Tutor",
    },
    {
      imageUrl: Teacher1,
      name: "Sita Ghimire",
      job: "Drone Tutor",
    },
  ];

  return (
    <>
      <div className="wrapper">
        <div className="mt-20 flex flex-col items-center justify-center">
          {/* Header */}
          <div className="flex items-center justify-center">
            <hr className="border-2 border-[#F26122] mr-3 w-8" />
            <p className="text-[#F26122]">Teams</p>
            <hr className="border-2 border-[#F26122] ml-3 w-8" />
          </div>
          <h2 className="text-[30px] md:text-[40px] lg:text-[56px] font-bold text-(--primary-color)">
            Meet Our Teams
          </h2>
        </div>
      </div>

      <div className={`relative w-full mb-10 ${isSmallScreen ? "overflow-x-auto" : "overflow-hidden"}`}>
        <div className={`flex w-fit space-x-6 mt-8 ${isSmallScreen ? "" : "animate-scroll"}`}>
          {cardsData.concat(cardsData).map((card, index) => (
            <TeamsCard key={index} imageUrl={card.imageUrl} name={card.name} job={card.job} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Teams;