import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

/* After React v18.0.0 */
var container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);