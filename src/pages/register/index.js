import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <input
          name="user"
          placeholder="email"
          type="email"
          value={inputsValue.user}
          onChange={handleInputs}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          value={inputsValue.password}
          onChange={handleInputs}
        />
        <button onClick={handleRegister}>Registrate con tu email!</button>
      </form>
    </div>
  );
};

export { Register };
