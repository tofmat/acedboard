"use client";
import SideBar from "@/components/sidebar";
import TextHeading from "@/components/textHeading";
import React from "react";
import Body from "./body";

const Content = () => {
  return (
    <div className="mt-8 md:mt-14 flex flex-col lg:flex-row gap-14 items-start">
      <aside className="w-full lg:w-[25%] bg-custom-gradient p-[1px] py-0.5 rounded-xl lg:sticky lg:top-3">
        <SideBar />
      </aside>
      <main className="w-full lg:w-[75%]">
        <Body />
      </main>
    </div>
  );
};

export default Content;
