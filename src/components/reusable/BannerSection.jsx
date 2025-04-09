import { Banner } from "../../scripts/Images"

const BannerSection = ({ subtitle, title }) => {
  return (
    <div className=" relative mt-[93px]">
      {/* Image */}
      <img
        src={Banner}
        alt="Car Image"
        className="w-full h-40 sm:h-48 md:h-56 lg:h-80 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-400 opacity-50 z-10"></div>

      <div className=" flex gap-9">
        {/* Content */}
        <div className="absolute inset-0 flex flex-col   z-20 text-white px-4 h-[100px] w-[100px] md:w-[150px] md:h-[150px] lg:h-[200px] lg:w-[200px] mt-24 sm:mt-32 md:mt-36 lg:mt-48 ml-2 md:ml-8 lg:ml-14 bg-[#0F334C] sm:px-8">
          <h2 className="text-[12px] sm:text-[16px] md:text-[16px] lg:text-[20px] mt-14 sm:mt-14 md:mt-21 lg:mt-30 ml-4 sm:ml-0 md:ml-4 lg:ml-8 ">{subtitle}</h2>
        </div>

        <div className="absolute inset-0 flex z-20 text-white text-start px-6 items-center mt-28 sm:mt-34 md:mt-44 lg:mt-55 ml-4 md:ml-14 lg:ml-24">
          <div className="flex flex-col">
            <p className="text-[#EAF6FF] font-bold text-[14px] md:text-[20px] lg:text-[32px]">{title}</p>
            <hr className="text-white  w-[30px] md:w-[50px] lg:w-[54px] mt-1 md:mt-2 lg:mt-2" />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col mt-44 z-20 text-white px-4  sm:px-8">


        </div>
      </div>
    </div>
  )
}
export default BannerSection