import React, { Fragment, useContext } from "react";
import { FIRESTONE } from "../../firebase/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { Button, Layout } from "../../components";
import swal from "sweetalert";
import { CarritoContext } from "../../context/carritoContext";
import {
  CartItemsContainer,
  CartTotal,
  TotalText,
  TotalPrice,
  VacioText,
  ResponsiveCartItemsContainer,
} from "./styles";
import { CartItem } from "./cartItem/CartItem";
import { ButtonWrapper } from "../../components/product/styles";
import ResponsiveCartItem from "./responsive-cartItem/ResponsiveCartItem";

const Cart = ({ sizeManagment }) => {
  const { tamañoCarrito, carrito, vaciarCarrito } = useContext(CarritoContext);

  const confirmOrder = () => {
    swal({
      title: "¿Desea confirmar su compra?",
      text: "",
      icon: "info",
      buttons: { cancel: "Cancelar", ok: "Ok" },
    }).then((value) => {
      if (value === "ok") {
        handleBuyArticle();
      } else {
      }
    });
  };

  const handleBuyArticle = () => {
    let articleData;
    let newArticleStock;

    carrito.forEach(async (article) => {
      articleData = doc(FIRESTONE, "products", article.id);
      newArticleStock = { stock: article.stock - article.quantity };
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
      vaciarCarrito();
      swal("¡Tu compra ha sido un éxito!", "", "success");
    });
  };

  return (
    <Fragment>
      <Layout title="Donde compras de todo" />
      {sizeManagment ? (
        <ResponsiveCartItemsContainer>
          {carrito.map((article, i) => (
            <ResponsiveCartItem key={article.title + i} article={article} />
          ))}

          <CartTotal>
            {tamañoCarrito() === 0 ? (
              <VacioText>El carrito está vacío!</VacioText>
            ) : (
              <>
                <TotalText sizeManagment={sizeManagment}>Total</TotalText>
                <TotalPrice sizeManagment={sizeManagment}>
                  {parseFloat(
                    carrito.reduce(
                      (partialSum, a) =>
                        parseFloat(partialSum) +
                        parseFloat(a.price.replace(".", "")) *
                          parseInt(a.quantity),
                      parseFloat(0)
                    )
                  )
                    .toFixed(2)
                    .replace(".", ",")
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </TotalPrice>
              </>
            )}
          </CartTotal>
          {tamañoCarrito() > 0 && (
            <ButtonWrapper>
              <Button onClick={confirmOrder}>Confirmar compra</Button>
            </ButtonWrapper>
          )}
        </ResponsiveCartItemsContainer>
      ) : (
        <CartItemsContainer>
          {carrito.map((article, i) => (
            <CartItem key={article.title + i} article={article} />
          ))}

          <CartTotal>
            {tamañoCarrito() === 0 ? (
              <VacioText>El carrito está vacío!</VacioText>
            ) : (
              <>
                <TotalText>Total</TotalText>
                <TotalPrice>
                  {parseFloat(
                    carrito.reduce(
                      (partialSum, a) =>
                        parseFloat(partialSum) +
                        parseFloat(a.price.replace(".", "")) *
                          parseInt(a.quantity),
                      parseFloat(0)
                    )
                  )
                    .toFixed(2)
                    .replace(".", ",")
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </TotalPrice>
              </>
            )}
          </CartTotal>
          {tamañoCarrito() > 0 && (
            <ButtonWrapper>
              <Button onClick={confirmOrder}>Confirmar compra</Button>
            </ButtonWrapper>
          )}
        </CartItemsContainer>
      )}
    </Fragment>
  );
};

export { Cart };
