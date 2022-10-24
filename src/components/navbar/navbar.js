import React, { Fragment, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../context/authContext";
import { carritoContext } from "../../context/carritoContext";
import { ThemeContext } from "../../context/ThemeContext";
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
  StyledToggleMode,
  StyledInput,
  StyledLabel,
  StyledBall,
  StyledSun,
  StyledMoon,
} from "./styles";
import logo from "../../assets/logo/shopping.png";
import { useMediaQuery } from "@mui/material";
import { deviceSize } from "../../utils/viewportSizes";
import MenuIcon from "@mui/icons-material/Menu";

const BaseNavbar = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { logout, user } = useAuth();
  const { tamañoCarrito } = useContext(carritoContext);

  const MAX_WIDTH_TABLE_QUERY_BOOLEAN = useMediaQuery(deviceSize.tablet);

  const { toggleTheme } = useContext(ThemeContext);

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("auth_token");
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
      <Fragment>
        {MAX_WIDTH_TABLE_QUERY_BOOLEAN ? (
          <Nav>
            <Ul>
              <Li style={{ position: "absolute", left: 0 }}>
                <LogoContainer className={MAX_WIDTH_TABLE_QUERY_BOOLEAN ? "responsiveLogoContainer" : ""}>
                  <Logo src={logo} alt="logo" />
                </LogoContainer>
              </Li>
              <Li style={{ position: "absolute", right: 0 }}>
                <MenuIcon sx={{fontSize: "65px"}} />
              </Li>
            </Ul>
          </Nav>
        ) : (
          <Nav className={fixed ? "customFixed" : ""}>
            {fixed ? (
              <Ul className={fixed ? "customFixed" : ""}>
                <Li>
                  <StyledCartLink
                    className={fixed ? "customFixed" : ""}
                    to="/cart"
                  >
                    <Cart className={fixed ? "customFixed" : ""} />{" "}
                    {`(${tamañoCarrito()})`}
                  </StyledCartLink>
                </Li>
              </Ul>
            ) : (
              <Ul>
                <Li style={{ position: "absolute", left: 0 }}>
                  <LogoContainer>
                    <Logo src={logo} alt="logo"></Logo>
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
                  <StyledToggleMode>
                    <StyledInput
                      type="checkbox"
                      class="checkbox"
                      id="checkbox"
                      onChange={toggleTheme}
                    />
                    <StyledLabel for="checkbox" class="label">
                      <StyledSun />
                      <StyledMoon />
                      <StyledBall />
                    </StyledLabel>
                  </StyledToggleMode>
                </Li>
                <Li>
                  {user !== null ? (
                    <StyledButton onClick={handleLogout}>
                      Cerrar sesión
                    </StyledButton>
                  ) : (
                    <StyledLoginLink to="/login">Login</StyledLoginLink>
                  )}
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
