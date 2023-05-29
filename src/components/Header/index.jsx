import React from "react";
import { useState, useEffect } from "react";
import SearchImg from "./../../assets/svg/search.svg";
import Avatar from "./../../assets/img/acc.png";
import { MdNotifications, MdWbSunny, MdNightlight } from "react-icons/md";
import Cart from "./../../assets/svg/shopping-cart.svg";
import { useOrder } from "../../context/context";
import "./style.scss";
import Notif from "./notif";
import Inbox from "./inbox";
import { data } from "../../db/db";
const index = () => {
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

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Perform search logic
    const results = data.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
  };
  console.log(searchResults);

  return (
    <div className="site-header">
      <div className="container">
        <div className="header p-2 flex align-middle justify-between fixed top-0 left-0 px-3">
          <h1 className="fw-bold header-title flex flex-col nav-title items-start text-black-900 text-2xl font-medium">
            System
            <span
              className="text-slate-500 font-medium text-sm text-end "
              style={{ fontStyle: "italic" }}
            >
              Managment
            </span>
          </h1>
          <div className="input flex items-center justify-center">
            <label htmlFor="search" className="relative">
              <img
                src={SearchImg}
                className="search-icon cursor-pointer absolute top-3 right-3"
                alt="search icon"
                width={14}
                height={14}
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearch}
                className="border search-input p-2 rounded-xl outline-0 border-b-green-50"
              />
            </label>
          </div>
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
              <img src={Cart} alt="images" width={20} height={20} />
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
        </div>
      </div>
      <ul className={`${searchQuery === "" ? "hidden" : "block"} absolute top-14 left-0 right-0 mx-auto z-30 bg-slate-500 `}>
        {searchResults.map((product) => (
          <li className="flex items-center gap-5 justify-center" key={product.id}>
            <img
              src={product.images}
              alt={product.name}
              className="rounded-full"
              style={{ width: "40px", height: "40px" }}
            />
            <h4>{product.name}</h4>
            <span>{product.price} $</span>
          </li>
        ))}
      </ul>
      {/* <Profile /> */}
    </div>
  );
};

export default index;
