import React from "react";
import { useEffect, useState } from "react";
import Edit from "./../../assets/svg/edit.svg";
import { ToastContainer, toast } from "react-toastify";
import { MdClose } from "react-icons/md";
import { useOrder } from "../../context/context";
import Item from "./item";
import "./style.scss";
import { NavLink, useNavigate } from "react-router-dom";
const index = () => {
  const {
    state: { order, orderOpen },
    dispatch,
  } = useOrder();

  let total = localStorage.getItem("totals");

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = orderOpen ? "hidden" : "auto";
  }, [orderOpen]);

  const navigator = useNavigate();
  const path = () => {
    order.length === 0
      ? toast.error("You need to choose a product", {
          position: "top-center",
          autoClose: 2000,
        })
      : navigator("/cart");
  };
  return (
    <>
      <ToastContainer theme="dark" />
      <div
        className={`w-full bg-zinc-800 h-full layer ${
          orderOpen ? "hide" : "show"
        }`}
        onClick={() => dispatch({ type: "ORDER__CART", payload: false })}
      ></div>
      <div
        className={`w-96 sidebar shadow-md fixed right-0 flex flex-col px-5 pb-4 items-center rounded-lg justify-start  pt-7 h-full ${
          orderOpen ? "hide" : "show"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          <h4 className="font-medium text-2xl nav-title">Order Menu</h4>

          <div className="flex items-center gap-2 justify-between">
            <img src={Edit} alt="images" width={20} height={20} />
            <MdClose
              className={`${orderOpen ? "block" : "hidden"}`}
              onClick={() => dispatch({ type: "ORDER__CART", payload: false })}
            />
          </div>
        </div>
        <ul className="w-full flex flex-col order-list gap-3 my-4 items-center justify-start order-list">
          {order.length > 0 ? (
            order.map((e) => {
              return <Item key={e.id} e={e} />;
            })
          ) : (
            <h3 className="nav-title">Not Order</h3>
          )}
        </ul>
        <hr />
        <div className="sub-total flex items-center justify-between my-4 border-t p-2 w-full">
          <h5 className="font-medium nav-title ">SubTotal :</h5>
          <strong className="sub-price nav-title">
            ${total == null ? "0" : total}
          </strong>
        </div>
        <div className="w-full">
          <button
            onClick={path}
            // to="/cart"
            // disabled={order.length == 0}
            className="bg-orange-400 font-medium text-white hover:bg-orange-500 hover:shadow-inner hover:shadow-black transition-all duration-300 cursor-pointer flex items-center justify-center p-3 w-full rounded-lg"
          >
            Charge $ {total == null ? "0" : total}
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
