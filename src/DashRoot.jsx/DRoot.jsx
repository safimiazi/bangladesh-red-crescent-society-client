import { Outlet } from 'react-router-dom';
import DashNavbar from '../Shared/DashNavbar';
import DashSidebar from '../Shared/DashSidebar';

const DRoot = () => {
 
    return (
        <div className="flex bg-white">
            <DashSidebar/>
            <div className="flex-1 flex flex-col h-screen overflow-y-auto">
                <DashNavbar/>
                <main className="flex-1 bg-[#F2F2F2] h-screen py-4 overflow-x-hidden overflow-y-auto p-4">
                   <Outlet/>
                </main>
            </div>
        </div>
    );
};

export default DRoot;
