import React from "react";
import { motion, useDragControls } from "framer-motion";
import { useOrder } from "../../context/context";
const item = ({ e }) => {
  const {
    state: { order, orderOpen },
    dispatch,
  } = useOrder();
  const controls = useDragControls();
  const clear = () => {
    setTimeout(() => {
      dispatch({ type: "REMOVE__ORDER", payload: e });
    }, 1000);
  };
  return (
    <>
      <li key={e.id} className="w-full">
        <motion.div
          drag="x"
          dragControls={controls}
          onDrag={clear}
          className="flex cursor-pointer items-center order-item p-2 justify-between rounded-xl order-item hover:scale-95 border w-full"
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
                onClick={() => dispatch({ type: "INCREASE", payload: e })}
                className="increase bg-zinc-900 font-medium p-0 text-white flex items-center justify-center text-lg w-1/2 rounded-lg rounded-l-none"
              >
                +
              </div>
            </div>
          </div>
        </motion.div>
      </li>
    </>
  );
};

export default item;
