import React from "react";
import Fragment from "./Fragment";
import Footer from "./Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocation, useNavigate } from "react-router-dom";
import { getStageFromUrl } from "@/hooks/useStageFromUrl";
import { getStoryFromUrl } from "@/hooks/useStoryFromUrl";

import { toast } from "react-hot-toast";


export default function Stage() {
  const location = useLocation();
  const navigate = useNavigate();

  const story = getStoryFromUrl(location.pathname);
  // Asegurarnos de que story.stages sea un arreglo vacío si es undefined
  const stages = story?.stages || [];
  // Solo llamamos a getStageFromUrl si story está definido
  const stage = story ? getStageFromUrl(location.pathname, story) : null;
  React.useEffect(() => {
    if (!story || !stage) {
      toast.error("Error...");
      const timer = setTimeout(() => navigate("/"), 500);
      return () => clearTimeout(timer); // Limpia el temporizador al desmontar
    }
  }, [story, navigate]);

  if (!story) {
    // Mientras redirige, evita renderizar contenido innecesario
    return null;
  }
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8">
          {stage?.title || "Título no disponible"}
        </h1>
        <div className="space-y-16">
          <Fragment
            key={"index1234"}
            image={stage?.imageHeader?.url ?? "default-image.jpg"}
            text={stage?.description}
            title={stage?.title}
            subtitle={stage?.header}
          />
          {stage?.contents?.map((fragment, index) => (
            <Fragment
              key={index}
              image={fragment.media.url}
              text={fragment.description}
            />
          ))}
        </div>
        <Footer additionals={stage?.additional || []} />
      </div>
    </ScrollArea>
  );
}
