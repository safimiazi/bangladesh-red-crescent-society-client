import React from "react";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
const StockIntemsnav = () => {





  
  return (



    <div>
      {/* 1st nav */}
      <div className="flex justify-between items-center lg:flex-row ">
        <div>
        <p className="text-[20px] text-[#5C5C5C] ml-[8px] pb-4">
           Stock In Formation
          </p>
        </div>

        <div>
          <Link to={'/dashboard/addnewstock'}>

          <button className="bg-[#3C8DBC] lg:px-0 px-3 text-[15px] font-samibold text-white lg:w-[132px] h-[36px] text-center  rounded-[3px]">
            <div className="flex gap-1 items-center justify-center">
              <MdAddCircle /> <h1>Add New</h1>
            </div>
          </button>
          </Link>
        </div>
      </div>

      {/*2nd nav  */}

      <div>
        <div className="flex flex-col pb-3 mt-8  lg:flex-row justify-between  items-center">
          {/* show excel button */}

          <button className="bg-[#2AA778] lg:w-[132px] lg:px-0 text-[15px] px-3 font-samibold text-white h-[36px] rounded-[3px]">
            Export Excel
          </button>

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
    </div>
  );
};

export default StockIntemsnav;
