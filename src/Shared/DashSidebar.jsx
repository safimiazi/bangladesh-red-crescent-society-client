import { NavLink } from "react-router-dom";
import logo from "../assets/Group.png";
import tile from "../assets/Group1.png";
import { useContext, useState } from "react";
import { DashboardResponsiveContext } from "../Context/ResponsiveContext";
import dashboardRoutes from "./dashboardRoutes";
import { RiArrowDropDownLine } from "react-icons/ri";

const DashSidebar = () => {

  const { click } = useContext(DashboardResponsiveContext);
  const [heading, setHeading] = useState('');
  console.log(heading);

  return (
    <div>
      <div className="px-6 pt-2 pb-10 h-screen hidden lg:block overflow-y-auto">
        <div className='w-full z-50 md:w-auto px-4 pt-4 pb-2 flex justify-between items-center'>
          <div className="flex gap-2 items-center justify-between">
            <img src={logo} alt="" />
            <img className="w-44" src={tile} alt="" />
          </div>
        </div>
        <div>
          <ul className="space-y-3 tracking-wide mt-6 overflow-y-auto ">
            {
              dashboardRoutes?.map((dashboardRoute, index) =>
                <div>
                  <div className='group cursor-pointer hidden lg:block'>
                    <li>
                      <NavLink
                        to={dashboardRoute?.path}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                              ? "py-2 w-full flex items-center justify-between space-x-4 rounded-lg font-bold text-white bg-[#006F45]": ""
                        }
                      >
                        <div className="flex pl-4 gap-3 items-center justify-start">
                          <div>
                            {dashboardRoute?.icon}
                          </div>

                          <h1 onClick={() => heading !== dashboardRoute.route ? setHeading(dashboardRoute.route) : setHeading('')}
                            className="-mr-1 text-[16px]  mt-1 text-[#878FA7] flex justify-between items-center w-full">
                            {dashboardRoute?.route}
                            {dashboardRoute.nestedRoute && <RiArrowDropDownLine className='text-xl' />}
                          </h1>
                        </div>
                      </NavLink>
                    </li>
                    <div className={`${heading === dashboardRoute.route ? 'block' : 'hidden' } duration-300 px-2 `}>
                      {
                        dashboardRoute?.nestedRoute && (
                          dashboardRoute.nestedRoutes?.map((dashboardNestedRoute, index) =>
                            <NavLink to={dashboardNestedRoute.path} key={index} className="pl-4 my-3">
                              <div className="flex justify-start items-center gap-2 px-6">
                                <div>
                                  {dashboardRoute?.icon}
                                </div>
                                <h1>{dashboardNestedRoute?.name}</h1>
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
                  <div>
                    <div className='group cursor-pointer lg:block'>
                      <li>
                        <NavLink
                          to={dashboardRoute?.path}
                          className={({ isActive, isPending }) =>
                            isPending
                              ? "pending"
                              : isActive
                                ? "  py-2 flex justify-start items-center space-x-4 rounded-lg text-white bg-[#006F45]"
                                : ""
                          }
                        >
                          {/* <div className="flex pl-4 gap-3 justify-start items-center">
                            <div>
                              {dashboardRoute?.icon}
                            </div>

                            <h1 className="-mr-1 text-[16px]  mt-1 text-black ">
                              {dashboardRoute?.route}
                            </h1>
                          </div> */}
                          <div className="flex pl-4 gap-3 items-center justify-start">
                            <div>
                              {dashboardRoute?.icon}
                            </div>

                            <h1 onClick={() => heading !== dashboardRoute.route ? setHeading(dashboardRoute.route) : setHeading('')}
                              className="-mr-1 text-[16px]  mt-1 text-[#878FA7] flex justify-between items-center w-full">
                              {dashboardRoute?.route}
                              {dashboardRoute.nestedRoute && <RiArrowDropDownLine className='text-xl' />}
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
                                  <h1>{dashboardNestedRoute?.name}</h1>
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
