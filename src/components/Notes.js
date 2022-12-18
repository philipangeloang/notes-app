import React from "react";

export default function Notes(props) {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const backgroundColorStyle = {
    backgroundColor: "",
  };

  if (props.noteColor === "blue") {
    backgroundColorStyle.backgroundColor = "#58CFEE";
  } else if (props.noteColor === "red") {
    backgroundColorStyle.backgroundColor = "#F7979F";
  } else if (props.noteColor === "yellow") {
    backgroundColorStyle.backgroundColor = "#F9E193";
  } else if (props.noteColor === "violet") {
    backgroundColorStyle.backgroundColor = "#A990BA";
  } else if (props.noteColor === "green") {
    backgroundColorStyle.backgroundColor = "#DFE3BC";
  } else if (props.noteColor === "orange") {
    backgroundColorStyle.backgroundColor = "#FFB38C";
  }

  return (
    <div
      className="px-7 pt-7 pb-4 aspect-square rounded-2xl"
      style={backgroundColorStyle}
    >
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
        <i
          className="fa-solid fa-trash text-white rounded-full p-3 bg-black cursor-pointer"
          onClick={() => {
            return props.onDelete(props.id);
          }}
        />
      </div>
    </div>
  );
}
