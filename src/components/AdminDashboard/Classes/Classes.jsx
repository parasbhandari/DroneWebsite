import DashboardHeader from "../../reusable/DashboardHeader";
import { NavLink } from "react-router-dom";
const Classes = () => {
  const data = [
    // ... your data here (replace with actual data)
    {
      id: 1,
      classId: "Product 1",
      startingDate: 2025,
      startingTime: "09:30 AM",
      endingTime: "1:30 PM ",
      availableSeats: 123,
      endingDate: 2026,
      courseName: "Computer Engineering",
    },
    {
      id: 1,
      classId: "Product 1",
      startingDate: 2025,
      startingTime: "09:30 AM",
      endingTime: "1:30 PM ",
      availableSeats: 123,
      endingDate: 2026,
      courseName: "Computer Engineering",
    },
    {
      id: 1,
      classId: "Product 1",
      startingDate: 2025,
      startingTime: "09:30 AM",
      endingTime: "1:30 PM ",
      availableSeats: 123,
      endingDate: 2026,
      courseName: "Computer Engineering",
    },
    // ... more data
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader pagename="Classes" />
      <div className="flex justify-end items-end p-4">
      <NavLink to="/admin/addclasses">
        <button className="w-fit sm:w-auto bg-(--primary-color) hover:bg-blue-700 text-white font-bold py-2 px-3 sm:px-4 rounded cursor-pointer text-[10px] sm:text-[12px] md:text-base">
          Add Classes
        </button>
        </NavLink>
      </div>

      {/* Main Content (Scrollable Table) */}
      <div className="wrapper">
      <div className="flex-1 overflow-y-auto p-2 sm:p-4 lg:p-6">
        <div className="w-full bg-white shadow-sm rounded-lg overflow-x-auto">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left text-gray-600 uppercase text-[9px] sm:text-[10px] md:text-[12px] lg:text-sm  font-semibold">
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  S No
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  Class ID
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  Starting Date
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  Starting Time
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  Ending Time
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  Available Seats
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  Ending Date
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  Course Name
                </th>

                {/* ... other table headers */}
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
                    {item.classId}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.startingDate}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.startingTime}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.endingTime}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.availableSeats}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.endingDate}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.courseName}
                  </td>
                  {/* ... other table data */}
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
  );
};

export default Classes;
