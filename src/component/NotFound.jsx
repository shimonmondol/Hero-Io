import React from "react";

const NotFound = () => {
  return (
    <div className="bg-[#F5F5F5] py-10 min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center">
        <img
          src="https://i.ibb.co/QFj91zZj/error-404.png"
          alt="404 Error"
          className="w-80"
        />
        <h1 className="font-bold text-4xl mt-12">Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
