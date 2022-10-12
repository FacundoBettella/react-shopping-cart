import React, { useContext } from "react";
import { useCustomLazyLoading } from "../../hooks/useCustomLazyLoading";
import {
  Article,
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
  const [show, element] = useCustomLazyLoading();

  const currentProduct = {
    title: `${title}`,
    shortDescription: `${shortDescription}`,
    largDescription: `${largDescription}`,
    price: `${price}`,
    stock: `${stock}`,
  };

  const {
    // vaciarCarrito,
    // eliminarProductoDelCarrito,
    agregarAlCarrito,
    carrito,
  } = useContext(carritoContext);

  const handleAddClick = () => {
    agregarAlCarrito(currentProduct);
    console.log(carrito);
  };

  return (
    <Article ref={element}>
      {show && (
        <ProductContainer>
          <ProductTitle>{title}</ProductTitle>
          <ImageContainer>
            <ProductImage
              src={require(`../../assets/${title}.jpg`)}
              alt={title}
            />
          </ImageContainer>
          <ProductDescription>{shortDescription}</ProductDescription>
          <ProductSubtitle>{`$ ${price}`}</ProductSubtitle>
          <ProductSubtitle>{`${stock} Disponibles`}</ProductSubtitle>
          <ButtonsContainer>
            {stock === 0 ? (
              <Button disabled={true}>Sin stock</Button>
            ) : (
              <Button onClick={handleAddClick}>Add</Button>
            )}
            <Linkstyled
              to="/productdetail"
              state={{ product: { ...currentProduct } }}
            >
              {" "}
              Details{" "}
            </Linkstyled>
          </ButtonsContainer>
        </ProductContainer>
      )}
    </Article>
  );
};
