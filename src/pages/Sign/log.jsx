import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./style.scss";
import Img from "./../../assets/img/logo.png";
import { toast } from "react-toastify";

const log = () => {
  const [user, setUser] = useState("Asadbek");
  const [pass, setPass] = useState(12345678);
  const [admin, setAdmin] = useState("Asadbek");
  const [adminPass, setAdminPass] = useState(12345678);
  let userLocal = localStorage.setItem("user", user);

  const Navigate = useNavigate();

  const handles = () => {
    if (user === admin && pass === adminPass) {
      Navigate("/home");
      toast.success(`You have successfully logged`, {
        position: "bottom-left",
      });
    } else {
      toast.error("You have not logged in", {
        position: "bottom-center",
      });
    }
  };
  return (
    <>
      <div className="container">
        <div className="form flex justify-start flex-col items-center p-0 rounded-lg sign">
          <div className="w-1/2 my-6 flex mt-14 item-center justify-center">
            <img src={Img} alt="" />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h2 className="font-bold text-3xl nav-title">Welcome to SAC</h2>
            <p className="nav-title font-medium w-3/3 px-3 lg:w-1/2 md:w-2/3 text-center mt-4">
              All-in-One POS and Restaurant Management System <br /> Our
              restaurant POS software comes equipped with all of the features
              you need to streamline your operations and boost your profit
              margin.
            </p>
          </div>
          <form className="w-1/2 my-5">
            <label className="block my-4">
              <span className="block text-md font-medium nav-title">
                Username
              </span>
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                placeholder="Asadbek "
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      "
              />
            </label>
            <label className="block my-4">
              <span className="block text-md font-medium nav-title">
                Password
              </span>
              <input
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                placeholder="12345678"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>

            <button
              // to="/home"
              onClick={handles}
              className="nav-title font-medium bg-red-500 rounded-2xl px-3 py-1 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
            >
              Login Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default log;
