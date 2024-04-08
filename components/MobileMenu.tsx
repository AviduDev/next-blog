"use client";

import { navLinks } from "@/constants";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Route from "./Route";

export default function MobileMenu() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <nav className="sm:hidden">
      <div onClick={mobileMenuHandler} className="menuTrigger">
        {openMobileMenu ? (
          <Cross1Icon className="size-8 inline-block" />
        ) : (
          <HamburgerMenuIcon className="inline-block size-8" />
        )}
      </div>

      {openMobileMenu ? (
        <div
          className="fixed w-full h-screen bg-transparent top-0 left-0 z-50"
          onClick={() => setOpenMobileMenu(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute h-screen left-0 top-0 w-60 bg-white z-[999] px-5 border border-r overflow-y-hidden flex flex-col gap-4"
          >
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
