import { FaCaretDown } from "react-icons/fa";
import { AdobeExpress } from "../../scripts/Images";
import ShopCard from "../reusable/ShopCard";
import PriceInput from "./PriceInput";
import Availability from "./Availability";
import Colors from "./Colors";
import Button from "./Button";
import Pagination from "./Pagination";
import { useState } from "react";

const Shop = () => {
  const cardsData = [
    {
      imageUrl: AdobeExpress,
      title: "DJI MOVIC 3 Pro ",
      initialPrice: "Rs 80,000",
      discountedPrice: "Rs 60,000",
    },
    {
      imageUrl: AdobeExpress,
      title: "DJI MOVIC 3 Pro ",
      initialPrice: "Rs 80,000",
      discountedPrice: "Rs 60,000",
    },
    {
      imageUrl: AdobeExpress,
      title: "DJI MOVIC 3 Pro ",
      initialPrice: "Rs 80,000",
      discountedPrice: "Rs 60,000",
    },
    {
      imageUrl: AdobeExpress,
      title: "DJI MOVIC 3 Pro ",
      initialPrice: "Rs 80,000",
      discountedPrice: "Rs 60,000",
    },
    {
      imageUrl: AdobeExpress,
      title: "DJI MOVIC 3 Pro ",
      initialPrice: "Rs 80,000",
      discountedPrice: "Rs 60,000",
    },
    {
      imageUrl: AdobeExpress,
      title: "DJI MOVIC 3 Pro ",
      initialPrice: "Rs 80,000",
      discountedPrice: "Rs 60,000",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Change based on total products

  // Dropdown State for Sorting
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Best Selling");

  const handleSortChange = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="wrapper">
      <div className="mt-[80px] md:mt-[120px]">
        <div className="flex flex-col w-full gap-1 sm:gap-2">
          {/* Sort and selling part */}
          <div className="w-full flex justify-start md:justify-end mb-4 gap-3 sm:gap-6 md:gap-12">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-[500] text-[#0F334C] flex items-center gap-1 sm:gap-2 md:gap-3"
              >
                Sort by:{" "}
                <span className="font-[600]">{sortOption}</span>
                <FaCaretDown
                  className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-md z-10">
                  <ul className="py-2">
                    {["Best Selling", "Price: Low to High", "Price: High to Low", "Newest Arrivals"].map(
                      (option) => (
                        <li
                          key={option}
                          onClick={() => handleSortChange(option)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {option}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* bg:- white part */}
          <div className="w-full flex flex-col sm:flex sm:flex-row gap-8">
            <div className="w-full sm:w-[35%] lg:w-[40%] bg-white h-fit space-y-2 sm:space-y-6 md:space-y-8 lg:space-y-14 py-6 sm:py-12 md:py-20 px-4 sm:px-0">
              <PriceInput />
              <Availability />
              <Colors />
              <Button />
            </div>

            {/* Cart Section */}
            <div className="w-full sm:w-[60%]">
              <div className="w-full grid grid-cols-2 gap-5 sm:gap-7 md:gap-9">
                {cardsData.map((card, index) => (
                  <ShopCard
                    key={index}
                    imageUrl={card.imageUrl}
                    title={card.title}
                    initialPrice={card.initialPrice}
                    discountedPrice={card.discountedPrice}
                  />
                ))}
              </div>

              {/* Pagination */}
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
