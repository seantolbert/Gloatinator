import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faPenToSquare,
  faTrash,
  faDeleteLeft,
  faLink,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTransition, animated, update } from "react-spring";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [updateCart, setUpdateCart] = useState(false);

  const cardMenuTransition = useTransition(menuOpen, {
    from: { y: 50, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 50, opacity: 0 },
    config: { duration: 150 },
  });

  const updateCartTransition = useTransition(updateCart, {
    from: { x: -200, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -200, opacity: 0 },
    config: { duration: 500 },
  });

  const stuff = [
    { main: "neat", value: "start" },
    { main: "neato", value: "start" },
    { main: "neaty", value: "start" },
    { main: "neatly", value: "end" },
  ];

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleUpdateCart = () => {
    setUpdateCart(!updateCart);
    console.log(updateCart);
  };

  return (
    <div className="h-96 flex justify-between items-center w-full">
      {stuff.map((item, index) => (
        <>
          <div
            key={index}
            className="h-full group flex flex-col justify-center items-center "
          >
            <div className="z-[10] h-10 w-10 flex justify-center items-center bg-white rounded-full group-hover:h-6 group-hover:w-6 transition-all duration-300 opacity-100 group-hover:opacity-0 text-2xl">
              <FontAwesomeIcon icon={faGithub} />

              <span className="bg-green-400 w-3 h-3 absolute rounded-full -translate-y-4 translate-x-3"></span>
            </div>
            <div className="h-20 w-0 p-1 group-hover:h-56 group-hover:w-48 flex flex-col justify-center items-center rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ">
              <div className="flex justify-between w-full h-full transition-all duration-300">
                <div className="text-teal-300 translate-all duration-100">
                  Title here right now boiii thats right im looking at you
                </div>
                {/* remove when not logged in */}
                {!menuOpen && (
                  <div
                    className="mr-2 text-white text-xl  duration-300"
                    onClick={handleMenuOpen}
                  >
                    <FontAwesomeIcon icon={faEllipsis} />
                  </div>
                )}
              </div>
              {cardMenuTransition(
                (style, item) =>
                  item && (
                    <animated.div
                      style={style}
                      className="flex w-full justify-between my-3"
                    >
                      <div className="w-7 h-7 rounded-full bg-white flex justify-center items-center ">
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                      <div
                        onClick={handleUpdateCart}
                        className="w-7 h-7 rounded-full bg-white flex justify-center items-center "
                      >
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
                    </animated.div>
                  )
              )}
              <div>
                <img
                  src="https://i.imgur.com/M4mu25f.png"
                  alt="example image"
                  className="rounded-lg"
                />
                <span className="absolute w-8 h-8 text-xl text-white bg-green-400 rounded-full -translate-y-7 -translate-x-2 flex justify-center items-center">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition duration-300 delay-100 flex flex-col">
                <span className="text-xs text-white pt-2">
                  about a month ago
                </span>
                <span className="text-white text-sm">
                  We have a description here. and what a description it is, i
                  mean do you feel pretty described??
                </span>
              </div>
            </div>
          </div>
          {updateCartTransition(
            (style, item) =>
              item && (
                <animated.div
                  style={style}
                  className="absolute h-screen w-52 bg-amber-400"
                >

                </animated.div>
              )
          )}
        </>
      ))}
      <span className="z-[-1] absolute w-screen bg-white -translate-y-10 h-0.5"></span>
    </div>
  );
}

export default App;
