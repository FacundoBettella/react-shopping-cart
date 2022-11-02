import React from "react";
import {
  ContenedorFooter,
  DerechosContainer,
  InfoContainer,
  Columna,
  Logo,
} from "./styles";
import { SiInstagram, SiFacebook, SiLinkedin, SiGmail } from "react-icons/si";
import logo from "../../assets/logo/shopping.png";
import logoAlt from "../../assets/logo/shopping_alt.png";
import { useThemeContext } from "../../context/ThemeContext";

export const Footer = () => {
  const { theme } = useThemeContext();

  return (
    <ContenedorFooter>
      <InfoContainer>
        <Logo src={theme === "light" ? logoAlt : logo} alt="logo" />
        <Columna>
          <p>
            {" "}
            Seguinos: <SiGmail /> <SiInstagram /> <SiFacebook /> <SiLinkedin />{" "}
          </p>
        </Columna>

        <Columna>
          <h3>LEGALES</h3>
          <p>Términos y Condiciones</p>
          <p>Políticas de Privacidad</p>
          <p>Políticas de Cambio</p>
          <p>
            Defensa de las y los Consumidores Para reclamos ingrese{" "}
            <a
              href="https://autogestion.produccion.gob.ar/consumidores"
              target="_blank"
              rel="noopener noreferrer"
            >
              aquí
            </a>
          </p>
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
        <h5>
          Copyright 2022 | Todos los derechos reservados shoppingcart.com{" "}
        </h5>
        <h5>
          Shopping Cart Inc. Calle Falsa 123, Springfield | Buenos Aires |
          Argentina
        </h5>
      </DerechosContainer>
    </ContenedorFooter>
  );
};
