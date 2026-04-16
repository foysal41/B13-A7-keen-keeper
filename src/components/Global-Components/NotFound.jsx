import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl md:text-7xl font-extrabold">404</h1>
      <h2 className="mt-2  text-xl md:text-2xl">Page Not Found</h2>
      <p className="mt-3  max-w-md mx-auto text-center">
        Looks like this friendship link is broken. The page you're looking for
        doesn't exist or has been moved.
      </p>
      <Link to={"/"} className="mt-2 btn bg-[#2f4f46] text-white">
        <FaArrowLeft className="text-sm" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
