import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faPenToSquare,
  faTrashCan,
  faXmark,
  faDeleteLeft,
  faLink,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTransition, animated } from "react-spring";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [updateCart, setUpdateCart] = useState(false);

  const cardMenuTransition = useTransition(menuOpen, {
    from: { y: 50, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 50, opacity: 0 },
    config: { duration: 150 },
  });

  const confirmDeleteTransition = useTransition(confirmDelete, {
    from: { y: 50, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 50, opacity: 0 },
  });

  const updateCartTransition = useTransition(updateCart, {
    from: { x: -200, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -200, opacity: 0 },
    config: { duration: 500 },
  });

  const stuff = [
    { main: "neat", value: "1" },
    { main: "neato", value: "2" },
    { main: "neaty", value: "3" },
    { main: "neatly", value: "4" },
  ];

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleConfirmDelete = () => {
    setConfirmDelete(!confirmDelete);
  };

  const handleUpdateCart = () => {
    setUpdateCart(!updateCart);
  };

  return (
    <div className="h-screen flex justify-between items-center w-full">
      {stuff.map((item, index) => (
        <React.Fragment key={index}>
          <div className="h-full group flex flex-col justify-center items-center ">
            <div className="z-[10] h-10 w-10 flex justify-center items-center bg-white rounded-full group-hover:h-6 group-hover:w-6 transition-all duration-300 opacity-100 group-hover:opacity-0 text-2xl">
              <FontAwesomeIcon icon={faGithub} />
              <span className="bg-green-400 w-3 h-3 absolute rounded-full -translate-y-4 translate-x-3"></span>
            </div>
            <div className="h-20 w-0 p-1 group-hover:h-56 group-hover:w-48 flex flex-col justify-center items-center rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ">
              <input
                type="checkbox"
                className="peer translate-x-20 translate-y-28 opacity-0 z-[5] h-20"
                style={{ height: "40px" }}
              />
              <div className="flex justify-between items-end w-full h-full transition-all duration-300 translate-y-12 peer-checked:translate-y-0">
                <div className="text-teal-300 translate-all duration-100">
                  Title here right now boiii thats right im looking at you
                </div>
                {/* remove when not logged in */}
                <div className="mr-2 text-white text-xl duration-300 peer-checked:hidden">
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </div>
              <div className="flex w-full justify-between my-3 translate-y-12 peer-checked:translate-y-0 peer-checked:z-[0] z-[-10] transition duration-300 opacity-0 peer-checked:opacity-100">
                <div
                  className="w-7 h-7 rounded-full bg-white flex justify-center items-center"
                  onClick={handleConfirmDelete}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
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
                {confirmDeleteTransition(
                  (style, item) =>
                    item && (
                      <animated.div
                        style={style}
                        className="absolute text-slate-400 bg-white p-2 rounded-md w-5/6 flex justify-between items-center"
                      >
                        <button
                          className=" text-sm absolute rounded-full px-1 bg-slate-100 -translate-y-5 -translate-x-3"
                          onClick={handleConfirmDelete}
                        >
                          <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <span className="text-sm">Are you sure?</span>
                        <button className="bg-amber-700 p-2 w-10 text-white rounded-full">
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </animated.div>
                    )
                )}
              </div>
              {/* {cardMenuTransition(
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
              )} */}
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
                ></animated.div>
              )
          )}
        </React.Fragment>
      ))}
      <span className="z-[-1] absolute w-screen bg-white -translate-y-10 h-0.5"></span>
    </div>
  );
}

export default App;
