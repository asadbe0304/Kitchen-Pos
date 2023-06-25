import React from "react";
import { useOrder } from "../../context/context";
import { RiCloseFill } from "react-icons/ri";

const realorder = () => {
  const {
    state: { order },
  } = useOrder();
  return (
    <div className="w-3/12 border real-order p-2 rounded">
      <div className="flex items-center justify-between w-full">
      <h3 className="font-medium nav-title">Real time orders</h3>
      <RiCloseFill className="w-8 h-8 nav-title"/>

      </div>
      <ul className="list-none  flex flex-col my-3 gap-3 items-start">
        {order.length > 0
          ? order.map((e) => {
              return (
                <li key={e.id} className="flex items-center justify-between w-full border rounded-md p-2">
                  <h3 className="font-medium nav-title">{e.name}</h3>
                  <span className="font-medium nav-title">x{e.quantity}</span>
                </li>
              );
            })
          : "not select order"}
      </ul>
    </div>
  );
};

export default realorder;
