import React, { useState, useContext } from "react";
import { carritoContext } from "../../../context/carritoContext";
import { OrderText, StyledButton, StyledDiv, StyledDivContainer, StyledEye, StyledDivDetails, StyledDivCarrito } from "./styles"

export const OrderItem = ({order}) => {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () =>{
        expanded ? setExpanded(false) : setExpanded(true);
    }
    const {vaciarCarrito, agregarAlCarrito} = useContext(carritoContext);
    const reComprar = (carrito) => {
        console.log(carrito);
        vaciarCarrito(); //Son sincronas estas funciones?
        carrito.forEach(element => {
            console.log(element);
            agregarAlCarrito(element);
        });
        console.log("Ok")
    }
    return <StyledDivContainer>
    <StyledDiv>
        <OrderText>{order.date}</OrderText>
        <OrderText>{`${order.carrito.length} Items`}</OrderText>
        <StyledButton onClick={toggleExpanded}><StyledEye/></StyledButton>
        <StyledButton onClick={() => reComprar(order.carrito)}
        style={{ marginLeft: "auto" }}>Volver a Comprar</StyledButton>
    </StyledDiv>
    {expanded?
        <StyledDivDetails>
        { order.carrito.map ( (carritoItem, i) => 
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