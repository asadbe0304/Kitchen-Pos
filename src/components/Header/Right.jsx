import React from "react";
import { useState, useEffect } from "react";
import Avatar from "./../../assets/img/acc.png";
import { MdNotifications, MdWbSunny, MdNightlight, MdShoppingBasket } from "react-icons/md";
import Cart from "./../../assets/svg/shopping-cart.svg";
import { useOrder } from "../../context/context";
import "./style.scss";
import Notif from "./notif";
import Inbox from "./inbox";
const HeaderRight = () => {
  const [inbox, setInbox] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const {
    state: { profile, order },
    dispatch,
  } = useOrder();
  return (
    <>
      <div className="flex items-center relative justify-between gap-3">
        <div className="theme-box" onClick={() => toggleTheme()}>
          {theme == "dark" ? (
            <MdWbSunny className="notif nav-title animate-spin duration-1000" />
          ) : (
            <MdNightlight className=" notif nav-title" />
          )}
        </div>
        <MdNotifications
          className="notif nav-title "
          onClick={() => setInbox((e) => !e)}
        />
        <div
          className="relative cart-order"
          onClick={() => dispatch({ type: "ORDER__CART", payload: true })}
        >
          <MdShoppingBasket className="cursor-pointer text-white"style={{width:"25px", height:"25px"}}/>
          {/* <img src={Cart} alt="images" className="cursor-pointer" width={20} height={20} /> */}
          <span className="count-order absolute bg-amber-500 px-2 p-0 text-sm text-white rounded-full">
            {order.length}
          </span>
        </div>
        <img
          src={Avatar}
          alt=""
          className="rounded-full cursor-pointer hover:animate-pulse shadow-sm"
          width={40}
          height={40}
          onClick={(e) =>
            dispatch({ type: "PROFILE", payload: profile ? false : true })
          }
        />
        <Inbox prop={inbox} setInbox={setInbox} />
        <Notif theme={theme} toggleTheme={toggleTheme} />
      </div>
    </>
  );
};

export default HeaderRight;
