"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion = ({ id, heading, content, giftcard, className }) => {
  const [active, setActive] = useState(false);

  const handleSetActive = () => {
    const root = document.documentElement;
    const height = document.getElementById(id).scrollHeight;

    root.style.setProperty("--accordion-height", `${height}px`);

    setActive((prevState) => !prevState);
  };

  return (
    <div
      className={`border-b-2 border-gray-200 py-5 hover:cursor-pointer ${className}`}
      onClick={handleSetActive}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{heading}</h3>
        <ChevronDown
          className={`${
            active ? "rotate-180" : "rotate-0"
          } transition-all duration-300`}
        />
      </div>
      <div
        id={id}
        className="AccordionContent"
        data-state={active ? "open" : "closed"}
      >
        {giftcard ? content : <p className="pt-3 ">{content}</p>}
        {/* <p className="pt-3 ">{content}</p> */}
      </div>
    </div>
  );
};

export default Accordion;
