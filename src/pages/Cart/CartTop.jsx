import React, { useState } from "react";

const CartTop = () => {
  const [ordercount, setOrderCount] = useState(localStorage.getItem("Count"));
  return (
    <>
      <div className="border-0 cart-page cart-top shadow-lg flex rounded-md flex-col w-full outline-none focus:outline-none">
        <h3 className="text-3xl my-4 mx-4 nav-title font-semibold">
          Orders {ordercount}
        </h3>
      </div>
    </>
  );
};

export default CartTop;
