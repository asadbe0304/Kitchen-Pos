import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="container">
        <div className="w-full flex mt-14 ml-52">
          <h2 className="font-medium text-2xl">Register Account </h2>
        </div>
        <form className="mx-52 my-5">
          <label className="block my-4">
            <span className="block text-sm font-medium text-slate-700">
              Username
            </span>
            <input
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
          </label>
          <label className="block my-4">
            <span className="block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              required
              type="password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
          </label>
          <label className="block my-4">
            <span className="block text-sm font-medium text-slate-700">
              Confirm Password
            </span>
            <input
              required
              type="password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
          </label>
          <button
            type="button"
            className="text-white font-medium bg-cyan-500 rounded-2xl px-3 py-1 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300"
          >
            Register App
          </button>
          <NavLink
            to="/sign"
            className=" font-medium bg-white border-cyan-600 border text-black rounded-2xl px-3 py-1 hover:bg-cyan-600 active:bg-cyan-700 mx-6 focus:outline-none focus:ring focus:ring-cyan-300"
          >
            Login Account
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default index;
