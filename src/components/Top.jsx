import React from "react";
import Nav from "../components/Nav";

export default function Top() {
  return (
    <>
      <div className="w-full flex justify-between items-center p-2 ">
        <span className="text-white text-3xl">Gloatinator</span>
        <div className="">
          <Nav />
        </div>
      </div>
    </>
  );
}
