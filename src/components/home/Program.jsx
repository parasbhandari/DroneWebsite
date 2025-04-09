import { CardDrone1, ProgramImage2, ProgramImage3 } from "../../scripts/Images";
import ProgramsCard from "../reusable/ProgramsCard";

const HomeProgram = () => {
  const cardsData = [
    {
      imageUrl: CardDrone1,
      title: "Drone Pilot Ground",
      description: "Rs 500 - 30 Hours",
    },
    {
      imageUrl: ProgramImage2,
      title: "Drone Pilot Air",
      description: "Rs 500 - 30 Hours",
    },
    {
      imageUrl: ProgramImage3,
      title: "Drone Pilot Water",
      description: "Rs 500 - 30 Hours",
    },
  ];

  return (
    <div className="wrapper">
      <div className="mt-10 sm:mt-20 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <hr className="border-2 border-[#F26122] mr-3 w-8" />
          <p className="text-(--secondary-color) font-semibold text-lg md:text-xl">
            Training
          </p>
          <hr className="border-2 border-[#F26122] ml-3 w-8 flex" />
        </div>

        <h2 className="font-bold text-center md:text-start  text-[36px] md:text-[48px] lg:text-[56px] text-[#0F334C]">
          Programs
        </h2>
      </div>
      <div className=" mt-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
        {cardsData.map((card, index) => (
          <ProgramsCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};
export default HomeProgram;
