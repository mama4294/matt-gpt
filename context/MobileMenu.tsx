"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface MobileMenuContext {
  isMenuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenuContext = createContext<MobileMenuContext>({
  isMenuOpen: false,
  setMenuOpen: (): boolean => false,
});

export const MenuProvider = ({ children }: any) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, setMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MobileMenuContext);
