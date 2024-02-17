import React, { useState } from "react";

const StockSummarynav = () => {
  return (
    <div>
      <div className="flex flex-col pb-3 lg:flex-row justify-between  items-center">
        <div className="grid grid-cols-2 gap-1 mb-3">
          {/* show excel button */}

          <button className="bg-[#2AA778] lg:w-[132px] lg:px-0 text-[15px] px-3 font-samibold text-white h-[36px] rounded-[3px]">
            Export Excel
          </button>

          {/* show rows button */}
          <div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="bg-[#3C8DBC] lg:px-0 px-3 text-[15px] font-samibold text-white lg:w-[132px] h-[36px] text-center pt-2 rounded-[3px]"
              >
                {" "}
                Show 10 rows
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] mt-2 sp space-y-1 menu p-2  rounded-lg shadow bg-base-100  w-42"
              >
                <li className="border-2  ">
                  <a className=" px-20 font-semibold text-[16px]">10</a>
                </li>
                <li className="border-2  ">
                  <a className=" px-20 font-semibold text-[16px]">25</a>
                </li>
                <li className="border-2   ">
                  <a className=" px-20 font-semibold text-[16px]">50</a>
                </li>
                <li className="border-2   ">
                  <a className=" px-20 font-semibold text-[16px]">All</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-2">
          <div className="flex w-full rounded-lg bg-white relative">
            <input
              className="pl-6 w-full border-none bg-transparent px-4 py-1  outline-none focus:outline-none text-[#878FA7] "
              type="search"
              name="search"
              placeholder="Search"
            />
            <div className="absolute top-1/2 left-3 -translate-y-1/2 bg-[#2AA778] w-[4px] h-[27px] rounded-sm"></div>
            <button
              type="submit"
              className="m-2 rounded  px-4 py-1  text-white"
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.625 16.625C13.491 16.625 16.625 13.491 16.625 9.625C16.625 5.75901 13.491 2.625 9.625 2.625C5.75901 2.625 2.625 5.75901 2.625 9.625C2.625 13.491 5.75901 16.625 9.625 16.625Z"
                  stroke="#2AA778"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3751 18.375L14.5688 14.5687"
                  stroke="#2AA778"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockSummarynav;
