import React from "react";

const Info = () => {
  return (
    <div className="h-[90vh]">
      <div className="h-full grid grid-cols-4 sm:grid-cols-3 grid-rows-7 gap-3 p-3">
        <div className=" row-span-3 col-span-2 sm:row-span-4 sm:col-span-1 bg-white-500 rounded-lg"></div>
        <div className=" row-span-3 col-span-2 sm:row-span-4 sm:col-span-1 bg-white-500 rounded-lg"></div>
        <div className=" row-span-2 col-span-3 sm:row-span-5 sm:col-span-1 bg-white-500 rounded-lg"></div>
        <div className="same sm:hidden row-span-2 bg-white-500 rounded-lg"></div>
        <div className=" row-span-2 col-span-4 sm:row-span-3 sm:col-span-2 bg-white-500 rounded-lg"></div>
        <div className="same hidden sm:block row-span-2 bg-white-500 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Info;
