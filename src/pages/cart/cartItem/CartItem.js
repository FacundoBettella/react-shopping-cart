import React from "react";
import styled from "styled-components";
import { Delete } from "@styled-icons/fluentui-system-filled/Delete";
import { Add } from "@styled-icons/fluentui-system-filled/Add";
import { Minus } from "@styled-icons/boxicons-regular/Minus";
import { useCarrito } from "../../../context/carritoContext";

const CartText = styled.div`
  font-size: 2em;
  width: 40%;
`;

const Quantity = styled.div`
  font-size: 2em;
`;

const CartPrice = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  display: flex;
  align-items: flex-start;
  margin-left: auto;
`;

const StyledDiv = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  margin: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  align-items: center;
  gap: 1em;
  padding-left: 1em;
  padding-right: 1em;
  margin: 0px;
  border-radius: 4px;
  border: 1px solid white;
`;

const StyledDelete = styled(Delete)`
  color: var(--text-secondary);
  width: 2em;
`;
const StyledAdd = styled(Add)`
  color: var(--text-secondary);
  width: 2em;
`;
const StyledMinus = styled(Minus)`
  color: var(--text-secondary);
  width: 2em;
`;

const StyledButton = styled.button`
  height: 2.5em;
  width: 2.5em;
  background-color: var(--accent);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const CartItem = ({ article }) => {
  const { agregarAlCarrito, eliminarProductoDelCarrito, decrementarProductoDelCarrito } = useCarrito();

  return (
    <StyledDiv>
      <CartText>{article.title}</CartText>
      <StyledButton onClick={() => agregarAlCarrito(article)}>
        <StyledAdd />
      </StyledButton>
      <Quantity>{article.quantity}</Quantity>
      <StyledButton onClick={() => decrementarProductoDelCarrito(article)}>
        <StyledMinus />
      </StyledButton>
      <CartPrice>Precio Unitario:${article.price}</CartPrice>
      <StyledButton
        onClick={() => eliminarProductoDelCarrito(article)}
        style={{ marginLeft: "auto" }}
      >
        <StyledDelete />
      </StyledButton>
    </StyledDiv>
  );
};
