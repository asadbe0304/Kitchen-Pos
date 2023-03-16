import React from "react";
import Tables from "./table";

const user = () => {
  return (
    <>
      <div className="flex items-center justify-start w-full settings-table">
        <div className="w-full">
          <div className="overflow-auto lg:overflow-visible">
            <div className="flex lg:justify-between border-b-2 border-zinc-900 pb-1">
              <h2 className="text-2xl text-gray-500 font-bold">All Users</h2>
              <div className="text-center flex-auto">
                <input
                  type="text"
                  name="name"
                  placeholder="Search..."
                  className="w-2/3 py-2 border-b-2 rounded-md border-blue-600 outline-none focus:border-yellow-400 "
                />
              </div>

              <div>
                <button
                  className="   bg-blue-500
                hover:bg-blue-700
                text-white
                py-1
                px-3
                sm
                rounded-full
              "
                >
                  All
                </button>

                <button
                  className="
                bg-blue-500
                hover:bg-blue-700
                text-white
                py-1
                px-3
                sm
                rounded-full
              "
                >
                  Admin
                </button>

                <button
                  className="
                bg-blue-500
                hover:bg-blue-700
                text-white
                py-1
                px-3
                sm
                rounded-full
              "
                >
                  User
                </button>
              </div>
            </div>
            <Tables />
          </div>
        </div>
      </div>
    </>
  );
};

export default user;
