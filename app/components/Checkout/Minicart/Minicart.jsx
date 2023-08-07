"use client";

import CartContext from "../../../context/cart-context";
import { useContext, useEffect } from "react";
import { X } from "lucide-react";
import MinicartItem from "./MinicartItem";
import { loadStripe } from "@stripe/stripe-js";
import Button from "@/app/components/UI/Button";

const stripePromise = loadStripe(
  "pk_test_51MwJT4ATgveX2IIzzm9sLqp8v3rPZ99yPdaejvRHOyiVtJQvyIHzDlqplx2BWJD5TFtC221zh8yoC7uzu9uEC8Cz00SIVXjGpj"
);

const emptyCart = <p>You have no items in the cart.</p>;

const Minicart = () => {
  const cartCtx = useContext(CartContext);
  const visible = cartCtx.cartState.isVisible;
  const cartItems = cartCtx.cartState.items;

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
        method: "POST",
        body: JSON.stringify(cartItems),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      await stripe.redirectToCheckout({
        sessionId: res.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative mx-auto px-6 xl:max-w-7xl">
      <div className="absolute right-0 w-full md:w-2/5">
        <div
          className={`${
            visible
              ? "translate-x-0 md:translate-y-0 "
              : "translate-x-full md:-translate-x-0 md:-translate-y-full"
          }  fixed z-40  h-screen w-full rounded-lg border-2 border-slate-100 bg-slate-100 p-6 transition-all duration-500 md:h-auto md:max-h-[80%] xl:max-w-lg`}
        >
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <X onClick={cartCtx.onShowCart} className="cursor-pointer" />
          </div>
          <div className="flex max-h-[65vh] flex-col justify-start overflow-y-auto overflow-x-hidden  md:max-h-[60vh] md:items-center ">
            {cartItems < 1
              ? emptyCart
              : cartItems.map((item) => {
                  return (
                    <MinicartItem
                      key={item.key}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      image={item.image}
                      size={item.size}
                    />
                  );
                })}
          </div>
          {cartCtx.cartState.totalQuantity > 0 && (
            <div className="mt-4 flex items-center justify-between md:mt-8">
              <p className="text-base font-semibold">
                Total price: £
                {cartItems
                  .reduce((acc, item) => acc + item.quantity * item.price, 0)
                  .toFixed(2)}
              </p>
              <Button text="Checkout" onClick={handlePayment} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Minicart;
