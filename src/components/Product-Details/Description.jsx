import React from 'react';
import DescriptionDetail from './DescriptionDetail';

function Description() {
  const DescriptionDetails = [
    { name: "Manufacture", value: "China" },
    { name: "Length", value: "322 Mm" },
    { name: "Height", value: "84 mm" },
    { name: "Type Of", value: "Finished Modal" },
    { name: "Battery", value: "3850 MAh" },
    { name: "Flight Time", value: "31 minutes (with a sequential 25 km / h)" },
    { name: "Flight Altitude", value: "500 M" },
    { name: "Range of Equipment", value: "5 Km" },
    { name: "Receiver Included", value: "Frequency: 2.4 - 2.448 GHz" }
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="space-y-6">
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Description
            </h2>
            <hr className="w-20 sm:w-40 h-0.5 bg-gray-200 mt-4" />
          </div>

          <p className="text-base sm:text-lg font-medium leading-relaxed text-gray-600 text-justify">
            Awesome product! River stingray giant danio horn shark flabby whalefish 
            golden dojo. Black angelfish silver carp electric stargazer Atlantic 
            saury ground shark hammerhead shark yellowtail kingfish cow shark 
            Spanish mackerel. Taimen mackerel shark bigmouth buffalo white shark 
            blue gourami paperbone pilot fish anglerfish, electric ray wahoo. 
            Wolf-herring.
          </p>

          <div className="mt-8 space-y-1">
            {DescriptionDetails.map((description, index) => (
              <DescriptionDetail
                key={index}
                descriptionName={description.name}
                descriptionValue={description.value}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Description;
