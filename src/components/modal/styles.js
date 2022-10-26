import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const ModalCard = styled.div`
  ${fadeIn({ time: "0.2s", type: "ease-in" })}
  position: fixed;
  right: 0;
  top: 11vh;
  z-index: 4;

  display: flex;
  flex-direction: column;
  font-size: 2vh;
  width: 40%;
  height: 30vh;
  justify-content: space-evenly;
  align-items: center;

  background: var(--accent);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  border-radius: 4px;
`;
