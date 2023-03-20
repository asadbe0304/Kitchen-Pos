import React from "react";
import "./style.scss";
import { useEffect } from "react";
import { useState } from "react";

const index = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    window.addEventListener("load", setLoad(false));
  });
  return (
    <>
      <div className={`load ${load ? "flex " : "hidden"}`}>
        <div className="loader"></div>
      </div>
    </>
  );
};

export default index;
