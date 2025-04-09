import React from "react";

function DescriptionDetails({ descriptionName, descriptionValue }) {
  return (
    <div className="w-full px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-3 border-b border-gray-100">
        <p className="text-base sm:text-lg font-medium text-gray-900">
          {descriptionName}
        </p>
        <p className="text-base sm:text-lg font-medium text-gray-500">
          {descriptionValue}
        </p>
      </div>
    </div>
  );
}

export default DescriptionDetails;
