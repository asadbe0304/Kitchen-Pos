import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { RiDashboard3Fill, RiLogoutCircleRFill } from "react-icons/ri";
import List from "./list";
import "./style.scss";
const index = () => {
  return (
    <div className="w-24 navbar shadow-2xl h-full p-1 flex flex-col items-center justify-between">
      <Logo />
      <List />
      <NavLink
        to="/logout"
        className="btn btn-log nav-title flex font-medium gap-1 mb-3 flex-col items-center justify-center"
      >
        <RiLogoutCircleRFill width={25} height={25} />
        Log out
      </NavLink>
    </div>
  );
};

export default index;
