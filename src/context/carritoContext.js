import React, { createContext, useState } from 'react'

export const carritoContext = createContext();

export const CarritoProvider = ({children}) => {
  const [carrito,setCarrito] = useState([]);

  const tamañoCarrito = () => {
    return carrito.length; //Devuelvo el tamaño del carrito para mostrar por pantalla si es necesario
  }

  const agregarAlCarrito = (producto)=>{
    const newCarrito = [...carrito]; //Hago una copia del carrito actual 
    newCarrito.push(producto); //Agrego el producto a la nueva copia del carrito
    setCarrito(newCarrito); //Seteo la copia como el nuevo carrito
  }

  const eliminarProductoDelCarrito = (producto)=>{
    // const newCarrito = [...carrito];
    // newCarrito.

    // setCarrito(newCarrito);
  }

  const vaciarCarrito = ()=>{
    setCarrito([]); //Seteo el carrito con un arreglo vacio para volverlo a su estado inicial.
  }

  return (
    <carritoContext.Provider value={{
        vaciarCarrito,
        eliminarProductoDelCarrito,
        agregarAlCarrito,
        tamañoCarrito, 
        carrito
    }}>
      {children}
    </carritoContext.Provider>
  )
}

