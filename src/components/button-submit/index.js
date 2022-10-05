import React from "react";
import { Button } from "./styles";

const SubmitButton = ({ text, onClick, secondary }) => {
  return <Button onClick={onClick} secondary={secondary}>{text}</Button>;
};

export default SubmitButton;
