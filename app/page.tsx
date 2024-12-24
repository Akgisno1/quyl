import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-row w-screen h-screen overflow-hidden">
      <SideBar />
      <div className="flex flex-col  p-4 gap-3 bg-gray-50 w-full h-full  overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
};

export default page;
