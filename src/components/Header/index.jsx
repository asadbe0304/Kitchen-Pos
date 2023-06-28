import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useOrder } from "../../context/context";
import { data } from "./../../db/db";
import "./style.scss";
import Logo from "./Logo";
import Right from "./Right";
import SearchImg from "./../../assets/svg/search.svg";
const index = () => {
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

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = searchQuery ? "hidden" : "auto";
  }, [searchQuery]);
  const {
    state: { order },
    dispatch,
  } = useOrder();


  return (
    <div className="site-header">
      <div className="container">
        <div className="header p-2 flex align-middle justify-between fixed top-0 left-0 px-3">
          <Logo />
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
                className="border search-input text-white p-2 rounded-xl outline-0 border-b-green-50"
              />
            </label>
          </div>
          <ul
            className={`${
              searchQuery === "" ? "hidden" : "block"
            } flex flex-col items-center absolute top-14 left-0 right-0 mx-auto z-30 bg-slate-500 `}
          >
            {searchResults.map((product) => (
              <li
                onClick={() => dispatch({ type: "ADD__ORDER" })}
                className="flex items-center gap-5 justify-around border rounded-md my-2 p-2 w-2/3"
                key={product.id}
              >
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
          <Right />
        </div>
      </div>
    </div>
  );
};

export default index;
