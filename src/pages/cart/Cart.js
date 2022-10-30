import React, { useContext } from "react";
import { FIRESTONE } from "../../firebase/firebase.config";
import { doc, updateDoc, setDoc, collection } from "firebase/firestore";
import { Button } from "../../components";
import swal from "sweetalert";
import { carritoContext } from "../../context/carritoContext";
import {
  CartItemsContainer,
  CartTotal,
  TotalText,
  TotalPrice,
  VacioText,
} from "./styles";
import { CartItem } from "./cartItem/CartItem";
import { ButtonWrapper } from "../../components/product/styles";
import { useAuth } from "../../context/authContext";

const Cart = () => {
  // const { currentChartArticles } = useChart();

  const {
    // vaciarCarrito,
    // eliminarProductoDelCarrito,
    // agregarAlCarrito,
    tamañoCarrito,
    carrito,
    vaciarCarrito,
  } = useContext(carritoContext);

  const { user } = useAuth();

  const createNewOrder = async() => {
    
    const date = new Date().toLocaleString() + "";
    const userEmail = user.email;
    const newOrder = doc(collection(FIRESTONE, "orders"));
    try {
        await setDoc(newOrder, {userEmail,date,carrito});        
    } catch(e) {
        console.error(e)       
    }
  }
  

  const confirmOrder = () => {
    swal({
      title: "¿Desea confirmar su compra?",
      text: "",
      icon: "info",
      buttons: { cancel: "Cancelar", ok: "Ok" },
    })
      .then((value) => {
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
    });
    createNewOrder();
    vaciarCarrito();
    swal("¡Tu compra ha sido un éxito!", "", "success");
  };

  return (
    <>
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
                      parseFloat(partialSum) + (parseFloat(a.price.replace('.', '')) * parseInt(a.quantity)),
                    parseFloat(0)
                  )
                ).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
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
    </>
  );
};

export { Cart };
