import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: FireBrick;
`;
const Li = styled.li`
  padding: 1em;
`;

const StyledLink = styled(Link)`
  color: FloralWhite;
  font-size: 2em;
  font-weight: bold;
  text-decoration: none;
`;

const StyledButton = styled.button`
  height: 5vh;
  color: FireBrick;
  background-color: FloralWhite;
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  right: 0;
  margin-right: 10px;
  cursor: pointer;
`;

const BaseNavbar = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("auth_token");
  };

  return (
    <nav className="navBar">
      <Ul>
        <Li>
          <StyledLink to="/home">Home</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/productdetail">Product Detail</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/cart">Cart</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/login">Login</StyledLink>
        </Li>
        <Li>
          <StyledButton onClick={handleLogout}>Cerrar sesión</StyledButton>
        </Li>
      </Ul>
    </nav>
  );
};

const Navbar = styled(BaseNavbar)``;
export { Navbar };
