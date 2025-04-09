import DashboardHeader from "../../reusable/DashboardHeader"

const AddProducts = () => {
  return (
    <div>

      <DashboardHeader pagename="Add Classes" />
      <div className="wrapper">

      <div className="max-w-full mx-auto p-6 bg-gray-100 rounded-lg">
        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4">
            <label className="w-full sm:w-1/4 font-medium text-lg text-black">Product Id</label>
            <input
              type="text"
              placeholder="Enter Product Id"
              className="w-full sm:w-3/4 p-2 border rounded-md bg-[#FFF8F0] text-[#8C8C8C]"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4">
            <label className="w-full sm:w-1/4 font-medium  text-lg text-black">Drone Model</label>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="w-full sm:w-3/4 p-2 border rounded-md bg-[#FFF8F0] text-[#8C8C8C]"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4">
            <label className="w-full sm:w-1/4 font-medium text-lg  text-black">Description </label>
            <input
              type="text"
              placeholder="Enter Product Category"
              className="w-full sm:w-3/4 p-2 border rounded-md bg-[#FFF8F0] text-[#8C8C8C]"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4">
            <label className="w-full sm:w-1/4 font-medium text-lg  text-black">Base Price</label>
            <input
              type="text"
              placeholder="Enter Product Brand"
              className="w-full sm:w-3/4 p-2 border rounded-md bg-[#FFF8F0] text-[#8C8C8C]"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4">
            <label className="w-full sm:w-1/4 font-medium text-lg  text-black">Real Price</label>
            <input
              type="text"
              placeholder="Enter Product Quantity"
              className="w-full sm:w-3/4 p-2 border rounded-md bg-[#FFF8F0] text-[#8C8C8C]"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4">
            <label className="w-full sm:w-1/4 font-medium text-lg  text-black">Availability</label>
            <input
              type="text"
              placeholder="Enter Product Stock Value"
              className="w-full sm:w-3/4 p-2 border rounded-md bg-[#FFF8F0] text-[#8C8C8C]"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4">
            <label className="w-full sm:w-1/4 font-medium text-lg  text-black">Flight Time</label>
            <input
              type="text"
              placeholder="Enter Product Stock Value"
              className="w-full sm:w-3/4 p-2 border rounded-md bg-[#FFF8F0] text-[#8C8C8C]"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4">
            <label className="w-full sm:w-1/4 font-medium text-lg  text-black">Transmission</label>
            <input
              type="text"
              placeholder="Enter Product Stock Value"
              className="w-full sm:w-3/4 p-2 border rounded-md bg-[#FFF8F0] text-[#8C8C8C]"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4">
            <label className="w-full sm:w-1/4 font-medium text-lg  text-black">Pixels</label>
            <input
              type="text"
              placeholder="Enter Product Stock Value"
              className="w-full sm:w-3/4 p-2 border rounded-md bg-[#FFF8F0] text-[#8C8C8C]"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4">
            <label className="w-full sm:w-1/4 font-medium text-lg  text-black">VPS Range</label>
            <input
              type="text"
              placeholder="Enter Product Stock Value"
              className="w-full sm:w-3/4 p-2 border rounded-md bg-[#FFF8F0] text-[#8C8C8C]"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4">
            <label className="w-full sm:w-1/4 font-medium text-lg  text-black">Color</label>
            <input
              type="text"
              placeholder="Enter Product Stock Value"
              className="w-full sm:w-3/4 p-2 border rounded-md bg-[#FFF8F0] text-[#8C8C8C]"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4">
            <label className="w-full sm:w-1/4 font-medium text-lg  text-black">Rating</label>
            <input
              type="text"
              placeholder="Enter Product Stock Value"
              className="w-full sm:w-3/4 p-2 border rounded-md bg-[#FFF8F0] text-[#8C8C8C]"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4">
            <label className="w-full sm:w-1/4 font-medium text-lg  text-black">Quantity</label>
            <input
              type="text"
              placeholder="Enter Product Stock Value"
              className="w-full sm:w-3/4 p-2 border rounded-md bg-[#FFF8F0] text-[#8C8C8C]"
            />
          </div>

          <button className='bg-[#0F334C] text-lg font-medium px-4 py-2 text-white mt-6'>Add Product</button>
        </form>
      </div>

     </div>
    </div>
  )
}
export default AddProducts