import React, { useState } from "react";
import { useCarrito } from "../../../context/carritoContext";
import useResponsiveSize from "../../../hooks/useResponsiveSize";
import {
  OrderText,
  StyledButton,
  StyledDiv,
  StyledDivContainer,
  StyledEye,
  StyledDivDetails,
  StyledDivCarrito,
  CarritoText,
  ProductImage,
  StyledBag,
} from "./styles";

export const OrderItem = ({ order }) => {
  const { cargarCarritoHistorico } = useCarrito();
  const [deviceSizeState] = useResponsiveSize("(max-width: 800px)");

  const [expanded, setExpanded] = useState(false);

  const currency = "ARS";

  const toggleExpanded = () => {
    expanded ? setExpanded(false) : setExpanded(true);
  };

  const parseItemPrice = (product) => {
    return (
      parseFloat(product.price.replace(".", "")) * parseInt(product.quantity)
    );
  };

  return (
    <StyledDivContainer>
      <StyledDiv sizeManagment={deviceSizeState}>
        <OrderText>
          <StyledBag />
          {order.date}
        </OrderText>
        <OrderText>{`${order.carrito.length} Items`}</OrderText>
        <OrderText style={{ width: "120px", fontSize: "1.3em" }}>{`${parseFloat(
          order.carrito.reduce(
            (partialSum, a) => parseItemPrice(a),
            parseFloat(0)
          )
        )
          .toFixed(2)
          .replace(".", ",")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ${currency}`}</OrderText>
        <StyledButton onClick={toggleExpanded} sizeManagment={deviceSizeState}>
          <StyledEye />
        </StyledButton>
        <StyledButton
          onClick={() => cargarCarritoHistorico(order.carrito)}
          sizeManagment={deviceSizeState}
        >
          Volver a Comprar
        </StyledButton>
      </StyledDiv>
      {expanded ? (
        <StyledDivDetails sizeManagment={deviceSizeState}>
          {order.carrito.map((carritoItem, i) => (
            <StyledDivCarrito
              key={`${i}-${i}-${carritoItem.shortDescription}`}
              sizeManagment={deviceSizeState}
            >
              <ProductImage
                src={carritoItem.image}
                alt={carritoItem.title}
                sizeManagment={deviceSizeState}
              />
              <CarritoText style={{ width: "100%" }} sizeManagment={deviceSizeState}>
                {carritoItem.shortDescription}
              </CarritoText>
            </StyledDivCarrito>
          ))}
        </StyledDivDetails>
      ) : (
        <></>
      )}
    </StyledDivContainer>
  );
};
