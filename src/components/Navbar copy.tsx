import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "@/components/Mode-Toggle";
import { MenuToggle } from "./Menu-Toggle";
import { InfoToggle } from "./Info-Toggle";
import React from "react";
import data from "../../data.json";

import useHasScroll from "../hooks/useHasScroll";

function Navbar() {
  const location = useLocation();
  const hasScroll = useHasScroll();

  return (
    <nav className="w-full  text-center h-20 flex justify-between items-center gap-2  px-8  fixed top-0 z-50 bg-orange-300">
      <MenuToggle />
      {location.pathname === "/murallas" && hasScroll ? (
        <Link
          to="/"
          className="text-lg font-bold  m-0 text-center h-fit mx-auto text-black dark:text-white"
        >
          Nuestra señora de las Murallas
        </Link>
      ) : (
        <Link
          to="/"
          className="text-3xl font-bold  m-0 text-center h-fit mx-auto text-black dark:text-white"
        >
          StoryTellers
        </Link>
      )}
      <ModeToggle />
      <InfoToggle />
    </nav>
  );
}

export default Navbar;
