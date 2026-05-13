// main.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Mount React app into index.html
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
