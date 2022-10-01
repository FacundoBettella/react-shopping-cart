import React, { Fragment, useContext } from "react";
import { useLocation } from "react-router-dom";
import { DescriptionContainer, DetailsContainer, DetailsImage, LargeDescription, ProductAvailable, ProductPrice, ProductTitle } from "./styles";

const Detail = (props) => {
    
    const location = useLocation();
    const currentProduct = location.state.product;
    console.log(location.state.product);
    
    return (
        <Fragment>
            <ProductTitle> {currentProduct.title} </ProductTitle>
            <DetailsContainer>
                <DetailsImage src={require(`../../assets/${currentProduct.title}.jpg`)} alt={`${currentProduct.title}`} />
                <DescriptionContainer>
                    <LargeDescription>{currentProduct.largDescription}</LargeDescription>
                    <ProductAvailable>{currentProduct.stock} disponibles</ProductAvailable>
                    <ProductPrice>$ {currentProduct.price}</ProductPrice>
                </DescriptionContainer>
            </DetailsContainer>
            <button>Agregar al Carrito</button>
        </Fragment>

    )
}

export { Detail }
