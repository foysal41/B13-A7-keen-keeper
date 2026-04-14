import React from "react";

const Stats = () => {
  return (
    <div className="container mx-auto pb-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Item one */}
        <div className="bg-white px-18 py-6 rounded-lg text-center shadow-sm">
          <h3 className="text-[32px] text-[#244D3F] font-semibold">10</h3>
          <p className="text-[#64748B]">Total Friends</p>
        </div>

        {/* Item two */}
        <div className="bg-white px-18 py-6 rounded-lg text-center shadow-sm">
          <h3 className="text-[32px] text-[#244D3F] font-semibold">3</h3>
          <p className="text-[#64748B]">On Track </p>
        </div>

        {/* Item three */}
        <div className="bg-white px-18 py-6 rounded-lg text-center shadow-sm ">
          <h3 className="text-[32px] text-[#244D3F] font-semibold">6</h3>
          <p className="text-[#64748B]">Need Attention </p>
        </div>

        {/* Item four */}
        <div className="bg-white px-18 py-6 rounded-lg text-center shadow-sm">
          <h3 className="text-[32px] text-[#244D3F] font-semibold">12</h3>
          <p className="text-[#64748B]">Interactions This Month </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
