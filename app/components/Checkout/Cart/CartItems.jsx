"use client";

import { useContext } from "react";
import CartContext from "@/app/context/cart-context";
import CartItem from "./CartItem";

const CartItems = () => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.cartState.items;

  console.log(cartItems);
  return (
    <div className="lg:basis-3/4">
      {cartItems.map((item) => (
        <CartItem
          key={item.key}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          image={item.image}
          size={item.size}
        />
      ))}
    </div>
  );
};

export default CartItems;
