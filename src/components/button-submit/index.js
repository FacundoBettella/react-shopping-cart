import React from "react";
import { Button } from "./styles";

const SubmitButton = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default SubmitButton;
