import React, { Fragment } from "react";
import { TitleContainer, UserNameParagraph } from "./styles";
import { BiUserCircle } from "react-icons/bi";

const Title = ({ user, sizeManagment }) => {

  return (
    <TitleContainer query={sizeManagment}>
      {user !== undefined && (
        <Fragment>
          <BiUserCircle color="var(--text-primary)" />
          <UserNameParagraph>{user}</UserNameParagraph>
        </Fragment>
      )}
    </TitleContainer>
  );
};

export default Title;
