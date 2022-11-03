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
  const { shortDescription } = order.carrito[0];

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
        <StyledBag />
        <OrderText>{order.date}</OrderText>
        <CarritoText style={{ width: "100%" }} sizeManagment={deviceSizeState}>
          {shortDescription}
        </CarritoText>
        <OrderText>{`${order.carrito.length} Items`}</OrderText>
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
              <OrderText
                style={{
                  width: "140px",
                  fontSize: deviceSizeState ? "1em" : "1.3em",
                }}
              >
                {`$${parseFloat(
                  order.carrito.reduce(
                    (partialSum, a) => parseItemPrice(a),
                    parseFloat(0)
                  )
                )
                  .toFixed(2)
                  .replace(".", ",")
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ${currency}`}
              </OrderText>
            </StyledDivCarrito>
          ))}
        </StyledDivDetails>
      ) : (
        <></>
      )}
    </StyledDivContainer>
  );
};
