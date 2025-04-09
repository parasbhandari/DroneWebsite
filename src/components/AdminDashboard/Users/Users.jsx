import DashboardHeader from "../../reusable/DashboardHeader";

const Users = () => {
  const data = [
    // ... your data here (replace with actual data)
    {
      id: 1,
      userId: "Abc 1",
      firstName: "Hari",
      phone: 9811223344,
      email: "abc@gmai.com",
      address1: "Bharatpur-04",
      address2: "Kathmandu-01",
      city: "Chitwan",
      postalCode: 4200,
      paymentMethod: "Cash on delivery",
      lastName: "Pathak",
    },
    {
      id: 1,
      userId: "Abc 1",
      firstName: "Hari",
      phone: 9811223344,
      email: "abc@gmai.com",
      address1: "Bharatpur-04",
      address2: "Kathmandu-01",
      city: "Chitwan",
      postalCode: 4200,
      paymentMethod: "Cash on delivery",
      lastName: "Pathak",
    },
    {
      id: 1,
      userId: "Abc 1",
      firstName: "Hari",
      phone: 9811223344,
      email: "abc@gmai.com",
      address1: "Bharatpur-04",
      address2: "Kathmandu-01",
      city: "Chitwan",
      postalCode: 4200,
      paymentMethod: "Cash on delivery",
      lastName: "Pathak",
    },
    // ... more data
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader pagename="Users" />
      <div className="wrapper">
      <div className="flex justify-between items-center p-2 sm:p-4 lg:p-6">
        <div className="flex gap-2 sm:gap-3 md:gap-5">
          <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-[500] hover:border-b-2 border-[#FF8400]">
            All
          </p>
          <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-[500] hover:border-b-2 border-[#FF8400]">
            Users
          </p>
          <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-[500] hover:border-b-2 border-[#FF8400]">
            Admin
          </p>
        </div>
      </div>

      {/* Main Content (Scrollable Table) */}
      <div className="flex-1 overflow-y-auto  p-2 sm:p-4 lg:p-6">
        <div className="w-full bg-white shadow-sm rounded-lg overflow-x-auto">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left text-gray-600 uppercase text-[9px] sm:text-[10px] md:text-[12px] lg:text-sm font-semibold">
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  S No
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  User ID
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  First Name
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  Phone
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  Email
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  Address 1{" "}
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  Address 2
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  City
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  Postal Code
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  Payment Method
                </th>
                <th className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                  Last Name
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
                    {item.userId}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.firstName}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.phone}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.email}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.address1}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.address2}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.city}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.postalCode}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.paymentMethod}
                  </td>
                  <td className="py-2 md:py-3 px-1 sm:px-2 md:px-4">
                    {item.lastName}
                  </td>

                  {/* ... other table data */}
                </tr>
              ))}
            </tbody>
          </table>
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

export default Users;
