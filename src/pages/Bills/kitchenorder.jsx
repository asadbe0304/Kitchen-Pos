import React, { useEffect, useState } from "react";
import Real from "./realorder";
import { useOrder } from "../../context/context";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";

const kitchenorder = () => {
  const {
    state: { order },
    dispatch,
  } = useOrder();

  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliseconds = time % 100;
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="w-full kitchen-order-list flex items-start justify-between py-2 gap-2 ">
      <div className="w-9/12 kitchen-left border rounded p-2">
        <ul className="flex flex-col items-start justify-between gap-2">
          {order.length > 0
            ? order.map((e) => {
                return (
                  <li
                    key={e.id}
                    className="flex items-center order-item p-2 justify-between rounded-xl order-item  border w-full"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <img
                        src={e.images}
                        className="rounded-full"
                        alt="images"
                        width={50}
                        height={50}
                      />
                      <h2 className="flex flex-col nav-title font-medium text-lg m-0 p-0 items-start justify-between">
                        {e.name}
                        <div className="flex items-center justify-between gap-2">
                          <FaRegClock />
                          <h3 className="stopwatch-time text-xl">
                            {minutes.toString().padStart(2, "0")}:
                            {seconds.toString().padStart(2, "0")}:
                            {milliseconds.toString().padStart(2, "0")}
                          </h3>
                        </div>
                      </h2>
                    </div>
                    <div>
                      <p className="flex gap-2 mx-2 m-0 p-0 nav-title items-center font-medium justify-between">
                        x{e.quantity}
                        <span
                          onClick={startAndStop}
                          className="text-slate-400 font-medium"
                        >
                          ${(e.price * e.quantity).toFixed(1)}
                        </span>
                      </p>
                      <div className="flex items-center justify-center border rounded-lg w-20 my-2">
                        <button
                          onClick={() =>
                            dispatch({ type: "REMOVE__ORDER", payload: e })
                          }
                          className="py-1 px-3 flex border-none items-center flex-row hover:bg-green-400 active:bg-green-600 text-white bg-green-600 rounded-lg"
                        >
                          <RiDeleteBin5Fill /> Done!
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })
            : ` Not Order GoodBye Now`}
        </ul>
      </div>
      <Real />
    </div>
  );
};

export default kitchenorder;
