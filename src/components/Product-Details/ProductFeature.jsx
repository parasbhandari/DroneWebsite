import React from "react";

function ProductFeature({ featureIcon: Icon, featureName, featureValue }) {
  return (
    <div className="p-4 h-[64px]">
      <div className="flex gap-5 items-center"> 
        <div className="text-gray-500 text-4xl">
          <Icon /> 
        </div>
        <div>
          <p>{featureName}</p>
          <h3 className="font-bold mt-2 text-xl">{featureValue}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductFeature;
