import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { RootState } from "../redux/storeConfig"; // Importa RootState desde tu configuración
import { getStoryFromUrl } from "../hooks/useStoryFromUrl";
import InteractiveMap from "./InteracrtiveMap";
import { MarkerMap } from "@/types/storyTypes";


export default function Frontpage() {
  const location = useLocation();
  const navigate = useNavigate();
  const stories = useSelector((state: RootState) => state.storiesStore.stories);

  // Obtener la historia desde la URL
  const story = getStoryFromUrl(location.pathname);

  useEffect(() => {
    if (!story) {
      toast.error("Error...");
      const timer = setTimeout(() => navigate("/"), 500);
      return () => clearTimeout(timer); // Limpia el temporizador al desmontar
    }
  }, [story, navigate]);

  if (!story) {
    // Mientras redirige, evita renderizar contenido innecesario
    return null;
  }

  // Generar markers para el mapa
  const markers: MarkerMap[] = story.stages.map((stage) => ({
    id: stage.position,
    title: stage.title,
    latitude: stage.gps[0],
    longitude: stage.gps[1],
    link: `/stories/${story.title}/${stage.position}/${stage.title.replace(
      /\s+/g,
      "-"
    )}`.toLowerCase(),
    mapicon: stage.mapIcon.url
  }));


  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Card className="overflow-hidden">
        <img
          src={`${import.meta.env.VITE_API_IMAGES}${story.imageUrl}`}
          alt="Imagen 3D de la muralla"
          className="w-full h-64 object-cover sm:h-80 md:h-96"
        />
        <CardContent className="p-6 sm:p-8">
          <h2 className="text-3xl font-bold font-serif text-center mb-6 sm:text-4xl md:text-5xl">
            {story.title}
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>{story.description}</p>
          </div>
          <div className="flex w-full items-center justify-center mt-8">
            <InteractiveMap markers={markers} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
