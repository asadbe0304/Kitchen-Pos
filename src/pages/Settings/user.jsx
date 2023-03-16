import React from "react";
import Tables from "./table";

const user = () => {
  return (
    <>
      <div className="flex items-center justify-start w-full settings-table">
        <div className="w-full">
          <div className=" lg:overflow-visible">
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
            </div>
            <div className="overflow-x-scroll">
              <Tables />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default user;
