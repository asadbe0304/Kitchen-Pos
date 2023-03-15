import React from "react";
import { useState, useEffect } from "react";
import SearchImg from "./../../assets/svg/search.svg";
import Avatar from "./../../assets/img/2.jpg";
import { MdNotifications, MdWbSunny, MdNightlight } from "react-icons/md";
import Cart from "./../../assets/svg/shopping-cart.svg";
import { useOrder } from "../../context/context";
import "./style.scss";
import { NavLink } from "react-router-dom";
const index = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);
let local = localStorage.getItem("user")
  const {
    state: { profile, order },
    dispatch,
  } = useOrder();
  return (
    <div className="site-header">
      <div className="container">
        <div className="header rounded-md  p-2 px-4 shadow-md flex align-middle justify-between ">
          <h1 className="fw-bold header-title flex flex-col nav-title items-start text-black-900 text-2xl font-medium">
            System
            <span
              className="text-slate-500 font-medium text-sm text-end "
              style={{ fontStyle: "italic" }}
            >
              Managment
            </span>
          </h1>
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
                className="border search-input p-2 rounded-xl outline-0 border-b-green-50"
              />
            </label>
          </div>
          <div className="flex items-center relative justify-between gap-3">
            <div className="theme-box" onClick={() => toggleTheme()}>
              {theme == "dark" ? (
                <MdWbSunny className="notif nav-title animate-spin duration-1000" />
              ) : (
                <MdNightlight className=" notif nav-title" />
              )}
            </div>
            <MdNotifications className="notif nav-title " />
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
              className={`profile shadow-black shadow-md flex flex-col items-start  border-red-300 ${
                profile ? "block" : "hidden"
              }`}
            >
              <h2 className="font-medium nav-title"> Hi {local} </h2>
              <ul className="list-none flex flex-col items-start gap-3 border-t-2">
                <NavLink
                  to={"/profile"}
                  className="nav-title font-medium text-md"
                >
                  Profile
                </NavLink>
                <li
                  className="nav-title font-medium text-md"
                  onClick={() => toggleTheme()}
                >
                  {theme === "dark" ? "Light theme" : "Dark theme"}
                  {/* Theme */}
                </li>
                <li className="nav-title font-medium text-md">Language</li>
              </ul>
              <div className="triang "></div>
            </div>
          </div>
        </div>
      </div>
      {/* <Profile /> */}
    </div>
  );
};

export default index;
