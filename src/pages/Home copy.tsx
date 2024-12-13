import StorytellerCard from '@/components/Storyteller-Card'
import { Link } from "react-router-dom";
import React from "react";

import { useStories } from "@/hooks/useStories";

function Home() {
  // const { data: stories, isLoading, isError } = useStories();
  // if (isLoading) return <p>Cargando historias...</p>;
  // if (isError) return <p>Error al cargar historias</p>;

  return (
    <div className="px-8">
      <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] ">
        Recorridos
      </h2>
      <Link to="/headmurallas">
        <StorytellerCard
          title={"Nuestra Señora de las Murallas"}
          imageUrl="montevideo.jpeg"
        />
      </Link>
      {/* {stories.map((story) => (
        <Link key={story.id} to={`/stories/${story.id}`}>
          <StorytellerCard title={story.title} imageUrl={story.imageUrl} />
        </Link>
      ))} */}
      <StorytellerCard title={"Banda desenhada"} imageUrl="muralla.jpeg" />
    </div>
  );
}

export default Home