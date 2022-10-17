import React, { Fragment } from "react";
import { TitleContainer, Paragraph, UserNameParagraph } from "./styles";
import { BiUserCircle } from "react-icons/bi";

const Title = ({ text, user }) => {
  return (
    <TitleContainer>
      <Paragraph>{text}</Paragraph>
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
            <BiUserCircle color="var(--text-primary)" />
            <UserNameParagraph>{user}</UserNameParagraph>
          </Fragment>
        )}
      </div>
    </TitleContainer>
  );
};

export default Title;
