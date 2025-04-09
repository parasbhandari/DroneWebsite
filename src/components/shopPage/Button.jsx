const Button = () => {
  return (
    <div className="mx-auto w-full max-w-md px-4 py-2 sm:py-4 md:py-6">
      <div className="flex w-full gap-4 md:gap-6">
        <button className="w-6/12 text-center bg-[#0F334C] text-[14px] md:text-[16px] lg:text-[20px] font-[600] text-[#EAF6FF] py-3 cursor-pointer transition-transform duration-300 hover:scale-108">
          APPLY
        </button>
        <button className="w-6/12 text-center bg-[#F26122] text-[13px] md:text-[16px] lg:text-[20px] font-[600] text-[#EAF6FF] cursor-pointer transition-transform duration-300 hover:scale-108">
          CLEAR ALL
        </button>
      </div>
    </div>
  );
};

export default Button;
