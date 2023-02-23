"use client";
import { useRouter } from "next/navigation";
import { Bars3Icon, PlusIcon } from "@heroicons/react/24/solid";
import { useMenuContext } from "../context/MobileMenu";
import Drawer from "./Drawer";
import NewChat from "./NewChat";
import Sidebar from "./Sidebar";

function MobileMenu() {
  const { isMenuOpen, setMenuOpen } = useMenuContext();
  const router = useRouter();

  const goHome = () => {
    router.push(`/`);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center text-white">
        <button className="btn" onClick={() => setMenuOpen(true)}>
          <Bars3Icon className="w-8 h-8 m-2" />
        </button>
        <button
          onClick={goHome}
          className="text-gray-300 rounded-lg p-4 hover:bg-gray-700/70 transition-all duration-200 ease-out"
        >
          MattGPT
        </button>
        <NewChat>
          <button className="btn">
            <PlusIcon className="w-8 h-8 m-2" />
          </button>
        </NewChat>
      </div>
      <Drawer isOpen={isMenuOpen} setIsOpen={setMenuOpen}>
        <div className="bg-[#202123] h-full">
          <Sidebar />
        </div>
      </Drawer>
    </>
  );
}

export default MobileMenu;
