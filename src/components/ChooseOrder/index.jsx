import React from "react";
import Card from "./ChooseCard";
// import { useOrder } from "../../context/context";
import "./style.scss";

const index = ({filter}) => {
  return (
    <div className="choose-order w-full my-3">
      <div className="choose-order-top flex items-center justify-between p-0 w-full">
        <h3 className=" font-medium choose-title text-2xl">
          Choose
          <span className="text-slate-600 mx-3 font--medium">Order</span>
        </h3>
        {/* <div className="text-xl font-medium sort-title">Sort By Popular</div> */}
      </div>
      <div className="choose-order-body flex flex-wrap items-start justify-center gap-4  py-2 my-2 px-3 w-full">
        {filter.map((e) => {
          return <Card key={e.id} prop={e}/>
        })}
      </div>
    </div>
  );
};

export default index;
