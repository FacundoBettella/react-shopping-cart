import React from "react";
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
import { useCarrito } from "../../context/carritoContext";

export const Product = ({
  title,
  shortDescription,
  largDescription,
  price,
  stock,
  image,
  id
}) => {
  const { agregarAlCarrito } = useCarrito();
  const [show, element] = useCustomLazyLoading();

  const currentProduct = {
    title: `${title}`,
    shortDescription: `${shortDescription}`,
    largDescription: `${largDescription}`,
    price: `${price}`,
    stock: `${stock}`,
    image: `${image}`,
    id: `${id}`,
  };

  const handleAddClick = () => {
    agregarAlCarrito(currentProduct);
  };

  return (
    <Article ref={element}>
      {show && (
        <ProductContainer>
          <ProductTitle>{title}</ProductTitle>
          <ImageContainer>
            <ProductImage
              src={image}
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
