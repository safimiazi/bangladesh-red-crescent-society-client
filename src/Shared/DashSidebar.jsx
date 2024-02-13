import { NavLink } from "react-router-dom";
import logo from "../assets/Group.png";
import tile from "../assets/Group1.png";
import { useContext, useState } from "react";
import { DashboardResponsiveContext } from "../Context/ResponsiveContext";
import dashboardRoutes from "./dashboardRoutes";
import { RiArrowDropDownLine } from "react-icons/ri";
import './sidebar.css';

const DashSidebar = () => {

  const { click } = useContext(DashboardResponsiveContext);
  const [heading, setHeading] = useState('');

  return (
    <div className="z-50">
      <div className="px-6 pt-2 pb-10 h-screen hidden lg:block overflow-y-auto">
        <div className='w-full z-50 md:w-auto px-4 pt-4 pb-2 flex justify-between items-center'>
          <div className="flex gap-2 items-center justify-between">
            <img src={logo} alt="" />
            <img className="w-44" src={tile} alt="" />
          </div>
        </div>
        <div>
          <ul className="space-y-1 tracking-wide mt-4 overflow-y-auto">
            {
              dashboardRoutes?.map((dashboardRoute, index) =>
                <div key={index}>
                  <div className='group cursor-pointer hidden lg:block group'>
                    <li>
                      <NavLink
                        to={dashboardRoute?.path}
                        className='sideLI flex items-center gap-2 rounded-[4px] h-[48px] pl-3'
                      >
                        <div className="flex pl-4 gap-3 items-center justify-start">
                          <div>
                            {dashboardRoute?.icon}
                          </div>

                          <h1 onClick={() => heading !== dashboardRoute.route ? setHeading(dashboardRoute.route) : setHeading('')}
                            className="navLink text-[14px] font-normal text-[#878FA7] mt-1 flex justify-between items-center w-[190px]">
                            {dashboardRoute?.route}
                            {dashboardRoute.nestedRoute && <RiArrowDropDownLine className='group-hover:text-green-500 text-3xl' />}
                          </h1>
                        </div>
                      </NavLink>
                    </li>
                    <div className={`${heading === dashboardRoute.route ? 'block' : 'hidden' } duration-300 px-2 `}>
                      {
                        dashboardRoute?.nestedRoute && (
                          dashboardRoute.nestedRoutes?.map((dashboardNestedRoute, index) =>
                            <NavLink to={dashboardNestedRoute.path} key={index} className="pl-4 my-1 sideLI flex items-center gap-2 rounded-[4px] h-[48px]">
                              <div className="flex justify-start items-center gap-2 px-6">
                                <div>
                                  {dashboardRoute?.icon}
                                </div>
                                <h1 className="hover:text-[#006f45]">{dashboardNestedRoute?.name}</h1>
                              </div>
                            </NavLink>
                          )
                        )
                      }
                    </div>
                  </div>
                </div>
              )
            }
          </ul>
        </div>
      </div>
      <div className={`lg:hidden bg-[#FFFFFF] absolute w-full h-screen overflow-y-auto space-y-5 bottom-0 top-16 left-0 pl-4 duration-700 ${click ? 'left-0' : 'left-[-100%]'}`}>
        {/* mobile view bro */}
        <div className="p-6 py-2 h-screen">
          <div className='w-full z-50 md:w-auto px-4 py-5 flex justify-between items-center'>
            <div className="mx-auto flex gap-2 items-center justify-between">
              <img src={logo} alt="" />
              <img className="w-44" src={tile} alt="" />
            </div>
          </div>
          <div>
            <ul className="space-y-3 tracking-wide mt-6 overflow-y-auto">
              {
                dashboardRoutes?.map((dashboardRoute, index) =>
                  <div key={index}>
                    <div className='group cursor-pointer lg:block'>
                      <li>
                        <NavLink
                          to={dashboardRoute?.path}
                          className='sideLI flex items-center gap-2 rounded-[4px] h-[48px] pl-3'
                          
                        >
                          <div className="flex pl-4 gap-3 items-center justify-start">
                            <div>
                              {dashboardRoute?.icon}
                            </div>

                            <h1 onClick={() => heading !== dashboardRoute.route ? setHeading(dashboardRoute.route) : setHeading('')}
                              className="navLink text-[14px] font-normal text-[#878FA7] mt-1 flex justify-between items-center w-[300px]">
                              {dashboardRoute?.route}
                              {dashboardRoute.nestedRoute && <RiArrowDropDownLine className='text-3xl' />}
                            </h1>
                          </div>
                        </NavLink>
                      </li>
                      <div className={`${heading === dashboardRoute.route ? 'block' : 'hidden'} duration-300 px-2 `}>
                        {
                          dashboardRoute?.nestedRoute && (
                            dashboardRoute.nestedRoutes?.map((dashboardNestedRoute, index) =>
                              <NavLink to={dashboardNestedRoute.path} key={index} className="pl-4 my-3">
                                <div className="flex justify-start items-center gap-2 px-6">
                                  <div>
                                    {dashboardRoute?.icon}
                                  </div>
                                  <h1 className="hover:text-[#006f45]">{dashboardNestedRoute?.name}</h1>
                                </div>
                              </NavLink>
                            )
                          )
                        }
                      </div>
                    </div>
                  </div>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSidebar;
