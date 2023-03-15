import React from "react";
import Header from "./../../components/Header";
import Analytic from "./analytic";
import TransAction from "./transAction";
import Statics from "./statics";
import Balance from "./Balance";
import "./style.scss";

const index = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="dashboard">
        <div className="container">
          <div className="dashboard-invoices pt-20">
            <Analytic />
            <div className="w-full dashboard-graphics flex flex-col items-start justify-between gap-2 px-3 mt-8 mb-20">
              <div className="w-full flex items-start justify-between gap-2 latest-action">
                <TransAction />
                <Statics />
              </div>
              <Balance />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
