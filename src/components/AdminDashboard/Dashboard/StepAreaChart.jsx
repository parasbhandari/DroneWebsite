import React from "react";
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area, Legend } from "recharts";

const data = [
  { name: "Jan", students: 7, sales: 15 },
  { name: "Feb", students: 6, sales: 13 },
  { name: "Mar", students: 6, sales: 12 },
  { name: "Apr", students: 5, sales: 10 },
  { name: "May", students: 5, sales: 10 },
];

const StepAreaChart = () => {
  return (
    <div className="w-full max-w-screen overflow-hidden px-4">
      <div className="w-full flex justify-start">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-3/4 h-[300px] md:h-[350px] lg:h-[400px] bg-gray-100 rounded-lg shadow-md p-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 20, left: -10, bottom: 10 }}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} tickMargin={8} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  fontSize: 12,
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
              <Legend wrapperStyle={{ paddingTop: 10, fontSize: 12 }} iconSize={12} />
              <Area
                type="stepAfter"
                dataKey="students"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.4}
                name="Number of Students"
              />
              <Area
                type="stepAfter"
                dataKey="sales"
                stroke="#c2410c"
                fill="#c2410c"
                fillOpacity={0.4}
                name="Total Sales"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StepAreaChart;
