import styled, { keyframes } from "styled-components";
import { fadeIn } from "../../styles/animations";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@styled-icons/zondicons/ShoppingCart";
import { Moon } from "@styled-icons/entypo/Moon";
import { Sun } from "@styled-icons/boxicons-solid/Sun";

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
  height: 8vh;

  &.customFixed {
    ${fadeIn({ time: "0.2s", type: "ease-in" })}
    width: 13%;
    height: 12vh;
    border-radius: 60px;

    background: var(--accent);
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
  background-color: var(--accent);

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
  font-size: 1.5em;

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
  font-size: 2em;
  font-weight: bold;
  text-decoration: none;
`;

export const StyledLoginLink = styled(Link)`
  height: auto;
  color: var(--accent);
  background-color: var(--background);
  font-size: 1.5em;
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
  padding: 0.3em;
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
  font-size: 1.2em;
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
  position: relative;
  top: -9px;
`;

export const Logo = styled.img`
  height: auto;
  width: auto;
  max-height: 58px;
  max-width: 200px;
  border-radius: 4px;
`;
export const StyledToggleMode = styled.div`
  height: auto;
  font-size: 0.5em;
  font-weight: bold;
  text-decoration: none;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  right: 0;
  margin-right: 180px;
  cursor: pointer;
  padding: 0.5em;
`;

export const StyledBall = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
`;
export const StyledLabel = styled.label`
  width: 50px;
  height: 26px;
  background-color: #111;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
`;

export const StyledInput = styled.input`
  opacity: 0;
  position: absolute;
  &:checked + label ${StyledBall} {
    transform: translateX(24px);
  }
`;

export const StyledSun = styled(Sun)`
  color: FloralWhite;
  transform: scale(0.8);
`;

export const StyledMoon = styled(Moon)`
  color: FloralWhite;
  transform: scale(0.8);
`;
