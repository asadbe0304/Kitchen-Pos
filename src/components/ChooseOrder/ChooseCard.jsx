import React from "react";
import Img from "./../../assets/img/big.jpg";
import { useOrder } from "../../context/context";

const ChooseCard = ({ prop }) => {
  const {
    state: { order },
    dispatch,
  } = useOrder();
  return (
    <>
      {order.some((e) => e.id == prop.id) ? (
        <div
          onClick={() => dispatch({ type: "ADD__ORDER", payload: prop })}
          className="choose-card hover:bg-slate-300 bg-white p-3 rounded-2xl border flex gap-2 flex-col justify-center items-center"
        >
          <img
            src={prop.images}
            alt="images"
            width={80}
            height={80}
            className="rounded-full active:animate-ping duration-1000"
          />
          <h3 className="text-black card-title font-medium p-0 m-0">
            {prop.name}
          </h3>
          <span className="font-medium text-slate-600">${prop.price}</span>
        </div>
      ) : (
        <div
          onClick={() => dispatch({ type: "ADD__ORDER", payload: prop })}
          className="choose-card  hover:bg-slate-300 bg-white p-3 rounded-2xl border flex gap-2 flex-col justify-center items-center"
        >
            <img
              src={prop.images}
              alt="images"
              width={80}
              height={80}
              className="rounded-full active:animate-wiggle "
            />
          <h3 className="text-black card-title font-medium p-0 m-0">
            {prop.name}
          </h3>
          <span className="font-medium text-slate-600">${prop.price}</span>
        </div>
      )}
    </>
  );
};

export default ChooseCard;
