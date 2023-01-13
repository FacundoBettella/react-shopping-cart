import React, { useLayoutEffect } from 'react';
import { useCarrito } from '../../../context/carritoContext';
import {
  CartPrice,
  CartText,
  ProductImg,
  Quantity,
  StyledAdd,
  StyledButton,
  StyledDelete,
  StyledDiv,
  StyledMinus,
} from './styles';

export const CartItem = ({ article }) => {
  const { quantity } = article;

  const {
    agregarAlCarrito,
    eliminarProductoDelCarrito,
    decrementarProductoDelCarrito,
  } = useCarrito();

  useLayoutEffect(() => {}, [quantity]);

  return (
    <StyledDiv>
      <ProductImg src={article.image} />
      <CartText>{article.title}</CartText>
      <StyledButton onClick={() => agregarAlCarrito(article)}>
        <StyledAdd />
      </StyledButton>
      <Quantity>{quantity}</Quantity>
      <StyledButton onClick={() => decrementarProductoDelCarrito(article)}>
        <StyledMinus />
      </StyledButton>
      <CartPrice>Precio Unitario:${article.price}</CartPrice>
      <StyledButton
        onClick={() => eliminarProductoDelCarrito(article)}
        style={{ marginLeft: 'auto' }}
      >
        <StyledDelete />
      </StyledButton>
    </StyledDiv>
  );
};
