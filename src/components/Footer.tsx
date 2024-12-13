import React from "react";
import { Additional } from "@/types/storyTypes";
import { BlocksRenderer, RootNode } from "@strapi/blocks-react-renderer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Footer({ additionals }: { additionals: Additional[] }) {

  return (
    <footer>
      <Accordion type="single" collapsible className="w-full mt-2">
        {additionals.map((additional, index) => (
          <AccordionItem
            value={"additional-" + index}
            key={index}
            className="my-2"
          >
            <AccordionTrigger>{additional.title}</AccordionTrigger>
            <AccordionContent className="p-4">
              <BlocksRenderer content={additional.description as RootNode[]} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </footer>
  );
}