import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { IoAnalyticsSharp } from "react-icons/io5";
import { NavLink } from "react-router";

const Navbar = () => {
  // Nav bar active and inactive style
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 ${isActive ? "bg-[#244D3F] text-white" : ""} `;

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto  ">
        <div className="navbar-start">
          <a href="/" className="text-[#244D3F] text-2xl font-bold">
            <span className="text-[#1F2937]">Keen</span>Keeper
          </a>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end ">
          <ul className="flex flex-cols gap-8">
            <NavLink to={"/"} className={navLinkClass}>
              <AiOutlineHome />
              Home
            </NavLink>
            <NavLink to={"/timeline"} className={navLinkClass}>
              <CiClock2 />
              Timeline
            </NavLink>
            <NavLink to={"/stats"} className={navLinkClass}>
              <IoAnalyticsSharp />
              Stats
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
