import React from "react";
import Card from "../components/Card";

function Home() {
  const stuff = [
    { main: "neat", value: "1" },
    { main: "neato", value: "2" },
    { main: "neaty", value: "3456" },
    { main: "neaty", value: "3456" },
    { main: "neaty", value: "3456" },
    { main: "neaty", value: "24" },
    { main: "neaty", value: "368" },
    { main: "neaty", value: "354" },
    { main: "neatly", value: "475" },
  ];

  return (
    <div className="h-screen flex justify-between items-center w-full rotate-45">
      {stuff.map((item, index) => (
        <Card key={index} item={item} />
      ))}
      {/* <span className="z-[-1] absolute w-screen bg-white -translate-y-10 h-0.5"></span> */}
    </div>
  );
}

export default Home;
