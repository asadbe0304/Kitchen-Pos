import React from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination flex item-center gap-2 ">
      <button className="py-1 px-3 hover:bg-amber-500 rounded-md">
        <IoIosArrowDropleft />
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={
              page == currentPage
                ? "btn border py-1 px-3 nav-title rounded bg-amber-500"
                : "border py-1 nav-title px-3 rounded"
            }
          >
            {page}
          </button>
        );
      })}
      <button className="py-1 px-3 hover:bg-amber-500 rounded-md">
        <IoIosArrowDropright />
      </button>
    </div>
  );
};

export default Pagination;
