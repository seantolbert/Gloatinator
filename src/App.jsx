import { colours } from "nodemon/lib/config/defaults";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const stuff = [
    { main: "neat", value: "start" },
    { main: "neato", value: "start" },
    { main: "neaty", value: "start" },
    { main: "neati", value: "start" },
    { main: "neatly", value: "end" },
    { main: "neatly", value: "end" },
    { main: "neatly", value: "end" },
    { main: "neatly", value: "end" },
  ];

  return (
    <div className="h-screen flex justify-between items-center w-full">
      {stuff.map((item) => (
        <div className="flex flex-col items-center">
          <span className="h-20 w-20 bg-slate-400 rounded-md opacity-0"></span>
          <span className="peer z-[10] h-4 w-4 bg-black rounded-full"></span>
          <span className="h-20 w-20 bg-slate-400 rounded-md opacity-0 peer-hover:opacity-100 transition duration-300">date</span>
        </div>
      ))}
      <span className="absolute w-full bg-black h-1"></span>
    </div>
  );
}

export default App;
