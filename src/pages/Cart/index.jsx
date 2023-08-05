import React, { useState } from "react";
import { useOrder } from "../../context/context";
import { ToastContainer,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, NavLink } from "react-router-dom";
import CheckLeft from "./CheckLeft";
import CheckRight from "./CheckRight";
import Footer from "./CartFooter";
import Top from "./CartTop";
import "./index.scss"
export default function Modal() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="justify-center mt-8 pb-20 pt-24 px-2 rounded-md moda items-center flex inset-0 outline-none focus:outline-none">
        <div className=" w-full cart-page mx-auto rounded-md">
          <Top />
          <div className="flex items-start px-3 cart-page order-check justify-between w-full">
            <CheckLeft />
            <CheckRight />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
// Your order will be ready in no time
// placing an order
