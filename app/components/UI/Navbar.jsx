"use client";

import Link from "next/link";
import { User, Search } from "lucide-react";
import { useContext, useRef } from "react";
import UiContext from "@/app/context/ui-context";
import MinicartIcon from "../Checkout/Minicart/MinicartIcon";
import { useRouter } from "next/navigation";

const Navbar = ({ links, isMobile, isDesktop }) => {
  const UiCtx = useContext(UiContext);
  const searchRef = useRef();
  const router = useRouter();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const searchText = searchRef.current.value;
    router.push(`/search?name=${encodeURIComponent(searchText)}`);
    if (window.outerHeight < 769) {
      UiCtx.onToggleMenu();
    }
  };

  return (
    <>
      <nav
        className={`
        ${
          UiCtx.isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } 
        ${isDesktop ? "!hidden md:!flex" : "h-screen"} 
        ${
          isMobile
            ? "absolute z-30 w-full bg-slate-100 transition-all duration-500 md:!hidden"
            : ""
        } 
        flex flex-col  items-center md:flex md:h-auto md:flex-row md:gap-5`}
      >
        {links.data.map((link) => {
          return (
            <Link
              key={link.id}
              id={link.id}
              className="bg-transparents order-3 p-3 capitalize text-black underline-offset-4 transition-all hover:underline active:underline"
              href={`/category/${link.attributes.name}`}
              onClick={UiCtx.onCloseMenu}
            >
              {link.attributes.name}
            </Link>
          );
        })}
        <div className="order-0 my-5 flex w-full items-center justify-center md:order-12 md:my-0">
          <ul className="flex items-center gap-2">
            <li title="Search">
              <Search className="cursor-pointer md:hidden" />
            </li>
            <li className="">
              <div className="relative">
                <input
                  type="text"
                  ref={searchRef}
                  className="rounded-md bg-slate-200 py-1 indent-2"
                  placeholder="Search"
                  onKeyDown={handleKeyDown}
                />
                <Search
                  className="absolute right-3 top-1 hidden cursor-pointer md:block"
                  onClick={handleSearch}
                />
              </div>
            </li>
            <li title="Profile" className="hidden">
              <Link href="/profile" onClick={UiCtx.onToggleMenu}>
                <User className="cursor-pointer" />
              </Link>
            </li>
            <MinicartIcon />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
