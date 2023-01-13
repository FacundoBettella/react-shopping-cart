import React, { createContext, useContext, useState } from "react";
import { useAuth } from "./authContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  collection,
  getDocs,
  updateDoc,
  addDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { FIRESTONE } from "./../firebase/firebase.config";

export const CarritoContext = createContext();

export const useCarrito = () => {
  const carritoContext = useContext(CarritoContext);
  if (!carritoContext) throw new Error("There is not carrito provider");
  return carritoContext;
};

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [cartId, setCartId] = useState("");

  const { user } = useAuth();
  const { saveNewItem } = useLocalStorage();
 

  const readCart = async () => {
    const cartRef = collection(FIRESTONE, "carts");
    const result = await getDocs(
      query(cartRef, where("userEmail", "==", user.email))
    );
    if (result.docs.length === 0) {
      createEmptyCart();
    } else {
      const cartData = result.docs[0].data().cart;

      if (cartData.length !== 0) setCarrito(cartData);

      setCartId(result.docs[0].id);
    }
  };

  const tamañoCarrito = () => {
    return carrito.reduce((acc, product) => acc + product.quantity, 0); //Devuelvo el tamaño del carrito para mostrar por pantalla si es necesario
  };

  const agregarAlCarrito = (producto) => {
    if (parseInt(producto.stock) >= 0) {
      const newCarrito = [...carrito]; //Hago una copia del carrito actual
      let existingProductIndex = newCarrito.findIndex(
        (p) => p.id === producto.id
      );
      if (existingProductIndex < 0) {
        let newProduct = { ...producto };
        newProduct.quantity = 1;
        newCarrito.push(newProduct); //Agrego el producto a la nueva copia del carrito
      } else if (producto.stock > newCarrito[existingProductIndex].quantity) {
        newCarrito[existingProductIndex].quantity += 1;
      }
      updateCart(newCarrito); //Seteo la copia como el nuevo carrito
      saveNewItem("carrito", newCarrito) // Seteo en el localStorage el carrito actual.
    } else {
      console.log("No se puede agregar al carrito por falta de stock!!! ");
    }
  };

  // Sobreescribe el carrito actual con los contenidos de un nuevo carrito
  const cargarCarritoHistorico = (productos) => {
    if (!productos.every((prod) => parseInt(prod.stock) >= 0)) {
      console.log("No se puede agregar al carrito por falta de stock!!! ");
    }
    const newCarrito = [...productos];
    setCarrito(newCarrito);
  };

  const eliminarProductoDelCarrito = (producto) => {
    const newCarrito = carrito.filter((item) => item.id !== producto.id);
    updateCart(newCarrito);
  };

  const decrementarProductoDelCarrito = (producto) => {
    const newCarrito = [...carrito];
    let existingProductIndex = newCarrito.findIndex(
      (p) => p.id === producto.id
    );
    if (
      existingProductIndex > -1 &&
      newCarrito[existingProductIndex].quantity > 1
    ) {
      newCarrito[existingProductIndex].quantity -= 1;
    }
    updateCart(newCarrito); //Seteo la copia como el nuevo carrito
  };

  const vaciarCarrito = () => {
    updateCart([]);
    //setCarrito([]); //Seteo el carrito con un arreglo vacio para volverlo a su estado inicial.
  };

  const createEmptyCart = async () => {
    const userEmail = user.email;
    const cart = [];
    const cartRef = collection(FIRESTONE, "carts");
    try {
      const res = await addDoc(cartRef, { userEmail, cart });
      setCartId(res.id);
    } catch (e) {
      console.error(e);
    }
  };

  const updateCart = async (updatedCart) => {
    const cart = updatedCart;
    const cartsRef = collection(FIRESTONE, "carts");
    try {
      await updateDoc(doc(cartsRef, cartId), { cart });
      setCarrito(updatedCart);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <CarritoContext.Provider
      value={{
        vaciarCarrito,
        eliminarProductoDelCarrito,
        agregarAlCarrito,
        decrementarProductoDelCarrito,
        cargarCarritoHistorico,
        tamañoCarrito,
        carrito,
        readCart,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
