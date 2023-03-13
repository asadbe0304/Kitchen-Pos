import React from "react";
// import { , AiFillPrinter } from "react-icons/ai";
import { useState } from "react";
import List from "./../../List/list"
import Pagination from "./pagination";
const transAction = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <div className="transaction p-1 w-full rounded-xl flex flex-col items-center justify-between shadow-lg shadow-slate-500">
        <div className="w-full latest">
          <h2 className="font-medium nav-title my-4 px-3">
            Latest Transactions
          </h2>
        <List prop={currentPosts}/>
        </div>
        <div className="flex items-end my-3 justify-end gap-2">
          <Pagination
            totalPosts={data.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default transAction;
