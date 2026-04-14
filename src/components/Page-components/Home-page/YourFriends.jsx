import React from "react";
import Card from "../../../ui/Card";
import useApps from "../../../hooks/useApps";
import { GridLoader } from "react-spinners";

const YourFriends = () => {
  const { friends, loading } = useApps();

  return (
    <div className="container mx-auto py-20">
      <hr className="py-4 text-[#E9E9E9]" />
      <h2 className="text-[24px] font-bold">Your Friends</h2>

      {/* Friends cards */}
      <div className="mt-3">
        {loading ? (
          <div className="flex justify-center items-center">
            <GridLoader color="#244D3F" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {/* Card item */}
            {friends.map((friend, idx) => (
              <Card key={idx} friend={friend}></Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourFriends;
