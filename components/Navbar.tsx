import React from "react";
import MobileSideBar from "./MobileSideBar";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between gap-12 max-sm:flex-col-reverse max-sm:gap-3 text-[14px] items-center">
      <div className="flex items-center bg-white rounded-xl max-sm:w-full w-[60%] px-3 py-3">
        <img src="Search.svg" className="h-5 " />
        <input
          type="text"
          placeholder="Search your course"
          className="ml-2 outline-none w-full text-gray-700"
        />
      </div>
      <div className="flex flex-row items-center justify-between max-sm:w-full">
        <MobileSideBar />
        <div className="flex flex-row items-center  gap-6 max-sm:gap-3">
          <div className="relative">
            <img src="help.svg" className="h-7 max-sm:h-4" />
          </div>
          <div className="relative">
            <img src="message.svg" className="h-6 max-sm:h-3" />
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
          </div>
          <div className="relative">
            <img src="settings.svg" className="h-7 max-sm:h-4" />
          </div>

          <div className="relative">
            <img src="Notification.svg" className="h-7  max-sm:h-4" />
            <span className="absolute top-0 max-sm:-top-1 right-0 bg-red-500 rounded-full w-2 h-2"></span>
          </div>
          <div className="flex flex-row  items-center">
            <img src="User.png" className="rounded-xl w-10 h-10" />
            <span className="ml-2 text-[#05162E] text-[18px]  max-md:hidden">
              Adeline H. Dancy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
