import styled from "styled-components";

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 180px;
  object-fit: cover;
  margin: 20px 0px;
`;

export const Img = styled.img`
  border-radius: 4px;
  box-shadow: 2px 2px 5px var(--grey);
  min-width: 240px;
  min-height: 180px;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
`;
