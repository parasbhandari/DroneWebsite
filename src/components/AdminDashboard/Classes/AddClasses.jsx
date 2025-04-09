import DashboardHeader from "../../reusable/DashboardHeader";
const AddClasses = () => {
  return (
    <>
      <DashboardHeader pagename="Add Classes" />
      <div className="p-8">
        <form action="" className="space-y-2">
          <div className="w-full bg-white py-3 md:py-4 flex">
            <div className="w-4/12 md:w-3/12 lg:w-2/12 text-[14px] md:text-[16px] lg:text-[18px] font-[500] px-3">
              Class Id:
            </div>
            <input
              type="text"
              className="border-none w-8/12 md:w-9/12 lg:w-10/12 outline-none px-2 text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-[#8C8C8C]"
              placeholder="Enter Classes Id"
            />
          </div>
          <div className="w-full bg-white py-3 md:py-4 flex">
            <div className="w-4/12 md:w-3/12 lg:w-2/12 text-[14px] md:text-[16px] lg:text-[18px] font-[500] px-3">
              Course Name:
            </div>
            <input
              type="text"
              className="border-none w-8/12 md:w-9/12 lg:w-10/12 outline-none px-2 text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-[#8C8C8C]"
              placeholder="Enter Course Name"
            />
          </div>
          <div className="w-full bg-white py-3 md:py-4 flex">
            <div className="w-4/12 md:w-3/12 lg:w-2/12 text-[14px] md:text-[16px] lg:text-[18px] font-[500] px-3">
              Starting Date:
            </div>
            <input
              type="text"
              className="border-none w-8/12 md:w-9/12 lg:w-10/12 outline-none px-2 text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-[#8C8C8C]"
              placeholder="Enter Starting Date"
            />
          </div>
          <div className="w-full bg-white py-3 md:py-4 flex">
            <div className="w-4/12 md:w-3/12 lg:w-2/12 text-[14px] md:text-[16px] lg:text-[18px] font-[500] px-3">
              Ending Date
            </div>
            <input
              type="text"
              className="border-none w-8/12 md:w-9/12 lg:w-10/12 outline-none px-2 text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-[#8C8C8C]"
              placeholder="Enter Ending Date"
            />
          </div>
          <div className="w-full bg-white py-3 md:py-4 flex">
            <div className="w-4/12 md:w-3/12 lg:w-2/12 text-[14px] md:text-[16px] lg:text-[18px] font-[500] px-3">
              Starting Time:
            </div>
            <input
              type="text"
              className="border-none w-8/12 md:w-9/12 lg:w-10/12 outline-none px-2 text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-[#8C8C8C]"
              placeholder="Enter Starting Time"
            />
          </div>
          <div className="w-full bg-white py-3 md:py-4 flex">
            <div className="w-4/12 md:w-3/12 lg:w-2/12 text-[14px] md:text-[16px] lg:text-[18px] font-[500] px-3">
              Ending Time:
            </div>
            <input
              type="text"
              className="border-none w-8/12 md:w-9/12 lg:w-10/12 outline-none px-2 text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-[#8C8C8C]"
              placeholder="Enter Ending Time"
            />
          </div>
          <div className="w-full bg-white py-3 md:py-4 flex">
            <div className="w-4/12 md:w-3/12 lg:w-2/12 text-[14px] md:text-[16px] lg:text-[18px] font-[500] px-3">
              Ending Time:
            </div>
            <input
              type="text"
              className="border-none w-8/12 md:w-9/12 lg:w-10/12 outline-none px-2 text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-[#8C8C8C]"
              placeholder="Enter Classes Id"
            />
          </div>
          
           <button className="text-[14px] md:text-[16px] lg:text-[18px] font-[500] text-white bg-[#0F334C] w-fit px-4 md:px-6 py-2 md:py-3 ">
            Add Classes
          </button>
           
         
        </form>
      </div>
    </>
  );
};

export default AddClasses;
