import React, { useState, useContext } from "react";
import { carritoContext } from "../../../context/carritoContext";
import { OrderText, StyledButton, StyledDiv, StyledDivContainer, StyledEye, StyledDivDetails, StyledDivCarrito } from "./styles"

export const OrderItem = ({ order }) => {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => {
        expanded ? setExpanded(false) : setExpanded(true);
    }
    const { vaciarCarrito, agregarAlCarrito, cargarCarritoHistorico } = useContext(carritoContext);

    return <StyledDivContainer>
        <StyledDiv>
            <OrderText>{order.date}</OrderText>
            <OrderText>{`${order.carrito.length} Items`}</OrderText>
            <StyledButton onClick={toggleExpanded}><StyledEye /></StyledButton>
            <StyledButton onClick={() => cargarCarritoHistorico(order.carrito)}
                style={{ marginLeft: "auto" }}>Volver a Comprar</StyledButton>
        </StyledDiv>
        {expanded ?
            <StyledDivDetails>
                {order.carrito.map((carritoItem, i) =>
                    <StyledDivCarrito key={`${i}-${i}-${carritoItem.shortDescription}`}>
                        <OrderText>{carritoItem.shortDescription}</OrderText>
                        <OrderText style={{ marginLeft: "auto" }}>{carritoItem.quantity}</OrderText>
                    </StyledDivCarrito>
                )
                }
            </StyledDivDetails>
            : <></>
        }
    </StyledDivContainer>
}