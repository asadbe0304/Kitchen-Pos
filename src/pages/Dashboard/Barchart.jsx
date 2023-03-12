import React from "react";
import Img from "./../../assets/img/Frame.png";

const Barchart = () => {
  return (
    <div className="p-2">
      <img src={Img} alt="dashboard" />
      <div className="flex flex-wrap items-center justify-between">
        <span className="span font-medium w-1/2 text-sm my-2">
          {" "}
          <span className="dot bg-green-500 rounded-full w-2 py-0 px-2 mx-1 "></span>{" "}
          Green
        </span>
        <span className="span font-medium w-1/2 text-sm my-2">
          {" "}
          <span className="dot bg-orange-500 rounded-full w-2 py-0 px-2 mx-1"></span>{" "}
          Yellow
        </span>
        <span className="span font-medium w-1/2 text-sm my-2">
          {" "}
          <span className="dot bg-red-500 rounded-full w-2 py-0 px-2 mx-1"></span>
          Red
        </span>
        <span className="span font-medium w-1/2 text-sm my-2">
          {" "}
          <span className="dot bg-cyan-500 rounded-full w-2 py-0 px-2 mx-1"></span>{" "}
          Blue
        </span>
      </div>
    </div>
  );
};

export default Barchart;
