import React from "react";
import {
  FaPhoneAlt,
  FaCommentDots,
  FaVideo,
  FaBell,
  FaArchive,
  FaTrash,
} from "react-icons/fa";

const FriendsDetails = () => {
  return (
    <div className=" bg-[#F8FAFC] py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left side  */}
        <div className="space-y-3 grid-cols-1">
          <div className="bg-[#ffffff] p-6 text-center space-y-2 rounded-lg shadow-xl">
            <img
              className="mx-auto rounded-full h-30"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt=""
            />
            <h2 className="text-[20px] font-semibold">Alex Hell</h2>
            <button className="block mx-auto bg-[#CBFADB] text-[#244D3F] font-semibold text-uppercase  rounded-full p-2 ">
              Overdue
            </button>
            <button className="block mx-auto bg-[#CBFADB] text-[#244D3F] font-semibold text-uppercase rounded-full p-2 ">
              family
            </button>

            <p className="text-[#64748B]">Former colleague, great mentor</p>
            <p className="text-[#64748B]">Preferred: Email</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center p-5 rounded-lg shadow bg-white gap-2">
              <FaBell />
              <p className="text-[16px]">Snooze 2 weeks</p>
            </div>

            <div className="flex items-center justify-center p-5 rounded-lg shadow bg-white gap-2">
              <FaArchive />
              <p className="text-[16px]">Archive</p>
            </div>

            <div className="flex items-center justify-center p-5 rounded-lg shadow bg-white gap-2">
              <FaTrash color="red" />
              <p className="text-[16px] text-red-500">Delete</p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="lg:col-span-3">
          <div>
            {/* First Row */}
            <div className="flex flex-col md:flex-row items-center justify-between  gap-4">
              <div className="bg-white px-30 py-6 rounded-lg text-center shadow-sm">
                <h3 className="text-[32px] text-[#244D3F] font-semibold">10</h3>
                <p className="text-[#64748B]">Total Friend </p>
              </div>

              <div className="bg-white px-30 py-6 rounded-lg text-center shadow-sm">
                <h3 className="text-[32px] text-[#244D3F] font-semibold">30</h3>
                <p className="text-[#64748B]">Goal (Days) </p>
              </div>

              <div className="bg-white px-30 py-6 rounded-lg text-center shadow-sm">
                <h3 className="text-[32px] text-[#244D3F] font-semibold">
                  Feb 27, 2026
                </h3>
                <p className="text-[#64748B]">Next Due </p>
              </div>
            </div>

            {/* second Row */}
            <div className=" mt-5 bg-white px-10 py-6 rounded-lg text-center shadow-sm">
              <div className="flex  justify-between">
                <div>
                  <h3 className="text-[#244D3F] text-[20px]">
                    Relationship Goal
                  </h3>
                  <p className="text-black/30">
                    Connect every{" "}
                    <span className="text-[#244D3F] font-semibold">
                      30 days
                    </span>
                  </p>
                </div>

                <div>
                  <button className="btn btn-soft">Edit</button>
                </div>
              </div>
            </div>

            {/* third Row */}
            <div className="mt-5 bg-white px-10 py-6 rounded-lg  shadow-sm">
              <h3 className="text-[#244D3F] text-[20px]">Quick Check-In </h3>

              <div className="flex gap-3 justify-between items-center mt-3">
                <div className="bg-[#F8FAFC] px-40 py-6 rounded-lg text-center shadow-sm">
                  <FaPhoneAlt />
                  <p className="text-[#64748B] text-[18px]">call </p>
                </div>
                <div className="bg-[#F8FAFC] px-40 py-6 rounded-lg text-center shadow-sm">
                  <FaCommentDots />
                  <p className="text-[#64748B] text-[18px]">Text </p>
                </div>
                <div className="bg-[#F8FAFC] px-40 py-6 rounded-lg text-center shadow-sm">
                  <FaVideo />
                  <p className="text-[#64748B] text-[18px]">Video </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
