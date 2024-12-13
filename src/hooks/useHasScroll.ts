
import React from "react";

const useHasScroll = () => {
  const [hasScroll, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Verifica si el scroll vertical es mayor a 0
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Agregar el listener
    window.addEventListener("scroll", handleScroll);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);

    };
  }, []);

  return hasScroll;

};


export default useHasScroll;
