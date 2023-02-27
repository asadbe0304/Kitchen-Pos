import React from "react";
import Img from "./../../assets/img/logo.png";
import Icon from "./../../assets/svg/home.svg";
import Log from "./../../assets/svg/sign-out-alt.svg";
import Settings from "./../../assets/svg/settings.svg";
import Check from "./../../assets/svg/bookmark.svg";
import dash from "./../../assets/svg/cross-circle.svg";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiDashboard3Fill,RiLogoutCircleRFill } from "react-icons/ri";
import {MdHistoryEdu} from "react-icons/md"
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
          <AiFillHome width={30} height={30} />
          Home
        </li>
        <li className="flex flex-col cursor-pointer items-center gap-1 hover:bg-red-500 p-4 rounded-2xl nav-item  justify-center">
          <RiDashboard3Fill width={30} height={30} />
          Dashboard
        </li>
        <li className="flex flex-col cursor-pointer items-center gap-1 hover:bg-red-500 p-4 rounded-2xl nav-item justify-center">
          <MdHistoryEdu width={30} height={30} />
          Bills
        </li>
        <li className="flex flex-col cursor-pointer items-center gap-1 hover:bg-red-500 p-4 rounded-2xl nav-item justify-center">
          <AiFillSetting width={30} height={30} />
          Settings
        </li>
      </ul>
      <button className="btn btn-log flex font-medium gap-1 mb-3 flex-col items-center justify-center">
        <RiLogoutCircleRFill width={25} height={25} />
        Log out
      </button>
    </div>
  );
};

export default index;
