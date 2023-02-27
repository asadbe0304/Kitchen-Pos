import React from "react";
import { useState } from "react";
import SearchImg from "./../../assets/svg/search.svg";
import Notif from "./../../assets/svg/mode-portrait.svg";
import Avatar from "./../../assets/img/2.jpg";
import { MdNotifications } from "react-icons/md";
import Cart from "./../../assets/svg/shopping-cart.svg";
import Logo from "./../../assets/img/logo.png";
import Profile from "./profile";
import { useOrder } from "../../context/context";
import "./style.scss";
const index = () => {
  const {
    state: { profile, order },
    dispatch,
  } = useOrder();
  return (
    <div className="site-header">
      <div className="container">
        <div className="header bg-white rounded-md  p-2 px-4 shadow-md flex align-middle justify-between ">
          <h1 className="fw-bold header-title flex flex-col items-start text-black-900 text-2xl font-medium">
            System
            <span
              className="text-slate-500 font-medium text-sm text-end "
              style={{ fontStyle: "italic" }}
            >
              Managment
            </span>
          </h1>
          {/* <img src={Logo} alt="" /> */}
          <div className="input flex items-center justify-center">
            <label htmlFor="search" className="relative">
              <img
                src={SearchImg}
                className="search-icon cursor-pointer absolute top-3 right-3"
                alt="search icon"
                width={14}
                height={14}
              />
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search ex:coffe tea.."
                className="border p-2 rounded-xl outline-0 border-b-green-50"
              />
            </label>
          </div>
          <div className="flex items-center relative justify-between gap-3">
            <MdNotifications className="notif animate-bounce" />
            <div
              className="relative cart-order"
              onClick={() => dispatch({ type: "ORDER__CART", payload: true })}
            >
              <img src={Cart} alt="images" width={20} height={20} />
              <span className="count-order absolute bg-amber-500 px-2 p-0 text-sm text-white rounded-full">
                {order.length}
              </span>
            </div>
              <img
                src={Avatar}
                alt=""
                className="rounded-full cursor-pointer hover:animate-pulse shadow-sm"
                width={40}
                height={40}
                onClick={(e) =>
                  dispatch({ type: "PROFILE", payload: profile ? false : true })
                }
              />
            <div
              className={`profile shadow-black shadow-md flex flex-col items-start bg-slate-300 border-red-300 ${
                profile ? "block" : "hidden"
              }`}
            >
              <h2 className="font-medium"> Hi Admin </h2>
              <ul className="list-none flex flex-col items-start gap-3 border-t-2">
                <li className="text-black font-medium text-md">Profile</li>
                <li className="text-black font-medium text-md">Theme</li>
                <li className="text-black font-medium text-md">Language</li>
              </ul>
              <div className="triang bg-slate-300"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <Profile /> */}
    </div>
  );
};

export default index;
