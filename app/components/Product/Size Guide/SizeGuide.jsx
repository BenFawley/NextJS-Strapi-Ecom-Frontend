"use client";

import { useState, useContext } from "react";
import SizeTable from "./SizeTable";
import { X } from "lucide-react";
import UiContext from "@/app/context/ui-context";

const SizeGuide = () => {
  const [measurement, setMeasurement] = useState("inches");
  const uiCtx = useContext(UiContext);

  const handleCloseSizeGuide = () => {
    uiCtx.onToggleSizeGuide();
  };

  return (
    <>
      {uiCtx.sizeGuideOpen && (
        <div
          className={` fixed right-0 top-0 z-[100] h-screen w-full bg-[rgba(255,255,255,0.4)] backdrop-blur`}
        >
          <div className="relative h-screen w-full rounded-xl bg-white px-5 pt-20 shadow-lg lg:left-1/2 lg:top-1/2 lg:h-auto lg:w-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:py-10">
            <X
              className="absolute right-5 top-10 cursor-pointer"
              onClick={handleCloseSizeGuide}
            />
            <h3 className="mb-8 pt-10 text-center text-base font-medium">
              Size Guide
            </h3>
            <div className="flex items-center justify-center gap-1 pb-10 text-sm uppercase">
              <p
                className={`${
                  measurement === "inches" ? "font-semibold underline" : ""
                } cursor-pointer`}
                onClick={() => setMeasurement("inches")}
              >
                Inch
              </p>
              <span>|</span>
              <p
                className={`${
                  measurement === "cm" ? "font-semibold underline" : ""
                } cursor-pointer`}
                onClick={() => setMeasurement("cm")}
              >
                CM
              </p>
            </div>
            <SizeTable measurement={measurement} />
          </div>
        </div>
      )}
    </>
  );
};

export default SizeGuide;
