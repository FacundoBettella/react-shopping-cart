import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export { Login };
