import styled from "styled-components";

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 30vh;
  padding: 20px 16px;
`;

export const Img = styled.img`
  border-radius: 4px;
  box-shadow: 2px 2px 5px var(--grey);
  min-width: 350px;
  min-height: 225px;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: pointer;
`;
