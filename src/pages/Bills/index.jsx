import React from "react";
import "./style.scss";
import Top from "./kitchentop";
import OrderTop from "./ordertop";
import Kitchen from "./kitchenorder";
const index = () => {
  return (
    <>
      <div className="pt-20">
        <div className="container">
          <div className="kitchen rounded-md shadow-lg shadow-slate-400 ">
            <Top />
            <OrderTop />
            <Kitchen />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
