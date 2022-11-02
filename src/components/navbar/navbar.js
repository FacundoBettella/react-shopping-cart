import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../context/authContext";
import { useCarrito } from "../../context/carritoContext";
import { useThemeContext } from "../../context/themeContext";
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
  SpecialLiContainer,
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
import useResponsiveSize from "../../hooks/useResponsiveSize";
import { useNavigate } from "react-router-dom";

const BaseNavbar = () => {
  const { logout, user } = useAuth();
  const { tamañoCarrito } = useCarrito();
  const { toggleTheme, theme } = useThemeContext();

  const [showFixed, setShowFixed] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const navigate = useNavigate();

  const [deviceSizeState] = useResponsiveSize();

  const handleGoHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

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
      /* Mobile-Tablet NAV */
      <Fragment>
        {deviceSizeState ? (
          <NavbarResponsive
            responsiveBoolean={deviceSizeState}
            handleModal={handleMenuModal}
            showModal={showMenuModal}
          />
        ) : (
          /* FIXED CART NAV  */
          <Nav className={fixed ? "customFixed" : ""}>
            {fixed ? (
              <Ul className="customFixed">
                <Li>
                  <StyledCartLink className="customFixed" to="/cart">
                    <Cart className="customFixed" />
                    {`(${tamañoCarrito()})`}
                  </StyledCartLink>
                </Li>
              </Ul>
            ) : (
              /* NORMAL NAV  */
              <Ul>
                <Li style={{ position: "absolute", left: 0 }}>
                  <LogoContainer>
                    <Logo
                      src={theme === "light" ? logoAlt : logo}
                      alt="logo"
                      onClick={handleGoHome}
                    />
                  </LogoContainer>
                </Li>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <Li>
                    <StyledLink to="/">Home</StyledLink>
                  </Li>
                  <Li>
                    <StyledCartLink to="/cart">
                      <p style={{ marginRight: 3 }}>Carrito</p>
                      <div>{`(${tamañoCarrito()})`}</div>
                    </StyledCartLink>
                  </Li>
                  <Li>
                    {user !== null && (
                      <StyledLink to="/orders">Historial</StyledLink>
                    )}
                  </Li>
                </div>

                <SpecialLiContainer>
                  {user !== null ? (
                    <StyledButton onClick={handleLogout}>
                      Cerrar sesión
                    </StyledButton>
                  ) : (
                    <StyledLoginLink to="/login">Login</StyledLoginLink>
                  )}
                  <StyledToggleMode>
                    <StyledInput
                      type="checkbox"
                      className="checkbox"
                      id="checkbox"
                      onChange={handletoggleTheme}
                    />
                    <StyledLabel htmlFor="checkbox" className="label">
                      <StyledSun />
                      <StyledMoon />
                      <StyledBall />
                    </StyledLabel>
                  </StyledToggleMode>
                </SpecialLiContainer>
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
