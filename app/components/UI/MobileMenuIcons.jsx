"use client";

import { useContext } from "react";
import UiContext from "@/app/context/ui-context";
import useLockedBody from "@/app/hooks/useLockedBody";
import { Menu, X } from "lucide-react";

const MobileMenuIcons = () => {
  const UiCtx = useContext(UiContext);
  const [locked, setLocked] = useLockedBody();

  const toggleMenu = () => {
    UiCtx.onToggleMenu();
  };
  return (
    <>
      {UiCtx.isOpen ? (
        <X
          onClick={toggleMenu}
          className="absolute left-5 top-8 h-6 w-6 cursor-pointer md:hidden"
        />
      ) : (
        <Menu
          onClick={toggleMenu}
          className="absolute left-5 top-8 h-6 w-6 cursor-pointer md:hidden"
        />
      )}
    </>
  );
};

export default MobileMenuIcons;
