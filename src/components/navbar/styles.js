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
  height: 10vh;
  background: var(--accent);

  &.customFixed {
    ${fadeIn({ time: "0.2s", type: "ease-in" })}
    width: 13%;
    height: 12vh;
    border-radius: 60px;
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

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: var(--accent);
  height: 10vh;

  &.customFixed {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 10vh;
    border-radius: 60px;
  }
`;

export const Cart = styled(ShoppingCart)`
  color: var(--text-secondary);
  width: 2em;

  &.customFixed {
    width: 2.5em;
  }
`;

export const StyledCartLink = styled(Link)`
  color: var(--text-secondary);
  width: 100px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vh;

  &.customFixed {
    font-size: 2.9vh;
  }
`;

export const Li = styled.li`
  padding: 1em;
  color: var(--text-secondary);
`;

export const StyledLink = styled(Link)`
  color: var(--text-secondary);
  font-size: 3vh;
  font-weight: bold;
  text-decoration: none;
`;

export const StyledLoginLink = styled(Link)`
  height: auto;
  color: var(--accent);
  background-color: var(--background);
  font-size: 2.7vh;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid var(--white);
  border-radius: 4px;
  position: absolute;
  right: 0;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.5s;
  padding: 0.2em;
  animation: ${jump} 0.5s ease-out forwards;

  :hover {
    border: 1px solid black;
    color: var(--accent-hover);
  }
`;

export const StyledButton = styled.button`
  height: auto;
  color: var(--accent);
  background-color: var(--background);
  font-size: 2.5vh;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid var(--white);
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  right: 0;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.5s;
  animation: ${jump} 0.5s ease-out forwards;
  padding: 0.5em;

  :hover {
    border: 1px solid black;
    color: var(--accent-hover);
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 0;
  height: 10vh;

  &.responsiveLogoContainer {
    position: fixed;
    z-index: 4;
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--accent);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  }
`;

export const Logo = styled.img`
  /* Para ajustar la img a su contenedor */
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;
