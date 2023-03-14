import React from "react";
import { useEffect, useState } from "react";
import Edit from "./../../assets/svg/edit.svg";
import Img from "./../../assets/img/soft.jpg";
import { MdClose } from "react-icons/md";
import { useOrder } from "../../context/context";
import "./style.scss";
import Modal from "./modalOrder";
const index = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    state: { orderOpen, order },
    dispatch,
  } = useOrder();

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = orderOpen ? "hidden" : "auto";
  }, [orderOpen]);
  let total = localStorage.getItem("totals");
  let ordercount = localStorage.getItem("Count");
  console.log(total);
  return (
    <>
      <div
        className={`w-full bg-zinc-800 h-full layer ${
          orderOpen ? "hide" : "show"
        }`}
        onClick={() => dispatch({ type: "ORDER__CART", payload: false })}
      ></div>
      <div
        className={`w-96 sidebar shadow-2xl  fixed right-0 top-0 flex flex-col px-5 pb-4 items-center justify-start  pt-7 h-full ${
          orderOpen ? "hide" : "show"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          <h4 className="font-medium text-2xl nav-title">
            Order Menu {ordercount}{" "}
          </h4>

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
              return (
                <li
                  key={e.id}
                  className="flex items-center order-item p-2 justify-between rounded-xl order-item hover:scale-95 border w-full"
                >
                  <img
                    src={e.images}
                    className="rounded-full"
                    alt="images"
                    width={50}
                    height={50}
                  />
                  <h5 className="flex flex-col nav-title font-medium text-sm m-0 p-0 items-start justify-between">
                    {e.name}
                    <span className="nav-title text-xs">${e.price}</span>
                  </h5>
                  <div>
                    <p className="flex gap-2 mx-2 m-0 p-0 nav-title items-center font-medium justify-between">
                      x{e.quantity}
                      <span className="text-slate-400 font-medium">
                        ${(e.price * e.quantity).toFixed(1)}
                      </span>
                    </p>
                    <div className="flex items-center justify-center border rounded-lg w-20 my-2">
                      <div
                        onClick={() => {
                          if (e.quantity > 1) {
                            dispatch({ type: "DECREASE", payload: e });
                          } else {
                            dispatch({
                              type: "REMOVE__ORDER",
                              payload: e,
                            });
                          }
                        }}
                        className="decrease bg-orange-400 font-medium flex items-center text-white justify-center text-lg w-1/2 rounded-lg rounded-r-none"
                      >
                        -
                      </div>
                      <div
                        onClick={() =>
                          dispatch({ type: "INCREASE", payload: e })
                        }
                        className="increase bg-zinc-900 font-medium p-0 text-white flex items-center justify-center text-lg w-1/2 rounded-lg rounded-l-none"
                      >
                        +
                      </div>
                    </div>
                  </div>
                </li>
              );
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
            onClick={() => setShowModal(true)}
            disabled={order.length == 0}
            className="bg-orange-400 font-medium text-white hover:bg-orange-500 hover:shadow-inner hover:shadow-black transition-all duration-300 cursor-pointer flex items-center justify-center p-3 w-full rounded-lg"
          >
            Charge $ {total == null ? "0" : total}
          </button>
        </div>
      </div>
      <Modal prop={showModal} setShow={setShowModal} />
    </>
  );
};

export default index;
