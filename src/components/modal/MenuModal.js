import React from "react";
import { useThemeContext } from "../../context/themeContext";
import { useCarrito } from "../../context/carritoContext";
import { ModalCard } from "./styles";
import { useAuth } from "../../context/authContext";
import {
  ModalToggleModeContainer,
  StyledBall,
  StyledInput,
  StyledLabel,
  StyledMoon,
  StyledSun,
} from "../theme-toggle/styles";
import { Cart, StyledCartLink, StyledLink } from "../navbar/styles";

const MenuModal = ({ handleModal }) => {
  const { logout, user } = useAuth();
  const { tamañoCarrito } = useCarrito();
  const { toggleTheme } = useThemeContext();

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("auth_token");
  };

  return (
    <ModalCard>
      <ModalToggleModeContainer>
        <StyledInput
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={toggleTheme}
        />
        <StyledLabel htmlFor="checkbox" className="label">
          <StyledSun />
          <StyledMoon />
          <StyledBall />
        </StyledLabel>
      </ModalToggleModeContainer>
      <StyledCartLink to="/cart" onClick={() => handleModal(false)}>
        <Cart /> <div>{`(${tamañoCarrito()})`}</div>
      </StyledCartLink>

      {user !== null ? (
        <>
          <StyledLink to="/orders" onClick={handleModal}>
            Historial
          </StyledLink>
          <StyledLink onClick={handleLogout}>Logout</StyledLink>
        </>
      ) : (
        <StyledLink to="/login">LOGIN</StyledLink>
      )}
    </ModalCard>
  );
};

export default MenuModal;
