import React, { useEffect, useState } from "react";

const useApps = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchFriendsData = async () => {
      const res = await fetch("/friends.json");
      const friendsData = await res.json();

      setTimeout(() => {
        setFriends(friendsData);
        setLoading(false);
      }, 1500);
    };
    fetchFriendsData();
  }, []);

  return { friends, loading };
};

export default useApps;
