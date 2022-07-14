import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faPenToSquare,
  faTrash,
  faDeleteLeft,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const stuff = [
    { main: "neat", value: "start" },
    { main: "neato", value: "start" },
    { main: "neaty", value: "start" },
    { main: "neaty", value: "start" },
    { main: "neaty", value: "start" },
    { main: "neaty", value: "start" },
    { main: "neaty", value: "start" },
    { main: "neaty", value: "start" },
    { main: "neatly", value: "end" },
  ];

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <div className="h-96 flex justify-between items-center w-full">
      {stuff.map((item, index) => (
        <div
          key={index}
          className="h-full group flex flex-col justify-center items-center"
        >
          <div className="z-[10] h-10 w-10 flex justify-center items-center bg-white rounded-full group-hover:h-6 group-hover:w-6 transition-all duration-300 opacity-100 group-hover:opacity-0 text-2xl">
            <FontAwesomeIcon icon={faGithub} />

            <span className="bg-green-400 w-3 h-3 absolute rounded-full -translate-y-4 translate-x-3"></span>
          </div>
          <div className="h-20 w-0 p-1 group-hover:h-56 group-hover:w-48 flex flex-col justify-center items-center rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ">
            <div className="flex justify-between w-full h-fit">
              <div className="text-teal-300">
                Title here right now boiii thats right im looking at you
              </div>
              {/* remove when not logged in */}
              {!menuOpen && (
                <div
                  className="mr-2 text-white text-xl trasition-all duration-300"
                  onClick={handleMenuOpen}
                >
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              )}
            </div>
            <div className={`transition-all duration-300 flex w-full justify-between my-3 ${menuOpen ? '' : 'h-0'} `}>
              <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center ">
                <FontAwesomeIcon icon={faTrash} />
              </div>
              <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center ">
                <FontAwesomeIcon icon={faPenToSquare} />
              </div>
              <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center ">
                <FontAwesomeIcon icon={faLink} />
              </div>
              <div
                className="w-7 h-7 text-white flex justify-center items-center"
                onClick={handleMenuOpen}
              >
                <FontAwesomeIcon icon={faDeleteLeft} />
              </div>
            </div>

            <img
              src="https://i.imgur.com/M4mu25f.png"
              alt="example image"
              className="rounded-lg"
            />

            <div className="opacity-0 group-hover:opacity-100 transition duration-300 delay-100 flex flex-col">
              <span className="text-xs text-white">about a month ago</span>
              <span className="text-white text-sm">
                We have a description here. and what a description it is, i mean
                do you feel pretty described??
              </span>
            </div>
          </div>
        </div>
      ))}
      <span className="z-[-1] absolute w-screen bg-white -translate-y-10 h-0.5"></span>
    </div>
  );
}

export default App;
