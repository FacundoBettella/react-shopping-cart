import styled from "styled-components";

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 30vh;
  padding: 20px 16px;
`;

export const Banner = styled.div`
  position:relative;
  top:-3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 2em;
  background-image: linear-gradient(to right, rgba(178, 34, 34,0.1) 0%, rgba(178, 34, 34,1) 25%, rgba(178, 34, 34,1) 75%, rgba(178, 34, 34,0.1) 100%);
  border-radius: 5px;
  color: FloralWhite;
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

export const Ptext =styled.p`
  opacity: 1;
`
