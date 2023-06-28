import React from "react";
import { NavLink } from "react-router-dom";
import { useOrder } from "../../context/context";
import { BsFullscreen, BsCalendarRange } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiDark } from "react-icons/ci";
import { BiLogOut } from "react-icons/bi";
const Notif = ({ theme, toggleTheme }) => {
  let local = localStorage.getItem("user") || "";
  const {
    state: { profile },
    dispatch,
  } = useOrder();
  const handleFullscreen = () => {
    const element = document.documentElement; // Get the root element of the document
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };
  return (
    <>
      <div
        className={`profile shadow-black shadow-md flex flex-col items-start  border-red-300 ${
          profile ? "block" : "hidden"
        }`}
      >
        <h2 className="font-medium nav-title"> Hi {local} </h2>
        <ul className="list-none flex flex-col profile-menu items-start gap-3 my-2 pt-2 border-t-2">
          <li className="nav-title profile-title font-medium text-md">
            <NavLink
              to="/profile"
              onClick={() => dispatch({ type: "PROFILE", payload: false })}
              className="nav-title flex gap-2 items-center hover:bg-black font-medium text-md"
            >
              <CgProfile />
              Profile
            </NavLink>
          </li>
          <li className="nav-title hover:bg-black profile-title font-medium text-md">
            <NavLink
              to="/"
              onClick={() => dispatch({ type: "PROFILE", payload: false })}
              className="nav-title flex items-center gap-2 font-medium text-md"
            >
              <BiLogOut />
              Log Out
            </NavLink>
          </li>

          <li
            className="nav-title profile-title flex items-center gap-2 hover:bg-black font-medium text-md"
            onClick={() => toggleTheme()}
          >
            <CiDark />
            {theme === "dark" ? "Light theme" : "Dark theme"}
            {/* Theme */}
          </li>
          <li className="nav-title hover:bg-black gap-2 flex items-center cursor-pointer profile-title font-medium text-md">
            <BsCalendarRange />
            Language
          </li>
          <li
            onClick={handleFullscreen}
            className="nav-title flex items-center gap-2 hover:bg-black cursor-pointer profile-title font-medium text-md"
          >
            <BsFullscreen />
            Fullscreen
          </li>
        </ul>
        <div className="triang "></div>
      </div>
    </>
  );
};

export default Notif;
