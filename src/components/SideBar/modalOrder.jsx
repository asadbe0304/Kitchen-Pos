import React from "react";
import { useOrder } from "../../context/context";

export default function Modal({ prop, setShow }) {
  const {
    state: { order },
  } = useOrder();
  console.log(order);
  return (
    <>
      {prop ? (
        <>
          <div className="justify-center modal items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
            <div className="relative md:w-2/3 lg:w-10/12 w-11/12 my-6 mx-auto ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Your Orders </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex items-center justify-between w-full">
                  <div
                    className="overflow-y-scroll w-1/2"
                    style={{ height: "500px" }}
                  >
                    {order.length > 0
                      ? order.map((e) => {
                          return (
                            <div
                              key={e.id}
                              className="flex items-center border rounded-md w-full justify-between p-2 flex-auto"
                            >
                              <img
                                src={e.images}
                                alt="images"
                                width={80}
                                height={80}
                              />
                              <p className="my-4 text-black text-lg leading-relaxed">
                                {e.name}
                              </p>
                              <strong>{e.price}</strong>
                            </div>
                          );
                        })
                      : "Not order"}
                  </div>
                  <div className="checkout">
                    <div className="checkout-order"></div>
                    Calculator
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Placing an order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 bg-modal bg-black"></div>
        </>
      ) : null}
    </>
  );
}
// Your order will be ready in no time
// placing an order
