import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Legend,
} from "recharts";

const activity = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
  return (
    <>
      <div className="bg-white  p-5 rounded-xl shadow-lg shadow-slate-500">
        <div className="mb-5">
        <h3 className="font-medium">Activity</h3>
        <strong className="font-medium"> $ 345,34</strong>
        </div>
        <div className="w-full ">
        <BarChart
          width={300}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Cell/>
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#FF1040" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        </div>
      </div>
    </>
  );
};

export default activity;
