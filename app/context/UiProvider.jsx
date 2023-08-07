"use client";

import { UiContextProvider } from "./ui-context";

const UiProvider = ({ children }) => {
  return <UiContextProvider>{children} </UiContextProvider>;
};

export default UiProvider;
