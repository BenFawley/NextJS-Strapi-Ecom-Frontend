"use client";

import { useInView } from "react-intersection-observer";
import { Truck, Shirt, Wallet } from "lucide-react";
import WhyShopHereItem from "./WhyShopHereItem";

const WhyShopHere = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });
  return (
    <div
      ref={ref}
      className="mx-auto my-10 flex max-w-7xl flex-col items-center justify-center p-4 text-center text-gray-800 md:my-40 "
    >
      <div
        className={`${
          inView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }  transition-all duration-1000`}
      >
        <h1
          className={`mb-5 text-2xl font-extrabold transition-all duration-1000 lg:text-5xl `}
        >
          Why Choose Us?
        </h1>
        <p
          className={` mx-auto mb-12 block w-4/5 font-medium transition-all duration-1000 sm:max-w-[45%] `}
        >
          Here at Exhibit, we pride ourselves on fostering a customer-centric
          culture, where your satisfaction is at the heart of everything we do.
        </p>
      </div>
      <div
        className={`flex flex-col items-center transition-all delay-75 duration-1000 sm:gap-[2%] md:flex-row md:gap-[1%] lg:justify-between ${
          inView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }`}
      >
        <WhyShopHereItem
          icon={
            <Truck
              className="mx-auto"
              stroke="#0157fc"
              width={40}
              height={40}
            />
          }
          title="Free Delivery"
          content="We believe that great style should come with great convenience.
            That's why we offer FREE delivery on all orders, ensuring that your
            fashion finds make their way to your doorstep without any additional
            cost."
        />
        <WhyShopHereItem
          icon={
            <Shirt
              className="mx-auto"
              stroke="#0157fc"
              width={40}
              height={40}
            />
          }
          title="Quality Products"
          content=" From handpicking the finest fabrics to curating on-trend
          collections, our commitment to quality and style ensures that you
          not only look your best but feel your best too."
        />
        <WhyShopHereItem
          icon={
            <Wallet
              className="mx-auto"
              stroke="#0157fc"
              width={40}
              height={40}
            />
          }
          title="Refund Guarentee"
          content="Your satisfaction is our utmost priority and we stand behind the
          quality of every product we offer. If you're not happy with your
          purchase, we gladly provide a hassle-free refund process."
        />
      </div>
    </div>
  );
};

export default WhyShopHere;
