import { drone1, drone2, drone3, drone4 } from "../../scripts/Images";

const HomeLogo = () => {
  const Logos = [
    {
      imageUrl: drone1,
    },
    {
      imageUrl: drone2,
    },
    {
      imageUrl: drone3,
    },
    {
      imageUrl: drone4,
    },
    {
      imageUrl: drone4,
    },
    {
      imageUrl: drone3,
    },
    {
      imageUrl: drone2,
    },
    {
      imageUrl: drone1,
    },
  ];

  return (
    <div className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="wrapper ">
        <div className="grid grid-cols-4 gap-4 ">
          {Logos.map((logo, index) => {
            return (
              <img
                key={index}
                src={logo.imageUrl}
                alt=""
                className="w-full h-16 sm:h-20 md:h-30 lg:h-40 object-cover"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeLogo;
