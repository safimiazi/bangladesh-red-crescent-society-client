import { NavLink } from "react-router-dom";
import logo from "../assets/Group.png"
import tile from "../assets/Group1.png"
import { FaHome } from "react-icons/fa";
import { LuHelpCircle } from "react-icons/lu";

const DashSidebar = () => {
    return (
        <div className="p-6 py-2">
            <div className="flex gap-2 items-center justify-between">
                <img src={logo} alt="" />
                <img className="w-44" src={tile} alt="" />
            </div>
            <div>
               <ul className="menu gap-2">
                <li><NavLink><FaHome /> Dashboard</NavLink></li>
                <li><NavLink><FaHome /> Beneficiaries</NavLink></li>
                <li><NavLink><FaHome /> Human Assets</NavLink></li>
                <li><NavLink><FaHome /> Services</NavLink></li>
                <li><NavLink><FaHome /> Events</NavLink></li>
                <li><NavLink><FaHome /> Projects</NavLink></li>
                <li><NavLink><FaHome /> Staff Trainings </NavLink></li>
                <li><NavLink><FaHome /> Volunteer Trainings</NavLink></li>
                <li><NavLink><FaHome /> Miscellaneous</NavLink></li>
                <li><NavLink><FaHome /> Fleet Management</NavLink></li>
                <li><NavLink><FaHome /> MCH Center Management</NavLink></li>
                <li><NavLink><FaHome /> ICT Inventories</NavLink></li>
                <li><NavLink><FaHome /> Stock Management</NavLink></li>
                <li><NavLink><FaHome /> Unapproved List </NavLink></li>
                <li><NavLink><LuHelpCircle /> Help</NavLink></li>
               

               </ul>
            </div>

        </div>
    );
};

export default DashSidebar;
