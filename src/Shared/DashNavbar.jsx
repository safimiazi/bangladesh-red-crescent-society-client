// DashNavbar.js
import { MdMessage } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

const DashNavbar = () => {
    return (
        <div className="navbar bg-base-200 grid grid-cols-5 gap-2">
            <div className="col-span-4 relative">
                <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    className="bg-white w-full h-10 px-5 py-4 pr-10 rounded text-sm focus:outline-none"
                />
                <button className="btn btn-ghost btn-circle absolute right-0 top-0 -mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>

            <div className=" bg-white rounded">

                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <MdMessage className="text-xl" />
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <p>|</p>
                <button className="font-bold flex items-center gap-1 md:ml-2"><IoIosLogOut /> Logout</button>
            </div>
        </div>
    );
};

export default DashNavbar;
