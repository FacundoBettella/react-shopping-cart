import React, { useContext } from "react";
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
import { carritoContext } from "../../context/carritoContext";

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

  const {
    vaciarCarrito,
    eliminarProductoDelCarrito,
    agregarAlCarrito,
    tamañoCarrito,
    carrito
 } = useContext(carritoContext);

  const handleAddClick = () =>{
      agregarAlCarrito(currentProduct)
      console.log(carrito);    
  }

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
        <Button onClick={handleAddClick}>Add</Button>
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
