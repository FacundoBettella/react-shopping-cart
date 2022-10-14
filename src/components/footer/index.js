import React, { Fragment } from "react";
import { ContenedorFooter, DerechosContainer, InfoContainer, Linea, LinksContainer, SocialContainer, LegalesContainer } from "./styles";
import { SiInstagram, SiFacebook, SiLinkedin, SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <ContenedorFooter>
     
      <InfoContainer>
        <SocialContainer>
          <p> Seguinos:  <SiGmail />  <SiInstagram /> <SiFacebook /> <SiLinkedin /> </p>      
        </SocialContainer>

        <LegalesContainer>
          <h3>LEGALES</h3>
          <p>Términos y Condiciones</p> 
          <p>Políticas de Privacidad</p>    
          <p>Políticas de Cambio</p>    
          <p>Defensa de las y los Consumidores Para reclamos ingrese aquí</p>     
        </LegalesContainer>

        <LinksContainer>
          <h3>INSTITUCIONAL</h3>
          <p>Contacto</p>
          <p>La empresa</p>
          <p>Nuestra gente</p>
          <p>Trabaja con nosotros</p>
        </LinksContainer>
      
      </InfoContainer>
      <DerechosContainer>
        <h3>Copyright 2022 | Todos los derechos reservados shoppingcart.com </h3>
        <h4>Shopping Cart Inc. Calle Falsa 123, Springfield | Buenos Aires | Argentina</h4>
      </DerechosContainer>
    </ContenedorFooter>
  );
};
