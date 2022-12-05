import React from "react";

export default function Notes(props) {
  const colors = [
    "#58CFEE",
    "#F7979F",
    "#F9E193",
    "#A990BA",
    "#DFE3BC",
    "#FFB38C",
  ];

  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="bg-[#A990BA] px-7 pt-7 pb-4 aspect-square rounded-2xl">
      <input
        name="title"
        placeholder="Title"
        className="bg-transparent outline-none w-full font-bold text-lg placeholder:text-black placeholder:font-bold"
      />
      <textarea
        name="content"
        placeholder="This is Jotter Notes"
        className="bg-transparent outline-none w-full h-[75%] resize-none font-medium placeholder:text-black"
      />
      <div className="flex justify-between items-center text-sm text-[#202020]">
        <div>
          {month} {day}, {year}
        </div>
        <i className="fa-solid fa-trash text-white rounded-full p-3 bg-black" />
      </div>
    </div>
  );
}
