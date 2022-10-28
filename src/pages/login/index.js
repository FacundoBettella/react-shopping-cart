import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SubmitButton,
  FormWrapper,
  FormInput,
  Button,
} from "../../components/index";
import { useAuth } from "../../context/authContext";
import { useMediaQuery } from "@mui/material";
import { deviceSize } from "../../utils/viewportSizes";

const Login = () => {
  const DEVICE_TABLE_QUERY_BOOLEAN = useMediaQuery(deviceSize.tablet);

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

  const goToLoginForm = (e) => {
    e.preventDefault();
    setRecoveryPassFlag(false);
    setMessageError("");
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
          <p
            style={{
              textAlign: "flex-start",
              color: "var(--text-primary)",
              fontWeight: "600",
              margin: "15px 0px"
            }}
          >
            Ingrese su email de recuperación
          </p>
          <FormInput
            name="user"
            placeholder="Email"
            type="email"
            value={inputsValue.user}
            onChange={handleInputs}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={goToLoginForm}>Cancelar</Button>
            <Button onClick={handleRecoveryPass}>Enviar</Button>
          </div>
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
          <div
            style={{
              display: "flex",
              flexDirection: DEVICE_TABLE_QUERY_BOOLEAN ? "column" : "row",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <pre
              onClick={() => goToRecoveryPassForm()}
              style={{ cursor: "pointer", color: "var(--text-primary)" }}
            >
              ¿Olvidó su contraseña?
            </pre>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: DEVICE_TABLE_QUERY_BOOLEAN ? "column" : "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <pre style={{ color: "var(--text-primary)" }}>
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
