import React, { useState } from "react";
import { useOrder } from "../../context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, NavLink } from "react-router-dom";
import { FaNotEqual } from "react-icons/fa";
export default function Modal() {
  const {
    state: { order },
    dispatch,
  } = useOrder();
  let total = localStorage.getItem("totals");
  let ordercount = localStorage.getItem("Count");
  const [difference, setDifference] = useState(0);
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  const notify = () => {
    toast.success("Wow Success!"),
      {
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      };
    setDifference("");
    setTimeout(() => {
      navigate("/home");
    }, 1000);
    setTimeout(() => {
      dispatch({ type: "ORDER__CART" });
      dispatch({ type: "CLEAR" });
      localStorage.removeItem("totals");
      localStorage.removeItem("order");
    }, 1150);
  };
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
      <div className="justify-center mt-8 pb-20 pt-24 px-2 rounded-md modal items-center flex inset-0 outline-none focus:outline-none">
        <div className=" w-full cart-page mx-auto rounded-md">
          <div className="border-0 cart-page shadow-lg flex rounded-md flex-col w-full outline-none focus:outline-none">
              <h3 className="text-3xl my-4 mx-4 nav-title font-semibold">
                Your Orders {ordercount}
              </h3>
            </div>
            {/*body*/}
            <div className="flex items-start px-3 cart-page order-check justify-between w-full">
              <div
                className="overflow-y-scroll checkout-left w-1/2"
                style={{ height: "400px" }}
              >
                {order.length > 0
                  ? order.map((e) => {
                      return (
                        <div
                          style={{ background: "var(--order)" }}
                          key={e.id}
                          className="flex items-center border rounded-md w-full justify-between p-2 flex-auto"
                        >
                          <img
                            src={e.images}
                            alt="images"
                            className="rounded-full"
                            width={80}
                            height={80}
                          />
                          <p className="my-4 nav-title text-lg leading-relaxed">
                            {e.name}
                          </p>
                          <p className="flex gap-2 mx-2 m-0 p-0 nav-title items-center font-medium justify-between">
                            x{e.quantity}
                            <span className="nav-title font-medium">
                              ${(e.price * e.quantity).toFixed(1)}
                            </span>
                          </p>
                        </div>
                      );
                    })
                  : "Not order"}
              </div>
              <div
                className="checkout mt-2 mx-auto flex-col w-1/2  flex items-center justify-center"
              >
                <div className="checkout-order-btn w-full flex items-center justify-center">
                  <button className="hover:bg-orange-400 nav-title border-orange-400 border py-1 px-3 rounded-md">
                    Terminal
                  </button>
                  <button className="border-orange-400 border py-1 px-3 rounded-md hover:bg-orange-400 nav-title transition-all duration-300">
                    Cash
                  </button>
                  <button className="hover:bg-orange-400 nav-title border-orange-400 border py-1 px-3 rounded-md">
                    Payme/Click
                  </button>
                </div>
                <div className="calculator w-full border-t-2 my-2 p-0">
                  <div className="flex items-start justify-between my-2 border-b-2 font-medium nav-title p-3">
                    Total:
                    <p className="total-check bg-red-400 p-2 text-white rounded-md">
                      $ {total}
                    </p>
                  </div>
                  <div className="flex items-start justify-between gap-1 p-0">
                    <label
                      htmlFor="check"
                      className="flex flex-col items-start nav-title justify-between"
                    >
                      Cash:
                      <input
                        type="number"
                        id="check"
                        style={{ background: "var(--order)" }}
                        value={difference}
                        onChange={(e) => setDifference(e.target.value)}
                        placeholder="100$"
                        className="check-input rounded-md border-b-2 outline-none border-b-black py-2 my-2 px-2"
                      />
                    </label>
                    <div className="check-difference ml-2 nav-title flex flex-col items-start">
                      Difference
                      <span className="text-red-400 font-medium ">
                    
                        {(total - difference).toFixed(1)}$
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center cart-page justify-between py-6 px-2 border-t border-solid border-slate-200 rounded-b">
              <button
                className="nav-title bg-orange-400 font-bold uppercase px-4 rounded-md py-3 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button
                disabled={difference === 0}
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={notify}
              >
                Placing an order
              </button>
            </div>
          </div>
        </div>
    </>
  );
}
// Your order will be ready in no time
// placing an order
