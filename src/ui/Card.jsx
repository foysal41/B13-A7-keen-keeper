import { Link } from "react-router";

const Card = ({ friend }) => {
  if (!friend) {
    return;
  }
  return (
    <Link to={`/friends-details/${friend.id}`}>
      <div className="bg-white p-6 space-y-3 rounded-lg shadow-xl">
        <img
          className="rounded-full w-18 mx-auto overflow-hidden"
          src={friend.picture}
          alt={friend.name}
        />

        {/* Data */}
        <div className="text-center space-y-2 ">
          <h3 className="text-[20px] font-semibold ">{friend.name}</h3>
          <p className="text-[#64748B] text-[20px]">
            {friend.days_since_contact}d ago
          </p>

          <div className="flex gap-2 justify-center  ">
            {friend.tags.map((tag) => (
              <button className="bg-[#CBFADB] text-[#244D3F] font-semibold text-uppercase rounded-full p-2 ">
                {tag}
              </button>
            ))}
          </div>

          <button
            className={`font-semibold rounded-full px-3 py-1 block mx-auto text-sm capitalize ${
              friend.status === "almost due"
                ? "bg-[#EFAD44] text-white"
                : friend.status === "overdue"
                  ? "bg-[#EF4444] text-white"
                  : friend.status === "on-track"
                    ? "bg-[#244D3F] text-white"
                    : "bg-gray-200 text-gray-800"
            }`}
          >
            {friend.status}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
