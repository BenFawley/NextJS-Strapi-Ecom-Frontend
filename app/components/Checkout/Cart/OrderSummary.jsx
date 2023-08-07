"use client";

import Button from "../../UI/Button";

const OrderSummary = () => {
  return (
    <div className="mt-4 border-t-2 border-neutral-100 py-4 lg:basis-1/4 lg:rounded-lg lg:bg-slate-100 lg:p-4">
      <h3 className="font-medium lg:text-xl">Order Summary:</h3>
      <div className="mb-2 mt-4 flex items-center justify-between">
        <p>Subtotal: </p>
        <p>£50</p>
      </div>
      <div className="mb-2 flex items-center justify-between border-b-2 border-neutral-100 pb-4">
        <p>Shipping: </p>
        <p>FREE</p>
      </div>
      <Button text="Checkout" onClick={() => {}} className="mt-4 w-full" />
    </div>
  );
};

export default OrderSummary;
