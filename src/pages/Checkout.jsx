import { Droneimg } from "../scripts/Images"

const Checkout = () => {
  return (
    <div className="wrapper">
      <div className="mt-[120px] mb-10">
        <h1 className="text-3xl md:text-[56px] font-bold text-black  ">Checkout</h1>
        <hr className="w-[90px] md:w-[185px] text-[#7B7B7B]" />

        <div className="flex flex-col w-full md:flex-row mt-[20px] gap-6">
          <div className="bg-[#FFFFFF] w-full md:w-[60%] p-2 lg:p-12">
            <h2 className="text-xl md:text-2xl font-semibold text-[#1E1E1E]">Shipping Address</h2>

            <div className="flex flex-col md:flex-row gap-4 md:gap-3 justify-between mt-8  ">
              <input type="text" placeholder="First Name" className="border-2 border-[#7B7B7B] p-2 md:p-3 rounded-sm w-full outline-none " />
              <input type="text" placeholder="Last Name" className="border-2 w-full  border-[#7B7B7B] p-2 md:p-3 rounded-sm outline-none" />
            </div>

            <div className="w-full mt-4">
              <input type="text" placeholder="Address 1" className="border-2 w-full border-[#7B7B7B] p-2 md:p-3 rounded-sm outline-none" />
              <input type="text" placeholder="Address 2" className="border-2 w-full border-[#7B7B7B] p-2 md:p-3 rounded-sm outline-none mt-4" />
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-3 justify-between mt-4">
              <input type="text" placeholder="City" className="border-2 w-full border-[#7B7B7B] p-2 md:p-3 rounded-sm outline-none " />
              <input type="text" placeholder="Postal Code" className="border-2 w-full border-[#7B7B7B] p-2 md:p-3 rounded-sm outline-none " />
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-3 justify-between mt-4 ">
              <input type="text" placeholder="Phone" className="border-2 w-full border-[#7B7B7B] p-2 md:p-3 rounded-sm outline-none " />
              <input type="text" placeholder="Email" className="border-2 w-full border-[#7B7B7B] p-2 md:p-3 rounded-sm outline-none" />
            </div>

            <button className="bg-[#0F334C] text-xl font-semibold px-8 text-white py-2 cursor-pointer mt-8">Checkout</button>

          </div>

          <div className="bg-[#FFFFFF] w-full md:w-[40%] p-8 flex flex-col items-start">
            <h2 className="text-2xl font-semibold text-[#1E1E1E]">Shipping Address</h2>

            <div className="flex w-full justify-between  items-center mt-10">
              <img src={Droneimg} alt="Drone Image" className=" w-[60px] sm:w-[108px] md:w-[80px] lg:w-[108px] " />

              <div className="flex flex-col">
                <h2 className="text-black text-[10px] sm:text-[16px] md:text-[12px] lg:text-[16px] font-bold">DJI MOVICE 3 <span className="text-[#F26122] text-[10px] sm:text-[16px] md:text-[12px] lg:text-[16px] font-bold">Pro</span></h2>
                <p className="text-[#1E1E1E] font-normal text-[12px] sm:text-[16px] md:text-[12px] lg:text-base mt-2">Rs 1990 X 1</p>
              </div>

              <p className="text-[10px] sm:text-[16px] md:text-[12px] lg:text-base font-semibold">Rs 1990</p>
            </div>

            <div className="flex w-full justify-between  items-center mt-10">
              <img src={Droneimg} alt="Drone Image" className=" w-[60px] sm:w-[108px] md:w-[80px] lg:w-[108px] " />

              <div className="flex flex-col">
                <h2 className="text-black text-[10px] sm:text-[16px] md:text-[12px] lg:text-[16px] font-bold">DJI MOVICE 3 <span className="text-[#F26122] text-[10px] sm:text-[16px] md:text-[12px] lg:text-[16px] font-bold">Pro</span></h2>
                <p className="text-[#1E1E1E] font-normal text-[12px] sm:text-[16px] md:text-[12px] lg:text-base mt-2">Rs 1990 X 1</p>
              </div>

              <p className="text-[10px] sm:text-[16px] md:text-[12px] lg:text-base font-semibold">Rs 1990</p>
            </div>

            <div className="mt-12 w-full">
              <p className=" text-[16px] md:text-[12px] lg:text-base font-medium text-black mt-4">Cart Totals:</p>

              <div className="flex items-center justify-between mt-4">
                <p className=" text-[16px] md:text-[12px] lg:text-base font-medium text-black "> Cart Totals: </p>
                <p className="text-base font-medium text-black ">Rs 2,288</p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className=" text-[16px] md:text-[12px] lg:text-base font-medium text-black"> Discount: </p>
                <p className=" text-[16px] md:text-[12px] lg:text-base font-medium text-black flex ">RS 25</p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className=" text-[16px] md:text-[12px] lg:text-base font-medium text-black">Shipping Charge: </p>
                <p className=" text-[16px] md:text-[12px] lg:text-base font-medium text-black">RS 150</p>
              </div>

              <hr className="mt-4" />

              <div className="flex items-center justify-between mt-4">
                <p className=" text-[16px] md:text-[12px] lg:text-base font-medium text-black">Total:</p>
                <p className=" text-[16px] md:text-[12px] lg:text-base font-bold text-[#0F334C]"> Rs 25,000.00</p>
              </div>
            </div>


          </div>


        </div>
      </div>

    </div>
  )
}
export default Checkout