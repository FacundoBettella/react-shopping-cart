import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import styled, { keyframes } from "styled-components";

const jump = keyframes`
  from{
    transform: translateY(-4px)
  }
  to{
    transform: translateY(0)
  }
`;

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

const StyledLoginLink = styled(Link)`
  height: auto;
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
  transition: all 0.5s;
  animation: ${jump} 0.5s ease-out forwards;
`;

const StyledButton = styled.button`
  height: auto;
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
  transition: all 0.5s;
  animation: ${jump} 0.5s ease-out forwards;
`;

const BaseNavbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("auth_token");
  };

  return (
    <nav className="navBar">
      <Ul>
        <Li>
          <StyledLink to="/">Home</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/cart">Cart</StyledLink>
        </Li>
        <Li>
          {user !== null ? (
            <StyledButton onClick={handleLogout}>Cerrar sesión</StyledButton>
          ) : (
            <StyledLoginLink to="/login">Login</StyledLoginLink>
          )}
        </Li>
      </Ul>
    </nav>
  );
};

const Navbar = styled(BaseNavbar)``;
export { Navbar };
