import React, { Fragment, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../context/authContext";
import { CarritoContext } from "../../context/carritoContext";
import { ThemeContext } from "../../context/ThemeContext";
import { NavbarResponsive } from "../navbar-responsive/NavbarResponsive";
import {
  Cart,
  Li,
  Nav,
  StyledButton,
  StyledCartLink,
  StyledLink,
  StyledLoginLink,
  Ul,
  Logo,
  LogoContainer,
} from "./styles";
import {
  StyledBall,
  StyledInput,
  StyledLabel,
  StyledMoon,
  StyledSun,
  StyledToggleMode,
} from "../theme-toggle/styles";
import logo from "../../assets/logo/shopping.png";
import logoAlt from "../../assets/logo/shopping_alt.png";
import { useMediaQuery } from "@mui/material";
import { deviceSize } from "../../utils/viewportSizes";

const BaseNavbar = () => {
  const [showFixed, setShowFixed] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);

  const { logout, user } = useAuth();
  const { tamañoCarrito } = useContext(CarritoContext);
  const { toggleTheme, theme } = useContext(ThemeContext);

  const DEVICE_TABLE_QUERY_BOOLEAN = useMediaQuery(deviceSize.tablet);

  const handleMenuModal = () => {
    setShowMenuModal(!showMenuModal);
  };

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("auth_token");
  };

  const handletoggleTheme = async () => {
    await toggleTheme();
  };

  const onScroll = () => {
    window.scrollY > 100 ? setShowFixed(true) : setShowFixed(false);
  };

  useEffect(() => {
    onScroll();

    // Para evitar seguir escuchando el evento cuando el componente no está montado:
    return () => document.removeEventListener("scroll", onScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document.addEventListener("scroll", onScroll)]);

  const renderNav = (fixed) => {
    return (
      /* Mobile/Tablet NAV */
      <Fragment>
        {DEVICE_TABLE_QUERY_BOOLEAN ? (
          <NavbarResponsive
            responsiveBoolean={DEVICE_TABLE_QUERY_BOOLEAN}
            handleModal={handleMenuModal}
            showModal={showMenuModal}
          />
        ) : (
          /* FIXED Cart NAV  */
          /*TODO: Mejorar fixed prop */
          <Nav className={fixed ? "customFixed" : ""}>
            {fixed ? (
              <Ul className={fixed ? "customFixed" : ""}>
                <Li>
                  <StyledCartLink
                    className={fixed ? "customFixed" : ""}
                    to="/cart"
                  >
                    <Cart className={fixed ? "customFixed" : ""} />
                    {`(${tamañoCarrito()})`}
                  </StyledCartLink>
                </Li>
              </Ul>
            ) : (
              /* Normal NAV  */
              <Ul>
                <Li style={{ position: "absolute", left: 0 }}>
                  <LogoContainer>
                    <Logo src={theme === "light" ? logoAlt : logo} alt="logo" />
                  </LogoContainer>
                </Li>
                <Li>
                  <StyledLink to="/">Home</StyledLink>
                </Li>
                <Li>
                  <StyledCartLink to="/cart">
                    {" "}
                    <Cart /> <div>{`(${tamañoCarrito()})`}</div>
                  </StyledCartLink>
                </Li>

                <Li>
                  {user !== null ? (
                    <>
                      <StyledButton onClick={handleLogout}>
                        Cerrar sesión
                      </StyledButton>
                      <StyledLink to="/orders">Historial</StyledLink>
                    </>
                  ) : (
                    <StyledLoginLink to="/login">Login</StyledLoginLink>
                  )}
                </Li>
                <Li>
                  <StyledToggleMode>
                    <StyledInput
                      type="checkbox"
                      className="checkbox"
                      id="checkbox"
                      onChange={handletoggleTheme}
                    />
                    <StyledLabel for="checkbox" class="label">
                      <StyledSun />
                      <StyledMoon />
                      <StyledBall />
                    </StyledLabel>
                  </StyledToggleMode>
                </Li>
              </Ul>
            )}
          </Nav>
        )}
      </Fragment>
    );
  };

  return (
    <Fragment>
      {renderNav()}
      {showFixed && renderNav(true)}
    </Fragment>
  );
};

const Navbar = styled(BaseNavbar)``;
export { Navbar };
