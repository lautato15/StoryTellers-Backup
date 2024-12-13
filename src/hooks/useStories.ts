// src/hooks/useStories.ts
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/apiClient";
import { Story } from "@/types/storyTypes";

export const fetchStories = async (): Promise<Story[]> => {
  const { data } = await apiClient.get(
    "https://api.storytellers.land/api/stories?locale=es&fields[0]=title&fields[1]=header&populate[imageHeader][fields][0]=url&populate[stages][populate][imageHeader][fields][0]=url&populate[stages][populate][mapIcon][fields][0]=url&populate[stages][populate][image][fields][0]=url&populate[stages][populate][audio][fields][0]=url&populate[stages][populate][contents][populate][media][fields][0]=url&populate[stages][populate][additional][populate][audio][fields][0]=url"
  );

  try {
    const formattedData = data.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      imageUrl: item.imageHeader?.url || "", // Asegúrate de obtener la URL
      description: item.header,
      stages: item.stages,
    }));

    return formattedData;
  } catch (error) {
    console.error("Error durante el mapeo de useStories:", error);
    throw error; // Re-lanza el error para que React Query lo maneje
  }
};

export const useStories = () => {
  return useQuery({
    queryKey: ["stories"],
    queryFn: fetchStories,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};
