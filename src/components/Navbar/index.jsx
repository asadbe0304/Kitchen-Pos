import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { RiDashboard3Fill, RiLogoutCircleRFill } from "react-icons/ri";
import List from "./list";
import "./style.scss";
const index = () => {
  return (
    <div className="w-full mt-20 navbar shadow-2xl h-full p-1 flex flex-col flex-wrap items-end px-2 gap-2 justify-start">
      {/* <Logo /> */}
      <List />
      <NavLink
        to="/"
        className="btn btn-log bg-red-600 p-1 rounded-lg nav-title flex font-medium gap-1 mx-3 mb-3 px-4 items-center justify-center"
      >
        <RiLogoutCircleRFill width={25} height={25} />
        Log out
      </NavLink>
    </div>
  );
};

export default index;
