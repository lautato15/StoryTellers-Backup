import { RootNode } from "@strapi/blocks-react-renderer";

export interface Story {
  id: number;
  title: string;
  imageUrl: string; // URL de la imagen
  description?: string;
  stages: Stage[]; // Ajusta el tipo según los datos de "stages"
}

export interface Fragment {
  image: string;
  text: string | undefined | RootNode[];
  title?: string;
  subtitle?: string;
}
export interface Image {
  url: string; // Asegúrate de que tenga esta propiedad
}
export interface Stage {
  imageHeader: Image;
  header: string;
  description: string | undefined | RootNode[];
  gps: [];
  id: number;
  title: string;
  additional?: Additional[];
  contents?: Content[];
}

export interface MarkerMap {
  id: number;
  title: string;
  latitude: number;
  longitude: number;
  link: string;
  mapicon: string;
}

// Definir las props del componente
export interface InteractiveMapProps {
  markers: MarkerMap[];
}

export interface Content {
  id: number;
  description: string | undefined | RootNode[];
  media: Image;
}

export interface Additional {
  audio: string;
  description: string | object[];
  id: number;
  title: string;
}
