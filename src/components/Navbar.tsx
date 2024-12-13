import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/Mode-Toggle";
import { MenuToggle } from "./Menu-Toggle";
import { InfoToggle } from "./Info-Toggle";
import useHasScroll from "../hooks/useHasScroll";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from 'lucide-react';

const languageFlags: Record<string, { src: string; alt: string }> = {
  es: { src: "./es-flag.png", alt: "Bandera de España" },
  en: { src: "./en-flag.png", alt: "Bandera de Reino Unido" },
  br: { src: "./br-flag.png", alt: "Bandera de Brasil" },
};

function Navbar() {
  const location = useLocation();
  const hasScroll = useHasScroll();
  const [currentLanguage, setCurrentLanguage] = React.useState(
    navigator.language.slice(0, 2)
  );

  const logoText =
    location.pathname === "/murallas" && hasScroll
      ? "Nuestra Señora de las Murallas"
      : "StoryTellers";

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <MenuToggle />
          <Link
            to="/"
            className={`font-bold text-foreground transition-all ${hasScroll ? "text-sm md:text-base" : "text-lg md:text-2xl"
              }`}
          >
            {logoText}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelector
            currentLanguage={currentLanguage}
            setCurrentLanguage={setCurrentLanguage}
          />
          <ModeToggle />
          <InfoToggle />
        </div>
      </div>
    </nav>
  );
}

function LanguageSelector({
  currentLanguage,
  setCurrentLanguage,
}: {
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Cambiar idioma</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languageFlags).map(([lang, { src, alt }]) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setCurrentLanguage(lang)}
          >
            <img src={src} alt={alt} className="mr-2 h-4 w-4" />
            {lang.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Navbar;

