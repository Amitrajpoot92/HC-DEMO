 // src/main.jsx or src/index.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css"; // Tailwind styles
import "./fonts.css"; // Custom fonts

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Single Router at the root level */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
