const Availability = () => {
  return (
    <div className="mx-auto w-full max-w-md px-4 py-2 sm:py-4 md:py-6 space-y-3">
      <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[600]">Availability</h2>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <input type="checkbox" />
          <p className="text-[14px] lg:text-[16px] font-[500] text-[#0F334C]">
            In Stock
          </p>
        </div>
        <h2 className="text-[14px] lg:text-[16px] font-[500] text-[#0F334C]">
          (23)
        </h2>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <input type="checkbox" />
          <p className="text-[14px] lg:text-[16px] font-[500] text-[#0F334C]">
            Out of Stock
          </p>
        </div>
        <h2 className="text-[14px] lg:text-[16px] font-[500] text-[#0F334C]">
          (1)
        </h2>
      </div>
    </div>
  );
};

export default Availability;
