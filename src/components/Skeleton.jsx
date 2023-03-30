import React from "react";

const Skeleton = (key) => {
  return (
    <div key={key}>
      <div className=" cursor-pointer overflow-hidden rounded-md transition-all duration-500 hover:-translate-y-2 bg-white">
        <div className="overflow-hidden ">
          <div className="w-full max-h-[305px] min-h-[304px] animate-pulse  bg-stone-300"></div>
        </div>
        <div className="flex flex-col gap-1 mt-2 px-1 pb-3">
          <h1 className="bg-stone-300 animate-pulse  h-6 w-2/3"></h1>
          <p className="w-3/4"></p>
          <button className="bg-stone-200 animate-pulse  w-3/4 h-6 mt-2"></button>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
