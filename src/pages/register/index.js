import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitButton, FormWrapper, FormInput } from "../../components/index";
import { useAuth } from "../../context/authContext";

const Register = () => {
  const { signUp, user, messageError } = useAuth();
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
    } catch (error) {
      console.log(error);
    }
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
        <SubmitButton onClick={handleRegister} text="Registrate" />
        <br />
        {messageError !== "" && (
          <p
            style={{
              color: "var(--secondary)",
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

export { Register };
