"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Users", value: 1200 },
  { name: "Orders", value: 320 },
  { name: "Revenue", value: 940 },
];

export default function BarGraph() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow h-72">

      <h3 className="font-semibold mb-2">Stats Overview</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4f46e5" />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}