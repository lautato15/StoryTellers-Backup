import React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function InfoToggle() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="icon" className="p-2 md:p-6">
          Info
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="bg-black text-white -right-6 absolute min-w-36 font-bold"
      >
        <DropdownMenuItem>Creditos</DropdownMenuItem>
        <DropdownMenuItem>Deja un Mensaje</DropdownMenuItem>
        <DropdownMenuItem>Accesibilidad</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
