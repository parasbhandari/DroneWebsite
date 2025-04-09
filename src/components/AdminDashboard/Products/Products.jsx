import DashboardHeader from "../../reusable/DashboardHeader";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const data = [
    // ... your data here (replace with actual data)
    {
      id: 1,
      productID: "ABC123",
      droneModel: "Mokac 123",
      description: "Efg....",
      basePrice: 10000,
      realPrice: 100000,
      availability: "In Stock",
      flightTime: "1Hrs",
      transmission: "Transmission",
      pixels: "Pixels",
      vpsRange: "VPS Range",
      color: "Red",
      rating: "4 star",
      quantity: "10",
    },
    {
      id: 2,
      productID: "ABC123",
      droneModel: "Mokac 123",
      description: "Abc....",
      basePrice: 20000,
      realPrice: 80000,
      availability: "Out Of Stock",
      flightTime: "3Hrs",
      transmission: "Transmission",
      pixels: "Pixels",
      vpsRange: "VPS Range",
      color: "Black",
      rating: "5 star",
      quantity: "10",
    },
    {
      id: 3,
      productID: "ABC123",
      droneModel: "Mokac 123",
      description: "Abc....",
      basePrice: 20000,
      realPrice: 80000,
      availability: "In Stock",
      flightTime: "3Hrs",
      transmission: "Transmission",
      pixels: "Pixels",
      vpsRange: "VPS Range",
      color: "White",
      rating: "5 star",
      quantity: "10",
    },
    {
      id: 4,
      productID: "ABC123",
      droneModel: "Mokac 123",
      description: "Abc....",
      basePrice: 20000,
      realPrice: 80000,
      availability: "Out Of Stock",
      flightTime: "3Hrs",
      transmission: "Transmission",
      pixels: "Pixels",
      vpsRange: "VPS Range",
      color: "Black",
      rating: "5 star",
      quantity: "10",
    },
    {
      id: 5,
      productID: "ABC123",
      droneModel: "Mokac 123",
      description: "Abc....",
      basePrice: 20000,
      realPrice: 80000,
      availability: "In Stock",
      flightTime: "3Hrs",
      transmission: "Transmission",
      pixels: "Pixels",
      vpsRange: "VPS Range",
      color: "White",
      rating: "5 star",
      quantity: "10",
    },
    // ... more data
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader pagename="Products" />
      <div className="">
    <div className="w-[90%] lg:w-[80%] 2xl:w-[95%] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 sm:p-4">
        <h1 className="text-[12px] sm:text-[14px] md:text-md mx-2 sm:mx-4 mb-2 sm:mb-0">
          All Drone Model
        </h1>
        <button
          onClick={() => navigate("/admin/products/add")}
          className="w-fit sm:w-auto bg-(--primary-color) hover:bg-blue-700 text-white font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded cursor-pointer text-[10px] sm:text-[12px] md:text-base"
        >
          Add Products
        </button>
      </div>

      {/* Main Content (Scrollable Table) */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-4 lg:p-6 wrapper">
        <div className="w-full bg-white shadow-sm rounded-lg overflow-x-auto">
          <div className="min-w-max">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-left text-gray-600 uppercase text-[9px] sm:text-[10px] md:text-[12px] lg:text-sm font-semibold">
                  <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">S No</th>
                  <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    Product ID
                  </th>
                  <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    Drone Model
                  </th>
                  <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    Description
                  </th>
                  <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    Base Price
                  </th>
                  <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    Real Price
                  </th>
                  <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    Availability
                  </th>
                  <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    Flight Time
                  </th>
                  <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    Transmission
                  </th>
                  <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">Pixels</th>
                  <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    VPS Range
                  </th>
                  <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">Color</th>
                  <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">Rating</th>
                  <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 text-[9px] sm:text-[10px] md:text-[12px] lg:text-sm"
                  >
                    <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                      {index + 1}
                    </td>
                    <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                      {item.productID}
                    </td>
                    <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                      {item.droneModel}
                    </td>
                    <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                      {item.description}
                    </td>
                    <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                      {item.basePrice}
                    </td>
                    <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                      {item.realPrice}
                    </td>
                    <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                      {item.availability}
                    </td>
                    <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                      {item.flightTime}
                    </td>
                    <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                      {item.transmission}
                    </td>
                    <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                      {item.pixels}
                    </td>
                    <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                      {item.vpsRange}
                    </td>
                    <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                      {item.color}
                    </td>
                    <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                      {item.rating}
                    </td>
                    <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                      {item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-2 sm:my-4 space-x-1 sm:space-x-2">
        <button className="px-2 sm:px-3 py-1 rounded bg-white border border-gray-300 hover:bg-gray-100 text-sm sm:text-base">
          &lt;
        </button>
        <button className="px-2 sm:px-3 py-1 rounded bg-(--primary-color) text-white hover:bg-blue-700 text-sm sm:text-base">
          1
        </button>
        <button className="px-2 sm:px-3 py-1 rounded bg-white border border-gray-300 hover:bg-gray-100 text-sm sm:text-base">
          &gt;
        </button>
      </div>
      </div>
    </div>
  );
};

export default Products;
