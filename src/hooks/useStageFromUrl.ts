import { useSelector } from "react-redux";
import { RootState } from "../redux/storeConfig";
import { Story } from "@/types/storyTypes";

export const getStageFromUrl = (url: string, story: Story) => {
  const stories = useSelector((state: RootState) => state.storiesStore.stories);

  // Limpiar la URL, eliminar barras al principio y los prefijos
  const cleanedUrl = url
    .replace(/^\/+/, "") // Elimina barras al principio
    .replace(/^head-/, "") // Elimina 'head-' si está presente
    .replace(/^stories\//, "") // Elimina '/stories/' al principio
    .split("/"); // Divide la URL en segmentos

  const storyTitle = cleanedUrl[0].toLowerCase(); // Primer segmento: el título de la historia
  const stageTitle = cleanedUrl.slice(2).join(" ").replace(/-/g, " "); // Reemplaza guiones por espacios

  try {
    if (!story) {
      console.error(`Historia no encontrada para el título: ${storyTitle}`);
      return null;
    }

    // Buscar la stage dentro de esa historia
    const stage = story.stages.find(
      (stage) => stage.title.toLowerCase() === stageTitle.toLowerCase()
    );

    return stage || null; // Si la stage no es encontrada, devolver null
  } catch (error) {
    console.error("Error durante el mapeo en getStageFromUrl:", error);
    return null;
  }
};
