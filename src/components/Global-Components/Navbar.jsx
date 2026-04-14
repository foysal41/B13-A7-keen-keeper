import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { IoAnalyticsSharp } from "react-icons/io5";

const Navbar = () => {
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
            <li className="flex items-center gap-1 bg-[#1F2937] text-white px-4 py-3 rounded cursor-pointer">
              <AiOutlineHome />
              <a className="">Home</a>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              <CiClock2 />
              <a className="">Timeline</a>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              <IoAnalyticsSharp />
              <a className="">Stats</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
