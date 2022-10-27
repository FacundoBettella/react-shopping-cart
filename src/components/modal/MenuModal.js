import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { CarritoContext } from "../../context/carritoContext";
import { ModalCard } from "./styles";
import { useAuth } from "../../context/authContext";
import { ModalToggleModeContainer, StyledBall, StyledInput, StyledLabel, StyledMoon, StyledSun } from "../theme-toggle/styles";
import { Cart, StyledCartLink, StyledLink } from "../navbar/styles";

const MenuModal = () => {
  const { logout, user } = useAuth();
  const { tamañoCarrito } = useContext(CarritoContext);
  const { toggleTheme } = useContext(ThemeContext);

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
        <StyledLabel for="checkbox" class="label">
          <StyledSun />
          <StyledMoon />
          <StyledBall />
        </StyledLabel>
      </ModalToggleModeContainer>
      <StyledCartLink to="/cart">
        <Cart /> <div>{`(${tamañoCarrito()})`}</div>
      </StyledCartLink>

      {user !== null ? (
        <StyledLink onClick={handleLogout}>LOGOUT</StyledLink>
      ) : (
        <StyledLink to="/login">LOGIN</StyledLink>
      )}
    </ModalCard>
  );
};

export default MenuModal;
