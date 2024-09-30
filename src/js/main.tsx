import * as flsFunctions from "./modules/functions.js";
import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";

flsFunctions.isWebp();

const root = document.getElementById("root");

if (root instanceof HTMLElement) {
  ReactDOM.createRoot(root).render(<App />);
} else {
  console.error("Root element not found");
}
