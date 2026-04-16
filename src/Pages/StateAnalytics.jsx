import React, { useContext } from "react";
import { ContactFriendContext } from "../context/ContactFriendProvider";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const StateAnalytics = () => {
  const { action } = useContext(ContactFriendContext);
  const callCount = action.filter((item) => item.type === "call").length;
  const textCount = action.filter((item) => item.type === "text").length;
  const videoCall = action.filter((item) => item.type === "video").length;

  const reChartData = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCall },
  ];

  const colors = ["#2F4F4F", "#7C3AED", "#22C55E"];

  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto py-16 ">
        <h2 className="text-[30px] md:text-[62px] font-bold">
          Friendship Analytics
        </h2>

        <div className="w-full bg-white p-6 rounded-lg mx-auto ">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={reChartData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                cornerRadius={8}
              >
                {reChartData.map((item, idx) => (
                  <Cell key={idx} fill={colors[idx]}></Cell>
                ))}
              </Pie>
              <Tooltip></Tooltip>
              <Legend></Legend>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StateAnalytics;
