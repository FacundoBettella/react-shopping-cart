import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const ImgContainer = styled.div`
  ${fadeIn({ time: "1s" })}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 30vh;
  padding: 20px 16px;
  margin: 0px auto;
`;

export const Banner = styled.div`
  position: relative;
  top: -3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 3.5em;
  background-color: var(--accent);
  border-radius: 5px;
  color: var(--text-secondary);
`;

export const Img = styled.img`
  border-radius: 4px;
  min-width: 350px;
  min-height: 30vh;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: pointer;
`;

export const Ptext = styled.p`
  opacity: 1;
`;
