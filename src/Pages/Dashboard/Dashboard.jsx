import { IoIosPeople } from "react-icons/io";
import { MdOutlineNaturePeople } from "react-icons/md";
import { FaHandHoldingHeart, FaPencilRuler  } from "react-icons/fa";


const Dashboard = () => {
    return (
        <div className="p-4">
            <div className="mb-2">
                <h2 className="text-2xl">Dashboard</h2>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-2">
                <div className="bg-white rounded p-5 flex items-center justify-center gap-8">
                    <IoIosPeople className="text-6xl rounded bg-yellow-300" />
                    <div>
                        <h3 className="text-2xl font-bold">14,55</h3>
                        <p>Volunteers</p>
                    </div>
                </div>
                <div className="bg-white rounded p-5 flex items-center justify-center gap-8">
                    <MdOutlineNaturePeople className="text-6xl rounded bg-red-200" />
                    <div>
                        <h3 className="text-2xl font-bold">155</h3>
                        <p>Staffs</p>
                    </div>
                </div>
                <div className="bg-white rounded p-5 flex items-center justify-center gap-8">
                    <FaHandHoldingHeart className="text-6xl rounded bg-lime-300" />
                    <div>
                        <h3 className="text-2xl font-bold">0</h3>
                        <p>Beneficiary</p>
                    </div>
                </div>
                <div className="bg-white rounded p-5 flex items-center justify-center gap-8">
                    <FaPencilRuler  className="text-6xl rounded bg-teal-300" />
                    <div>
                        <h3 className="text-2xl font-bold">14,55</h3>
                        <p>Projects</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Dashboard;