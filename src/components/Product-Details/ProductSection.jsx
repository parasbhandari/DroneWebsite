import { useState } from "react";
import Product1 from "../../assets/productDetails/Product1.png";
import ProductFeature from "./ProductFeature";
import { BsFillAirplaneFill } from "react-icons/bs";
import { IoCamera } from "react-icons/io5";
import { GiDeliveryDrone } from "react-icons/gi";
import { IoEllipseOutline } from "react-icons/io5";
import { Rating } from "@mui/material";
import DroneImg from "../../assets/productDetails/drone1.png";
// import { SideBySideMagnifier, MagnifierContainer, MagnifierPreview, MagnifierZoom } from "react-side-by-side-magnifier";

function ProductSection() {
  const [count, setCount] = useState(1);
  const [images, setImages] = useState({
    main: Product1,
    thumbnails: [DroneImg, DroneImg, DroneImg, DroneImg, DroneImg, DroneImg],
  });

  const decreseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const Features = [
    {
      featureIcon: BsFillAirplaneFill,
      featureName: "Flight Time",
      featureValue: "2 Hours",
    },
    {
      featureIcon: GiDeliveryDrone,
      featureName: "Transmission Distance",
      featureValue: "2 Km",
    },
    {
      featureIcon: IoCamera,
      featureName: "Pixels",
      featureValue: "12 MP",
    },
    {
      featureIcon: IoEllipseOutline,
      featureName: "VPS range",
      featureValue: "3 m",
    },
  ];

  const handleImageClick = (index) => {
    const newThumbnails = [...images.thumbnails];
    const oldMain = images.main;

    // Swap main image with clicked thumbnail
    setImages({
      main: newThumbnails[index],
      thumbnails: newThumbnails.map((img, i) => (i === index ? oldMain : img)),
    });
  };

  return (
    <div className="mt-16 md:mt-[120px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="wrapper flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Image Section */}
        <div className="flex-1 w-full px-4 sm:px-6 lg:px-0 max-w-xl lg:max-w-none mx-auto">
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
            <img
              src={images.main}
              alt="Main product image"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-3 lg:mt-6 lg:pl-20 lg:px-10">
            {images.thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="cursor-pointer w-full h-16 sm:h-20 md:h-24 object-cover border-2 border-transparent hover:border-primary transition-all duration-200 rounded-sm"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 lg:max-w-xl xl:max-w-2xl">
          <h1 className="font-bold text-4xl md:text-5xl xl:text-[56px] leading-tight">
            DJI MOVIC 3 <span className="text-[#F26122] font-medium">Pro</span>
          </h1>

          <div className="mt-4 space-y-2">
            <p className="line-through text-lg md:text-xl text-[#7B7B7B]">RS 80000</p>
            <h3 className="font-bold text-2xl md:text-3xl text-[#0F334C]">Rs 80000</h3>
          </div>

          <div className="mt-4 flex gap-3 text-base md:text-lg">
            <p className="text-[#7B7B7B]">Availability:</p>
            <p className="font-semibold text-[#1E1E1E]">IN STOCK</p>
          </div>

          <hr className="my-6 border-[#7b7b7b]/20" />

          <p className="text-[#7B7B7B] text-base md:text-lg lg:text-xl leading-relaxed text-justify">
            Skipping goby freshwater shark, brook trout Black swallower,
            "treefish swallower," tripod fish elasmobranch, bonefish.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {Features.map((feature, index) => (
              <ProductFeature
                key={index}
                featureName={feature.featureName}
                featureIcon={feature.featureIcon}
                featureValue={feature.featureValue}
              />
            ))}
          </div>

          <hr className="my-6 border-[#7b7b7b]/20" />

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold mb-3">Color : </h2>
              {/* Add color selection components here */}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <h2 className="text-lg font-bold">Rating : </h2>
              <Rating name="read-only" value={4} readOnly size="medium" />
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <h2 className="text-lg font-bold">Quantity : </h2>
              <div className="flex gap-3 border border-[#7B7B7B]/30 px-4 py-2 rounded">
                <button
                  onClick={decreseCount}
                  className="px-2 hover:bg-gray-100 rounded"
                >
                  -
                </button>
                <p className="text-black font-medium w-8 text-center">{count}</p>
                <button
                  onClick={increaseCount}
                  className="px-2 hover:bg-gray-100 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <hr className="my-6 border-[#7b7b7b]/20" />

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-[#0F334C] text-white px-8 py-3 sm:py-4 font-semibold rounded-lg hover:bg-[#0F334C]/90 transition-colors w-full sm:w-auto">
              ADD TO CART
            </button>
            <button className="border-2 border-[#0F334C] text-[#0F334C] px-8 py-3 sm:py-4 font-semibold rounded-lg hover:bg-[#0F334C]/10 transition-colors w-full sm:w-auto">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;