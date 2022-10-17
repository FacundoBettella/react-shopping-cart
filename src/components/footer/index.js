import React, { Fragment } from "react";
import { ContenedorFooter, DerechosContainer, InfoContainer, Columna, Logo } from "./styles";
import { SiInstagram, SiFacebook, SiLinkedin, SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import logoAlt from "../../assets/logo/shopping_alt.png"
export const Footer = () => {
  return (
    <ContenedorFooter>
     
      <InfoContainer>
        <Logo src={logoAlt} alt="logo"></Logo>
        <Columna>
          <p> Seguinos:  <SiGmail />  <SiInstagram /> <SiFacebook /> <SiLinkedin /> </p>      
        </Columna>

        <Columna>
          <h3>LEGALES</h3>
          <p>Términos y Condiciones</p> 
          <p>Políticas de Privacidad</p>    
          <p>Políticas de Cambio</p>    
          <p>Defensa de las y los Consumidores Para reclamos ingrese <a href="https://autogestion.produccion.gob.ar/consumidores" target="_blank" rel="noopener noreferrer">aquí</a></p>     
        </Columna>

        <Columna>
          <h3>INSTITUCIONAL</h3>
          <p>Contacto</p>
          <p>La empresa</p>
          <p>Nuestra gente</p>
          <p>Trabaja con nosotros</p>
        </Columna>
      
      </InfoContainer>
      <DerechosContainer>
        <h3>Copyright 2022 | Todos los derechos reservados shoppingcart.com </h3>
        <h4>Shopping Cart Inc. Calle Falsa 123, Springfield | Buenos Aires | Argentina</h4>
      </DerechosContainer>
    </ContenedorFooter>
  );
};
