import React from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonsContainer, ImageContainer, Linkstyled, ProductContainer, ProductDescription, ProductImage, ProductSubtitle, ProductTitle } from './styles'
 
export const Product = ({title,shortDescription,largDescription,price,stock}) => {
    
    console.log(largDescription);
    const currentProduct = {title:`${title}`,
                            shortDescription:`${shortDescription}`,
                            largDescription:`${largDescription}`,
                            price:`${price}`,
                            stock:`${stock}`};
    return (
         <ProductContainer>
            <ProductTitle >{title}</ProductTitle>
            <ImageContainer> 
                <ProductImage src={require(`../../assets/${title}.jpg`)} alt={title} />          
            </ImageContainer>            
            <ProductDescription >{shortDescription}</ProductDescription>
            <ProductSubtitle >{`$ ${price}`}</ProductSubtitle>
            <ProductSubtitle >{`${stock} Disponibles`}</ProductSubtitle>
            <ButtonsContainer>
                <Button>Add</Button>                
                <Link to="/productdetail" state={{product:{...currentProduct}}}> Details </Link>                
            </ButtonsContainer>
        </ProductContainer>    
  )
}
