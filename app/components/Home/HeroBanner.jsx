import Link from "next/link";
import Hero1 from "@/public/hero1.png";
import Hero2 from "@/public/hero2.png";
import Hero3 from "@/public/hero3.png";
import Hero4 from "@/public/hero4.png";
import HeroImage from "./HeroImage";

const HeroBanner = () => {
  return (
    <div className="relative bg-sky-100 px-2 py-10 md:p-5 xl:h-screen xl:p-10">
      <div className="text-center">
        <h1 className=" mb-5 text-4xl font-extrabold text-gray-800 sm:my-10 sm:text-6xl lg:text-8xl">
          Explore your true style
          <br className="hidden xl:block" /> with Exhibit
        </h1>
        <div className="flex flex-col">
          <div className="order-10 flex flex-col items-center justify-center gap-2 sm:order-[unset] sm:flex-row sm:gap-10">
            <Link
              href="/category/t-shirts"
              className="w-4/5 rounded-md border-2 border-blue-600 bg-royal px-8 py-3 text-base font-medium text-white transition-all duration-200 hover:opacity-80 lg:w-[190px]"
            >
              Shop Men's
            </Link>
            <Link
              href="/category/t-shirts"
              className="w-4/5 rounded-md border-2 border-blue-600 bg-transparent px-8 py-3 text-base font-medium  text-blue-600 transition-all duration-200 hover:bg-white lg:w-[190px]"
            >
              Shop Women's
            </Link>
          </div>

          <div className="order-1 mb-5 flex max-w-full flex-wrap px-5 sm:order-[unset] sm:mt-10">
            <HeroImage src={Hero1} className="xl:-top-[150px]" />
            <HeroImage src={Hero2} className="" />
            <HeroImage src={Hero3} className="" />
            <HeroImage src={Hero4} className="xl:-top-[150px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
