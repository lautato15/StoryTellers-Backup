import React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useNavigate } from "react-router-dom";
import { InteractiveMapProps } from "@/types/storyTypes";




export default function InteractiveMap({ markers }: InteractiveMapProps) {
  const navigate = useNavigate();
  return (
    <div className="h-60 w-full">
      <Map
        initialViewState={{
          latitude: -34.9058, // Coordenada central aproximada
          longitude: -56.1982, // Coordenada central aproximada
          zoom: 15, // Zoom más cercano para abarcar Ciudad Vieja, Centro y Barrio Sur
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v12" // Puedes cambiar el estilo aquí
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            latitude={marker.latitude}
            longitude={marker.longitude}
            anchor="center"
            onClick={() => navigate(marker.link)} // Navega al link cuando se haga clic
          >
            <div
              className="cursor-pointer rounded-full text-white font-bold shadow-md"
              title={marker.title}
            >

              <img src={`${import.meta.env.VITE_API_IMAGES}${marker.mapicon}`} className="h-10 w-10"
                alt="" />
            </div>
          </Marker>
        ))}
      </Map>
    </div>
  );
}
