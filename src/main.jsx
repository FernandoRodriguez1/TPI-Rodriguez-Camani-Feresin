import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { APIContextProvider } from "./services/apiContext/apiContext.jsx";
import { AuthProvider } from "./components/AuthProvider/AuthProvider.jsx";
import { ThemeContextProvider } from "./components/Theme/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <APIContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </APIContextProvider>
  </AuthProvider>
);
