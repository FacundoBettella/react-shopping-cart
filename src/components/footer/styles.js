import styled from "styled-components";

export const ContenedorFooter = styled.footer`
  width: 100%;
  height: 45vh;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  color: var(--text-secondary);
  background: var(--accent);
`;

export const Columna = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5px;
`;

export const DerechosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  height: 3vh;
`;

export const Logo = styled.img`
  width: 125px;
  height: 110px;
  border-radius: 4px;
  filter: contrast(80%);
  filter: brightness(2.0);
`;
