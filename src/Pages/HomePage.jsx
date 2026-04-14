import React from "react";
import Banner from "./../components/Page-components/Home-page/Banner";
import Stats from "../components/Page-components/Home-page/Stats";
import YourFriends from "../components/Page-components/Home-page/YourFriends";

const HomePage = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <Banner></Banner>
      <Stats></Stats>
      <YourFriends></YourFriends>
    </div>
  );
};

export default HomePage;
