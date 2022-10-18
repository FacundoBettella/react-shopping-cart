import React, { Fragment } from "react";
import {
  TitleContainer,
  UserNameParagraph,
} from "./styles";
import { BiUserCircle } from "react-icons/bi";

const Title = ({ user }) => {
  return (
    <TitleContainer>
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
