import React from "react";

const table = () => {
  return (
    <>
      <table className="table rounded-l  w-full border-separate space-y-6 text-sm">
        <thead className="nav-title">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3 text-left">Mail</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Role</th>

            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">John Doe</td>
            <td className="p-3">Jonhd871@gmail.com</td>
            <td className="p-3">01648349009</td>
            <td className="p-3 uppercase">admin</td>

            <td className="p-3">
              <span className="bg-green-400 text-gray-50 rounded-md px-2">
                ACTIVE
              </span>
            </td>
            <td className="p-3">
              <button
                type="button"
                className="nav-title bg-amber-500 py-1 px-3 rounded-xl hover:text-gray-100 ml-2"
              >
                Edit
              </button>
              <button
                type="button"
                className="nav-title bg-red-500 py-1 px-3 rounded-xl hover:text-gray-100 ml-2"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">John Doe</td>
            <td className="p-3">john@gmail.com</td>
            <td className="p-3">01648349009</td>
            <td className="p-3 uppercase">user</td>

            <td className="p-3">
              <span className="bg-green-400 text-gray-50 rounded-md px-2">
                ACTIVE
              </span>
            </td>
            <td className="p-3">
              <button
                type="button"
                className="nav-title bg-amber-500 py-1 px-3 rounded-xl hover:text-gray-100 ml-2"
              >
                Edit
              </button>
              <button
                type="button"
                className="nav-title bg-red-500 py-1 px-3 rounded-xl hover:text-gray-100 ml-2"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default table;
