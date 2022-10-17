import React, { Fragment, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../context/authContext";
import { carritoContext } from "../../context/carritoContext";
import { useTheme } from '../.././hooks/useTheme';
import {
  Cart,
  Li,
  Nav,
  StyledButton,
  StyledCartLink,
  StyledLink,
  StyledLoginLink,
  Ul,
  StyledToggleMode,
  StyledInput,
  StyledLabel,
  StyledBall,
  StyledSun,
  StyledMoon,
} from "./styles";

const BaseNavbar = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { logout, user } = useAuth();
  const { tamañoCarrito } = useContext(carritoContext);
  const {theme, toggleTheme } = useTheme();

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
      <Nav className={fixed ? "customFixed" : ""}>
        {fixed ? (
          <Ul className={fixed ? "customFixed" : ""}>
            <Li>
              <StyledCartLink to="/cart">
                {" "}
                <Cart /> {`(${tamañoCarrito()})`}
              </StyledCartLink>
            </Li>
          </Ul>
        ) : (
          <Ul>
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
                <StyledToggleMode >
                <StyledInput type="checkbox" class="checkbox" id="checkbox" onChange={toggleTheme}/>
              <StyledLabel for="checkbox" class="label">
                <StyledSun/>
                <StyledMoon/>
                <StyledBall/>
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
    );
  };

  console.log(theme);

  return (
    <Fragment>
      {renderNav()}
      {showFixed && renderNav(true)}
    </Fragment>
  );
};

const Navbar = styled(BaseNavbar)``;
export { Navbar };
