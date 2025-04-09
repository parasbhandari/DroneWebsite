import { FaStar } from "react-icons/fa";

const ShopCard = ({ imageUrl, title, initialPrice, discountedPrice }) => {
  return (

    <div className="relative flex flex-col mb-3 lg:mb-6 bg-white shadow-sm border-t-4 border-t-[var(--primary-color)] rounded-xs py-2 md:py-4 lg:py-8 transition-all duration-300 ease-in-out group">
      {/* Overlay */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-transparent transition-all duration-300 ease-in-out group-hover:from-white/30 group-hover:to-[var(--primary-color)]/80"></div>

      {/* Image */}
      <div className="relative m-2.5 overflow-hidden rounded-none">
        <img src={imageUrl} alt="card-image" />
      </div>

      {/* Content */}
      <div className="relative pl-2 sm:pl-2  md:pl-4 flex flex-col items-start justify-center text-[var(--primary-color)] group-hover:text-white">
        {/* Title */}
        <h6 className="mb-2 text-base md:text-xl lg:text-3xl font-bold">{title}</h6>

        {/* Pricing */}
        <div className="flex gap-2 md:gap-4 lg:gap-8 items-center">
          <p className="text-[#7B0000] font-medium text-[10px] md:text-[14px] group-hover:text-white ">
            <del>{initialPrice}</del>
          </p>
          <p className="font-bold text-[12px]  md:text-[15px]">{discountedPrice}</p>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 md:gap-3 mt-3 text-orange-400 group-hover:text-yellow-300">
          <FaStar className=" w-[16px] h-[16px] lg:w-[22px] lg:h-[22px]" />
          <FaStar className="w-[16px] h-[16px] lg:w-[22px] lg:h-[22px]" />
          <FaStar className="w-[16px] h-[16px] lg:w-[22px] lg:h-[22px]" />
          <FaStar className="w-[16px] h-[16px] lg:w-[22px] lg:h-[22px]" />
          <FaStar className="w-[16px] h-[16px] lg:w-[22px] lg:h-[22px]" />
        </div>

        {/* Button */}
        <button className="mt-3 sm:mt-5 border-2 border-[var(--primary-color)] text-[9px] sm:text-xs md:text-base lg:text-xl font-medium rounded-full py-0 px-1 md:px-3 md:py-2 lg:px-4 lg:py-2 group-hover:text-white group-hover:border-white">
          Add To Cart
        </button>
      </div>

    </div>
  );
};
export default ShopCard;
