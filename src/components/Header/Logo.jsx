import React, { useEffect } from "react";

const Logo = () => {
  return (
    <>
      <h1 className="fw-bold header-title flex flex-col nav-title items-start text-black-900 text-2xl font-medium">
        System
        <span
         
          className="text-slate-500 font-medium text-sm text-end "
          style={{ fontStyle: "italic" }}
        >
          Managment
        </span>
      </h1>
    </>
  );
};

export default Logo;
