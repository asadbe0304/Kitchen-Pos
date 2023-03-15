import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const index = () => {

  return (
    <>
      <div className="container">
        <div className="form rounded-lg mt-10 p-4 px-10 mx-52">
          <div className="w-full flex mt-14 mx-auto">
            <h2 className="font-medium text-2xl nav-title">
              Register Account
            </h2>
          </div>
          <form className="my-5">
            <label className="block my-4">
              <span className="block text-md font-medium nav-title">
                Username
              </span>
              <input
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 input border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-cyan-600
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
                type="password"
                className="mt-1 block w-full px-3 py-2 input border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "
              />
            </label>
            <label className="block my-4">
              <span className="block text-md font-medium nav-title">
                Confirm Password
              </span>
              <input
                required
                type="password"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
            <button
              type="button"
              className="nav-title font-medium bg-red-500 rounded-2xl px-3 py-1 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
            >
              Register App
            </button>
            <NavLink
              to="/sign"
              className=" font-medium nav-title border-red-600 border rounded-2xl px-3 py-1 hover:bg-red-600 active:bg-red-700 mx-6 focus:outline-none focus:ring focus:ring-red-300"
            >
              Login Account
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
