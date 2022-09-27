import React from 'react'
import { Button, ImageContainer, ProductContainer, ProductDescription, ProductImage, ProductSubtitle, ProductTitle } from './styles'
 
export const Product = ({title,shortDescription,price,stock}) => {
 
    return (
         <ProductContainer>
            <ProductTitle >{title}</ProductTitle>
            <ImageContainer> 
                <ProductImage src={require(`../../assets/${title}.jpg`)} alt={title} />          
            </ImageContainer>            
            <ProductDescription >{shortDescription}</ProductDescription>
            <ProductSubtitle >{`$ ${price}`}</ProductSubtitle>
            <ProductSubtitle >{`${stock} Disponibles`}</ProductSubtitle>
            <div>
                <Button>Add</Button>                
                <Button>Details</Button>                
            </div>
        </ProductContainer>    
  )
}
