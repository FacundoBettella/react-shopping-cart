import React from "react";
import { useCarrito } from "../../../context/carritoContext";
import { CartPrice, CartText, Quantity, StyledAdd, StyledButton, StyledDelete, StyledDiv, StyledMinus } from "./styles";

const ResponsiveCartItem = ({ article }) => {
  const {
    agregarAlCarrito,
    eliminarProductoDelCarrito,
    decrementarProductoDelCarrito,
  } = useCarrito();


  return (
    <>
      <CartText>{article.title}</CartText>
      <StyledDiv>
        <StyledButton onClick={() => agregarAlCarrito(article)}>
          <StyledAdd />
        </StyledButton>
        <Quantity>{article.quantity}</Quantity>
        <StyledButton onClick={() => decrementarProductoDelCarrito(article)}>
          <StyledMinus />
        </StyledButton>
        <CartPrice>
          Precio Unitario: <strong>${article.price}</strong>
        </CartPrice>
        <StyledButton
          onClick={() => eliminarProductoDelCarrito(article)}
          style={{ marginLeft: "15px" }}
        >
          <StyledDelete />
        </StyledButton>
      </StyledDiv>
    </>
  );
};

export default ResponsiveCartItem;
