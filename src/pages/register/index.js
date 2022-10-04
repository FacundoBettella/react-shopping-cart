import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButton, FormWrapper, FormInput } from "../../components/index";
import { useAuth } from "../../context/authContext";

const Register = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [inputsValue, setInputsValue] = useState({
    user: "",
    password: "",
  });

  const handleInputs = (e) => {
    setInputsValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await signUp(inputsValue.user, inputsValue.password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FormWrapper>
        <FormInput
          name="user"
          placeholder="email"
          type="email"
          value={inputsValue.user}
          onChange={handleInputs}
        />
        <FormInput
          name="password"
          placeholder="password"
          type="password"
          value={inputsValue.password}
          onChange={handleInputs}
        />
        <SubmitButton onClick={handleRegister} text="Registrate" />
      </FormWrapper>
    </div>
  );
};

export { Register };
