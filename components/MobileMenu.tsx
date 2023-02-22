"use client";

import { Bars3Icon, PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Drawer from "./Drawer";
import NewChat from "./NewChat";
import Sidebar from "./Sidebar";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-row justify-between items-center text-white">
        <button className="btn" onClick={() => setIsOpen(true)}>
          <Bars3Icon className="w-8 h-8 m-2" />
        </button>
        <p>MattGPT</p>
        <NewChat>
          <button className="btn">
            <PlusIcon className="w-8 h-8 m-2" />
          </button>
        </NewChat>
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="bg-[#202123] h-full">
          <Sidebar />
        </div>
      </Drawer>
    </>
  );
}

export default MobileMenu;
