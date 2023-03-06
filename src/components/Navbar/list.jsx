import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiDashboard3Fill, RiLogoutCircleRFill } from "react-icons/ri";
import { MdHistoryEdu, MdTrackChanges } from "react-icons/md";
import {TbToolsKitchen} from "react-icons/tb"

const list = () => {
  return (
    <>
      <ul className="flex flex-col nav-list list-none gap-3 items-center justify-center w-full">
        <li className="flex flex-col items-center gap-1 p-4 rounded-2xl nav-item justify-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "item")}
          >
            <AiFillHome width={30} height={30} />
            Home
          </NavLink>
        </li>
        <li className="flex flex-col items-center gap-1 p-4 rounded-2xl nav-item  justify-center">
          <NavLink
            to="/dash"
            className={({ isActive }) => (isActive ? "active" : "item")}
          >
            <RiDashboard3Fill width={30} height={30} />
            Dashboard
          </NavLink>
        </li>
        <li className="flex flex-col items-center gap-1 p-4 rounded-2xl nav-item justify-center">
          <NavLink
            to="/bills"
            className={({ isActive }) => (isActive ? "active" : "item")}
          >
            <TbToolsKitchen width={30} height={30} />
            Kitchen
          </NavLink>
        </li>
        <li className="flex flex-col items-center gap-1 p-4 rounded-2xl nav-item justify-center">
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "item")}
          >
            <AiFillSetting width={30} height={30} className="animate-spin" />
            Settings
          </NavLink>
        </li>
        <li className="flex flex-col items-center gap-1 p-4 rounded-2xl nav-item justify-center">
          <NavLink
            to="/track"
            className={({ isActive }) => (isActive ? "active" : "item")}
          >
            <MdTrackChanges width={30} height={30} className="animate-spin" />
            Attendance
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default list;
