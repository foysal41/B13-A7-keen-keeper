import React from "react";
import { FaPlus } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="container mx-auto text-center py-20 space-y-4">
      <h1 className="text-[30px] md:text-[48px] text-[#1F2937] font-bold">
        Friends to keep close in your life
      </h1>
      <p className="w-full lg:w-[40%] mx-auto text-[#64748B]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white">
        <FaPlus /> Add a Friend
      </button>
    </div>
  );
};

export default Banner;
