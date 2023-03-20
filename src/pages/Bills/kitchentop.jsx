import React from "react";
import Smart from "./../../assets/img/smart.png";

const kitchentop = () => {
  return (
    <>
      <div className="flex items-center flex-col justify-center">
        <img src={Smart} width={100} height={100} alt="images" />
        <h2 className="nav-title font-bold mb-3">Welcome Kitchen</h2>
      </div>
    </>
  );
};

export default kitchentop;
