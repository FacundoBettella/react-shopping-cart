import { useEffect, useRef, useState } from "react";

export const useCustomLazyLoading = () => {
  const [show, setShow] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    /* Custom Lazy Load */
    Promise.resolve(
      //Si el navegador no posee interObserver, lo importamos dinamicamente y lo parcheamos sobre el objeto window.
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]; // isIntesecting es un boolen que confirma cuando el elemento es observable
        if (isIntersecting) {
          setShow(true);
          observer.disconnect(); // Dejamos de observar la ref del Article una vez renderizado.
        }
      });
      // pasamos el elemento a observar en el viewport del usuario
      observer.observe(element.current);
    });
  }, [element]);

  return [show, element];
};
