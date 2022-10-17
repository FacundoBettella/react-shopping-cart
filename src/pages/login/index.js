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
  const {
    login,
    loginWithGoogle,
    user,
    messageError,
    setMessageError,
    resetPassword,
  } = useAuth();
  const navigate = useNavigate();

  const [inputsValue, setInputsValue] = useState({
    user: "",
    password: "",
  });

  const [recoveryPassFlag, setRecoveryPassFlag] = useState(false);
  const [error, setError] = useState("");

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

  const handleRecoveryPass = async (e) => {
    e.preventDefault();
    try {
      if (!inputsValue.user) {
        setError("Por favor ingresa un correo");
      } else {
        await resetPassword(inputsValue.user);
        setRecoveryPassFlag(false);
        setMessageError("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const goToRecoveryPassForm = () => {
    setRecoveryPassFlag(true);
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
      {recoveryPassFlag ? (
        <FormWrapper>
          {error !== "" && (
            <pre
              style={{
                textAlign: "center",
                color: "var(--lightBlack)",
                fontWeight: "bold",
              }}
            >
              {error}
            </pre>
          )}
          <FormInput
            name="user"
            placeholder="Email"
            type="email"
            value={inputsValue.user}
            onChange={handleInputs}
          />
          <Button onClick={handleRecoveryPass}>
            Enviar
          </Button>
        </FormWrapper>
      ) : (
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
          <SubmitButton
            onClick={handleGoogleLogin}
            text="Ingresa con tu cuenta Google"
            secondary={true}
          />
          <pre
            onClick={() => goToRecoveryPassForm()}
            style={{ cursor: "pointer", color: "var(--lightBlack)" }}
          >
            ¿Olvidó su contraseña?
          </pre>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <pre style={{ color: "var(--lightBlack)" }}>
              ¿Aún no tienes cuenta?
            </pre>
            <Button onClick={goToRegister}>Registrate aquí</Button>
          </div>
          <br />
        </FormWrapper>
      )}
      {messageError !== "" && (
        <p
          style={{
            textAlign: "center",
            color: "var(--lightBlack)",
            fontWeight: "bold",
          }}
        >
          {messageError}
        </p>
      )}
    </div>
  );
};

export { Login };
