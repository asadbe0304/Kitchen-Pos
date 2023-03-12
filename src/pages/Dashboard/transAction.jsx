import React from "react";
// import { , AiFillPrinter } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { BsThreeDots, BsPrinter } from "react-icons/bs";

const transAction = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="transaction p-1 w-full rounded-xl shadow-lg shadow-slate-500">
      <h2 className="font-medium nav-title my-4 px-3">Latest Transactions</h2>
      <ul className="list-none w-full px-3 flex flex-col items-start gap-3">
        {data.map((e) => {
          return (
            <li
              key={e}
              className="flex w-full items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <div
                  style={{ width: "30px", height: "30px" }}
                  className="bg-blue-600 rounded-lg"
                ></div>
                <div className="flex flex-col m-0 items-start justify-center gap-1">
                  <span className="nav-title text-sm font-medium m-0 text-blue-400">
                    #KLA-237-393-950
                  </span>
                  <strong className="nav-title m-0 text-sm font-medium">
                    CodeAstrology.com
                  </strong>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-slate-400 p-2 rounded-lg">
                  <FaCheckCircle />
                </div>
                <div className="flex flex-col m-0 items-start justify-center gap-1">
                  <span className="nav-title font-medium m-0">Amount</span>
                  <strong className="nav-title m-0 font-medium">
                    $ 4,566,67
                  </strong>
                </div>
              </div>
              <div className="nav-title">5 min ago</div>
              <div className="flex items-center gap-3 justify-between">
                <BsPrinter
                  style={{ width: "25px", height: "25px" }}
                  className="nav-title cursor-pointer"
                />
                <BsThreeDots
                  className="nav-title"
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-center gap-2">
      
      </div>
    </div>
  );
};

export default transAction;
