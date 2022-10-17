import React, { Fragment } from "react";
import { TitleContainer, Paragraph, UserNameParagraph, Logo, LogoContainer } from "./styles";
import { BiUserCircle } from "react-icons/bi";
import logo  from "../../assets/logo/shopping.png"

const Title = ({ text, user }) => {
  return (
    <TitleContainer>
      {/* <Paragraph>{text}</Paragraph> */}
      <LogoContainer>
        <Logo src={logo} alt="logo"></Logo>
      </LogoContainer>
      
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          right: 0,
        }}
      >
        {user !== undefined && (
          <Fragment>
            <BiUserCircle color="var(--lightBlack)" />
            <UserNameParagraph>{user}</UserNameParagraph>
          </Fragment>
        )}
      </div>
    </TitleContainer>
  );
};

export default Title;
