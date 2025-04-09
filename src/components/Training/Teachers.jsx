import { Teacher1, Teacher2, Teacher3 } from "../../scripts/Images";
import TeamsCard from "../reusable/TeamsCard";

const Teachers = () => {
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
  ];

  return (
    <div className="wrapper">
      <div className="mt-8 sm:mt-14 md:mt-20 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">

          <hr className="border-2 border-[#F26122] mr-3 w-8 sm:w-12" />

          <p className="text-[#F26122] text-[16px] sm:text-[18px] md:text-[24px]">
            Teachers
          </p>
          <hr className="border-2 border-[#F26122] ml-3 w-8 sm:w-12" />

        </div>

        <h2 className="text-[26px] sm:text-[36px] md:text-[46px] lg:text-[56px] font-bold text-(--primary-color)">
          Meet Our Teachers
        </h2>
      </div>
      <div className=" mt-10 mb-20 flex flex-col sm:flex-row gap-4 items-center justify-between">
        {cardsData.map((card, index) => (
          <TeamsCard
            key={index}
            imageUrl={card.imageUrl}
            name={card.name}
            job={card.job}
          />
        ))}
      </div>
    </div>
  );
};
export default Teachers;
