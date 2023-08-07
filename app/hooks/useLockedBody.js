import { useState, useContext, useEffect } from "react";
import UiContext from "../context/ui-context";
import CartContext from "../context/cart-context";

const useLockedBody = () => {
  const [locked, setLocked] = useState(false);

  const uiCtx = useContext(UiContext);
  const cartCtx = useContext(CartContext);
  const visible = cartCtx.cartState.isVisible;

  useEffect(() => {
    locked || uiCtx.isOpen || visible
      ? (document.querySelector("body").style.overflow = "hidden")
      : (document.querySelector("body").style.overflow = "unset");
  }, [locked, uiCtx.isOpen, visible]);

  return [locked, setLocked];
};

export default useLockedBody;
