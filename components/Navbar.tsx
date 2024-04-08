"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Route from "./Route";
import { navLinks } from "@/constants";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { link } from "fs";

export default function Navbar() {
  return (
    <nav className="flex items-center flex-row justify-between max-w-6xl mx-auto max-sm:hidden">
      <div className="bg-black size-16 text-white grid place-content-center">
        LOGO
      </div>

      <ul className="flex items-center gap-8">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Route route={link.route} label={link.label} />
          </li>
        ))}
      </ul>

      <div className="login space-x-2">
        <Button className="bg-green-800" onClick={() => null}>
          Log in
        </Button>

        <Button className="bg-sky-800" onClick={() => null}>
          Sign up
        </Button>
      </div>
    </nav>
  );
}
