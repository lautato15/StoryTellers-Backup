import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/Theme-Provider";

export function MenuToggle() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="icon" className=" text-sm p-2  md:p-6">
          Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="bg-black text-white -left-6 absolute min-w-36 font-bold"
      >
        <DropdownMenuItem>Recorridos</DropdownMenuItem>
        <DropdownMenuItem>Sobre StoryTeller</DropdownMenuItem>
        <DropdownMenuItem>Contactanos</DropdownMenuItem>
        <DropdownMenuItem>Politicas de Uso</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
