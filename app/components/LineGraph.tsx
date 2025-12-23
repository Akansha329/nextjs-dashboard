"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 800 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 1200 },
];

export default function LineGraph() {
  return (
<div className="bg-gray-100 p-4 rounded-lg shadow h-72">

      <h3 className="font-semibold mb-2">Monthly Growth</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#9333ea"

            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}