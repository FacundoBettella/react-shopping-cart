import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SubmitButton,
  FormWrapper,
  FormInput,
  Button,
} from "../../components/index";
import { useAuth } from "../../context/authContext";

const Login = () => {
  const { login, loginWithGoogle, user, messageError } = useAuth();
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
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  const goToRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  useEffect(() => {
    if (user !== null) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
        <br />
        <SubmitButton
          onClick={handleGoogleLogin}
          text="Ingresa con tu cuenta Google"
          secondary={true}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "20px",
          }}
        >
          <pre style={{ color: "var(--text-primary)" }}>
            ¿Aún no tienes cuenta?
          </pre>
          <Button onClick={goToRegister}>Registrate aquí</Button>
        </div>
        <br />
        {messageError !== "" && (
          <p
            style={{
              color: "var(--accent)",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            {messageError}
          </p>
        )}
      </FormWrapper>
    </div>
  );
};

export { Login };
