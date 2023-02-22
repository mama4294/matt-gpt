import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Drawer({ children, isOpen, setIsOpen }: Props) {
  return (
    <nav
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out h-screen" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-[100%]  ")
      }
    >
      <div
        className={
          "left-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? " translate-x-0 " : "-translate-x-[100%] ")
        }
      >
        <div className="relative w-screen max-w-xs h-full bg-[#202123] ">
          {/* CLose button */}
          <div className="absolute top-0 right-0 -mr-14">
            <button
              className="btn w-fit bg-[#202123] border border-white/20 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className="w-8 h-8 text-white m-2" />
            </button>
          </div>

          {/* Content of Drawer */}
          {children}
        </div>
      </div>
      {/* Outside area to click and close drawer */}
      <section
        className=" w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </nav>
  );
}
