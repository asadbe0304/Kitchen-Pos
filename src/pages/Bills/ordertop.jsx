import React from "react";
import { useOrder } from "../../context/context";

const ordertop = () => {
  const {
    state: { order },
  } = useOrder();
  return (
    <>
      <div className="flex items-center border-t-2 border-black pt-3 justify-between w-full">
        <h2 className="nav-title font-medium">Orders</h2>
        <p className="order-count nav-title font-medium">
          {order.length} piece
        </p>
      </div>
    </>
  );
};

export default ordertop;
