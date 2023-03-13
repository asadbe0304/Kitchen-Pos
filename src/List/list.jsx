import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { BsPrinter, BsThreeDots, } from "react-icons/bs";

const list = ({prop}) => {
  return (
    <>
      <ul className="list-none action-list w-full px-3 flex flex-col items-start gap-3">
        {prop.map((e) => {
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
    </>
  );
};

export default list;
