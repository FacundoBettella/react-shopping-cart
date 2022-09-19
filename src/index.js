import React from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/index.css";

/* After React v18.0.0 */
var container = document.getElementById("app");
const root = createRoot(container);
root.render(<h1>Shopping chart</h1>);