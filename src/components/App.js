import React, { useState } from "react";
import Notes from "./Notes";

export default function App() {
  return (
    <React.Fragment>
      <input id="navToggle" type="checkbox" className="hidden" />
      <div className="flex">
        <div className="left-panel w-0 left-[-60px] h-screen bg-white z-10 shadow-xl text-center font-bold py-6 fixed | min-[1280px]:w-32 min-[1280px]:left-0">
          <div className="text-xl">Jotter</div>
          <i
            className="fa-solid fa-circle-plus fa-3x mt-16 cursor-pointer"
            onClick={() => {
              console.log("Clicked");
            }}
          ></i>
        </div>

        <div className="right-panel min-[1280px]:ml-32">
          <div id="navbar" className="px-8 pt-6 pb-12 flex justify-between">
            <div>
              <i className="fa-solid fa-magnifying-glass text-[#c2c2c2]"></i>
              <input
                type="text"
                placeholder="Search"
                className="text-sm font-medium px-2 outline-none"
              />
            </div>
            <label htmlFor="navToggle" className="min-[1280px]:hidden">
              <div className="top bg-black h-1 w-6 mb-[0.2rem] rounded-md transition-all duration-200 ease-in-out"></div>
              <div className="middle bg-black h-1 w-6 mb-[0.2rem] rounded-md transition-all duration-200 ease-in-out"></div>
              <div className="bottom bg-black h-1 w-6 mb-[0.2rem] rounded-md transition-all duration-200 ease-in-out"></div>
            </label>
          </div>

          <div className="px-8 pb-3 font-semibold tracking-tighter text-[3rem]">
            Notes
          </div>

          <div className="p-8 gap-8 grid grid-cols-1 | min-[500px]:grid-cols-2 | min-[840px]:grid-cols-3 | min-[1280px]:grid-cols-4 | min-[1580px]:grid-cols-5 | min-[1800px]:grid-cols-6">
            <Notes />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
