import React from "react";
import Header from "./../../components/Header";
import Analytic from "./analytic";
import TransAction from "./transAction";
import Statics from "./statics";
import Bar from "./Barchart"
import "./style.scss";

const index = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="dashboard">
        <div className="container">
          <div className="dashboard-invoices">
            <Analytic />
            <div className="w-full flex items-start latest-action justify-between gap-2 px-3 mt-8 mb-20">
              <TransAction />
              <Statics />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
