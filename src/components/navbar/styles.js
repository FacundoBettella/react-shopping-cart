import styled, { keyframes } from "styled-components";
import { fadeIn } from "../../styles/animations";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@styled-icons/zondicons/ShoppingCart";

const jump = keyframes`
  from{
    transform: translateY(-4px)
  }
  to{
    transform: translateY(0)
  }
`;

export const Nav = styled.nav`
  width: 100%;

  &.customFixed {
    ${fadeIn({ time: "0.2s", type: "ease-in" })}
    width: 13%;
    background: var(--secondary);
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    left: 1;
    margin: 0 auto;
    top: 0;
    right: 0;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    transform: scale(0.8);
    z-index: 3;
  }
`;

export const Cart = styled(ShoppingCart)`
  color: white;
  width: 2em;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: FireBrick;
  &.customFixed {
    border-radius: 50px;
  }
`;
export const Li = styled.li`
  padding: 1em;
`;

export const StyledLink = styled(Link)`
  color: FloralWhite;
  font-size: 2em;
  font-weight: bold;
  text-decoration: none;
`;

export const StyledCartLink = styled(Link)`
  width: 100px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: FloralWhite;
  font-size: 1.5em;
`;

export const StyledLoginLink = styled(Link)`
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

export const StyledButton = styled.button`
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