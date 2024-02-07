import { NavLink } from "react-router-dom";
import logo from "../assets/Group.png";
import tile from "../assets/Group1.png";
import { useContext, useState } from "react";
import { DashboardResponsiveContext } from "../Context/ResponsiveContext";

const DashSidebar = () => {

  const { click } = useContext(DashboardResponsiveContext);

  const dashboardRoutes = [
    {
      route: 'Home',
      path: '/',
      icon: <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 0.677734C9.08634 0.677734 8.19014 0.928083 7.40875 1.40159L2.40875 4.43159C1.67349 4.87714 1.06552 5.50477 0.643585 6.25383C0.221649 7.00289 -1.43044e-05 7.8481 6.92125e-10 8.70782V14.9998C6.92125e-10 16.3259 0.526784 17.5977 1.46447 18.5354C2.40215 19.473 3.67392 19.9998 5 19.9998H15C16.3261 19.9998 17.5978 19.473 18.5355 18.5354C19.4732 17.5977 20 16.3259 20 14.9998V8.70682C19.9998 7.8473 19.778 7.00212 19.3561 6.25329C18.9342 5.50446 18.3263 4.87704 17.5913 4.4316L12.5913 1.4016C11.8099 0.928091 10.9137 0.677734 10 0.677734ZM8.44526 3.11204C8.91409 2.82794 9.45181 2.67773 10 2.67773C10.5482 2.67773 11.0859 2.82794 11.5547 3.11204L16.5547 6.14204C16.9958 6.40931 17.3605 6.78577 17.6137 7.23507C17.8668 7.6843 17.9998 8.19119 18 8.70682V14.9998C18 15.7955 17.6839 16.5585 17.1213 17.1211C16.5587 17.6838 15.7956 17.9998 15 17.9998H14V14.9998C14 13.939 13.5786 12.9215 12.8284 12.1714C12.0783 11.4212 11.0609 10.9998 10 10.9998C8.93913 10.9998 7.92172 11.4212 7.17157 12.1714C6.42143 12.9215 6 13.939 6 14.9998V17.9998H5C4.20435 17.9998 3.44129 17.6838 2.87868 17.1211C2.31607 16.5585 2 15.7955 2 14.9998V8.70782C1.99999 8.19198 2.13299 7.68483 2.38615 7.23539C2.63931 6.78595 3.00409 6.40938 3.44525 6.14205L8.44526 3.11204ZM11.4142 13.5856C11.7893 13.9607 12 14.4694 12 14.9998V17.9998H8V14.9998C8 14.4694 8.21071 13.9607 8.58578 13.5856C8.96086 13.2105 9.46956 12.9998 10 12.9998C10.5304 12.9998 11.0391 13.2105 11.4142 13.5856Z"
          fill="#B1B6CA"
        />
      </svg>
    },
    {
      route: 'Abouttttttttttt', path: '/about', icon: <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.843 8.26065C20.1388 7.61993 19.2246 7.29453 18.2784 7.33669C17.3285 7.38069 16.4529 7.79317 15.8119 8.49623L13.5765 10.9519C13.5096 10.8914 13.4326 10.8437 13.3611 10.7887C13.604 10.3002 13.7535 9.75751 13.7535 9.17637C13.7535 6.25049 11.4805 3.47036 8.8325 2.8718C9.27811 2.45565 9.75765 1.89192 10.0318 1.18612C10.2574 0.605891 9.74756 0 9.08281 0H6.58793C5.86908 0 5.36845 0.696638 5.68111 1.29703C5.99378 1.89559 6.45681 2.43457 6.87217 2.85071C4.17465 3.39244 1.8338 6.20832 1.8338 9.17728C1.8338 9.68968 1.94199 10.1755 2.13363 10.6191C0.868304 11.324 0 12.6605 0 14.2087V17.8752C0 20.1493 1.85122 22 4.12605 22H9.09015C11.8674 22 14.509 20.8011 16.3373 18.7102L21.1015 13.2627C22.3944 11.8135 22.2779 9.57143 20.843 8.26249V8.26065ZM7.79365 5.49885C9.32304 5.49885 11.0028 7.42377 11.0028 9.17637C11.0028 9.67593 10.592 10.082 10.0859 10.082H5.5014C4.99527 10.082 4.5845 9.67593 4.5845 9.17637C4.5845 7.42377 6.26426 5.49885 7.79365 5.49885ZM19.0413 11.4404L14.2679 16.899C12.9613 18.3922 11.0752 19.2483 9.09106 19.2483H4.12697C3.36869 19.2483 2.75162 18.6314 2.75162 17.8733V14.2068C2.75162 13.4488 3.36869 12.8319 4.12697 12.8319H11.331C11.6556 12.8319 11.9206 13.0959 11.9206 13.4204C11.9206 13.7109 11.7033 13.9621 11.4154 14.0033L6.68328 14.6789C5.93143 14.7861 5.40788 15.4828 5.51607 16.2344C5.62426 16.986 6.32203 17.5049 7.07205 17.4013L11.8051 16.7257C13.2886 16.514 14.4412 15.3224 14.6411 13.8704L17.8475 10.3478C17.9932 10.1874 18.1922 10.0939 18.4086 10.0838C18.6204 10.0728 18.8331 10.1489 18.9917 10.2937C19.3182 10.5916 19.3448 11.1013 19.0422 11.4414L19.0413 11.4404Z"
          fill="#B1B6CA"
        />
      </svg>
    },
    { route: 'Fuck-1', path: '/fuck1' },
    { route: 'Fuck-2', path: '/fuck2' },
    { route: 'Fuck-3', path: '/fuck3' },
  ]

  return (
    <div>
      <div className="p-6 py-2 h-screen hidden lg:block">
        <div className='w-full z-50 md:w-auto px-4 py-5 flex justify-between items-center'>
          <div className="flex gap-2 items-center justify-between">
            <img src={logo} alt="" />
            <img className="w-44" src={tile} alt="" />
          </div>
        </div>
        <div>
          <ul className="space-y-2 tracking-wide mt-6  overflow-y-auto ">
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
                              ? "  py-2 flex items-center space-x-4 rounded-lg text-[#FFF] bg-[#006F45]"
                              : ""
                        }
                      >
                        <div className="flex pl-4   gap-3 items-center">
                          <div>
                            {dashboardRoute?.icon}
                          </div>

                          <h1 className="-mr-1 text-[16px]  mt-1 text-[#878FA7]">
                            {dashboardRoute?.route}
                          </h1>
                        </div>
                      </NavLink>
                    </li>
                  </div>
                </div>
              )
            }
          </ul>
        </div>
      </div>
      <div className={`lg:hidden bg-[#FFFFFF] absolute w-full h-full space-y-5 bottom-0 top-16 left-0 pl-4 duration-700 ${click ? 'left-0' : 'left-[-100%]'}`}>
        {/* mobile view bro */}
        <div className="p-6 py-2 h-screen">
          <div className='w-full z-50 md:w-auto px-4 py-5 flex justify-between items-center'>
            <div className="mx-auto flex gap-2 items-center justify-between">
              <img src={logo} alt="" />
              <img className="w-44" src={tile} alt="" />
            </div>
          </div>
          <div>
            <ul className="space-y-2 tracking-wide mt-6 overflow-y-auto">
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
                                ? "  py-2 flex items-center space-x-4 rounded-lg text-[black] bg-[#006F45]"
                                : ""
                          }
                        >
                          <div className="flex pl-4 gap-3 justify-center items-center">
                            <div>
                              {dashboardRoute?.icon}
                            </div>

                            <h1 className="-mr-1 text-[16px]  mt-1 text-black ">
                              {dashboardRoute?.route}
                            </h1>
                          </div>
                        </NavLink>
                      </li>
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
