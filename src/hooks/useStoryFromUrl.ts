import { useSelector } from "react-redux";
import { RootState } from "../redux/storeConfig";

export const getStoryFromUrl = (url: string) => {
  const stories = useSelector((state: RootState) => state.storiesStore.stories);

  // Limpiar la URL, eliminar barras al principio y los prefijos
  const cleanedUrl = url
    .replace(/^\/+/, "") // Elimina barras al principio
    .replace(/^head-/, "") // Elimina 'head-' si está presente
    .replace(/^stories\//, "") // Elimina '/stories/' al principio
    .split("/")[0] // Solo tomar el primer segmento de la URL
    .toLowerCase(); // Convertir todo a minúsculas
  try {
    // Buscar la historia en la lista de historias
    return stories.find((story) => story.title.toLowerCase() === cleanedUrl);
  } catch (error) {
    console.error("Error durante el mapeo en getStoryFromUrl:", error);
    return null;
  }
};
