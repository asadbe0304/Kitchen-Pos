import React from "react";
import Bars from "./Barchart";

const statics = () => {
  return (
    <div className="stastics p-1 shadow-lg shadow-slate-500 rounded-md">
      <div className="flex items-start gap-1 px-3 my-4">
        <h3 className="m-0 nav-title font-medium">Statics</h3>
      </div>
      <Bars />
    </div>
  );
};

export default statics;
