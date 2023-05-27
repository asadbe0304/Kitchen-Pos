import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useOrder } from "../../context/context";

const CheckRight = () => {
  const {
    state: { difference },
    dispatch,
  } = useOrder();
  const [total, setTotal] = useState(localStorage.getItem("totals"));
  // const [difference, setDifference] = useState(0);
  return (
    <>
      <div className="checkout px-1 mt-2 mx-auto flex-col w-1/2  flex items-center justify-center">
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
                onChange={() => dispatch({ type: "DIFF", payload: true })}
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
    </>
  );
};

export default CheckRight;
