import React from "react";
import { Link } from "react-router-dom";
import StorytellerCard from "@/components/Storyteller-Card";
import { Skeleton } from "@/components/ui/skeleton";
import { useDispatch } from "react-redux";
import { useStories } from "@/hooks/useStories";
import { setStories } from "../redux/storiesSlice";
import { AppDispatch } from "../redux/storeConfig";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { data: stories, isLoading, isError } = useStories();

  React.useEffect(() => {
    if (stories) {
      dispatch(setStories(stories)); // Guardar las historias en Redux
    }
  }, [stories, dispatch]);

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl mb-8">
        Recorridos
      </h1>

      {isLoading && <LoadingSkeleton />}

      {isError && (
        <div className="text-center p-4 bg-red-100 text-red-800 rounded-lg">
          Error al cargar historias. Por favor, intente nuevamente más tarde.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories &&
          stories.map((story) => (
            <Link
              key={story.title}
              to={`/stories/${story.title}`}
              className="transition-transform hover:scale-105"
            >
              <StorytellerCard
                title={story.title}
                imageUrl={story.imageUrl || "default-image.jpg"} // Imagen predeterminada si no hay URL
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="space-y-2">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  );
}

export default Home;

