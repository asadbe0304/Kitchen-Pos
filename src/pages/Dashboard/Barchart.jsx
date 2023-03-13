import React from "react";
import Img from "./../../assets/img/Frame.png";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  Brush,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

const Barchart = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: -3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: -2000,
      pv: -9800,
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
      uv: -1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: -3800,
      amt: 2500,
    },
    {
      name: "Page j",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page i",
      uv: 1290,
      pv: -300,
      amt: 2500,
    },
    {
      name: "Page m",
      uv: 3490,
      pv: 4880,
      amt: 2100,
    },
    {
      name: "Page v",
      uv: 2390,
      pv: -300,
      amt: 2500,
    },
    {
      name: "Page l",
      uv: 3490,
      pv: 4350,
      amt: 2100,
    },
  ];

  return (
    <div className="p-2 static-bar">
      {/* <img src={Img} alt="dashboard" /> */}
      <BarChart
        width={800}
        height={300}
        data={data}
        stackOffset="sign"
        className="barchart"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="name" height={30} stroke="#00d171" />
        <Bar dataKey="pv" fill="#00d171" stackId="stack" />
        <Bar dataKey="uv" fill="#ff684d" stackId="stack" />
      </BarChart>
      <div className="flex flex-wrap items-center justify-between">
        <span className="span font-medium w-1/2 text-sm my-2">
          {" "}
          <span className="dot bg-green-500 rounded-full w-2 py-0 px-2 mx-1 "></span>{" "}
          Buy
        </span>
        <span className="span font-medium w-1/2 text-sm my-2">
          {" "}
          <span className="dot bg-rose-500 rounded-full w-2 py-0 px-2 mx-1"></span>{" "}
          Sales
        </span>
      </div>
    </div>
  );
};

export default Barchart;
