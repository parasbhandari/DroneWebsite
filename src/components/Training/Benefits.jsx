import { IoDocumentTextOutline } from "react-icons/io5";
import { Certificate, Document, Teacher, Van } from "../../scripts/Images";

const Benefits = () => {
  return (
    <div className="wrapper px-4">
      <div className="mt-20 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <hr className="border-2 border-[#F26122] mr-3 w-8 sm:w-12" />
          <p className="text-[#F26122] text-[16px] sm:text-[18px] md:text-[24px]">Benefits</p>
          <hr className="border-2 border-[#F26122] ml-3 w-8 sm:w-12" />
        </div>

        <div className="flex flex-col text-center mt-3 md:mt-6">
          <h2 className="text-[26px] sm:text-[36px] md:text-[46px] lg:text-[56px] font-bold text-[#0F334C]">
            Why We are the Right Choice
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 mt-6 space-y-6">
            <div className="flex flex-col items-center ">
              <img
                className=" w-[40px] md:w-[60px] lg:w-[83px] h-[40px] md:h-[60px] lg:h-[83px]"
                src={Document}
                alt=""
              />
              <h2 className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-[#0F334C] mt-4 text-center w-[117px]">
                1st Drone Academy
              </h2>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="w-[40px] md:w-[60px] lg:w-[83px] h-[40px] md:h-[60px] lg:h-[83px]"
                src={Certificate}
                alt="Certificate"
              />

              <h2 className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-[#0F334C] mt-4 text-center w-[117px]">
                International Certification
              </h2>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="w-[40px] md:w-[60px] lg:w-[83px] h-[40px] md:h-[60px] lg:h-[83px]"
                src={Teacher}
                alt="Certificate"
              />

              <h2 className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-[#0F334C] mt-4 text-center w-[117px]">
                Qualified Teachers
              </h2>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="w-[40px] md:w-[60px] lg:w-[83px] h-[40px] md:h-[60px] lg:h-[83px]"
                src={Van}
                alt="Certificate"
              />

              <h2 className="font-semibold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-[#0F334C] mt-4 text-center w-[117px]">
                International Certification
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Benefits;
