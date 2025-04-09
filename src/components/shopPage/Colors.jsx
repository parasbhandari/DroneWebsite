const Colors = () => {
  return (
    <div className="mx-auto w-full max-w-md px-4 py-2 sm:py-4 md:py-6 space-y-3">
      <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[600]">
        Colors
      </h2>
      <div className="flex justify-between">
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#0F334C] cursor-pointer transition-transform duration-300 hover:scale-110"></div>
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#F26122] cursor-pointer transition-transform duration-300 hover:scale-110"></div>
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#7B0000] cursor-pointer transition-transform duration-300 hover:scale-110"></div>
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#1E1E1E] cursor-pointer transition-transform duration-300 hover:scale-110"></div>
        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#0F334C] cursor-pointer transition-transform duration-300 hover:scale-110"></div>
      </div>
    </div>
  );
};

export default Colors;
