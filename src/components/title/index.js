import React from "react";
import { TitleContainer, Paragraph } from "./styles";

const Title = ({ text }) => {
  return (
    <TitleContainer>
      <Paragraph>{text}</Paragraph>
    </TitleContainer>
  );
};

export default Title;
