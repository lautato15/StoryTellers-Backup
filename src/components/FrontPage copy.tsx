import React from "react";
import { Link } from "react-router-dom";

export default function Frontpage() {
  return (

    <section className="w-full flex flex-col items-center p-8">
      <img
        src={"/muralla2.jpeg"}
        alt="Imagen 3D de la muralla"
        className="rounded-xl"
      />
      <h3 className="text-center font-bold font-serif text-xl md:text-4xl my-6">
        Nuestra Señora de la Muralla
      </h3>
      <p>
        Este territorio estuvo poblado durante siglos por indígenas
        minuanes-guenoas. Aunque con el tiempo llegaron charrúas y guaranies.
        <br />
        <br />
        En 1723, los españoles radicados en Buenos Aires recibieron aviso de la
        ocupación de la bahía de Montevideo por parte de los portugueses.
        <br />
        <br />
        Sin resistencia se impusieron y recuperaron el territorio. En ese mismo
        año comenzaron a planificar la construcción de un gran muro alrededor de
        la península. La intención era fundar una ciudad y protegela de posibles
        invasiones portuguesas, francesas o inglesas.
        <br />
        <br />
        El ingeniero Domingo Petrarca fue el encargado de proyectar la ciudad y
        su defensa. Pero no fue hasta 1741, luego de finalizada la Fortaleza de
        la Ciudadela, que se comenzó con la construcción de la muralla.
      </p>
      <Link to="/murallas">
        <img src="/mapa.png" alt="" className="object-cover w-full mt-4" />
      </Link>
    </section>
  );
}
