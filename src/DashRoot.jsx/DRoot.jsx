
import { Outlet } from 'react-router-dom';
import DashNavbar from '../Shared/DashNavbar';
import DashSidebar from '../Shared/DashSidebar';

const DRoot = () => {
 
    return (
        <div className="flex h-screen bg-white">
            <DashSidebar/>
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Navbar */}
                <DashNavbar/>
                <main className="flex-1 bg-gray-200 overflow-x-hidden overflow-y-auto p-4">
            
                   <Outlet/>
                </main>
            </div>
        </div>
    );
};

export default DRoot;
