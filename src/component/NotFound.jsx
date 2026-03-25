import React from "react";
import error from "../assets/error-404.png"

const NotFound = () => {
  return (
    <div className="bg-[#F5F5F5] py-10">
      <div className="flex flex-col justify-center items-center text-center">
        <img src={error} alt="" />
        <h1 className="font-bold text-4xl mt-12">Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
