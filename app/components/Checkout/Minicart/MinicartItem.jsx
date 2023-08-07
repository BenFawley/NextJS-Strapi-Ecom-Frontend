"use client";

import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";
import { useContext } from "react";
import CartContext from "@/app/context/cart-context";

const MinicartItem = ({ id, name, price, quantity, image, size }) => {
  const cartCtx = useContext(CartContext);
  const imgUrl = process.env.NEXT_PUBLIC_API_URL + image.data.attributes.url;

  const removeItemFromCart = () => {
    cartCtx.onRemoveFromCart({
      id,
      quantity,
    });
  };

  const increaseQuantity = () => {
    cartCtx.onIncreaseQuantity(id);
  };

  const decreaseQuantity = () => {
    cartCtx.onDecreaseQuantity(id);
  };

  return (
    <div className=" mt-5 flex w-full justify-between">
      <Image
        src={imgUrl}
        alt={name}
        width={image.data.attributes.width}
        height={image.data.attributes.height}
        className="w-20"
      />
      <div className="flex w-4/5 flex-col justify-between p-2">
        <div className="flex">
          <h3 className="mb-2 w-4/5 text-base font-semibold">{name}</h3>
          <Trash2
            className="mb-2 ml-auto w-5 hover:cursor-pointer md:w-6"
            onClick={removeItemFromCart}
          />
        </div>
        <p className="mb-2 text-sm text-gray-600">Size: {size}</p>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 text-sm md:text-base">
            Qty:
            <Minus
              width="16"
              className="hover:cursor-pointer"
              onClick={decreaseQuantity}
            />
            {quantity}
            <Plus
              width="16"
              className="hover:cursor-pointer"
              onClick={increaseQuantity}
            />
          </div>
          <p className="text-sm md:text-base">£{price}</p>
        </div>
      </div>
    </div>
  );
};

export default MinicartItem;
