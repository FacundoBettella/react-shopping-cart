import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import styled, { keyframes } from "styled-components";
import { carritoContext } from "../../context/carritoContext"
import { MdOutlineShoppingCart } from "react-icons/md";



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
  
  :hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 1.15), 0 1px 5px rgba(0, 0, 0, 0.12);
    color: var(--secondaryAccent);
  }
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

  :hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 1.15), 0 1px 5px rgba(0, 0, 0, 0.12);
    color: var(--secondaryAccent);
  }
`;

const BaseNavbar = () => {
  const { logout, user } = useAuth();
  
  const { vaciarCarrito,
          eliminarProductoDelCarrito,
          agregarAlCarrito,
          tamañoCarrito} = useContext(carritoContext);

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
          <StyledLink to="/cart"> <MdOutlineShoppingCart /> {`( ${tamañoCarrito()} )`}</StyledLink>
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
