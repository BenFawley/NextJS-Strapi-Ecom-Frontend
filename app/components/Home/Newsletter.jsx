"use client";

import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { toast } from "react-hot-toast";

import Button from "../UI/Button";

const Newsletter = () => {
  const inputRef = useRef();

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  });

  const handleSubscription = (e) => {
    e.preventDefault();
    toast.success("Subscription successful");
    inputRef.current.value = "";
  };
  return (
    <div
      ref={ref}
      className="mx-auto flex max-w-7xl justify-between rounded-lg bg-blue-600 px-4 md:px-20 xl:my-20"
    >
      <div className="bg-shape flex w-full flex-col justify-center gap-6 bg-[url('/background.png')] bg-cover bg-no-repeat py-20  md:min-h-[500px] md:w-[50%]">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-white sm:text-4xl">
            Subscribe to our{" "}
            <span className="border-b-4 border-yellow-400">Newsletter</span>
          </h3>
          <p className="text-white sm:text-lg">
            Stay up-to-date with our product updates and events
          </p>
          <form>
            <div
              className={`relative transition-all duration-1000 ${
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-40 opacity-0"
              }`}
            >
              <input
                ref={inputRef}
                className="mb-2 h-12 w-full rounded-lg indent-3 md:h-[60px] md:w-[90%]"
                placeholder="Your email address"
              ></input>
              <Button
                text="Subscribe"
                onClick={handleSubscription}
                className="h-12 w-full !bg-gray-800 hover:bg-gray-600 md:absolute md:right-[11%] md:top-[6px] md:w-[unset]"
              />
            </div>
          </form>
        </div>
      </div>
      <div
        className={`hidden w-[50%] bg-[url('/newsletter.png')] bg-cover transition-all duration-1000 md:block md:min-h-[400px] ${
          inView ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"
        }`}
      ></div>
    </div>
  );
};

export default Newsletter;
