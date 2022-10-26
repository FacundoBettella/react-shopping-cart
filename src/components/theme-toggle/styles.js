import styled from "styled-components";
import { Moon } from "@styled-icons/entypo/Moon";
import { Sun } from "@styled-icons/boxicons-solid/Sun";

export const StyledToggleMode = styled.div`
  height: auto;
  text-decoration: none;
  border-radius: 4px;
  position: absolute;
  right: 0;
  margin-right: 12%;
  margin-top: 0.5vh;
`;

export const ModalToggleModeContainer = styled.div`
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
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
  transform: scale(1.0);
  cursor: pointer;
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