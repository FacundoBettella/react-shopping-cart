import React, { createContext, useState } from 'react'

export const carritoContext = createContext();

export const CarritoProvider = ({children}) => {
  const [carrito,setCarrito] = useState([]);

  const tamañoCarrito = () => {
    return carrito.reduce((acc,product)=>acc + product.quantity,0); //Devuelvo el tamaño del carrito para mostrar por pantalla si es necesario
  }

  const agregarAlCarrito = (producto)=>{
    if(parseInt(producto.stock)>=0){
        const newCarrito = [...carrito]; //Hago una copia del carrito actual
        let existingProductIndex = newCarrito.findIndex(p => p.id === producto.id);
        if(existingProductIndex<0){
          let newProduct = {...producto};
          newProduct.quantity = 1;
          newCarrito.push(newProduct); //Agrego el producto a la nueva copia del carrito
        }else if(producto.stock>newCarrito[existingProductIndex].quantity){
          newCarrito[existingProductIndex].quantity +=1 ;
        }
        setCarrito(newCarrito); //Seteo la copia como el nuevo carrito
    }
    else {
        console.log("No se puede agregar al carrito por falta de stock!!! ");
    }    
  }

  // Sobreescribe el carrito actual con los contenidos de un nuevo carrito
  const cargarCarritoHistorico = (productos) => {
    if(!productos.every(prod => parseInt(prod.stock) >= 0)) {
      console.log("No se puede agregar al carrito por falta de stock!!! ");
    }
    const newCarrito = [... productos];
    setCarrito(newCarrito);
    }

  const eliminarProductoDelCarrito = (producto)=>{
    const newCarrito = carrito.filter(item => item.id !== producto.id)
    setCarrito(newCarrito);
  }

  const decrementarProductoDelCarrito = (producto)=>{
    const newCarrito = [...carrito];
    let existingProductIndex = newCarrito.findIndex(p => p.id === producto.id);
    if(existingProductIndex>-1 && newCarrito[existingProductIndex].quantity>1){
      newCarrito[existingProductIndex].quantity -=1 ;
    }
    setCarrito(newCarrito); //Seteo la copia como el nuevo carrito
  }

  const vaciarCarrito = ()=>{
    setCarrito([]); //Seteo el carrito con un arreglo vacio para volverlo a su estado inicial.
  }

  return (
    <carritoContext.Provider value={{
        vaciarCarrito,
        eliminarProductoDelCarrito,
        agregarAlCarrito,
        decrementarProductoDelCarrito,
        cargarCarritoHistorico,
        tamañoCarrito, 
        carrito
    }}>
      {children}
    </carritoContext.Provider>
  )
}

