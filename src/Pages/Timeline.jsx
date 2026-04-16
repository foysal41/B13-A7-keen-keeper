import React, { useContext } from "react";
import call from "../assets/call.png";
import text from "../assets/text.png";
import video from "../assets/video.png";
import { ContactFriendContext } from "../context/ContactFriendProvider";

const Timeline = () => {
  const contextData = useContext(ContactFriendContext);
  const { action } = contextData;

  const iconMap = {
    call: call,
    text: text,
    video: video,
  };

  const formetDate = (isodate) => {
    return new Date(isodate).toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-[30px] md:text-[62px] font-bold">Timeline</h2>

        <div className="rounded-md space-y-5 ">
          {action.length === 0 ? (
            <p>Not activites yet</p>
          ) : (
            action.map((item, idx) => (
              <div
                key={idx}
                className=" bg-white flex items-center gap-3 p-4  "
              >
                <div>
                  <img src={iconMap[item.type]} alt={item.type} />
                </div>

                <div>
                  <h4>
                    <span className="font-bold">{item.type}</span> With{" "}
                    {item.friendName}
                  </h4>
                  <p>{formetDate(item.data)}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
