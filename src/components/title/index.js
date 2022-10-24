import React, { Fragment } from "react";
import { TitleContainer, UserNameParagraph } from "./styles";
import { BiUserCircle } from "react-icons/bi";
import { useMediaQuery } from "@mui/material";
import { deviceSize } from "../../utils/viewportSizes";

const Title = ({ user }) => {
  const MAX_WIDTH_TABLE_QUERY_BOOLEAN = useMediaQuery(deviceSize.tablet);

  return (
    <TitleContainer query={MAX_WIDTH_TABLE_QUERY_BOOLEAN}>
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
