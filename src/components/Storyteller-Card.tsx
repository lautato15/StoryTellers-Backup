import React from "react";

interface StorytellerCardProps {
  title: string;
  imageUrl: string;
}

export default function StorytellerCard({
  title,
  imageUrl,

}: StorytellerCardProps): JSX.Element {

  return (
    <div
      className="h-48 rounded-2xl border-2 border-white mt-8  bg-center object-cover max-w-2xl"
      style={{
        backgroundImage: `url('${import.meta.env.VITE_API_IMAGES}${imageUrl}')`,
      }}
    >
      <div className="bg-black w-fit mx-4 mt-12 px-2 py-1 rounded-lg bg-opacity-60">
        <h4 className="text-white font-bold text-xl ">{title}</h4>
      </div>
    </div>
  );
}
