import { NavLink } from "react-router-dom";
import logo from "../assets/Group.png";
import tile from "../assets/Group1.png";
import { FaHome } from "react-icons/fa";
import { IoChevronBackCircle } from "react-icons/io5";

const DashSidebar = () => {
    return (
        <div className="p-6 py-2">
            <div className="flex gap-2 items-center justify-between">
                <img src={logo} alt="" />
                <img className="w-44" src={tile} alt="" />
            </div>
            <div>
                <ul className="menu gap-2 overflow-y-auto">
                    <li><NavLink exact to={"/dashboard"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-300" : ""
                    }><FaHome /> Dashboard</NavLink></li>
                    <li><NavLink to={"/dashboard/human-asset"} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-green-300" : ""
                    }><FaHome /> Human Assets</NavLink></li>
                    <li><NavLink to={"/"} activeClassName="active"><IoChevronBackCircle /> Back</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default DashSidebar;
