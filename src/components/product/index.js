import React from 'react'
import { ProductContainer, ProductDescription, ProductImage, ProductSubtitle, ProductTitle } from './styles'
 
export const Product = ({title,shortDescription,price,stock}) => {
  return (
         <ProductContainer>
            <ProductTitle >{title}</ProductTitle>
            <ProductImage src={``} alt="" />          
            <ProductDescription >{shortDescription}</ProductDescription>
            <ProductSubtitle >{`$ ${price}`}</ProductSubtitle>
            <ProductSubtitle >{`${stock} Disponibles`}</ProductSubtitle>
        </ProductContainer>    
  )
}
