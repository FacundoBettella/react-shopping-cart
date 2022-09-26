import React, { Children, cloneElement } from "react";

const Home = ({ children, loading }) => {

    /*  Para poder pasar propiedades especiales a los componentes hijos de nuestros componentes contenedores cuando hacemos 
        composición usamos cloneElement 
        En este caso: cloneElement(children, { loading }) => A cada children de Home le agregamos la prop loading para que
        sea reutilizable y no tengamos que pasarla a cada hijo.
    */ 


    /*  Cuando enviamos más de un componente o elemento hijo al que use CloneElement, la app deja de funcionar y suelta un error.
        CloneElement necesita recibir un elemento de react, cuando children es más de un componente entonces tenemos un array, 
        para esto existe React.Children.
        En este caso: Children.toArray(children) => Necesario para cuando children es más de un componente. 
    */

  return (
    <section>
        {
            Children
                .toArray(children)
                .map(child => cloneElement(child, { loading }))
        }
    </section>
  )
};

export default Home;
