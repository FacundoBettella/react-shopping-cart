import React, { Fragment } from "react";
import { ContenedorFooter, DerechosContainer, InfoContainer, Linea, LinksContainer, SocialContainer } from "./styles";
import { SiInstagram, SiFacebook, SiLinkedin, SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <ContenedorFooter>
      <Linea />
      <InfoContainer>
        <LinksContainer>
          <p>Contacto</p>
          <p>La empresa</p>
          <p>Nuestra gente</p>
          <p>Trabaja con nosotros</p>
        </LinksContainer>
        <SocialContainer>
          <p> <SiGmail /> shoppingcart@shooping.cart </p>
          <p> <SiInstagram /> @shoppingCart</p>
          <p> <SiFacebook /> shoppingCart</p>
          <p> <SiLinkedin /> Shopping Cart</p>
        </SocialContainer>
      </InfoContainer>
      <DerechosContainer>
        <h3>Copyright 2022 | Todos los derechos reservados shoppingcart.com </h3>
        <h4>Shopping Cart Inc. Calle Falsa 123, Springfield | Buenos Aires | Argentina</h4>
      </DerechosContainer>
    </ContenedorFooter>
  );
};
