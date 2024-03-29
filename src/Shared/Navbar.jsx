import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to={"/"}> <li><a>Home</a></li></Link>
                        <Link to={"/dashboard/home"}> <li><a>Dashboard</a></li></Link>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl">Safi Miazi</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to={"/"}> <li><a>Home</a></li></Link>
                    <Link to={"/dashboard/home"}> <li><a>Dashboard</a></li></Link>

                   

                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"/register"}>                <a className="py-2 px-4 bg-green-400 rounded hover:bg-green-500">Register</a></Link>
            </div>
        </div>
    );
};

export default Navbar;