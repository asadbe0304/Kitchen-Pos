import React from "react";
import { FaFileInvoice, FaInnosoft } from "react-icons/fa";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const analytic = () => {
  return (
    <>
      <div className="flex flex-wrap mt-6 py-1 px-3 justify-between items-start gap-2">
        <div className="dashboard-invoice shadow-lg shadow-slate-500 bg-green-500">
          <div className="flex justify-start after-cirlce items-center gap-2">
            <div className="p-1 bg-slate-300 rounded-md v">
              <FaFileInvoice />
            </div>
            <div className="flex flex-col m-0 items-start justify-start">
              <strong className="m-0 nav-title text-sm">32,568</strong>
              <p
                className="m-0 nav-title font-medium"
                style={{ fontSize: "10px", wordSpacing: "0.5px" }}
              >
                Total Invoices
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-invoice shadow-lg shadow-slate-500 bg-cyan-500">
          <div className="flex after-cirlce justify-start items-center gap-2">
            <div className="p-1 bg-slate-300 rounded-md v">
              <AiFillCheckCircle />
            </div>
            <div className="flex flex-col m-0 items-start justify-start">
              <strong className="m-0 nav-title text-sm">8,568</strong>
              <p
                className="m-0 nav-title font-medium"
                style={{ fontSize: "10px", wordSpacing: "0.5px" }}
              >
                Paid invoices
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-invoice shadow-lg shadow-slate-500 bg-amber-500">
          <div className="flex justify-start items-center after-cirlce gap-2">
            <div className="p-1 bg-slate-300 rounded-md v">
              <AiFillCloseCircle />
            </div>
            <div className="flex flex-col m-0 items-start justify-start">
              <strong className="m-0 nav-title text-sm">2,568</strong>
              <p
                className="m-0 nav-title font-medium"
                style={{ fontSize: "10px", wordSpacing: "0.5px" }}
              >
                Unpaid Invoices
              </p>
            </div>
          </div>
        </div>
        <div className="dashboard-invoice shadow-lg shadow-slate-500 nav-title bg-red-500">
          <div className="flex justify-start after-cirlce items-center gap-2">
            <div className="p-1 bg-slate-300 rounded-md v">
              <FaInnosoft />
            </div>
            <div className="flex flex-col m-0 items-start justify-start">
              <strong className="m-0 nav-title text-sm">668</strong>
              <p
                className="m-0 nav-title font-medium"
                style={{ fontSize: "10px", wordSpacing: "0.5px" }}
              >
                Total Invoices sent
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default analytic;
