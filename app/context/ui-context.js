import { createContext, useEffect, useState } from "react";

//create context
const UiContext = createContext({
  onToggleMenu: () => {},
  onCloseMenu: () => {},
  onToggleSizeGuide: () => {},
});

//context provider
export const UiContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleToggleSizeGuide = () => {
    setSizeGuideOpen((prevState) => !prevState);
  };

  return (
    <UiContext.Provider
      value={{
        isOpen,
        sizeGuideOpen,
        onToggleMenu: handleToggleMenu,
        onCloseMenu: handleCloseMenu,
        onToggleSizeGuide: handleToggleSizeGuide,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiContext;
