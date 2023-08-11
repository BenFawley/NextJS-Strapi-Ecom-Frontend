"use client";

import { useContext, useState } from "react";
import CartContext from "@/app/context/cart-context";
import Image from "next/image";
import Button from "@/app/components/UI/Button";
import { toast } from "react-hot-toast";
import Size from "./Size";
import Accordion from "./Accordion";
import { Calendar, Check } from "lucide-react";
import SizeGuide from "./Size Guide/SizeGuide";
import UiContext from "@/app/context/ui-context";

const ProductDetails = ({ name, price, description, image, sizes }) => {
  console.log(sizes);
  const cartCtx = useContext(CartContext);
  const uiCtx = useContext(UiContext);
  const [sizeError, setSizeError] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const sortedArray =
    sizes &&
    sizes.sort(function (a, b) {
      if (a.attributes.sortOrder) {
        return a.attributes.sortOrder - b.attributes.sortOrder;
      } else {
        return a.id - b.id;
      }
    });

  const addToCart = () => {
    if (selectedSize === null) {
      setSizeError(true);
      return;
    } else {
      const found = sortedArray.find(
        (options) => options.attributes.size.toUpperCase() === selectedSize
      );
      cartCtx.onAddToCart({
        key: `${found.id}`,
        id: found.id,
        name: `${name}`,
        price: Number(price.toFixed(2)),
        description: description,
        image,
        quantity: 1,
        size: selectedSize ? selectedSize : null,
        isVariation: true,
      });
      toast.success("Item added to cart.");
      setSelectedSize(null);
    }
  };

  const handleSizeSelection = (e) => {
    setSizeError(false);
    e.target.innerText === selectedSize
      ? setSelectedSize("")
      : setSelectedSize(e.target.innerText);
  };

  const imgUrl = process.env.NEXT_PUBLIC_API_URL + image.data.attributes.url;

  return (
    <div className="mt-10 flex flex-col justify-between px-6 md:flex-row">
      <div className="w-full max-w-xl md:w-3/5">
        <Image
          src={imgUrl}
          alt={name}
          width={image.data.attributes.width}
          height={image.data.attributes.height}
        />
      </div>
      <div className="w-full md:w-2/5">
        <h1 className="my-5 text-3xl font-semibold md:text-4xl">{name}</h1>
        <p className="my-5 text-lg font-semibold">£{price}</p>
        <div className="my-5 max-w-[330px]">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium">Size:</h3>
            <p
              className="cursor-pointer text-sm text-gray-600"
              onClick={() => {
                uiCtx.onToggleSizeGuide();
              }}
            >
              View size guide
            </p>
          </div>
          <div className="flex items-center justify-start gap-2">
            {sizes &&
              sortedArray.map((item) => (
                <Size
                  id={item.id}
                  key={item.id}
                  size={item.attributes.size.toUpperCase()}
                  onClick={handleSizeSelection}
                  selectedSize={selectedSize}
                />
              ))}
          </div>
          <p className={`${sizeError ? "block" : "hidden"} text-red-600`}>
            Please select a size
          </p>
        </div>
        <div className="my-5 w-full rounded-xl bg-neutral-100 p-5 text-stone-950 md:w-[70%]">
          <div className="flex gap-4 text-[15px]">
            <Calendar width={16} />
            <div>
              <h3 className="font-medium">Order before 22:00</h3>
              <p>Next day delivery - Shipping free</p>
            </div>
          </div>
        </div>
        <Button
          text="Add to Cart"
          onClick={addToCart}
          className="my-5 w-full md:w-[70%]"
        />
        <div className="my-5">
          <div className="flex items-center gap-3">
            <Check stroke="#4ade80" />
            <p>
              <span className="font-medium">Free</span> returns within 30 days
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Check stroke="#4ade80" />
            <p>
              <span className="font-medium">Free</span> shipping
            </p>
          </div>
        </div>
        <div className="my-5">
          <Accordion
            id="accordion-1"
            heading="Product Description"
            content={description}
          />
          <Accordion
            id="accordion-2"
            heading="Delivery Information"
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid eius dolorem doloribus tempora similique hic at placeat dolor praesentium harum rem temporibus consequuntur, voluptates deleniti quas consectetur adipisci accusamus."
            }
          />
          <Accordion
            id="accordion-3"
            heading="Size & Fit"
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid eius dolorem doloribus tempora similique hic at placeat dolor praesentium harum rem temporibus consequuntur, voluptates deleniti quas consectetur adipisci accusamus."
            }
          />
        </div>
        <SizeGuide />
      </div>
    </div>
  );
};

export default ProductDetails;
