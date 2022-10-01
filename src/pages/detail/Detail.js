import React, { Fragment, useContext } from "react";
import { useLocation } from "react-router-dom";
import { BotonAgregarCarrito, DescriptionContainer, DetailsContainer, DetailsImage, LargeDescription, ProductAvailable, ProductPrice, ProductTitle } from "./styles";

const Detail = () => {    
    const location = useLocation();
    const currentProduct = location.state.product;
    
    return (
        <Fragment>
            <ProductTitle> {currentProduct.title} </ProductTitle>
            <DetailsContainer>
                <DetailsImage src={require(`../../assets/${currentProduct.title}.jpg`)} alt={`${currentProduct.title}`} />
                <DescriptionContainer>
                    <LargeDescription>{currentProduct.largDescription}</LargeDescription>
                    <ProductAvailable>{currentProduct.stock} disponibles</ProductAvailable>
                    <ProductPrice>$ {currentProduct.price}</ProductPrice>
                    <BotonAgregarCarrito>AGREGAR AL CARRITO</BotonAgregarCarrito>
                </DescriptionContainer>
            </DetailsContainer>            
        </Fragment>
    )
}

export { Detail }
