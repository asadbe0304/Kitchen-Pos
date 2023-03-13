import React from "react";
import Img from "./../../assets/svg/elip.png";
import Activity from "./activity";
import { BsThreeDots } from "react-icons/bs";

const Balance = () => {
  return (
    <>
      <div className="wrapper-balance  w-full flex items-start  justify-between py-3 gap-2 px-1 mt-8 mb-20">
        <div className="balance shadow-lg shadow-slate-500">
          <div className="bg-balance">
            <div className="flex justify-between gap-4 flex-col items-start">
              <div className="flex justify-between flex-col items-start">
                <h4 className="text-white font-medium text-sm">Balance</h4>
                <div className="flex items-center justify-between w-full">
                  <strong className="text-white">$4,989</strong>
                  <p className="text-white w-full flex items-center justify-between gap-2 ml-14">
                    <BsThreeDots />
                    <BsThreeDots />
                    <BsThreeDots />
                    4565
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center gap-2 justify-between">
                <div>
                  <p className="text-white text-sm font-medium">Valid thru</p>
                  <span className="text-white font-medium text-sm">02/23</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Name</p>
                  <span className="text-white font-medium text-sm">
                    John Doe
                  </span>
                </div>
                <div className="relative">
                  <img src={Img} width={30} height={30} alt="ellipces" />
                  <img
                    className="absolute z-10 top-0 left-4"
                    src={Img}
                    width={30}
                    height={30}
                    alt="ellipces"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px" }}
          className="balance-details shadow-lg shadow-slate-500 flex flex-col items-start gap-1 p-10"
        >
          <div className="details flex flex-col items-start justify-between">
            <h4 className="nav-title text-sm font-bold">Balance Details</h4>
            <div className="flex flex-col items-start gap-1">
              <span className="text-zinc-500 font-medium total-title mb-0 mt-3">
                Total Balance
              </span>
              <strong className="nav-title m-0 mb-4 total-price-title">
                $232,345
              </strong>
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-3">
            <div
              style={{ width: "100px" }}
              className="flex flex-col items-start rounded-lg p-2 bg-blue-600"
            >
              <span className="text-white text-sm">Last month</span>
              <strong className="nav-title font-medium text-sm">$14,557</strong>
            </div>
            <div
              style={{ width: "100px" }}
              className="flex flex-col items-start rounded-lg p-2 bg-zinc-200"
            >
              <span className="text-black text-sm">Expenses</span>
              <strong className="nav-title font-medium text-sm">$4,557</strong>
            </div>
            <div
              style={{ width: "100px" }}
              className="flex flex-col items-start rounded-lg p-2 bg-zinc-200"
            >
              <span className="text-black text-sm">Taxes</span>
              <strong className="nav-title font-medium text-sm">$1,557</strong>
            </div>
            <div
              style={{ width: "100px" }}
              className="flex flex-col items-start rounded-lg p-2 bg-zinc-200"
            >
              <span className="text-black text-sm">Debt</span>
              <strong className="nav-title font-medium text-sm">$14,557</strong>
            </div>
          </div>
        </div>
        <div className="activity">
          <Activity />
        </div>
      </div>
    </>
  );
};

export default Balance;
