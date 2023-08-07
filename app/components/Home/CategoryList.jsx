"use client";
import { useInView } from "react-intersection-observer";
import CategoryListItem from "./CategoryListItem";
import Dress from "@/public/dress.jpg";
import Coats from "@/public/jackets.jpg";
import Shoes from "@/public/shoes.jpg";
import TShirts from "@/public/tshirts.jpg";
import Vests from "@/public/vests.jpg";
import Mens from "@/public/mens.jpg";

const CategoryList = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  });
  return (
    <div
      ref={ref}
      className="mx-auto mb-10 p-3 text-center text-gray-800 xl:max-w-7xl"
    >
      <div
        className={`${
          inView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        }  transition-all duration-1000`}
      >
        <h1 className="mb-5 text-2xl font-extrabold lg:text-5xl">
          Shop Our Range
        </h1>
        <p className=" mx-auto mb-12 block w-4/5 font-medium sm:max-w-[45%]">
          Explore our exclusive range to shop the latest trends
        </p>
      </div>
      <div className="flex flex-col gap-5 sm:gap-[1%] md:gap-1">
        <div
          className={`flex flex-col flex-wrap gap-5 transition-all delay-75 duration-1000 sm:flex-row sm:gap-[1%] md:flex-nowrap md:gap-0 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
          }`}
        >
          <CategoryListItem
            imgData={Dress}
            title="Women's"
            className="relative w-full sm:w-[49%] md:w-1/4"
          />
          <CategoryListItem
            imgData={Shoes}
            title="Footwear"
            className="relative w-full sm:w-[49%] md:mx-1 md:w-1/4"
          />
          <CategoryListItem
            imgData={Mens}
            title="Men's"
            className="relative w-full sm:w-full md:w-1/2"
          />
        </div>

        <div
          className={`flex flex-col flex-wrap gap-5 transition-all delay-150 duration-1000 sm:flex-row sm:gap-[1%] md:flex-nowrap md:gap-0 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
          }`}
        >
          <CategoryListItem
            imgData={TShirts}
            title="T-Shirts"
            className="relative order-6 w-full sm:w-full md:order-1 md:w-1/2"
          />
          <CategoryListItem
            imgData={Vests}
            title="Activewear"
            className="relative order-2 w-full sm:w-[49%] md:mx-1 md:w-1/4"
          />
          <CategoryListItem
            imgData={Coats}
            title="Coats"
            className="relative order-3 w-full sm:w-[49%] md:w-1/4"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
