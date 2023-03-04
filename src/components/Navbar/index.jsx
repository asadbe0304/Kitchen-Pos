import React from "react";
import Img from "./../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiDashboard3Fill, RiLogoutCircleRFill } from "react-icons/ri";
import { MdHistoryEdu } from "react-icons/md";
import "./style.scss";
const index = () => {
  return (
    <div className="w-24 navbar h-full p-1 bg-white flex flex-col items-center justify-between">
      <a href="/" className="logo-link underline-offset-0 p-3 mt-1">
        <img
          src={Img}
          alt="logo images"
          className="m-0 drop-shadow shadow-red-500"
        />
      </a>
      <ul className="flex flex-col nav-list list-none gap-3 items-center justify-center w-full">
        <li className="flex flex-col cursor-pointer items-center gap-1 hover:bg-red-500 p-4 rounded-2xl nav-item justify-center">
          <NavLink to="/" className={`no-underline flex items-center flex-col justify-center text-black`}>
            <AiFillHome width={30} height={30} />
            Home
          </NavLink>
        </li>
        <li className="flex flex-col cursor-pointer items-center gap-1 hover:bg-red-500 p-4 rounded-2xl nav-item  justify-center">
          <NavLink to="/dash" className={"no-underline flex items-center flex-col justify-center text-black"}>
            <RiDashboard3Fill width={30} height={30} />
            Dashboard
          </NavLink>
        </li>
        <li className="flex flex-col cursor-pointer items-center gap-1 hover:bg-red-500 p-4 rounded-2xl nav-item justify-center">
          <NavLink to="/bills" className={"no-underline flex items-center flex-col justify-center text-black"}>
            <MdHistoryEdu width={30} height={30} />
            Kitchen
          </NavLink>
        </li>
        <li className="flex flex-col cursor-pointer items-center gap-1 hover:bg-red-500 p-4 rounded-2xl nav-item justify-center">
          <NavLink to="/settings" className={"no-underline flex items-center flex-col justify-center text-black"}>
            <AiFillSetting width={30} height={30} />
            Settings
          </NavLink>
        </li>
      </ul>
      <NavLink to="/logout" className="btn btn-log flex font-medium gap-1 mb-3 flex-col items-center justify-center">
        <RiLogoutCircleRFill width={25} height={25} />
        Log out
      </NavLink>
    </div>
  );
};

export default index;
