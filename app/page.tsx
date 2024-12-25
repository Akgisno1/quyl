"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

const page = () => {
  return (
    <Provider store={store}>
      <main className="flex flex-row w-screen h-screen overflow-hidden">
        <SideBar />
        <div className="flex flex-col  p-4 gap-3 bg-gray-50 w-full h-full  overflow-hidden">
          <Navbar />
          <Hero />
        </div>
      </main>
    </Provider>
  );
};

export default page;
