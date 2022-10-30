import React, { useContext } from "react";
import { OrderText, StyledButton, StyledDiv, StyledEye } from "./styles"

export const OrderItem = () => {
    return <StyledDiv>
        <OrderText>Texto Orden</OrderText>
        <OrderText>Fecha</OrderText>
        <StyledButton onClick={() => {}}><StyledEye/></StyledButton>
        <StyledButton onClick={() => {}}
        style={{ marginLeft: "auto" }}>Volver a Comprar</StyledButton>
        
    </StyledDiv>
}