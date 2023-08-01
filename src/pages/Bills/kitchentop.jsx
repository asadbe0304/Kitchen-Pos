import React from "react";
import Smart from "./../../assets/img/smart.png";
import { NavLink, Link } from "react-router-dom";

const kitchentop = () => {
  return (
    <>
    <div className="w-full">
      <div className="flex items-center flex-col justify-center">
        <img src={Smart} width={100} height={100} alt="images" />
        <h2 className="nav-title font-bold mb-3">Welcome Kitchen</h2>
      </div>
      <ul className="flex items-center justify-center w-full gap-11">
        <li>
          <Link>Burger</Link>
        </li>
        <li>
          <Link>Snack</Link>
        </li>
        <li>
          <Link>Free</Link>
        </li>
        <li>
          <Link>Drink</Link>
        </li>
      </ul>
    </div>
    </>
  );
};

export default kitchentop;
