import { useState } from "react";

const PriceInput = () => {
  const [range, setRange] = useState([0, 2000000]);

  const handleRangeChange = (e) => {
    setRange([0, parseInt(e.target.value)]);
  };

  return (
    <div className="mx-auto w-full max-w-md px-4 pt-2 sm:pt-4 md:pt-6">
      <div className="mb-4">
        <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[600] mb-4 text-left">
          Price
        </h2>
      </div>

      <div className="relative space-y-6">
        <input
          type="range"
          min="0"
          max="2000000"
          value={range[1]}
          onChange={handleRangeChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, 
              #1e3a8a 0%,
              #1e3a8a ${(range[1] / 2000000) * 100}%,
              #e5e7eb ${(range[1] / 2000000) * 100}%,
              #e5e7eb 100%)`,
          }}
        />
        <div className="flex justify-between text-sm text-gray-600 ">
          <span className="text-[12px] font-[400] text-[#7B7B7B]">
            Rs {range[0]}
          </span>
          <span className="text-[12px] font-[400] text-[#7B7B7B]">
            Rs {range[1].toLocaleString()}
          </span>
        </div>

        {/* Custom thumb style */}
        <style>{`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 24px;
            height: 24px;
            background: #1e3a8a;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          input[type="range"]::-moz-range-thumb {
            width: 24px;
            height: 24px;
            background: #1e3a8a;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </div>
    </div>
  );
};

export default PriceInput;
