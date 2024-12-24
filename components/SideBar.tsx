import React from "react";

const SideBar = () => {
  return (
    <div className=" max-md:hidden flex flex-col items-start gap-6 h-screen w-72 bg-white shadow-md text-left text-[16px] px-3 py-6">
      <img src="logo.svg" alt="Logo" className="h-11 " />
      <div className="flex flex-col items-start gap-1 w-full font-semibold">
        <a
          href="#"
          className="flex w-full pl-3 items-center py-3 px-8 text-gray-500 rounded-md hover:bg-[#EEEEEE]"
        >
          <img src="dashboard.svg" className="h-7 " />
          <span className="mx-4">Dashboard</span>
        </a>
        <a
          href="#"
          className="flex w-full pl-3 items-center py-3 px-8  bg-[#EEEEEE] rounded-md text-black"
        >
          <img src="student.svg" className="h-7 " />
          <span className="mx-4 font-bold">Students</span>
        </a>
        <a
          href="#"
          className="flex w-full pl-3 items-center py-3 px-8 text-gray-500 rounded-md hover:bg-[#EEEEEE]"
        >
          <img src="chapters.svg" className="h-7 " />
          <span className="mx-4">Chapter</span>
        </a>
        <a
          href="#"
          className="flex w-full pl-3 items-center py-3 px-8 text-gray-500 rounded-md hover:bg-[#EEEEEE]"
        >
          <img src="help.svg" className="h-7 " />
          <span className="mx-4">Help</span>
        </a>
        <a
          href="#"
          className="flex w-full pl-3 items-center py-3 px-8 text-gray-500 rounded-md hover:bg-[#EEEEEE]"
        >
          <img src="Report.svg" className="h-7 " />
          <span className="mx-4">Reports</span>
        </a>
        <a
          href="#"
          className="flex w-full pl-3 items-center py-3 px-8 text-gray-500 rounded-md hover:bg-[#EEEEEE]"
        >
          <img src="settings.svg" className="h-7 " />
          <span className="mx-4">Settings</span>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
