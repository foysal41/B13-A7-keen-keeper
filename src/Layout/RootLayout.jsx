import React from "react";
import Navbar from "../components/Global-Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Global-Components/Footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
