import {
  AdobeExpress,
} from "../../scripts/Images";
import ShopCard from "../reusable/ShopCard";

const HomeShops = () => {
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
  ];
  return (
    <div className="mx-4 pb-20">
      <div className="mt-20 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <hr className="border-2 border-[#F26122] mr-3 w-8" />
          <p className="text-(--secondary-color) font-semibold text-lg md:text-xl">
            Featured
          </p>
          <hr className="border-2 border-[#F26122] ml-3 w-8 flex " />
        </div>

        <h2 className="text-[56px] font-bold text-(--primary-color)">Shops</h2>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center justify-between  cursor-pointer">
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
    </div>
  );
};
export default HomeShops;
