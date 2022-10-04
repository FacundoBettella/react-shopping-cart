import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SubmitButton,
  FormWrapper,
  FormInput,
  Button,
} from "../../components/index";
import { useAuth } from "../../context/authContext";

const Login = () => {
  const { login } = useAuth();
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputsValue.user, inputsValue.password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const goToRegister = (e) => {
    e.preventDefault();
    navigate("/register");
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
        <SubmitButton onClick={handleLogin} text="Ingresar" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "20px",
          }}
        >
          <pre style={{ color: "var(--lightBlack)" }}>
            ¿Aún no tienes cuenta?
          </pre>
          <Button onClick={goToRegister}>Registrate aquí</Button>
        </div>
      </FormWrapper>
    </div>
  );
};

export { Login };
