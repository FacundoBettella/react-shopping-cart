import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

/* After React v18.0.0 */
var container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);