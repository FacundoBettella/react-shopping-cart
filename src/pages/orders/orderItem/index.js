import React, { useState, useContext } from "react";
import { carritoContext } from "../../../context/carritoContext";
import { OrderText, StyledButton, StyledDiv, StyledDivContainer, StyledEye, StyledDivDetails, StyledDivCarrito, CarritoText, ProductImage, StyledBag } from "./styles"

export const OrderItem = ({ order }) => {
    const [expanded, setExpanded] = useState(false)
    const toggleExpanded = () => {
        expanded ? setExpanded(false) : setExpanded(true);
    }
    const { cargarCarritoHistorico } = useContext(carritoContext);

    const currency = "ARS";

    const parseItemPrice = (product) => {
        return (parseFloat(product.price.replace('.', '')) * parseInt(product.quantity))
    }

    return <StyledDivContainer>
        <StyledDiv>
            <OrderText><StyledBag></StyledBag>{order.date}</OrderText>
            <OrderText>{`${order.carrito.reduce((partialSum, item) => partialSum + item.quantity, parseFloat(0))} Items`}</OrderText>
            <OrderText style={{width: "130px",fontSize: "1.3em" }}>{`${parseFloat(
                order.carrito.reduce(
                    (partialSum, a) =>
                    partialSum + parseItemPrice(a),
                    parseFloat(0)
                )
            ).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ${currency}`}</OrderText>
            <StyledButton onClick={toggleExpanded}><StyledEye/></StyledButton>
            <StyledButton onClick={() => cargarCarritoHistorico(order.carrito)}
                style={{ marginLeft: "auto" }}>Volver a Comprar</StyledButton>
        </StyledDiv>
        {expanded ?
            <StyledDivDetails>
                {order.carrito.map((carritoItem, i) =>
                    <StyledDivCarrito key={`${i}-${i}-${carritoItem.shortDescription}`}>
                        <ProductImage src={carritoItem.image}
                            alt={carritoItem.title} />
                        <CarritoText style={{ width: "50%" }}>{carritoItem.shortDescription}</CarritoText>
                        <CarritoText style={{ width: "20%" }}>{
                            `${parseItemPrice(carritoItem)
                                .toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ${currency}`
                        }</CarritoText>
                        <OrderText style={{ marginLeft: "auto" }}>{carritoItem.quantity}</OrderText>
                    </StyledDivCarrito>
                )
                }
            </StyledDivDetails>
            : <></>
        }
    </StyledDivContainer>
}