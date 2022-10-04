import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import "./index.css";

/* After React v18.0.0 */
var container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
