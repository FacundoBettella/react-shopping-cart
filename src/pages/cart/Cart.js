import React, { useContext } from "react";
import { FIRESTONE } from "../../firebase/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { Button } from "../../components";
import swal from "sweetalert";
import { carritoContext } from "../../context/carritoContext";
import { CartItemsContainer, CartTotal, TotalText, TotalPrice, VacioText } from "./styles";
import {CartItem } from './cartItem/CartItem'

const Cart = () => {
  // const { currentChartArticles } = useChart();

  const {
    vaciarCarrito,
    eliminarProductoDelCarrito,
    agregarAlCarrito,
    tamañoCarrito,
    carrito,
  } = useContext(carritoContext);

  const handleBuyArticle = () => {
    let articleData;
    let newArticleStock;

    carrito.forEach(async (article) => {
      articleData = doc(FIRESTONE, "products", article.id);
      newArticleStock = { stock: article.stock - 1 };
      try {
        await updateDoc(articleData, newArticleStock);
      } catch (err) {
        console.error(err);
        return swal(
          "Tuvimos dificultades para procesar tu compra.",
          "Intentalo después",
          "error"
        );
      }
      swal("¡Tu compra ha sido un éxito!", "", "success");
    });
  };

  return (
    <>
      <CartItemsContainer>
        {carrito.map((article,i) => (
          <CartItem key={article.title + i} article={article}/>
        ))}
        
        <CartTotal>
        {
          tamañoCarrito() == 0 ? <VacioText>El carrito está vacío!</VacioText> :
          <>
            <TotalText>Total</TotalText>
            <TotalPrice>{parseFloat(carrito.reduce((partialSum, a) => parseFloat(partialSum) + parseFloat(a.price), parseFloat(0))).toFixed(2)}</TotalPrice>
          </>
        }
        </CartTotal>
      </CartItemsContainer>
      
      <Button onClick={handleBuyArticle}>Confirmar compra</Button>
    </>
  );
};

export { Cart };
