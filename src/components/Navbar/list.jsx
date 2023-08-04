import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiDashboard3Fill, RiLogoutCircleRFill } from "react-icons/ri";
import {FaCpanel, FaWarehouse,FaCashRegister} from "react-icons/fa"
import {FiPhoneCall} from "react-icons/fi"
import { MdHistoryEdu, MdTrackChanges } from "react-icons/md";
import {TbToolsKitchen} from "react-icons/tb"

const list = () => {
  return (
    <>
      <ul className="flex nav-list list-none gap-3 items-center justify-center w-full">
        <li className="flex flex-col items-center gap-1 rounded-2xl nav-item justify-center">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active" : "item")}
          >
            <AiFillHome width={30} height={30} />
            Home
          </NavLink>
        </li>
        <li className="flex flex-col items-center gap-1 rounded-2xl nav-item justify-center">
          <NavLink
            to="/cash"
            className={({ isActive }) => (isActive ? "active" : "item")}
          >
            <FaCashRegister width={30} height={30} />
            Cash Register
          </NavLink>
        </li>
        <li className="flex flex-col items-center gap-1 rounded-2xl nav-item  justify-center">
          <NavLink
            to="/dash"
            className={({ isActive }) => (isActive ? "active" : "item")}
          >
            <RiDashboard3Fill width={30} height={30} />
            Dashboard
          </NavLink>
        </li>
        <li className="flex flex-col items-center gap-1 rounded-2xl nav-item  justify-center">
          <NavLink
            to="/disturbition"
            className={({ isActive }) => (isActive ? "active" : "item")}
          >
            <FaCpanel width={30} height={30} />
            Cpanel
          </NavLink>
        </li>
        <li className="flex flex-col items-center gap-1  rounded-2xl nav-item  justify-center">
          <NavLink
            to="/call"
            className={({ isActive }) => (isActive ? "active" : "item")}
          >
            <FiPhoneCall width={30} height={30} />
            Call Center
          </NavLink>
        </li>
        <li className="flex flex-col items-center gap-1  rounded-2xl nav-item  justify-center">
          <NavLink
            to="/stock"
            className={({ isActive }) => (isActive ? "active" : "item")}
          >
            <FaWarehouse width={30} height={30} />
            Stock
          </NavLink>
        </li>
        <li className="flex flex-col items-center gap-1  rounded-2xl nav-item  justify-center">
          <NavLink
            to="/dash"
            className={({ isActive }) => (isActive ? "active" : "item")}
          >
            <RiDashboard3Fill width={30} height={30} />
            Dashboard
          </NavLink>
        </li>
        <li className="flex flex-col items-center gap-1  rounded-2xl nav-item justify-center">
          <NavLink
            to="/bills"
            className={({ isActive }) => (isActive ? "active" : "item")}
          >
            <TbToolsKitchen width={30} height={30} />
            Kitchen
          </NavLink>
        </li>
        <li className="flex flex-col items-center gap-1  rounded-2xl nav-item justify-center">
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "item")}
          >
            <AiFillSetting width={30} height={30} className="animate-spin" />
            Settings
          </NavLink>
        </li>
        <li className="flex flex-col items-center gap-1 rounded-2xl nav-item justify-center">
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
