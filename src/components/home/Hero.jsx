import { IoPlayCircleOutline } from "react-icons/io5";
import { HeroImg } from "../../scripts/Images";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className=" mt-[130px] flex flex-col items-center justify-center md:flex-row ">
        <div className="bg-(--background-color) items-center md:items-start  flex flex-col flex-[60%]">
          <p className="text-[#F26122] text-xl text-center md:text-start md:text-xl lg:text-2xl font-[600]">
            <span className="text-[#113046]  mr-4">|</span>Everest
            Flying Training Center
          </p>
          <h1 className="text-(--primary-color) text-4xl lg:text-[60px]  text-center md:text-start xl:text-7xl font-bold uppercase py-5">
            Everest Flying Training Center
          </h1>
          <p className=" text-xl md:text-xl lg:text-2xl font-[600] text-center md:text-start text-[#7B7B7B]">
            Everest Flying Training Center
          </p>
          <div className="flex items-center mt-5 gap-5 text-(--primary-color) hover:text-(--secondary-color) cursor-pointer"
            onClick={() => navigate("/training")}>
            <IoPlayCircleOutline size={50} />
            <p className="text-[16px] md:text-[20px] font-[600]">
              Discover More
            </p>
          </div>
        </div>
        <div className=" flex-[40%]">
          <img className="object-contain" src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
