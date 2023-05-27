import React, { Component, useState } from "react";
import Header from "../../components/Header";
import SideBar from "./../SideBar/index";
import Card from "./../Ui/Card";
import { useOrder } from "../../context/context";
import Choose from "./../ChooseOrder/index";
import { data } from "../../db/db";
import "./style.scss";

const index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredItems =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);
  const {
    state: { product },
  } = useOrder();

  return (
    <>
      {/* <Header /> */}
      <SideBar />
      <div className="site-main scroll-smooth mb-20">
        <div className="container">
          <div className="category-order pt-20 flex items-start justify-between flex-col p-3">
            <h3 className="text-2xl font-medium category-title">
              Menu <span className="text-slate-600">Category</span>
            </h3>
            <div className="w-full px-3 box snap-x snap-mandatory">
              <div className="category-order-top snap-x snap-mandatory flex items-center justify-around gap-3 py-3">
                {/* {product.slice(6, 12).map((e) => {
                  return <Card prop={e} key={e.id} />;
                })} */}
                <div
                  onClick={() => setSelectedCategory("All")}
                  className="snap-always card-category shadow-2xl shadow-orange-400 border flex flex-col items-center rounded-xl justify-center gap-3 hover:bg-amber-300 text-sm text-slate-400 font-medium  hover:text-black"
                >
                  <img
                    src={data[4].images}
                    alt="category images"
                    className="rounded-xl border"
                    width={70}
                    height={70}
                  />
                  <h3 className="category-card-title nav-title">All</h3>
                </div>
                <div
                  onClick={() => setSelectedCategory("Burger")}
                  className="snap-always card-category shadow-2xl shadow-orange-400 border flex flex-col items-center rounded-xl justify-center gap-3 hover:bg-amber-300 text-sm text-slate-400 font-medium  hover:text-black"
                >
                  <img
                    src={data[2].images}
                    alt="category images"
                    className="rounded-xl border"
                    width={70}
                    height={70}
                  />
                  <h3 className="category-card-title nav-title">Burger</h3>
                </div>
                <div
                  onClick={() => setSelectedCategory("Drink")}
                  className="snap-always card-category shadow-2xl shadow-orange-400 border flex flex-col items-center rounded-xl justify-center gap-3 hover:bg-amber-300 text-sm text-slate-400 font-medium  hover:text-black"
                >
                  <img
                    src={data[10].images}
                    alt="category images"
                    className="rounded-xl border"
                    width={70}
                    height={70}
                  />
                  <h3 className="category-card-title nav-title">Drink</h3>
                </div>
                <div
                  onClick={() => setSelectedCategory("Snack")}
                  className="snap-always card-category shadow-2xl shadow-orange-400 border flex flex-col items-center rounded-xl justify-center gap-3 hover:bg-amber-300 text-sm text-slate-400 font-medium  hover:text-black"
                >
                  <img
                    src={data[19].images}
                    alt="category images"
                    className="rounded-xl border"
                    width={70}
                    height={70}
                  />
                  <h3 className="category-card-title nav-title">Snack</h3>
                </div>
                <div
                  onClick={() => setSelectedCategory("Free")}
                  className="snap-always card-category shadow-2xl shadow-orange-400 border flex flex-col items-center rounded-xl justify-center gap-3 hover:bg-amber-300 text-sm text-slate-400 font-medium  hover:text-black"
                >
                  <img
                    src={data[9].images}
                    alt="category images"
                    className="rounded-xl border"
                    width={70}
                    height={70}
                  />
                  <h3 className="category-card-title nav-title">Free</h3>
                </div>
              </div>
            </div>
            <Choose filter={filteredItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
