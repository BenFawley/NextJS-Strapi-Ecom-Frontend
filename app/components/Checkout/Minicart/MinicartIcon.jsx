"use client";

import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import CartContext from "@/app/context/cart-context";

const MinicartIcon = ({ isDesktop }) => {
  const cartCtx = useContext(CartContext);
  return (
    <li
      title="Minicart"
      className={`${
        isDesktop ? "absolute right-5 top-8 md:hidden" : ""
      } list-none`}
    >
      <div className="relative" onClick={cartCtx.onShowCart}>
        <ShoppingCart className="cursor-pointer" />
        {cartCtx.cartState.totalQuantity > 0 && (
          <span className="absolute -right-4 -top-3 z-10 w-7 rounded-full border-2 border-black bg-white text-center text-sm">
            {cartCtx.cartState.totalQuantity}
          </span>
        )}
      </div>
    </li>
  );
};

export default MinicartIcon;
