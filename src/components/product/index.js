import React from "react";
import {
  Button,
  ButtonsContainer,
  ImageContainer,
  Linkstyled,
  ProductContainer,
  ProductDescription,
  ProductImage,
  ProductSubtitle,
  ProductTitle,
} from "./styles";

export const Product = ({
  title,
  shortDescription,
  largDescription,
  price,
  stock,
}) => {
  const currentProduct = {
    title: `${title}`,
    shortDescription: `${shortDescription}`,
    largDescription: `${largDescription}`,
    price: `${price}`,
    stock: `${stock}`,
  };
  return (
    <ProductContainer>
      <ProductTitle>{title}</ProductTitle>
      <ImageContainer>
        <ProductImage src={require(`../../assets/${title}.jpg`)} alt={title} />
      </ImageContainer>
      <ProductDescription>{shortDescription}</ProductDescription>
      <ProductSubtitle>{`$ ${price}`}</ProductSubtitle>
      <ProductSubtitle>{`${stock} Disponibles`}</ProductSubtitle>
      <ButtonsContainer>
        {
          stock === 0 
          ? <Button disabled={true}>Sin stock</Button> 
          : <Button>Add</Button>
        }
        <Linkstyled
          to="/productdetail"
          state={{ product: { ...currentProduct } }}
        >
          {" "}
          Details{" "}
        </Linkstyled>
      </ButtonsContainer>
    </ProductContainer>
  );
};
