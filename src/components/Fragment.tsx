import React from 'react'
import { cn } from "@/lib/utils"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import { Fragment } from "@/types/storyTypes";
import { RootNode } from "@strapi/blocks-react-renderer";

export default function Fragment({
  image,
  text,
  title,
  subtitle,
}: Fragment): JSX.Element {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] my-8 ">
      <img
        src={`${import.meta.env.VITE_API_IMAGES}${image}`}
        alt="Imagen de la historia"
        className="w-full h-full object-cover rounded-lg"
      />

      <div
        className={
          "absolute left-4 right-4 p-4 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg bottom-4"
        }
      >
        {title && (
          <div id="header">
            <p className="text-foreground text-2xl leading-relaxed font-bold">
              {title}
            </p>
            <p className="text-foreground text-lg leading-relaxed font-bold">
              {subtitle}
            </p>
          </div>
        )}
        {typeof text !== "string" ? (
          <BlocksRenderer content={text as RootNode[]} />
        ) : (
          <p className="text-foreground text-lg leading-relaxed font-bold">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}

