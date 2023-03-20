import React from "react";
import Smart from "./../../assets/img/smart.png";
import "./style.scss";

const index = () => {
  return (
    <>
      <div className="pt-20">
        <div className="container">
          <div className="kitchen rounded-md shadow-lg shadow-slate-400 ">
            <div className="flex items-center flex-col justify-center">
              <img src={Smart} width={100} height={100} alt="images" />
              <h2 className="nav-title font-bold mb-3">Welcome Kitchen</h2>
            </div>
            <hr /><hr />
            <div className="flex items-center justify-between w-full">
              <h2 className="nav-title font-medium">Orders</h2>
              <p className="order-count nav-title font-medium">20 piece</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
