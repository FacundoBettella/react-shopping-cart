import React from "react";
import { Input } from "./styles";

export const FormInput = ({ name, placeholder, type, value, onChange }) => {
  return (
    <Input
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
