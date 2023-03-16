import React from "react";
import Header from "./../../components/Header";
import "./style.scss";
import User from "./user";
const index = () => {
  return (
    <>
      <div className="pt-20">
        <h2>Settings</h2>
        <User />
      </div>
    </>
  );
};

export default index;
