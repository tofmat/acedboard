import Button from "@/components/buttton";
import React from "react";

const Heading = () => {
  return (
    <div className="mt-6">
      <div className="flex gap-3 text-xl font-medium">
        <p className="text-[#918E90]">Home</p>
        <p className="text-[#540039]">/</p>
        <p className="text-[#540039]">Help Centre</p>
      </div>
      <div className="mt-8 lg:mt-10 md:mt-14 flex flex-col md:flex-row gap-6 md:gap-8 items-start justify-between">
        <div>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#000] mb-2 md:mb-4 capitalize">
            How can we{" "}
            <span className="bg-clip-text text-transparent bg-text-gradient">
              help you
            </span>{" "}
            today?
          </h2>
          <p className="text-xl text-[#74757A] font-medium">
            Lorem Ipsum is simply dummy text of the printing{" "}
          </p>
        </div>

        <div className="flex items-center w-full bg-white border-4 border-gray-200 rounded-xl shadow p-1.5 max-w-md">
          <input
            type="text"
            placeholder="Find in templates"
            className="w-full text-sm px-2 py-1 text-gray-700 border-none rounded-l-xl focus:outline-none"
          />
          <Button text="Search" />
        </div>
      </div>
    </div>
  );
};

export default Heading;
