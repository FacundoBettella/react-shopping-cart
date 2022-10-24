import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.query ? "1vh" : "3vh")};
  display: flex;
  justify-content: ${(props) => (props.query ? "center" : "flex-end")};
  align-items: center;
  margin-top: ${(props) => (props.query ? "4vh" : "7vh")};
  margin-bottom: 0vh;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  color: var(--accent);
`;

export const Paragraph = styled.p`
  color: var(--accent);
  font-weight: 700;
`;

export const UserNameParagraph = styled.p`
  color: var(--text-primary);
  font-size: 16px;
  margin: 0 10px;
`;
