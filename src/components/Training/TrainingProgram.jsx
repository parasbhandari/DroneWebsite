import { CardDrone1, ProgramImage2, ProgramImage3 } from "../../scripts/Images";
import ProgramsCard from "../reusable/ProgramsCard";

const TrainingProgram = () => {
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
      <div className="mt-20 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <hr className="border-2 border-[#F26122] mr-3 w-8 sm:w-12" />
          <p className="text-[#F26122] text-[16px] sm:text-[18px] md:text-[24px]">
            Ongoing Process
          </p>
          <hr className="border-2 border-[#F26122] ml-3 w-8 sm:w-12" />
        </div>
        <h2 className="text-[26px] sm:text-[36px] md:text-[46px] lg:text-[56px] font-bold text-(--primary-color)">
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
export default TrainingProgram;
